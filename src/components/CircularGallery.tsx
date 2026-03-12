"use client";

import { Camera, Mesh, Plane, Program, Renderer, Texture, Transform, type OGLRenderingContext } from "ogl";
import { useEffect, useRef } from "react";

function debounce<T extends (...args: unknown[]) => void>(fn: T, wait: number): T {
  let timer: ReturnType<typeof setTimeout>;
  return function (this: unknown, ...args: Parameters<T>) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), wait);
  } as T;
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function createTextTexture(
  gl: OGLRenderingContext,
  text: string,
  font = "bold 30px monospace",
  color = "white"
) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d")!;
  ctx.font = font;
  const metrics = ctx.measureText(text);
  canvas.width  = Math.ceil(metrics.width) + 40;
  canvas.height = Math.ceil(parseInt(font) * 1.4) + 20;
  ctx.font         = font;
  ctx.fillStyle    = color;
  ctx.textBaseline = "middle";
  ctx.textAlign    = "center";
  ctx.fillText(text, canvas.width / 2, canvas.height / 2);
  const texture = new Texture(gl, { generateMipmaps: false });
  texture.image = canvas;
  return { texture, width: canvas.width, height: canvas.height };
}

const VERTEX_SHADER = /* glsl */ `
  precision highp float;
  attribute vec3 position;
  attribute vec2 uv;
  uniform mat4 modelViewMatrix;
  uniform mat4 projectionMatrix;
  uniform float uTime;
  uniform float uSpeed;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    vec3 p = position;
    p.z = (sin(p.x * 4.0 + uTime) * 1.5 + cos(p.y * 2.0 + uTime) * 1.5) * (0.1 + uSpeed * 0.5);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  }
`;

const FRAGMENT_SHADER = /* glsl */ `
  precision highp float;
  uniform vec2 uImageSizes;
  uniform vec2 uPlaneSizes;
  uniform sampler2D tMap;
  uniform float uHover;
  varying vec2 vUv;
  void main() {
    vec2 ratio = vec2(
      min((uPlaneSizes.x / uPlaneSizes.y) / (uImageSizes.x / uImageSizes.y), 1.0),
      min((uPlaneSizes.y / uPlaneSizes.x) / (uImageSizes.y / uImageSizes.x), 1.0)
    );
    vec2 uv = vec2(
      vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
      vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
    );
    vec4 color = texture2D(tMap, uv);
    color.rgb *= 1.0 - uHover * 0.35;
    gl_FragColor = vec4(color.rgb, 1.0);
  }
`;

const TEXT_VERTEX = /* glsl */ `
  attribute vec3 position;
  attribute vec2 uv;
  uniform mat4 modelViewMatrix;
  uniform mat4 projectionMatrix;
  uniform float uHover;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    vec3 p = position;
    p.y += (uHover - 1.0) * 0.5;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  }
`;

const TEXT_FRAGMENT = /* glsl */ `
  precision highp float;
  uniform sampler2D tMap;
  uniform float uHover;
  varying vec2 vUv;
  void main() {
    vec4 color = texture2D(tMap, vUv);
    if (color.a < 0.1) discard;
    gl_FragColor = vec4(color.rgb, color.a * uHover);
  }
`;

interface Screen      { width: number; height: number }
interface Viewport    { width: number; height: number }
interface GalleryItem { image: string; text: string }
interface Scroll      { ease: number; current: number; target: number; last: number; position: number }

class Title {
  mesh:    Mesh;
  program: Program;

  constructor({ gl, plane, text, textColor = "#ffffff", font = "bold 30px sans-serif" }: {
    gl: OGLRenderingContext; plane: Mesh; text: string; textColor?: string; font?: string;
  }) {
    const { texture, width, height } = createTextTexture(gl, text, font, textColor);
    const geometry = new Plane(gl);
    this.program = new Program(gl, {
      vertex: TEXT_VERTEX, fragment: TEXT_FRAGMENT,
      uniforms: { tMap: { value: texture }, uHover: { value: 0 } },
      transparent: true, depthTest: false,
    });
    this.mesh = new Mesh(gl, { geometry, program: this.program });
    const aspect     = width / height;
    const textHeight = plane.scale.y * 0.18;
    const textWidth  = textHeight * aspect;
    this.mesh.scale.set(textWidth, textHeight, 1);
    this.mesh.position.y = -plane.scale.y * 0.5 + textHeight * 0.8;
    this.mesh.setParent(plane);
  }

  setHover(value: number) {
    this.program.uniforms.uHover.value = value;
  }
}

class Media {
  extra = 0; speed = 0; width = 0; widthTotal = 0; x = 0;
  isBefore = false; isAfter = false;
  hoverTarget = 0; hoverCurrent = 0;
  plane!: Mesh;
  private program!: Program;
  private title!: Title;

  constructor(private opts: {
    geometry: Plane; gl: OGLRenderingContext; image: string; index: number;
    length: number; renderer: Renderer; scene: Transform; screen: Screen;
    text: string; viewport: Viewport; bend: number; textColor: string;
    borderRadius?: number; font: string;
  }) {
    this.createShader();
    this.createMesh();
    this.createTitle();
    this.onResize();
  }

  private createShader() {
    const texture = new Texture(this.opts.gl, { generateMipmaps: true });
    this.program = new Program(this.opts.gl, {
      depthTest: false, depthWrite: false,
      vertex: VERTEX_SHADER, fragment: FRAGMENT_SHADER,
      uniforms: {
        tMap:        { value: texture },
        uPlaneSizes: { value: [0, 0] },
        uImageSizes: { value: [0, 0] },
        uSpeed:      { value: 0 },
        uTime:       { value: 100 * Math.random() },
        uHover:      { value: 0 },
      },
      transparent: true,
    });
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      texture.image = img;
      this.program.uniforms.uImageSizes.value = [img.naturalWidth, img.naturalHeight];
    };
    img.src = this.opts.image;
  }

  private createMesh() {
    this.plane = new Mesh(this.opts.gl, { geometry: this.opts.geometry, program: this.program });
    this.plane.setParent(this.opts.scene);
  }

  private createTitle() {
    this.title = new Title({
      gl: this.opts.gl, plane: this.plane,
      text: this.opts.text, textColor: this.opts.textColor, font: this.opts.font,
    });
  }

  setHovered(hovered: boolean) { this.hoverTarget = hovered ? 1 : 0; }

  containsPoint(wx: number, wy: number): boolean {
    const hw = this.plane.scale.x / 2;
    const hh = this.plane.scale.y / 2;
    return wx >= this.plane.position.x - hw && wx <= this.plane.position.x + hw
        && wy >= this.plane.position.y - hh && wy <= this.plane.position.y + hh;
  }

  update(scroll: Scroll, direction: "left" | "right") {
    this.plane.position.x = this.x - scroll.current - this.extra;
    const x = this.plane.position.x;
    const H = this.opts.viewport.width / 2;

    if (this.opts.bend === 0) {
      this.plane.position.y = 0;
      this.plane.rotation.z = 0;
    } else {
      const R   = (H * H + this.opts.bend ** 2) / (2 * Math.abs(this.opts.bend));
      const ex  = Math.min(Math.abs(x), H);
      const arc = R - Math.sqrt(R * R - ex * ex);
      if (this.opts.bend > 0) {
        this.plane.position.y = -arc;
        this.plane.rotation.z = -Math.sign(x) * Math.asin(ex / R);
      } else {
        this.plane.position.y = arc;
        this.plane.rotation.z = Math.sign(x) * Math.asin(ex / R);
      }
    }

    this.speed = scroll.current - scroll.last;
    this.program.uniforms.uTime.value  += 0.04;
    this.program.uniforms.uSpeed.value  = this.speed;

    this.hoverCurrent = lerp(this.hoverCurrent, this.hoverTarget, 0.08);
    this.program.uniforms.uHover.value = this.hoverCurrent;
    this.title.setHover(this.hoverCurrent);

    const planeOffset    = this.plane.scale.x / 2;
    const viewportOffset = this.opts.viewport.width / 2;
    this.isBefore = this.plane.position.x + planeOffset < -viewportOffset;
    this.isAfter  = this.plane.position.x - planeOffset >  viewportOffset;
    if (direction === "right" && this.isBefore) { this.extra -= this.widthTotal; this.isBefore = this.isAfter = false; }
    if (direction === "left"  && this.isAfter)  { this.extra += this.widthTotal; this.isBefore = this.isAfter = false; }
  }

  onResize({ screen, viewport }: { screen?: Screen; viewport?: Viewport } = {}) {
    if (screen)   this.opts.screen   = screen;
    if (viewport) this.opts.viewport = viewport;
    const scale = this.opts.screen.height / 1500;
    this.plane.scale.y = (this.opts.viewport.height * (900 * scale)) / this.opts.screen.height;
    this.plane.scale.x = (this.opts.viewport.width  * (700 * scale)) / this.opts.screen.width;
    this.program.uniforms.uPlaneSizes.value = [this.plane.scale.x, this.plane.scale.y];
    this.width      = this.plane.scale.x + 2;
    this.widthTotal = this.width * this.opts.length;
    this.x          = this.width * this.opts.index;
  }
}

class App {
  private renderer!: Renderer;
  private gl!: OGLRenderingContext;
  private camera!: Camera;
  private scene!: Transform;
  private planeGeometry!: Plane;
  private medias: Media[] = [];
  private screen!: Screen;
  private viewport!: Viewport;
  private raf = 0;
  private isDown = false;
  private start = 0;
  private scrollSpeed: number;
  private scroll: Scroll = { ease: 0.05, current: 0, target: 0, last: 0, position: 0 };
  private onCheckDebounce: () => void;
  private boundOnResize!: () => void;
  private boundOnWheel!: (e: WheelEvent) => void;
  private boundOnTouchDown!: (e: MouseEvent | TouchEvent) => void;
  private boundOnTouchMove!: (e: MouseEvent | TouchEvent) => void;
  private boundOnTouchUp!: () => void;
  private boundOnMouseMove!: (e: MouseEvent) => void;

  constructor(private container: HTMLElement, opts: {
    items?: GalleryItem[]; bend?: number; textColor?: string;
    borderRadius?: number; font?: string; scrollSpeed?: number; scrollEase?: number;
  } = {}) {
    const { items, bend = 1, textColor = "#ffffff", borderRadius = 0,
            font = "bold 30px sans-serif", scrollSpeed = 2, scrollEase = 0.05 } = opts;
    this.scrollSpeed     = scrollSpeed;
    this.scroll.ease     = scrollEase;
    this.onCheckDebounce = debounce(this.onCheck.bind(this), 200);
    this.createRenderer();
    this.createCamera();
    this.createScene();
    this.onResize();
    this.createGeometry();
    this.createMedias(items, bend, textColor, borderRadius, font);
    this.update();
    this.addEventListeners();
  }

  private createRenderer() {
    this.renderer = new Renderer({ alpha: true, antialias: true, dpr: Math.min(window.devicePixelRatio || 1, 2) });
    this.gl = this.renderer.gl;
    this.gl.clearColor(0, 0, 0, 0);
    this.container.appendChild(this.gl.canvas as HTMLCanvasElement);
  }

  private createCamera() {
    this.camera = new Camera(this.gl);
    this.camera.fov = 45;
    this.camera.position.z = 20;
  }

  private createScene() { this.scene = new Transform(); }

  private createGeometry() {
    // ✅ Flat geometry (no wave on hover) — heightSegments:1 keeps it sharp/square
    this.planeGeometry = new Plane(this.gl, { heightSegments: 1, widthSegments: 1 });
  }

  private createMedias(items: GalleryItem[] | undefined, bend: number, textColor: string, borderRadius: number, font: string) {
    const source = items?.length ? items : [
      { image: "https://picsum.photos/seed/1/800/600", text: "Sample" },
    ];
    const doubled = [...source, ...source];
    this.medias = doubled.map((data, index) =>
      new Media({
        geometry: this.planeGeometry, gl: this.gl, image: data.image,
        index, length: doubled.length, renderer: this.renderer,
        scene: this.scene, screen: this.screen, text: data.text,
        viewport: this.viewport, bend, textColor,
        borderRadius: 0, // ✅ force no border radius = square
        font,
      })
    );
  }

  private screenToWorld(sx: number, sy: number) {
    const x =  ((sx / this.screen.width)  * 2 - 1) * (this.viewport.width  / 2);
    const y = -((sy / this.screen.height) * 2 - 1) * (this.viewport.height / 2);
    return { x, y };
  }

  private onMouseMove(e: MouseEvent) {
    const rect  = this.container.getBoundingClientRect();
    const world = this.screenToWorld(e.clientX - rect.left, e.clientY - rect.top);
    this.medias.forEach((m) => m.setHovered(m.containsPoint(world.x, world.y)));
  }

  private onTouchDown(e: MouseEvent | TouchEvent) {
    this.isDown = true;
    this.scroll.position = this.scroll.current;
    this.start = "touches" in e ? e.touches[0].clientX : e.clientX;
  }

  private onTouchMove(e: MouseEvent | TouchEvent) {
    if (!this.isDown) return;
    const x = "touches" in e ? e.touches[0].clientX : e.clientX;
    this.scroll.target = this.scroll.position + (this.start - x) * (this.scrollSpeed * 0.025);
  }

  private onTouchUp() { this.isDown = false; this.onCheck(); }

  private onWheel(e: WheelEvent) {
    this.scroll.target += (e.deltaY > 0 ? this.scrollSpeed : -this.scrollSpeed) * 0.2;
    this.onCheckDebounce();
  }

  private onCheck() {
    if (!this.medias[0]) return;
    const w = this.medias[0].width;
    const snapped = w * Math.round(Math.abs(this.scroll.target) / w);
    this.scroll.target = this.scroll.target < 0 ? -snapped : snapped;
  }

  private onResize() {
    this.screen = { width: this.container.clientWidth, height: this.container.clientHeight };
    this.renderer.setSize(this.screen.width, this.screen.height);
    this.camera.perspective({ aspect: this.screen.width / this.screen.height });
    const fov = (this.camera.fov * Math.PI) / 180;
    const h   = 2 * Math.tan(fov / 2) * this.camera.position.z;
    this.viewport = { width: h * (this.screen.width / this.screen.height), height: h };
    this.medias.forEach((m) => m.onResize({ screen: this.screen, viewport: this.viewport }));
  }

  private update() {
    this.scroll.current = lerp(this.scroll.current, this.scroll.target, this.scroll.ease);
    const direction = this.scroll.current > this.scroll.last ? "right" : "left";
    this.medias.forEach((m) => m.update(this.scroll, direction));
    this.renderer.render({ scene: this.scene, camera: this.camera });
    this.scroll.last = this.scroll.current;
    this.raf = requestAnimationFrame(this.update.bind(this));
  }

  private addEventListeners() {
    this.boundOnResize    = this.onResize.bind(this);
    this.boundOnWheel     = this.onWheel.bind(this);
    this.boundOnTouchDown = this.onTouchDown.bind(this);
    this.boundOnTouchMove = this.onTouchMove.bind(this);
    this.boundOnTouchUp   = this.onTouchUp.bind(this);
    this.boundOnMouseMove = this.onMouseMove.bind(this);
    window.addEventListener("resize",     this.boundOnResize);
    window.addEventListener("wheel",      this.boundOnWheel);
    window.addEventListener("mousedown",  this.boundOnTouchDown as EventListener);
    window.addEventListener("mousemove",  this.boundOnTouchMove as EventListener);
    window.addEventListener("mouseup",    this.boundOnTouchUp);
    window.addEventListener("touchstart", this.boundOnTouchDown as EventListener);
    window.addEventListener("touchmove",  this.boundOnTouchMove as EventListener);
    window.addEventListener("touchend",   this.boundOnTouchUp);
    this.container.addEventListener("mousemove", this.boundOnMouseMove);
  }

  destroy() {
    cancelAnimationFrame(this.raf);
    window.removeEventListener("resize",     this.boundOnResize);
    window.removeEventListener("wheel",      this.boundOnWheel);
    window.removeEventListener("mousedown",  this.boundOnTouchDown as EventListener);
    window.removeEventListener("mousemove",  this.boundOnTouchMove as EventListener);
    window.removeEventListener("mouseup",    this.boundOnTouchUp);
    window.removeEventListener("touchstart", this.boundOnTouchDown as EventListener);
    window.removeEventListener("touchmove",  this.boundOnTouchMove as EventListener);
    window.removeEventListener("touchend",   this.boundOnTouchUp);
    this.container.removeEventListener("mousemove", this.boundOnMouseMove);
    (this.gl.canvas as HTMLCanvasElement).parentNode?.removeChild(this.gl.canvas as HTMLCanvasElement);
  }
}

export interface CircularGalleryProps {
  items?: GalleryItem[]; bend?: number; textColor?: string;
  borderRadius?: number; font?: string; scrollSpeed?: number; scrollEase?: number;
}

export default function CircularGallery({
  items, bend = 3, textColor = "#ffffff",
  borderRadius = 0, font = "bold 30px sans-serif",
  scrollSpeed = 2, scrollEase = 0.05,
}: CircularGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!containerRef.current) return;
    const app = new App(containerRef.current, { items, bend, textColor, borderRadius, font, scrollSpeed, scrollEase });
    return () => app.destroy();
  }, [items, bend, textColor, borderRadius, font, scrollSpeed, scrollEase]);
  return <div ref={containerRef} style={{ width: "100%", height: "100%" }} className="cursor-grab active:cursor-grabbing" />;
}
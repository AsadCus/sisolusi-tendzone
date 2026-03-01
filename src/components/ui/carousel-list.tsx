'use client';
import {
  Children,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { motion, Transition, useMotionValue } from 'motion/react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';


export type CarouselContextType = {
  index: number;
  setIndex: (newIndex: number) => void;
  itemsCount: number;
  setItemsCount: (newItemsCount: number) => void;
  visibleItemsCount: number;
  setVisibleItemsCount: (n: number) => void;
  disableDrag: boolean;
};

const CarouselContext = createContext<CarouselContextType | undefined>(undefined);

function useCarousel() {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error('useCarousel must be used within a CarouselProvider');
  }
  return context;
}


export type CarouselProviderProps = {
  children: ReactNode;
  initialIndex?: number;
  onIndexChange?: (newIndex: number) => void;
  disableDrag?: boolean;
};

function CarouselProvider({
  children,
  initialIndex = 0,
  onIndexChange,
  disableDrag = false,
}: CarouselProviderProps) {
  const [index, setIndex] = useState<number>(initialIndex);
  const [itemsCount, setItemsCount] = useState<number>(0);
  const [visibleItemsCount, setVisibleItemsCount] = useState<number>(1);

  const handleSetIndex = (newIndex: number) => {
    setIndex(newIndex);
    onIndexChange?.(newIndex);
  };

  useEffect(() => {
    setIndex(initialIndex);
  }, [initialIndex]);

  return (
    <CarouselContext.Provider
      value={{
        index,
        setIndex: handleSetIndex,
        itemsCount,
        setItemsCount,
        visibleItemsCount,
        setVisibleItemsCount,
        disableDrag,
      }}
    >
      {children}
    </CarouselContext.Provider>
  );
}


export type CarouselProps = {
  children: ReactNode;
  className?: string;
  initialIndex?: number;
  index?: number;
  onIndexChange?: (newIndex: number) => void;
  disableDrag?: boolean;
};

function Carousel({
  children,
  className,
  initialIndex = 0,
  index: externalIndex,
  onIndexChange,
  disableDrag = false,
}: CarouselProps) {
  const [internalIndex, setInternalIndex] = useState<number>(initialIndex);
  const isControlled = externalIndex !== undefined;
  const currentIndex = isControlled ? externalIndex : internalIndex;

  const handleIndexChange = (newIndex: number) => {
    if (!isControlled) {
      setInternalIndex(newIndex);
    }
    onIndexChange?.(newIndex);
  };

  return (
    <CarouselProvider
      initialIndex={currentIndex}
      onIndexChange={handleIndexChange}
      disableDrag={disableDrag}
    >
      <div className={cn('group/hover relative', className)}>
        <div className='overflow-hidden'>{children}</div>
      </div>
    </CarouselProvider>
  );
}


export type CarouselNavigationProps = {
  className?: string;
  classNameButton?: string;
  alwaysShow?: boolean;
};

function CarouselNavigation({
  className,
  classNameButton,
  alwaysShow,
}: CarouselNavigationProps) {
  const { index, setIndex, itemsCount, visibleItemsCount } = useCarousel();
  const maxIndex = itemsCount - visibleItemsCount;

  return (
    <div
      className={cn(
        'pointer-events-none absolute inset-0 flex items-center justify-between px-4',
        className
      )}
    >

      <button
        type='button'
        aria-label='Previous slide'
        onClick={() => setIndex(index <= 0 ? maxIndex : index - 1)}
        className={cn(
          'pointer-events-auto h-fit w-fit transition-all duration-300 text-red-500 hover:text-red-700',
          alwaysShow
            ? 'opacity-100'
            : 'opacity-0 group-hover/hover:opacity-100',
          classNameButton
        )}
      >
        <ChevronLeft size={28} strokeWidth={1.5} />
      </button>

      {/* Next */}
      <button
        type='button'
        aria-label='Next slide'
        onClick={() => setIndex(index >= maxIndex ? 0 : index + 1)}
        className={cn(
          'pointer-events-auto h-fit w-fit transition-all duration-300 text-red-500 hover:text-red-700',
          alwaysShow
            ? 'opacity-100'
            : 'opacity-0 group-hover/hover:opacity-100',
          classNameButton
        )}
      >
        <ChevronRight size={28} strokeWidth={1.5} />
      </button>
    </div>
  );
}


export type CarouselIndicatorProps = {
  className?: string;
  classNameButton?: string;
};

function CarouselIndicator({ className, classNameButton }: CarouselIndicatorProps) {
  const { index, itemsCount, visibleItemsCount, setIndex } = useCarousel();
  const maxIndex = itemsCount - visibleItemsCount;

  return (
    <div
      className={cn(
        'absolute bottom-0 z-10 flex w-full items-center justify-center',
        className
      )}
    >
      <div className='flex space-x-2'>
        {Array.from({ length: maxIndex + 1 }, (_, i) => (
          <button
            key={i}
            type='button'
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={cn(
              'h-2 w-8 rounded-full transition-opacity duration-300',
              index === i
                ? 'bg-red-500 dark:bg-zinc-50'
                : 'bg-zinc-900/50 dark:bg-zinc-100/50',
              classNameButton
            )}
          />
        ))}
      </div>
    </div>
  );
}


export type CarouselContentProps = {
  children: ReactNode;
  className?: string;
  transition?: Transition;
};

function CarouselContent({ children, className, transition }: CarouselContentProps) {
  const { index, setIndex, setItemsCount, setVisibleItemsCount, disableDrag } =
    useCarousel();
  const [visibleItemsCount, setLocalVisibleCount] = useState(1);
  const dragX = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsLength = Children.count(children);
  const maxIndex = itemsLength - visibleItemsCount;

  // Sync visibleItemsCount ke context
  useEffect(() => {
    setVisibleItemsCount(visibleItemsCount);
  }, [visibleItemsCount, setVisibleItemsCount]);

  // Clamp index saat resize / visible count berubah
  useEffect(() => {
    if (index > maxIndex) {
      setIndex(Math.max(0, maxIndex));
    }
  }, [visibleItemsCount, itemsLength]);

  // Observe berapa item yang terlihat
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleCount = entries.filter((e) => e.isIntersecting).length;
        setLocalVisibleCount(visibleCount);
      },
      { root: containerRef.current, threshold: 0.5 }
    );

    Array.from(containerRef.current.children).forEach((child) =>
      observer.observe(child)
    );

    return () => observer.disconnect();
  }, [children]);

  // Set total items ke context
  useEffect(() => {
    if (itemsLength) setItemsCount(itemsLength);
  }, [itemsLength, setItemsCount]);

  const onDragEnd = () => {
    const x = dragX.get();
    if (x <= -10) {
      setIndex(index >= maxIndex ? 0 : index + 1);
    } else if (x >= 10) {
      setIndex(index <= 0 ? maxIndex : index - 1);
    }
  };

  return (
    <motion.div
      ref={containerRef}
      drag={disableDrag ? false : 'x'}
      dragConstraints={disableDrag ? undefined : { left: 0, right: 0 }}
      dragMomentum={disableDrag ? undefined : false}
      style={{ x: disableDrag ? undefined : dragX }}
      animate={{
        translateX: `-${index * (100 / visibleItemsCount)}%`,
      }}
      onDragEnd={disableDrag ? undefined : onDragEnd}
      transition={
        transition ?? {
          type: 'spring',
          damping: 18,
          stiffness: 90,
          duration: 0.2,
        }
      }
      className={cn(
        'flex items-center',
        !disableDrag && 'cursor-grab active:cursor-grabbing',
        className
      )}
    >
      {children}
    </motion.div>
  );
}


export type CarouselItemProps = {
  children: ReactNode;
  className?: string;
};

function CarouselItem({ children, className }: CarouselItemProps) {
  return (
    <motion.div
      className={cn('w-full min-w-0 shrink-0 grow-0 overflow-hidden', className)}
    >
      {children}
    </motion.div>
  );
}


export {
  Carousel,
  CarouselContent,
  CarouselNavigation,
  CarouselIndicator,
  CarouselItem,
  useCarousel,
};
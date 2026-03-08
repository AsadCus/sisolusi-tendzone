"use client";

export default function ConferenceProductFeatures() {
  return (
    <section className="w-full py-8">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-6">
          <p className="text-red-500 text-xl font-medium uppercase tracking-widest mb-2">
            Product Features
          </p>
          <p className="text-gray-400 text-sm max-w-xl mx-auto leading-relaxed">
            Professional wireless conference microphone units designed for delegate
            and chairman use in modern conference environments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* DELEGATE RECTANGULAR CARD */}
          <div className="bg-white p-8 flex flex-col gap-6 rounded-2xl shadow-lg border border-gray-200">
            <span className="text-gray-900 font-semibold">
              Wireless Desktop Delegate Rectangular Columnar Unit
            </span>

            <p className="text-gray-400 text-sm leading-relaxed">
              Professional wireless delegate microphone unit with elegant rectangular
              column design, built for conference, lecture, and teaching environments.
            </p>

            <ul className="list-disc pl-5 text-sm text-gray-500 leading-relaxed space-y-2">
              <li>Full metal microphone pedestal plus rectangular column microphone stem, simple and elegant.</li>
              <li>14mm diameter gilded capacitance microphone with cardioid directed electret, can deliver clear sound effect.</li>
              <li>Built-in windproof cotton, optimizing the structure design of the acoustic chamber, and bringing better sound quality.</li>
              <li>Adjustable microphone angle, convenient for collecting the sound. Highly resistant to mobile phone interference.</li>
              <li>Black full metal pedestal covered by low-reflectance and grinding coatings.</li>
              <li>Stable and thick pedestal with shock-proof insulating rubber pad, effectively reducing friction vibration and mechanical noise on the installation surface.</li>
              <li>3-pin nickel-plated XLR male socket on the back of the pedestal serves as the output terminal of audio signal.</li>
              <li>Microphone supports 48V phantom power supply.</li>
              <li>Self-locking ON/OFF button is available; press the button and see the red indicator lights, then the microphone is on; press again, the microphone is off.</li>
              <li>Suitable for conference, lecture, teaching and other occasions.</li>
              <li>It can co-work directly with audio processor or mixer.</li>
            </ul>
          </div>

          {/* DELEGATE GOOSENECK CARD */}
          <div className="bg-white p-8 flex flex-col gap-6 rounded-2xl shadow-lg border border-gray-200">
            <span className="text-gray-900 font-semibold">
              Wireless Desktop Delegate Gooseneck Unit
            </span>

            <p className="text-gray-400 text-sm leading-relaxed">
              Advanced wireless gooseneck delegate unit with 2.4G frequency hopping
              technology, DSP processing, and dual power support for flexible conference deployment.
            </p>

            <ul className="list-disc pl-5 text-sm text-gray-500 leading-relaxed space-y-2">
              <li>Optimized and enhanced connection stability; 2.4G frequency hopping technology can coexist with WiFi routers.</li>
              <li>Directional condenser microphone with high sensitivity, wide frequency response, and clear sound quality.</li>
              <li>Built-in DSP audio processing module with howling suppression function to prevent system feedback.</li>
              <li>Sound pickup distance can reach 50cm.</li>
              <li>Anti-mobile phone interference.</li>
              <li>Red matte halo indicator displays the microphone's speaking status.</li>
              <li>High-definition OLCD display shows microphone power, signal strength, microphone number, speaking time, and working status in real time.</li>
              <li>When the chairman microphone priority button is pressed, the delegate microphone is automatically turned off.</li>
              <li>The chairman's microphone is not restricted and can be connected in series to control delegate microphones.</li>
              <li>Supports multiple chairmen online simultaneously.</li>
              <li>Supports free setting of VIP or representative identity for each microphone.</li>
              <li>Dual powered — supports three NiMH rechargeable batteries (standard) or ordinary AA batteries.</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
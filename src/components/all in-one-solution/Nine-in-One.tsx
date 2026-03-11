const specs = {
  inputs: [
    { label: "Audio Inputs", value: "7 HDMI, 2 XLR, 6 RCA Phono, 4 Coax SPDIF, 2 TOSLINK" },
    { label: "Nominal Sensitivity", value: "1 V, 2 V, 4 V (user selectable)" },
    { label: "Input Impedance", value: "47 kΩ" },
    { label: "Signal to Noise (A-wtd ref 100W) normal/stereo direct", value: "103 dB / 118 dB" },
    { label: "Frequency Response", value: "20 Hz to 20 kHz ± 0.2 dB" },
    { label: "Video Inputs", value: "7 HDMI (HDMI 2.1 / HDCP 2.3)" },
  ],
  outputs: [
    { label: "Preamp Audio Outputs", value: "16 ch (balanced XLR), 16 ch (unbalanced RCA), 2 ch Zone 2 (unbalanced RCA), 1 TOSLINK" },
    { label: "Nominal Output Level", value: "1 Vrms (max. 5 Vrms)" },
    { label: "Output Impedance", value: "560 Ω" },
    { label: "THD+N (20 Hz – 20 kHz)", value: "−100 dB" },
    { label: "Main Video Outputs", value: "Dual (2) HDMI (eARC support)" },
    { label: "Second Zone Output", value: "1 HDMI" },
    { label: "Headphone Output", value: "1 × ¼″" },
  ],
  control: [
    { label: "Network", value: "IP Ethernet, Wi-Fi" },
    { label: "Serial Control", value: "RS-232" },
    { label: "12 Volt Trigger Outputs", value: "2" },
    { label: "IR Receiver Inputs", value: "2" },
  ],
  general: [
    { label: "Power Consumption (Standby)", value: "< 0.5 W" },
  ],
  dimensions: [
    { label: "Dimensions (incl. terminals and feet)", value: `17″ W × 16.9″ D × 7.3″ H (4 U)` },
    { label: "Weight", value: "27.1 lbs. (12.3 kg)" },
  ],
};

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[10px] font-bold tracking-widest uppercase text-red-500 pb-2 mb-1 border-b border-gray-200">
      {children}
    </h2>
  );
}

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-0.5 sm:gap-6 py-2 border-b border-gray-100 last:border-0">
      <span className="text-sm font-medium text-gray-500 sm:shrink-0 sm:max-w-[55%]">{label}</span>
      <span className="text-sm font-semibold text-gray-800 sm:text-right">{value}</span>
    </div>
  );
}

export default function NineInOneSpecs() {
  return (
    <main className="min-h-screen bg-white pt-8 pb-8 px-6">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">

        <div className="mb-2 pb-2">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
            Nine-in-One Integrated Processor
          </h1>
        </div>

        <div className="border border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] lg:divide-x divide-gray-200 border-b border-gray-200">
            <div className="p-4 sm:p-5 border-b border-gray-200 lg:border-b-0">
              <SectionTitle>Inputs</SectionTitle>
              {specs.inputs.map((s) => <SpecRow key={s.label} {...s} />)}
            </div>
            <div className="p-4 sm:p-5 flex flex-col gap-6">
              <div>
                <SectionTitle>General</SectionTitle>
                {specs.general.map((s) => <SpecRow key={s.label} {...s} />)}
              </div>
              <div>
                <SectionTitle>Weight &amp; Dimensions</SectionTitle>
                {specs.dimensions.map((s) => <SpecRow key={s.label} {...s} />)}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] lg:divide-x divide-gray-200">
            <div className="p-4 sm:p-5 border-b border-gray-200 lg:border-b-0">
              <SectionTitle>Outputs</SectionTitle>
              {specs.outputs.map((s) => <SpecRow key={s.label} {...s} />)}
            </div>
            <div className="p-4 sm:p-5">
              <SectionTitle>Control</SectionTitle>
              {specs.control.map((s) => <SpecRow key={s.label} {...s} />)}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
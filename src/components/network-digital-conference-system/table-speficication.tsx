"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table"

export default function NetWorkDigitalSpecificationTable() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold text-gray-900">
            Network Digital Conference System Specification
          </h2>

          <div className="flex justify-center gap-2 mt-3">
            <span className="w-2 h-2 bg-red-600 rounded-full" />
            <span className="w-2 h-2 bg-red-600 rounded-full" />
            <span className="w-2 h-2 bg-red-600 rounded-full" />
          </div>
        </div>

        <div className="border border-gray-300 rounded-xl overflow-hidden">
          <Table>
            <TableBody>

              <TableRow className="bg-gray-100">
                <TableCell colSpan={2} className="text-center font-semibold">
                  Hardware Specification
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="w-1/3 font-medium border">Model</TableCell>
                <TableCell>MTZ-921C / MTZ-921D</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">Conference Bus</TableCell>
                <TableCell>
                  1 RJ45 universal interface for hand-in-hand or ring connection. <br/>
                  1 XLR port for connecting audio processors and other devices.
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">LED Indicator</TableCell>
                <TableCell>
                  LED indicators on microphone stem and switch button
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">Earphone</TableCell>
                <TableCell>
                  1 × 3.5mm headphone jack with adjustable volume
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">Priority Button</TableCell>
                <TableCell>
                  Chairman unit includes programmable priority button
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">TF Interface</TableCell>
                <TableCell>Used for updating background image</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">Type-C Interface</TableCell>
                <TableCell>For debugging and firmware upgrade</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">Built-in DSP</TableCell>
                <TableCell>
                  Gain, noise gate, high-pass filter, DEQ, and 10-band parametric EQ
                </TableCell>
              </TableRow>


              {/* Performance */}
              <TableRow className="bg-gray-100">
                <TableCell colSpan={2} className="text-center font-semibold">
                  Performance
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">Microphone Type</TableCell>
                <TableCell>Rectangular column microphone</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">Pickup Head</TableCell>
                <TableCell>14mm condenser cardioid polar pattern</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">Sensitivity</TableCell>
                <TableCell>-34dB/kHz at 1Pa</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">Frequency Response</TableCell>
                <TableCell>50Hz – 18kHz</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">Output Impedance</TableCell>
                <TableCell>600 Ω</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">Signal-to-Noise Ratio</TableCell>
                <TableCell>&gt;83dB / 1kHz at 1Pa</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">
                  Maximum Input Sound Pressure Level
                </TableCell>
                <TableCell>128dB SPL / 1kHz at 1% THD</TableCell>
              </TableRow>


              {/* Environment */}
              <TableRow className="bg-gray-100">
                <TableCell colSpan={2} className="text-center font-semibold">
                  Environmental Parameters
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">Operating Temperature</TableCell>
                <TableCell>0℃ ~ 45℃</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">
                  Storage Temperature
                </TableCell>
                <TableCell>-20℃ ~ 60℃</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">Operating Humidity</TableCell>
                <TableCell>10% ~ 90% RH</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">
                  Non-Operating Humidity
                </TableCell>
                <TableCell>5% ~ 95% RH</TableCell>
              </TableRow>

            </TableBody>
          </Table>
        </div>

      </div>
    </section>
  )
}
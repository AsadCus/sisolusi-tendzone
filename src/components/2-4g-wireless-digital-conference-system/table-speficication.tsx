"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table"

export default function WirelessDigitalSpecificationTable() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold text-gray-900">
            Network Input And Output Interface Specification
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
                  General Performance
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="w-1/3 font-medium border">
                  Frequency Response
                </TableCell>
                <TableCell>20Hz～20kHz (±0.5dB)</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">
                  Sampling Rate
                </TableCell>
                <TableCell>48kHz, 24bit</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">
                  Dynamic Range
                </TableCell>
                <TableCell>&gt;103dB</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">
                  THD
                </TableCell>
                <TableCell>≤0.006%</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">
                  Noise Floor
                </TableCell>
                <TableCell>&lt;-90dBu @ 0dB Gain</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">
                  Channel Isolation
                </TableCell>
                <TableCell>&gt;110dB</TableCell>
              </TableRow>


              <TableRow className="bg-gray-100">
                <TableCell colSpan={2} className="text-center font-semibold">
                  Audio Input / Output
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">
                  Connector
                </TableCell>
                <TableCell>3.81 mm terminal blocks</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">
                  Number of Analog Channels
                </TableCell>
                <TableCell>8 in / 8 out</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">
                  Number of Vailink Channels
                </TableCell>
                <TableCell>8 in / 8 out</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">
                  Phantom Power
                </TableCell>
                <TableCell>DC 48</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">
                  Sensitivity Select
                </TableCell>
                <TableCell>
                  0dBu, -10dBu, -20dBu, -30dBu, -40dBu
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">
                  Input Impedance
                </TableCell>
                <TableCell>10KΩ balance</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">
                  Output Impedance
                </TableCell>
                <TableCell>200Ω balance</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">
                  Maximum Input Level
                </TableCell>
                <TableCell>+18 dBu @ 0dB Gain</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">
                  Maximum Output Level
                </TableCell>
                <TableCell>+18 dBu</TableCell>
              </TableRow>


              <TableRow className="bg-gray-100">
                <TableCell colSpan={2} className="text-center font-semibold">
                  Electrical and Physical Parameters
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">
                  Power Supply
                </TableCell>
                <TableCell>DC 12V, &lt;2A</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">
                  Power Consumption
                </TableCell>
                <TableCell>10W</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">
                  Operating Temperature
                </TableCell>
                <TableCell>0℃ - 40℃ working</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">
                  Relative Humidity
                </TableCell>
                <TableCell>10% ~ 90% no condensation</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">
                  Dimensions
                </TableCell>
                <TableCell>220mm × 191mm × 44.5mm</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">
                  Net Weight
                </TableCell>
                <TableCell>0.46 Kg</TableCell>
              </TableRow>

            </TableBody>
          </Table>
        </div>

      </div>
    </section>
  )
}
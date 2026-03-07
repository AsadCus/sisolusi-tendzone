"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table"

export default function SpeakersSpecificationTable() {
  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold text-gray-900">
            Network Speaker Specification
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
                  General Parameters
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="w-1/3 font-medium border">
                  Model
                </TableCell>
                <TableCell>Amber SM12</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">
                  Low Frequency Unit
                </TableCell>
                <TableCell>12 inches</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">
                  High Frequency Unit
                </TableCell>
                <TableCell>1.7 inch</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">
                  Speaker Rated Power
                </TableCell>
                <TableCell>450W</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">
                  Maximum SPL
                </TableCell>
                <TableCell>121dB continuous, 127dB peak</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">
                  Frequency Response (-10dB)
                </TableCell>
                <TableCell>60Hz – 20kHz</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">
                  Coverage Angle
                </TableCell>
                <TableCell>80° × 50°</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">
                  Working Mode
                </TableCell>
                <TableCell>
                  Dual power amplifier drive (low frequency & high frequency); 
                  signal processing using domestic ARM
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">
                  Installation
                </TableCell>
                <TableCell>Bracket, wall mount</TableCell>
              </TableRow>


              <TableRow className="bg-gray-100">
                <TableCell colSpan={2} className="text-center font-semibold">
                  Electrical and Physical Parameters
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">
                  Power Interface
                </TableCell>
                <TableCell>Neutrik PowerCon</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">
                  Power Switch
                </TableCell>
                <TableCell>Ship Type Switch</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">
                  Amplifier Power
                </TableCell>
                <TableCell>800W</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">
                  Amplification Type
                </TableCell>
                <TableCell>
                  Class D technology, conversion efficiency up to 90% @360W
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">
                  Operating Voltage
                </TableCell>
                <TableCell>AC100V – 240V, 50/60Hz</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">
                  Operating Temperature
                </TableCell>
                <TableCell>0℃ – 45℃</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">
                  Dimensions (W × H × D)
                </TableCell>
                <TableCell>362mm × 624mm × 367mm</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">
                  Weight
                </TableCell>
                <TableCell>31kg</TableCell>
              </TableRow>

            </TableBody>
          </Table>
        </div>

      </div>
    </section>
  )
}
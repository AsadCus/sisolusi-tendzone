"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table"

export default function AudioSpecificationTable() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold text-gray-900">
            Audio Over IP Specification
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
                <TableCell colSpan={2} className="text-center font-semibold ">
                  General Performance
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="w-1/3 font-medium border">
                  Processing Performance
                </TableCell>
                <TableCell className="text-gray-600 leading-relaxed">
                  Routing matrix capacity: 88x88 <br />
                  16 AEC processing modules (tail length can reach 512ms) <br />
                  32 AFC processing modules <br />
                  2 AI algorithm modules
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">
                  Preset Management
                </TableCell>
                <TableCell>1000 preset management</TableCell>
              </TableRow>

              <TableRow className="bg-gray-100">
                <TableCell colSpan={2} className="text-center font-semibold">
                  UI and Design
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">
                  System Design
                </TableCell>
                <TableCell className="text-gray-600 leading-relaxed">
                  Customize the audio signal processing flow of the audio processing service platform <br />
                  Customize the signal routing relationship between network audio devices <br />
                  Freely configure presets, which can include all processing modules or some modules
                </TableCell>
              </TableRow>

              <TableRow className="bg-gray-100">
                <TableCell colSpan={2} className="text-center font-semibold">
                  Electrical and Physical Parameters
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">Power Supply</TableCell>
                <TableCell>DC12V, 1A; supports PoE power supply</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">Power Consumption</TableCell>
                <TableCell>10W</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">Operating Temperature</TableCell>
                <TableCell>0°C - 45°C</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">Dimensions</TableCell>
                <TableCell>482mm × 300mm × 44mm</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">Package Size</TableCell>
                <TableCell>570mm × 410mm × 135mm</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">Net Weight</TableCell>
                <TableCell>3.16 Kg</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">Shipping Weight</TableCell>
                <TableCell>4.6 Kg</TableCell>
              </TableRow>

            </TableBody>
          </Table>

        </div>
      </div>
    </section>
  )
}
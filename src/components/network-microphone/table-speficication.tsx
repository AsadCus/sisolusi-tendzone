"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table"

export default function NetworkMicrophoneSpecificationTable() {
  return (
    <section className="w-full py-2 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-10">
          <h2 className="text-2xl font-semibold text-gray-900">
            Network Microphone Specification
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
                  General Specifications
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="w-1/3 font-medium border">
                  Microphone
                </TableCell>
                <TableCell>
                  Gold-plated film capacitor
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">
                  Directivity
                </TableCell>
                <TableCell>
                  Supercardioid
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">
                  Frequency Response (A/D/A)
                </TableCell>
                <TableCell>
                  38Hz – 20kHz
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">
                  Sampling Rate
                </TableCell>
                <TableCell>
                  48kHz / 24bit
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">
                  Sensitivity
                </TableCell>
                <TableCell>
                  -44 ±2 dB
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">
                  Maximum SPL
                </TableCell>
                <TableCell>
                  130 dB
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">
                  Equivalent Noise
                </TableCell>
                <TableCell>
                  23 dBA
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">
                  Connector
                </TableCell>
                <TableCell>
                  RJ45, CAT5e or higher, 100Mbps
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">
                  Power Supply
                </TableCell>
                <TableCell>
                  PoE power supply, compliant with IEEE 802.3af
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">
                  Power Consumption
                </TableCell>
                <TableCell>
                  3W
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">
                  Installation Hole Size
                </TableCell>
                <TableCell>
                  40mm diameter
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">
                  Microphone Rod Length
                </TableCell>
                <TableCell>
                  32cm or 39cm (optional)
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">
                  Base Size (W × D × H)
                </TableCell>
                <TableCell>
                  60mm × 85mm × 24.1mm
                </TableCell>
              </TableRow>

            </TableBody>
          </Table>
        </div>

      </div>
    </section>
  )
}
"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table"

export default function NetworkAdaptersSpecificationTable() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-10">
          <h2 className="text-2xl font-semibold text-gray-900">
           Network Adapters Specification
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
                  Maintenance Function
                </TableCell>
                <TableCell>
                  Support web page upgrade, network configuration, factory reset, log export functions
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">
                  Network Interface
                </TableCell>
                <TableCell>
                  1 × 1000M adaptive Ethernet port, supporting power supply via PoE
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">
                  Frequency Response
                </TableCell>
                <TableCell>
                  20Hz – 20kHz (±0.2dB)
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
                  Dynamic Range
                </TableCell>
                <TableCell>
                  &gt;110 dB (A-weighted)
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">
                  THD + N
                </TableCell>
                <TableCell>
                  &lt;0.005% @ 1kHz, 4 dBu
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">
                  Noise Floor
                </TableCell>
                <TableCell>
                  ≤ -90 dBu (A-weighted)
                </TableCell>
              </TableRow>

              {/* Analog Audio Output */}
              <TableRow className="bg-gray-100">
                <TableCell colSpan={2} className="text-center font-semibold">
                  Analog Audio Output
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">
                  Output Interface
                </TableCell>
                <TableCell>
                  2 CH balanced outputs, XLR-M professional audio interfaces
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">
                  Analog Output Level
                </TableCell>
                <TableCell>
                  0 dBu, -10 dBu, -20 dBu, -30 dBu, -40 dBu
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">
                  Maximum Output Level
                </TableCell>
                <TableCell>
                  20 dBu
                </TableCell>
              </TableRow>

              {/* Electrical & Physical */}
              <TableRow className="bg-gray-100">
                <TableCell colSpan={2} className="text-center font-semibold">
                  Electrical and Physical Parameters
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">
                  Device Power Consumption
                </TableCell>
                <TableCell>
                  5W
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">
                  Operating Temperature
                </TableCell>
                <TableCell>
                  0℃ – 40℃
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">
                  Humidity
                </TableCell>
                <TableCell>
                  10% ~ 90% (no condensation)
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium border">
                  Weight
                </TableCell>
                <TableCell>
                  0.2 Kg
                </TableCell>
              </TableRow>

            </TableBody>
          </Table>
        </div>

      </div>
    </section>
  )
}
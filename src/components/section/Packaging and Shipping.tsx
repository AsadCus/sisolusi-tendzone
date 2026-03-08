"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table"

export default function PackagingShipping() {
  return (
    <section className="w-full py-4 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold text-gray-900">
           Packaging and Shipping
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
              <TableRow>
                <TableCell className="w-1/3 font-medium border">
             Packaging
                </TableCell>
                <TableCell className="text-gray-600 leading-relaxed">
                 Plastic bag, paper box, customizable
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium border">Transportation methods</TableCell>
                <TableCell>Road transport, rail transport, sea transport, air transport</TableCell>
              </TableRow>

            </TableBody>
          </Table>

        </div>
      </div>
    </section>
  )
}
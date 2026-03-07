"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ClipboardCheck,
  Presentation,
  Wrench,
  Headphones,
  Settings,
  RefreshCcw,
} from "lucide-react";

export default function OurServiceSection() {
  return (
    <section className="w-full py-8 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-gray-900">Our Service</h2>

          <div className="flex justify-center gap-1 mt-3">
            <span className="w-2 h-2 bg-red-600 rounded-full"></span>
            <span className="w-2 h-2 bg-red-600 rounded-full"></span>
            <span className="w-2 h-2 bg-red-600 rounded-full"></span>
          </div>

          <p className="text-sm text-gray-600 mt-6 max-w-3xl mx-auto">
            Our dedicated customer support team offers reliable technical support,
            quick response times, and preventive maintenance service.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ClipboardCheck className="w-5 h-5 text-red-600" />
                Pre-Sales Services
              </CardTitle>
            </CardHeader>

            <CardContent className="text-sm text-gray-600 space-y-3">
              <p>
                <span className="font-medium">Requirement Assessment:</span> As a professional AV
                provider, we focus on understanding the unique requirements of our clients.
                Identify any technical limitations or challenges the client currently faces,
                such as space constraints, budget limitations, or specific user needs.
              </p>

              <p>
                <span className="font-medium">Consultation and Recommendations:</span>
                After we know the customer's requirement, we will provide tailored advice
                on AV products and solutions.
              </p>

              <p>
                <span className="font-medium">Demonstrations and Trials:</span>
                Offering product demonstrations or trial installations to showcase the
                potential benefits and functionalities of the proposed solutions.
              </p>

              <p>
                <span className="font-medium">System Design:</span>
                Creating customized designs and configurations for AV systems.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Presentation className="w-5 h-5 text-red-600" />
                In-Sales Services
              </CardTitle>
            </CardHeader>

            <CardContent className="text-sm text-gray-600 space-y-3">
              <p>
                <span className="font-medium">Sales Proposal:</span>
                Provide clients with a clear understanding of the project scope
                and costs.
              </p>

              <p>
                <span className="font-medium">Project Management:</span>
                Coordinating various aspects of the implementation including
                timelines, resources, and communication among stakeholders.
                Ensure the successful implementation of the AV system as per
                the agreed proposal.
              </p>

              <p>
                <span className="font-medium">Training and Support:</span>
                Providing initial training sessions for clients and their teams
                to ensure they are familiar with the new AV technologies.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Headphones className="w-5 h-5 text-red-600" />
                After-Sales Services
              </CardTitle>
            </CardHeader>

            <CardContent className="text-sm text-gray-600 space-y-3">
              <p>
                <span className="font-medium">Technical Support:</span>
                Professional tech support team ensures any issues with the AV
                system are promptly addressed.
              </p>

              <p>
                <span className="font-medium">Maintenance Services:</span>
                Offer client-customized maintenance plans based on usage,
                equipment types, and client preferences.
              </p>

              <p>
                <span className="font-medium">Upgrades and Updates:</span>
                Keep providing upgrade software to our clients.
              </p>

              <p>
                <span className="font-medium">Feedback and Improvement:</span>
                Customer feedback will keep to foster continuous improvement
                in service.
              </p>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
}
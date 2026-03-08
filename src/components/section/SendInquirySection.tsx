"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, Mail, Phone, User, Building2, FileText } from "lucide-react";

export default function SendInquirySection() {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
            <h2 className="text-2xl text-center md:text-3xl font-medium tracking-tight text-gray-900 leading-none">
              Send <span className="text-red-600">Inquiry</span>
            </h2>
        </div>
        <form className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <Label className="text-xs font-light tracking-widest uppercase text-gray-400 flex items-center gap-1.5">
                <User className="w-3 h-3" /> Name
              </Label>
              <Input
                placeholder="Your full name"
                className="rounded-xl border-gray-200 bg-gray-50 focus:bg-white focus:border-red-500 focus:ring-red-500/20 transition-all h-11"
              />
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs font-light tracking-widest uppercase text-gray-400 flex items-center gap-1.5">
                <Mail className="w-3 h-3" /> E-mail <span className="text-red-500">*</span>
              </Label>
              <Input
                type="email"
                placeholder="you@company.com"
                required
                className="rounded-xl border-gray-200 bg-gray-50 focus:bg-white focus:border-red-500 focus:ring-red-500/20 transition-all h-11"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <Label className="text-xs font-light tracking-widest uppercase text-gray-400 flex items-center gap-1.5">
                <Phone className="w-3 h-3" /> Phone / WhatsApp
              </Label>
              <Input
                placeholder="+62 812 3456 7890"
                className="rounded-xl border-gray-200 bg-gray-50 focus:bg-white focus:border-red-500 focus:ring-red-500/20 transition-all h-11"
              />
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs font-light tracking-widest uppercase text-gray-400 flex items-center gap-1.5">
                <Building2 className="w-3 h-3" /> Company
              </Label>
              <Input
                placeholder="Your company name"
                className="rounded-xl border-gray-200 bg-gray-50 focus:bg-white focus:border-red-500 focus:ring-red-500/20 transition-all h-11"
              />
            </div>
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs font-light tracking-widest uppercase text-gray-400 flex items-center gap-1.5">
              <FileText className="w-3 h-3" /> Subject
            </Label>
            <Input
              placeholder="Subject of your inquiry"
              className="rounded-xl border-gray-200 bg-gray-50 focus:bg-white focus:border-red-500 focus:ring-red-500/20 transition-all h-11"
            />
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs font-light tracking-widest uppercase text-gray-400 flex items-center gap-1.5">
              <Mail className="w-3 h-3" /> Message <span className="text-red-500">*</span>
            </Label>
            <Textarea
              placeholder="Describe your inquiry in detail"
              required
              className="min-h-40 rounded-xl border-gray-200 bg-gray-50 focus:bg-white focus:border-red-500 focus:ring-red-500/20 transition-all resize-none"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <p className="text-xs text-gray-400">
              Fields marked <span className="text-red-500 font-light">*</span> are required.
            </p>
            <Button
              type="submit"
              className="w-full sm:w-auto rounded-xl bg-red-600 hover:bg-red-700 active:scale-95 text-white font-medium tracking-widest uppercase text-xs px-8 h-11 flex items-center gap-2 transition-all duration-200"
            >
              <Send className="w-3.5 h-3.5" />
              Leave a Message
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
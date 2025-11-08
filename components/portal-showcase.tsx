"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function PortalShowcase() {
  const [activeTab, setActiveTab] = useState("onboarding")

  const tabs = [
    { id: "onboarding", label: "Onboarding" },
    { id: "client", label: "Client Portal" },
    { id: "partner", label: "Partner or Deal Space" },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-br from-teal-900 to-teal-800 rounded-3xl p-16 relative">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-teal-800/50 rounded-full p-1.5 gap-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-8 py-2.5 rounded-full font-medium transition-all ${
                    activeTab === tab.id ? "bg-white text-teal-900" : "text-white hover:bg-teal-700/50"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Portal Showcase Content */}
          <div className="relative h-96 md:h-[500px]">
            {/* Onboarding Tab */}
            {activeTab === "onboarding" && (
              <div className="flex items-center justify-center h-full w-full bg-gradient-to-br from-teal-900 to-teal-800 rounded-3xl overflow-hidden">
                <img
                  src="/portal.png"
                  alt="Portal Onboarding Showcase"
                  className="object-contain w-full h-full max-h-full max-w-full"
                  style={{ borderRadius: '2rem' }}
                />
              </div>
            )}

            {/* Client Portal Tab */}
            {activeTab === "client" && (
              <div className="flex items-center justify-center h-full w-full bg-gradient-to-br from-teal-900 to-teal-800 rounded-3xl overflow-hidden">
                <img
                  src="/Attached_image.png"
                  alt="Client Portal Showcase"
                  className="object-contain w-full h-full max-h-full max-w-full"
                  style={{ borderRadius: '2rem' }}
                />
              </div>
            )}

            {/* Partner/Deal Space Tab */}
            {activeTab === "partner" && (
              <div className="flex items-center justify-center h-full w-full bg-gradient-to-br from-teal-900 to-teal-800 rounded-3xl overflow-hidden">
                <img
                  src="/portal%20deal%20space.png"
                  alt="Partner or Deal Space Showcase"
                  className="object-contain w-full h-full max-h-full max-w-full"
                  style={{ borderRadius: '2rem' }}
                />
              </div>
            )}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <Button size="lg" className="bg-teal-900 hover:bg-teal-800 text-white px-8 py-3 rounded-lg font-semibold">
            Try it free
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-slate-900 text-slate-900 hover:bg-slate-50 px-8 py-3 rounded-lg font-semibold bg-transparent"
          >
            Book a demo
          </Button>
        </div>
      </div>
    </section>
  )
}

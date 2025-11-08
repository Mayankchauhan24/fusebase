"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { FlowButton } from "@/components/FlowButton"

export function FeaturesShowcase() {
  const [activeTab, setActiveTab] = useState("automations")

  const tabs = [
    { id: "automations", label: "Automations" },
    { id: "workspace", label: "Team Workspace" },
    { id: "agents", label: "AI Agents" },
  ]

  const tabImages = {
    automations: "/feature%20showcase.png", // local image for automations
    workspace: "/feature%20showcase%20worksapce.png",
    agents: "/feature%20showcase%20section%20ai%20assistant.png",
  }

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-slate-600/40 border border-slate-500/50 rounded-full p-1.5 gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all text-sm ${
                  activeTab === tab.id ? "bg-white text-slate-900 shadow-lg" : "text-slate-200 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Showcase Container */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-900 via-slate-900 to-blue-800 p-8 sm:p-12">
          {/* Decorative gradient overlays */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
          </div>

          {/* Conditional rendering based on active tab */}
          <div className="relative flex items-center justify-center min-h-96">
            <img
              src={tabImages[activeTab as keyof typeof tabImages] || "/placeholder.svg"}
              alt={`${tabs.find((t) => t.id === activeTab)?.label} showcase`}
              className="w-full max-w-5xl object-contain transition-opacity duration-300"
            />
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <Button size="lg" className="bg-blue-950 hover:bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold">
            Try it free
          </Button>
          <FlowButton text="Book a demo" />
        </div>
      </div>
    </section>
  )
}

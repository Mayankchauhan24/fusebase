import { Button } from "@/components/ui/button"
import { FlowButton } from "@/components/FlowButton"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-slate-50 to-cyan-50 px-6 py-20 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-8">
            {/* Badge */}
            <div className="flex items-center gap-3 w-fit">
              <span className="inline-flex items-center gap-2 rounded-full bg-teal-100 px-4 py-1.5">
                <span className="h-2 w-2 rounded-full bg-teal-600"></span>
                <span className="text-sm font-semibold text-teal-700">AI-powered</span>
              </span>
              <span className="text-sm text-slate-600">Solutions for Client-Facing businesses</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-foreground leading-tight">
                Secure, AI-powered Portals for Teams, Clients & Partners
              </h1>
            </div>

            {/* Subheading */}
            <p className="text-lg text-slate-700 leading-relaxed max-w-xl">
              Your team needs Project Management, but your clients and partners hate it.{" "}
              <span className="text-teal-600 font-semibold">We solved that!</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-slate-900 hover:bg-slate-800 text-white rounded-lg px-8 py-3 font-semibold"
              >
                Try it free
              </Button>
              <FlowButton text="Book a demo" />
            </div>
          </div>

          {/* Right Side - Product Screenshots */}
          <div className="relative h-96 sm:h-[500px] lg:h-[600px]">
            {/* Background accent */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-100 to-blue-50 rounded-3xl -z-10 blur-3xl opacity-60"></div>

            {/* Screenshot cards - stacked and overlapping */}
            <div className="relative w-full h-full">
              {/* Project Phases - Back */}
              <div className="absolute top-0 left-0 w-4/5 bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 transform -rotate-6 translate-y-8 translate-x-4">
                <img src="/project-phases-dashboard-interface.jpg" alt="Project Phases Interface" className="w-full h-auto" />
              </div>

              {/* Partner Portal - Middle */}
              <div className="absolute top-12 left-1/4 w-4/5 bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 transform rotate-3 translate-y-16">
                <img src="/partner-portal-welcome-interface.jpg" alt="Partner Portal" className="w-full h-auto" />
              </div>

              {/* Client & Onboarding - Front Right */}
              <div className="absolute top-1/3 right-0 w-4/5 bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 transform rotate-2">
                <img src="/client-onboarding-portal-interface.jpg" alt="Client & Onboarding Portal" className="w-full h-auto" />
              </div>

              {/* Knowledge Base - Bottom */}
              <div className="absolute bottom-0 right-1/4 w-3/5 bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200 transform -rotate-3">
                <img src="/knowledge-base-dashboard.jpg" alt="Knowledge Base" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Sparkles, X } from "lucide-react"
import { CardDemo } from "./card-demo"

/**
 * Animated Hero Component
 * Features animated text transitions and interactive demo
 */
export function AnimatedHero() {
  const [currentText, setCurrentText] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [showDemo, setShowDemo] = useState(false)

  const heroTexts = ["Your Identity. Everywhere.", "Your Documents. Secured.", "Your Future. Decentralized."]

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-pink-400/10 animate-pulse"></div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-20 animate-bounce delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-gradient-to-r from-pink-400 to-red-500 rounded-full opacity-20 animate-bounce delay-2000"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Animated Badge */}
          <div
            className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full mb-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ backgroundColor: "#6366F1", color: "white" }}
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Powered by Solana & IPFS</span>
          </div>

          {/* Animated Main Headline */}
          <h1
            className={`text-5xl md:text-7xl font-bold mb-6 leading-tight transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ color: "#1E293B" }}
          >
            <span className="block mb-2">Your Essential Documents,</span>
            <span
              className="block text-transparent bg-clip-text bg-gradient-to-r transition-all duration-500"
              style={{ backgroundImage: "linear-gradient(to right, #0EA5E9, #6366F1)" }}
              key={currentText}
            >
              {heroTexts[currentText]}
            </span>
          </h1>

          {/* Animated Subtitle */}
          <p
            className={`text-xl md:text-2xl mb-12 leading-relaxed transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ color: "#64748B" }}
          >
            Nomado empowers migrant workers across India with secure, portable digital versions of their essential cards
            using blockchain technology.
          </p>

          {/* Animated Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-6 justify-center transition-all duration-1000 delay-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Button
              size="lg"
              className="group relative overflow-hidden text-white text-lg px-8 py-4 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              style={{ backgroundColor: "#0EA5E9" }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#0284C7"
                e.target.style.boxShadow = "0 20px 25px -5px rgba(14, 165, 233, 0.4)"
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#0EA5E9"
                e.target.style.boxShadow = "none"
              }}
            >
              <span className="relative z-10 flex items-center">
                <Download className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
                Download App
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="group text-lg px-8 py-4 transition-all duration-300 transform hover:scale-105 bg-white/80 backdrop-blur-sm border-2 hover:shadow-xl"
              style={{ borderColor: "#0EA5E9", color: "#0EA5E9" }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#0EA5E9"
                e.target.style.color = "white"
                e.target.style.borderColor = "#0EA5E9"
                e.target.style.boxShadow = "0 20px 25px -5px rgba(14, 165, 233, 0.4)"
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "rgba(255, 255, 255, 0.8)"
                e.target.style.color = "#0EA5E9"
                e.target.style.borderColor = "#0EA5E9"
                e.target.style.boxShadow = "none"
              }}
              onClick={() => setShowDemo(true)}
            >
              <span className="flex items-center">
                Try Demo
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>
          </div>
        </div>

        {/* Hero Illustration */}
        <div
          className={`mt-16 flex justify-center transition-all duration-1000 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="relative">
            {/* SVG Illustration */}
            <svg
              width="400"
              height="300"
              viewBox="0 0 400 300"
              className="drop-shadow-2xl"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Background Cards */}
              <rect x="50" y="80" width="120" height="80" rx="12" fill="#F1F5F9" opacity="0.8" />
              <rect x="230" y="60" width="120" height="80" rx="12" fill="#F1F5F9" opacity="0.8" />
              <rect x="140" y="140" width="120" height="80" rx="12" fill="#F1F5F9" opacity="0.8" />

              {/* Main Card */}
              <rect x="140" y="100" width="120" height="80" rx="12" fill="url(#cardGradient)" />

              {/* Card Details */}
              <rect x="150" y="110" width="60" height="4" rx="2" fill="white" opacity="0.8" />
              <rect x="150" y="120" width="40" height="4" rx="2" fill="white" opacity="0.6" />
              <rect x="150" y="130" width="80" height="4" rx="2" fill="white" opacity="0.4" />

              {/* Blockchain Network */}
              <circle cx="100" cy="50" r="8" fill="#0EA5E9" />
              <circle cx="200" cy="40" r="8" fill="#6366F1" />
              <circle cx="300" cy="50" r="8" fill="#0EA5E9" />
              <circle cx="150" cy="250" r="8" fill="#6366F1" />
              <circle cx="250" cy="240" r="8" fill="#0EA5E9" />

              {/* Connection Lines */}
              <line x1="100" y1="50" x2="200" y2="40" stroke="#0EA5E9" strokeWidth="2" opacity="0.6" />
              <line x1="200" y1="40" x2="300" y2="50" stroke="#6366F1" strokeWidth="2" opacity="0.6" />
              <line x1="200" y1="140" x2="150" y2="250" stroke="#0EA5E9" strokeWidth="2" opacity="0.6" />
              <line x1="200" y1="140" x2="250" y2="240" stroke="#6366F1" strokeWidth="2" opacity="0.6" />

              {/* Gradient Definitions */}
              <defs>
                <linearGradient id="cardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0EA5E9" />
                  <stop offset="100%" stopColor="#6366F1" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      {showDemo && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold" style={{ color: "#1E293B" }}>
                Interactive Card Demo
              </h2>
              <Button variant="ghost" onClick={() => setShowDemo(false)} className="h-8 w-8 p-0">
                <X className="w-5 h-5" />
              </Button>
            </div>
            <CardDemo />
          </div>
        </div>
      )}
    </div>
  )
}

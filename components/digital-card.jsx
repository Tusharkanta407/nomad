"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, GraduationCap, ShoppingCart, Shield, QrCode, Copy, CheckCircle, X } from "lucide-react"

const cardConfig = {
  health: {
    icon: Heart,
    title: "Health Card",
    color: "#6366F1",
    bgGradient: "from-purple-500 to-indigo-600",
  },
  education: {
    icon: GraduationCap,
    title: "Education Certificate",
    color: "#0EA5E9",
    bgGradient: "from-sky-500 to-blue-600",
  },
  ration: {
    icon: ShoppingCart,
    title: "Ration Card",
    color: "#22C55E",
    bgGradient: "from-green-500 to-emerald-600",
  },
  welfare: {
    icon: Shield,
    title: "Welfare Card",
    color: "#6366F1",
    bgGradient: "from-indigo-500 to-purple-600",
  },
}

/**
 * Simple QR Code generator (for demo purposes)
 * @param {string} data - Data to encode in QR code
 * @returns {string} Base64 encoded SVG QR code
 */
function generateQRCode(data) {
  // In a real app, you'd use a proper QR code library
  // For demo, we'll create a simple pattern
  const size = 120
  const modules = 21 // Standard QR code size
  const moduleSize = size / modules

  let svg = `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">`

  // Create a simple pattern based on the data
  const hash = data.split("").reduce((a, b) => {
    a = (a << 5) - a + b.charCodeAt(0)
    return a & a
  }, 0)

  for (let i = 0; i < modules; i++) {
    for (let j = 0; j < modules; j++) {
      const shouldFill = (hash + i * j) % 3 === 0
      if (shouldFill) {
        svg += `<rect x="${j * moduleSize}" y="${i * moduleSize}" width="${moduleSize}" height="${moduleSize}" fill="#1E293B"/>`
      }
    }
  }

  // Add corner squares (finder patterns)
  const cornerSize = moduleSize * 7
  svg += `<rect x="0" y="0" width="${cornerSize}" height="${cornerSize}" fill="none" stroke="#1E293B" strokeWidth="2"/>`
  svg += `<rect x="${size - cornerSize}" y="0" width="${cornerSize}" height="${cornerSize}" fill="none" stroke="#1E293B" strokeWidth="2"/>`
  svg += `<rect x="0" y="${size - cornerSize}" width="${cornerSize}" height="${cornerSize}" fill="none" stroke="#1E293B" strokeWidth="2"/>`

  svg += "</svg>"

  return `data:image/svg+xml;base64,${btoa(svg)}`
}

/**
 * Digital Card Component
 * Displays a digital identity card with QR code verification
 * @param {Object} props - Component props
 * @param {string} props.id - Card ID
 * @param {string} props.name - Cardholder name
 * @param {string} props.cardType - Type of card (health, education, ration, welfare)
 * @param {string[]} props.services - Array of covered services
 * @param {string} props.status - Card status (active, expired)
 * @param {string} props.issueDate - Issue date
 * @param {string} props.expiryDate - Expiry date
 * @param {Function} props.onClose - Close callback
 */
export function DigitalCard({ id, name, cardType, services, status, issueDate, expiryDate, onClose }) {
  const [copied, setCopied] = useState(false)
  const config = cardConfig[cardType]
  const Icon = config.icon

  const verifyUrl = `https://nomado.app/verify/${id}`
  const qrCodeData = generateQRCode(verifyUrl)

  const copyVerifyUrl = async () => {
    await navigator.clipboard.writeText(verifyUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="relative max-w-md w-full">
        {onClose && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="absolute -top-12 right-0 text-white hover:bg-white/20"
          >
            <X className="w-5 h-5" />
          </Button>
        )}

        <Card className="overflow-hidden rounded-2xl shadow-2xl transition-transform hover:scale-105 duration-300">
          {/* Card Header with Gradient */}
          <div className={`bg-gradient-to-r ${config.bgGradient} p-6 text-white relative overflow-hidden`}>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 right-4 w-20 h-20 border-2 border-white rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 border-2 border-white rounded-full"></div>
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{config.title}</h3>
                    <p className="text-sm opacity-90">Government of India</p>
                  </div>
                </div>
                <Badge className={`${status === "active" ? "bg-green-500" : "bg-red-500"} text-white`}>
                  {status === "active" ? "Active" : "Expired"}
                </Badge>
              </div>

              <div className="space-y-2">
                <h4 className="text-xl font-bold">{name}</h4>
                <p className="text-sm opacity-90">Card ID: {id}</p>
              </div>
            </div>
          </div>

          <CardContent className="p-6 bg-white">
            {/* Services */}
            <div className="mb-6">
              <h5 className="font-semibold mb-3" style={{ color: "#1E293B" }}>
                Covered Services
              </h5>
              <div className="flex flex-wrap gap-2">
                {services.map((service, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="text-xs"
                    style={{ backgroundColor: "#F1F5F9", color: "#64748B" }}
                  >
                    {service}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Card Details */}
            <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
              <div>
                <p className="text-gray-500">Issue Date</p>
                <p className="font-semibold" style={{ color: "#1E293B" }}>
                  {issueDate}
                </p>
              </div>
              <div>
                <p className="text-gray-500">Expiry Date</p>
                <p className="font-semibold" style={{ color: "#1E293B" }}>
                  {expiryDate}
                </p>
              </div>
            </div>

            {/* QR Code Section */}
            <div className="border-t pt-6">
              <div className="flex items-center justify-between mb-4">
                <h5 className="font-semibold" style={{ color: "#1E293B" }}>
                  Verification QR Code
                </h5>
                <QrCode className="w-5 h-5" style={{ color: "#64748B" }} />
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img src={qrCodeData || "/placeholder.svg"} alt="QR Code" className="w-24 h-24 border rounded-lg" />
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-500 mb-2">Scan to verify authenticity</p>
                  <div className="flex items-center space-x-2">
                    <code className="text-xs bg-gray-100 px-2 py-1 rounded flex-1 truncate">{verifyUrl}</code>
                    <Button variant="ghost" size="sm" onClick={copyVerifyUrl} className="h-8 w-8 p-0">
                      {copied ? (
                        <CheckCircle className="w-4 h-4" style={{ color: "#22C55E" }} />
                      ) : (
                        <Copy className="w-4 h-4" style={{ color: "#64748B" }} />
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Blockchain Info */}
            <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: "#F9FAFB" }}>
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium" style={{ color: "#1E293B" }}>
                  Secured on Solana Blockchain
                </span>
              </div>
              <p className="text-xs" style={{ color: "#64748B" }}>
                This document is cryptographically secured and stored on IPFS with blockchain verification.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

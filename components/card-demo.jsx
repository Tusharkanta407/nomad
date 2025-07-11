"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, GraduationCap, ShoppingCart, Shield, Eye, Sparkles } from "lucide-react"
import { DigitalCard } from "./digital-card"

const demoCards = [
  {
    id: "HC-2024-001",
    name: "Rajesh Kumar",
    cardType: "health",
    services: ["Emergency Care", "Outpatient", "Pharmacy", "Lab Tests"],
    status: "active",
    issueDate: "15 Jan 2024",
    expiryDate: "15 Jan 2029",
  },
  {
    id: "EC-2024-002",
    name: "Rajesh Kumar",
    cardType: "education",
    services: ["10th Grade", "12th Grade", "Skill Certificate"],
    status: "active",
    issueDate: "20 Mar 2024",
    expiryDate: "Lifetime",
  },
  {
    id: "RC-2024-003",
    name: "Rajesh Kumar",
    cardType: "ration",
    services: ["Rice", "Wheat", "Sugar", "Kerosene"],
    status: "active",
    issueDate: "01 Apr 2024",
    expiryDate: "31 Mar 2025",
  },
  {
    id: "WC-2024-004",
    name: "Rajesh Kumar",
    cardType: "welfare",
    services: ["MGNREGA", "Pension", "Housing", "Insurance"],
    status: "active",
    issueDate: "10 Feb 2024",
    expiryDate: "10 Feb 2025",
  },
]

const cardConfig = {
  health: {
    icon: Heart,
    title: "Health Card",
    color: "#6366F1",
    bgClass: "bg-purple-500 hover:bg-purple-600",
  },
  education: {
    icon: GraduationCap,
    title: "Education Certificate",
    color: "#0EA5E9",
    bgClass: "bg-sky-500 hover:bg-sky-600",
  },
  ration: {
    icon: ShoppingCart,
    title: "Ration Card",
    color: "#22C55E",
    bgClass: "bg-green-500 hover:bg-green-600",
  },
  welfare: {
    icon: Shield,
    title: "Welfare Card",
    color: "#6366F1",
    bgClass: "bg-indigo-500 hover:bg-indigo-600",
  },
}

/**
 * Card Demo Component
 * Interactive demo showing digital identity cards
 */
export function CardDemo() {
  const [selectedCard, setSelectedCard] = useState(null)
  const [isVisible, setIsVisible] = useState(false)

  const openCard = (card) => {
    setSelectedCard(card)
    setIsVisible(true)
  }

  const closeCard = () => {
    setIsVisible(false)
    setTimeout(() => setSelectedCard(null), 300)
  }

  return (
    <div className="space-y-8">
      {/* Demo Header */}
      <div className="text-center">
        <div
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-full mb-4"
          style={{ backgroundColor: "#6366F1", color: "white" }}
        >
          <Sparkles className="w-4 h-4" />
          <span className="text-sm font-medium">Interactive Demo</span>
        </div>
        <h3 className="text-2xl font-bold mb-2" style={{ color: "#1E293B" }}>
          Your Digital Identity Cards
        </h3>
        <p style={{ color: "#64748B" }}>Click on any card to view the full digital version with QR code verification</p>
      </div>

      {/* Card Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {demoCards.map((card) => {
          const config = cardConfig[card.cardType]
          const Icon = config.icon

          return (
            <Card
              key={card.id}
              className="rounded-2xl overflow-hidden transition-transform hover:scale-105 duration-300 cursor-pointer shadow-lg hover:shadow-xl"
              onClick={() => openCard(card)}
            >
              <CardHeader className={`${config.bgClass} text-white transition-colors duration-300`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{config.title}</CardTitle>
                      <p className="text-sm opacity-90">ID: {card.id}</p>
                    </div>
                  </div>
                  <Badge className="bg-white/20 text-white border-white/30">
                    {card.status === "active" ? "Active" : "Expired"}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="p-6 bg-white">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg" style={{ color: "#1E293B" }}>
                      {card.name}
                    </h4>
                    <p className="text-sm" style={{ color: "#64748B" }}>
                      Valid until {card.expiryDate}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-medium mb-2" style={{ color: "#1E293B" }}>
                      Services Covered:
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {card.services.slice(0, 3).map((service, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="text-xs"
                          style={{ backgroundColor: "#F1F5F9", color: "#64748B" }}
                        >
                          {service}
                        </Badge>
                      ))}
                      {card.services.length > 3 && (
                        <Badge
                          variant="secondary"
                          className="text-xs"
                          style={{ backgroundColor: "#F1F5F9", color: "#64748B" }}
                        >
                          +{card.services.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <Button
                    className="w-full rounded-2xl transition-transform hover:scale-105 duration-300"
                    style={{ backgroundColor: config.color }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = config.color
                      e.target.style.filter = "brightness(0.9)"
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = config.color
                      e.target.style.filter = "brightness(1)"
                    }}
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    View Full Card
                  </Button>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Digital Card Modal */}
      {selectedCard && isVisible && <DigitalCard {...selectedCard} onClose={closeCard} />}
    </div>
  )
}

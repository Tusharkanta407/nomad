"use client"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Shield,
  Smartphone,
  Globe,
  Users,
  FileText,
  Heart,
  GraduationCap,
  ShoppingCart,
  CheckCircle,
  Github,
  Twitter,
} from "lucide-react"
import Link from "next/link"
import { WalletConnector } from "@/components/wallet-connector"
import { LottieHero } from "@/components/lottie-hero"
import { PWAInstall } from "@/components/pwa-install"
import { MobileNav } from "@/components/mobile-nav"

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F9FAFB" }}>
      {/* Smaller Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#0EA5E9" }}>
              <Globe className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold" style={{ color: "#1E293B" }}>
              Nomado
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-4">
            <Link
              href="#features"
              className="text-sm transition-colors"
              style={{ color: "#64748B" }}
              onMouseEnter={(e) => (e.target.style.color = "#0EA5E9")}
              onMouseLeave={(e) => (e.target.style.color = "#64748B")}
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm transition-colors"
              style={{ color: "#64748B" }}
              onMouseEnter={(e) => (e.target.style.color = "#0EA5E9")}
              onMouseLeave={(e) => (e.target.style.color = "#64748B")}
            >
              How It Works
            </Link>
            <Link
              href="/verify/demo"
              className="text-sm transition-colors"
              style={{ color: "#64748B" }}
              onMouseEnter={(e) => (e.target.style.color = "#0EA5E9")}
              onMouseLeave={(e) => (e.target.style.color = "#64748B")}
            >
              Verify
            </Link>
            <WalletConnector />
          </nav>
          <div className="md:hidden">
            <MobileNav />
          </div>
        </div>
      </header>

      {/* Lottie Hero Section */}
      <LottieHero />

      {/* Problem Statement */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8" style={{ color: "#1E293B" }}>
            The Challenge Migrant Workers Face
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <FileText className="w-12 h-12 mx-auto mb-4" style={{ color: "#EF4444" }} />
              <h3 className="text-lg font-semibold mb-2" style={{ color: "#1E293B" }}>
                Lost Documents
              </h3>
              <p style={{ color: "#64748B" }}>Physical cards get lost, damaged, or stolen during migration</p>
            </div>
            <div className="p-6">
              <Users className="w-12 h-12 mx-auto mb-4" style={{ color: "#EF4444" }} />
              <h3 className="text-lg font-semibold mb-2" style={{ color: "#1E293B" }}>
                Access Barriers
              </h3>
              <p style={{ color: "#64748B" }}>Difficulty accessing services without proper documentation</p>
            </div>
            <div className="p-6">
              <Shield className="w-12 h-12 mx-auto mb-4" style={{ color: "#EF4444" }} />
              <h3 className="text-lg font-semibold mb-2" style={{ color: "#1E293B" }}>
                Verification Issues
              </h3>
              <p style={{ color: "#64748B" }}>Time-consuming verification processes across different states</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1E293B" }}>
              Digital Cards That Travel With You
            </h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: "#64748B" }}>
              Secure, verifiable, and always accessible - your essential documents on the blockchain
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card
              className="border-2 transition-all duration-300 hover:shadow-lg hover:scale-105"
              style={{ borderColor: "#E2E8F0" }}
              onMouseEnter={(e) => (e.target.style.borderColor = "#0EA5E9")}
              onMouseLeave={(e) => (e.target.style.borderColor = "#E2E8F0")}
            >
              <CardHeader className="text-center">
                <Heart className="w-12 h-12 mx-auto mb-2" style={{ color: "#6366F1" }} />
                <CardTitle style={{ color: "#1E293B" }}>Health Cards</CardTitle>
                <CardDescription style={{ color: "#64748B" }}>
                  Medical history, insurance, and health records
                </CardDescription>
              </CardHeader>
            </Card>

            <Card
              className="border-2 transition-all duration-300 hover:shadow-lg hover:scale-105"
              style={{ borderColor: "#E2E8F0" }}
              onMouseEnter={(e) => (e.target.style.borderColor = "#0EA5E9")}
              onMouseLeave={(e) => (e.target.style.borderColor = "#E2E8F0")}
            >
              <CardHeader className="text-center">
                <ShoppingCart className="w-12 h-12 mx-auto mb-2" style={{ color: "#22C55E" }} />
                <CardTitle style={{ color: "#1E293B" }}>Ration Cards</CardTitle>
                <CardDescription style={{ color: "#64748B" }}>Food security and PDS entitlements</CardDescription>
              </CardHeader>
            </Card>

            <Card
              className="border-2 transition-all duration-300 hover:shadow-lg hover:scale-105"
              style={{ borderColor: "#E2E8F0" }}
              onMouseEnter={(e) => (e.target.style.borderColor = "#0EA5E9")}
              onMouseLeave={(e) => (e.target.style.borderColor = "#E2E8F0")}
            >
              <CardHeader className="text-center">
                <GraduationCap className="w-12 h-12 mx-auto mb-2" style={{ color: "#0EA5E9" }} />
                <CardTitle style={{ color: "#1E293B" }}>Education Records</CardTitle>
                <CardDescription style={{ color: "#64748B" }}>
                  Certificates, transcripts, and qualifications
                </CardDescription>
              </CardHeader>
            </Card>

            <Card
              className="border-2 transition-all duration-300 hover:shadow-lg hover:scale-105"
              style={{ borderColor: "#E2E8F0" }}
              onMouseEnter={(e) => (e.target.style.borderColor = "#0EA5E9")}
              onMouseLeave={(e) => (e.target.style.borderColor = "#E2E8F0")}
            >
              <CardHeader className="text-center">
                <Shield className="w-12 h-12 mx-auto mb-2" style={{ color: "#6366F1" }} />
                <CardTitle style={{ color: "#1E293B" }}>Welfare Cards</CardTitle>
                <CardDescription style={{ color: "#64748B" }}>Social security and government benefits</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1E293B" }}>
              Powered by Cutting-Edge Technology
            </h2>
            <p className="text-xl" style={{ color: "#64748B" }}>
              Built on Solana blockchain with IPFS for secure, decentralized document storage
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ background: "linear-gradient(to right, #6366F1, #8B5CF6)" }}
              >
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: "#1E293B" }}>
                Upload & Verify
              </h3>
              <p style={{ color: "#64748B" }}>Upload your physical documents through our secure verification process</p>
            </div>

            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ background: "linear-gradient(to right, #0EA5E9, #06B6D4)" }}
              >
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: "#1E293B" }}>
                Blockchain Storage
              </h3>
              <p style={{ color: "#64748B" }}>Documents are encrypted and stored on Solana blockchain with IPFS</p>
            </div>

            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ background: "linear-gradient(to right, #22C55E, #16A34A)" }}
              >
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: "#1E293B" }}>
                Access Anywhere
              </h3>
              <p style={{ color: "#64748B" }}>
                Access your verified documents instantly from any device, anywhere in India
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1E293B" }}>
              Why Choose Nomado?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 mt-1 flex-shrink-0" style={{ color: "#22C55E" }} />
              <div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: "#1E293B" }}>
                  Tamper-Proof Security
                </h3>
                <p style={{ color: "#64748B" }}>
                  Blockchain technology ensures your documents cannot be forged or altered
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 mt-1 flex-shrink-0" style={{ color: "#22C55E" }} />
              <div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: "#1E293B" }}>
                  Instant Verification
                </h3>
                <p style={{ color: "#64748B" }}>Authorities can verify your documents in seconds, not hours</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 mt-1 flex-shrink-0" style={{ color: "#22C55E" }} />
              <div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: "#1E293B" }}>
                  Always Available
                </h3>
                <p style={{ color: "#64748B" }}>Access your documents 24/7 from any smartphone or computer</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 mt-1 flex-shrink-0" style={{ color: "#22C55E" }} />
              <div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: "#1E293B" }}>
                  Privacy Protected
                </h3>
                <p style={{ color: "#64748B" }}>You control who can access your information with advanced encryption</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4" style={{ background: "linear-gradient(to right, #0EA5E9, #6366F1)" }}>
        <div className="container mx-auto max-w-4xl text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Go Digital?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of migrant workers who have already secured their future with Nomado
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-lg px-8 transition-all duration-300 transform hover:scale-105"
              style={{ backgroundColor: "white", color: "#0EA5E9" }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#F1F5F9"
                e.target.style.color = "#0284C7"
                e.target.style.boxShadow = "0 10px 25px rgba(0,0,0,0.2)"
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "white"
                e.target.style.color = "#0EA5E9"
                e.target.style.boxShadow = "none"
              }}
            >
              <Smartphone className="w-5 h-5 mr-2" />
              Download for Android
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 bg-transparent transition-all duration-300 transform hover:scale-105"
              style={{ borderColor: "white", color: "white" }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "white"
                e.target.style.color = "#0EA5E9"
                e.target.style.boxShadow = "0 10px 25px rgba(0,0,0,0.2)"
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent"
                e.target.style.color = "white"
                e.target.style.boxShadow = "none"
              }}
            >
              <Smartphone className="w-5 h-5 mr-2" />
              Download for iOS
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4" style={{ backgroundColor: "#1E293B", color: "white" }}>
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: "#0EA5E9" }}
                >
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Nomado</span>
              </div>
              <p style={{ color: "#94A3B8" }}>
                Empowering migrant workers with secure, portable digital documents on the blockchain.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2" style={{ color: "#94A3B8" }}>
                <li>
                  <Link
                    href="#"
                    className="transition-colors"
                    onMouseEnter={(e) => (e.target.style.color = "#0EA5E9")}
                    onMouseLeave={(e) => (e.target.style.color = "#94A3B8")}
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="transition-colors"
                    onMouseEnter={(e) => (e.target.style.color = "#0EA5E9")}
                    onMouseLeave={(e) => (e.target.style.color = "#94A3B8")}
                  >
                    Security
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="transition-colors"
                    onMouseEnter={(e) => (e.target.style.color = "#0EA5E9")}
                    onMouseLeave={(e) => (e.target.style.color = "#94A3B8")}
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="transition-colors"
                    onMouseEnter={(e) => (e.target.style.color = "#0EA5E9")}
                    onMouseLeave={(e) => (e.target.style.color = "#94A3B8")}
                  >
                    API
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2" style={{ color: "#94A3B8" }}>
                <li>
                  <Link
                    href="#"
                    className="transition-colors"
                    onMouseEnter={(e) => (e.target.style.color = "#0EA5E9")}
                    onMouseLeave={(e) => (e.target.style.color = "#94A3B8")}
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="transition-colors"
                    onMouseEnter={(e) => (e.target.style.color = "#0EA5E9")}
                    onMouseLeave={(e) => (e.target.style.color = "#94A3B8")}
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="transition-colors"
                    onMouseEnter={(e) => (e.target.style.color = "#0EA5E9")}
                    onMouseLeave={(e) => (e.target.style.color = "#64748B")}
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="transition-colors"
                    onMouseEnter={(e) => (e.target.style.color = "#0EA5E9")}
                    onMouseLeave={(e) => (e.target.style.color = "#94A3B8")}
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="transition-colors"
                  style={{ color: "#94A3B8" }}
                  onMouseEnter={(e) => (e.target.style.color = "#0EA5E9")}
                  onMouseLeave={(e) => (e.target.style.color = "#94A3B8")}
                >
                  <Twitter className="w-6 h-6" />
                </Link>
                <Link
                  href="#"
                  className="transition-colors"
                  style={{ color: "#94A3B8" }}
                  onMouseEnter={(e) => (e.target.style.color = "#0EA5E9")}
                  onMouseLeave={(e) => (e.target.style.color = "#94A3B8")}
                >
                  <Github className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center" style={{ borderColor: "#334155", color: "#94A3B8" }}>
            <p>
              &copy; {new Date().getFullYear()} Nomado. All rights reserved. Built with ❤️ for migrant workers in India.
            </p>
          </div>
        </div>
      </footer>

      {/* PWA Install Banner */}
      <PWAInstall />
    </div>
  )
}

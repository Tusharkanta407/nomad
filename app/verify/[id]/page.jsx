"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { QRScanner } from "@/components/qr-scanner"
import { CheckCircle, AlertCircle, Scan, Shield, Calendar, User, FileText, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function VerifyPage({ params }) {
  const [showScanner, setShowScanner] = useState(false)
  const [verificationData, setVerificationData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // Mock verification data
  const mockVerificationData = {
    "HC-2024-001": {
      id: "HC-2024-001",
      name: "Rajesh Kumar",
      cardType: "Health Card",
      status: "valid",
      issueDate: "15 Jan 2024",
      expiryDate: "15 Jan 2029",
      services: ["Emergency Care", "Outpatient", "Pharmacy", "Lab Tests"],
      verifiedAt: new Date().toLocaleString(),
    },
    "EC-2024-002": {
      id: "EC-2024-002",
      name: "Rajesh Kumar",
      cardType: "Education Certificate",
      status: "valid",
      issueDate: "20 Mar 2024",
      expiryDate: "Lifetime",
      services: ["10th Grade", "12th Grade", "Skill Certificate"],
      verifiedAt: new Date().toLocaleString(),
    },
  }

  useEffect(() => {
    if (params.id) {
      verifyDocument(params.id)
    }
  }, [params.id])

  const verifyDocument = async (documentId) => {
    setLoading(true)
    setError(null)

    // Simulate API call
    setTimeout(() => {
      const data = mockVerificationData[documentId]
      if (data) {
        setVerificationData(data)
      } else {
        setError("Document not found or invalid QR code")
      }
      setLoading(false)
    }, 1500)
  }

  const handleQRScan = (result) => {
    // Extract ID from scanned URL
    const match = result.match(/\/verify\/([^/]+)/)
    if (match) {
      const scannedId = match[1]
      verifyDocument(scannedId)
      setShowScanner(false)
    } else {
      setError("Invalid QR code format")
      setShowScanner(false)
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "valid":
        return "#22C55E"
      case "expired":
        return "#F59E0B"
      case "revoked":
        return "#EF4444"
      default:
        return "#64748B"
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case "valid":
        return <CheckCircle className="w-5 h-5" style={{ color: "#22C55E" }} />
      case "expired":
      case "revoked":
        return <AlertCircle className="w-5 h-5" style={{ color: "#EF4444" }} />
      default:
        return <FileText className="w-5 h-5" style={{ color: "#64748B" }} />
    }
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F9FAFB" }}>
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <div className="flex items-center space-x-2">
              <Shield className="w-6 h-6" style={{ color: "#0EA5E9" }} />
              <h1 className="text-xl font-bold" style={{ color: "#1E293B" }}>
                Document Verification
              </h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-2xl">
        {/* Scan QR Code Section */}
        {!verificationData && !loading && (
          <Card className="mb-8">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center space-x-2">
                <Scan className="w-6 h-6" style={{ color: "#0EA5E9" }} />
                <span style={{ color: "#1E293B" }}>Verify Document</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p style={{ color: "#64748B" }}>Scan the QR code on a digital document to verify its authenticity</p>
              <Button
                onClick={() => setShowScanner(true)}
                size="lg"
                className="text-white"
                style={{ backgroundColor: "#0EA5E9" }}
              >
                <Scan className="w-5 h-5 mr-2" />
                Scan QR Code
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Loading State */}
        {loading && (
          <Card>
            <CardContent className="text-center py-12">
              <div className="animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
              <p style={{ color: "#64748B" }}>Verifying document...</p>
            </CardContent>
          </Card>
        )}

        {/* Error State */}
        {error && (
          <Card>
            <CardContent className="text-center py-8">
              <AlertCircle className="w-12 h-12 mx-auto mb-4" style={{ color: "#EF4444" }} />
              <h3 className="text-lg font-semibold mb-2" style={{ color: "#1E293B" }}>
                Verification Failed
              </h3>
              <p className="mb-4" style={{ color: "#64748B" }}>
                {error}
              </p>
              <Button
                onClick={() => {
                  setError(null)
                  setShowScanner(true)
                }}
                variant="outline"
                style={{ borderColor: "#0EA5E9", color: "#0EA5E9" }}
              >
                Try Again
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Verification Result */}
        {verificationData && (
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  {getStatusIcon(verificationData.status)}
                  <span style={{ color: "#1E293B" }}>Document Verified</span>
                </CardTitle>
                <Badge style={{ backgroundColor: getStatusColor(verificationData.status), color: "white" }}>
                  {verificationData.status.toUpperCase()}
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Document Info */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <User className="w-4 h-4" style={{ color: "#64748B" }} />
                    <span className="text-sm font-medium" style={{ color: "#1E293B" }}>
                      Name
                    </span>
                  </div>
                  <p className="text-lg font-semibold" style={{ color: "#1E293B" }}>
                    {verificationData.name}
                  </p>
                </div>

                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <FileText className="w-4 h-4" style={{ color: "#64748B" }} />
                    <span className="text-sm font-medium" style={{ color: "#1E293B" }}>
                      Document Type
                    </span>
                  </div>
                  <p className="text-lg font-semibold" style={{ color: "#1E293B" }}>
                    {verificationData.cardType}
                  </p>
                </div>
              </div>

              {/* Dates */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <Calendar className="w-4 h-4" style={{ color: "#64748B" }} />
                    <span className="text-sm font-medium" style={{ color: "#1E293B" }}>
                      Issue Date
                    </span>
                  </div>
                  <p style={{ color: "#64748B" }}>{verificationData.issueDate}</p>
                </div>

                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <Calendar className="w-4 h-4" style={{ color: "#64748B" }} />
                    <span className="text-sm font-medium" style={{ color: "#1E293B" }}>
                      Expiry Date
                    </span>
                  </div>
                  <p style={{ color: "#64748B" }}>{verificationData.expiryDate}</p>
                </div>
              </div>

              {/* Services */}
              <div>
                <h4 className="text-sm font-medium mb-3" style={{ color: "#1E293B" }}>
                  Covered Services
                </h4>
                <div className="flex flex-wrap gap-2">
                  {verificationData.services.map((service, index) => (
                    <Badge key={index} variant="secondary" style={{ backgroundColor: "#F1F5F9", color: "#64748B" }}>
                      {service}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Verification Info */}
              <div className="border-t pt-4">
                <div className="flex items-center justify-between text-sm">
                  <span style={{ color: "#64748B" }}>Verified on Solana Blockchain</span>
                  <span style={{ color: "#64748B" }}>{verificationData.verifiedAt}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <Button
                  onClick={() => {
                    setVerificationData(null)
                    setShowScanner(true)
                  }}
                  className="flex-1 text-white"
                  style={{ backgroundColor: "#0EA5E9" }}
                >
                  Verify Another
                </Button>
                <Button
                  variant="outline"
                  onClick={() => window.print()}
                  style={{ borderColor: "#64748B", color: "#64748B" }}
                >
                  Print Report
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* QR Scanner Modal */}
      {showScanner && <QRScanner onScan={handleQRScan} onClose={() => setShowScanner(false)} />}
    </div>
  )
}

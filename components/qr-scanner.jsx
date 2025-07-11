"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Camera, X, CheckCircle, AlertCircle, Scan } from "lucide-react"

/**
 * QR Scanner Component
 * Provides QR code scanning functionality with camera access
 * @param {Object} props - Component props
 * @param {Function} props.onScan - Callback when QR code is scanned
 * @param {Function} props.onClose - Callback to close scanner
 */
export function QRScanner({ onScan, onClose }) {
  const [isScanning, setIsScanning] = useState(false)
  const [scanResult, setScanResult] = useState(null)
  const [error, setError] = useState(null)
  const videoRef = useRef(null)

  const startScanning = async () => {
    try {
      setIsScanning(true)
      setError(null)

      // Simulate camera access
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
      })

      if (videoRef.current) {
        videoRef.current.srcObject = stream
      }

      // Simulate QR code detection after 3 seconds
      setTimeout(() => {
        const mockQRData = "https://nomado.app/verify/HC-2024-001"
        setScanResult(mockQRData)
        setIsScanning(false)
        onScan?.(mockQRData)

        // Stop camera
        stream.getTracks().forEach((track) => track.stop())
      }, 3000)
    } catch (err) {
      setError("Camera access denied or not available")
      setIsScanning(false)
    }
  }

  const stopScanning = () => {
    setIsScanning(false)
    if (videoRef.current?.srcObject) {
      const stream = videoRef.current.srcObject
      stream.getTracks().forEach((track) => track.stop())
    }
  }

  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center space-x-2">
              <Scan className="w-5 h-5" style={{ color: "#0EA5E9" }} />
              <span style={{ color: "#1E293B" }}>QR Code Scanner</span>
            </CardTitle>
            {onClose && (
              <Button variant="ghost" size="sm" onClick={onClose}>
                <X className="w-5 h-5" />
              </Button>
            )}
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Camera View */}
          <div className="relative aspect-square bg-gray-900 rounded-lg overflow-hidden">
            {isScanning ? (
              <>
                <video ref={videoRef} autoPlay playsInline className="w-full h-full object-cover" />
                {/* Scanning Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 border-2 border-white rounded-lg relative">
                    <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-green-500 rounded-tl-lg"></div>
                    <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-green-500 rounded-tr-lg"></div>
                    <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-green-500 rounded-bl-lg"></div>
                    <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-green-500 rounded-br-lg"></div>

                    {/* Scanning Line */}
                    <div className="absolute inset-x-0 top-1/2 h-0.5 bg-green-500 animate-pulse"></div>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <p className="text-white text-sm">Position QR code within the frame</p>
                </div>
              </>
            ) : (
              <div className="flex items-center justify-center h-full">
                <div className="text-center text-gray-400">
                  <Camera className="w-16 h-16 mx-auto mb-4" />
                  <p>Camera preview will appear here</p>
                </div>
              </div>
            )}
          </div>

          {/* Status Messages */}
          {error && (
            <div className="flex items-center space-x-2 p-3 bg-red-50 rounded-lg">
              <AlertCircle className="w-5 h-5 text-red-500" />
              <span className="text-red-700 text-sm">{error}</span>
            </div>
          )}

          {scanResult && (
            <div className="space-y-3">
              <div className="flex items-center space-x-2 p-3 bg-green-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-green-700 text-sm">QR Code detected successfully!</span>
              </div>

              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-xs text-gray-500 mb-1">Scanned URL:</p>
                <code className="text-sm break-all">{scanResult}</code>
              </div>
            </div>
          )}

          {/* Controls */}
          <div className="flex gap-2">
            {!isScanning && !scanResult && (
              <Button onClick={startScanning} className="flex-1 text-white" style={{ backgroundColor: "#0EA5E9" }}>
                <Camera className="w-4 h-4 mr-2" />
                Start Scanning
              </Button>
            )}

            {isScanning && (
              <Button
                onClick={stopScanning}
                variant="outline"
                className="flex-1 bg-transparent"
                style={{ borderColor: "#EF4444", color: "#EF4444" }}
              >
                Stop Scanning
              </Button>
            )}

            {scanResult && (
              <Button
                onClick={() => {
                  setScanResult(null)
                  setError(null)
                }}
                className="flex-1 text-white"
                style={{ backgroundColor: "#0EA5E9" }}
              >
                Scan Another
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

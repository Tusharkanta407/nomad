"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Wallet, Copy, ExternalLink, CheckCircle, Info } from "lucide-react"
import { Tooltip } from "./tooltip"

export function WalletConnector({ onConnected }) {
  const [wallet, setWallet] = useState(null)
  const [connected, setConnected] = useState(false)
  const [connecting, setConnecting] = useState(false)
  const [publicKey, setPublicKey] = useState("")
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const checkPhantom = () => {
      if (window.solana && window.solana.isPhantom) {
        setWallet(window.solana)
        if (window.solana.isConnected && window.solana.publicKey) {
          const key = window.solana.publicKey.toString()
          setConnected(true)
          setPublicKey(key)
          onConnected?.(key)
        }
      }
    }

    if (typeof window !== "undefined") {
      checkPhantom()
      window.addEventListener("load", checkPhantom)
      return () => {
        window.removeEventListener("load", checkPhantom)
      }
    }
  }, [onConnected])

  const connectWallet = async () => {
    if (!wallet) {
      window.open("https://phantom.app/", "_blank")
      return
    }

    try {
      setConnecting(true)
      const response = await wallet.connect()
      const key = response.publicKey.toString()
      setConnected(true)
      setPublicKey(key)
      onConnected?.(key)
    } catch (error) {
      console.error("Failed to connect wallet:", error)
    } finally {
      setConnecting(false)
    }
  }

  const disconnectWallet = async () => {
    if (wallet) {
      try {
        await wallet.disconnect()
        setConnected(false)
        setPublicKey("")
        onConnected?.("") // Clear in parent too
      } catch (error) {
        console.error("Failed to disconnect wallet:", error)
      }
    }
  }

  const shortenAddress = (address) => {
    return `${address.slice(0, 4)}...${address.slice(-4)}`
  }

  const copyAddress = async () => {
    if (publicKey) {
      await navigator.clipboard.writeText(publicKey)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  if (!connected) {
    return (
      <div className="flex items-center space-x-2">
        <Tooltip
          content={
            wallet
              ? "Connect your Phantom wallet to access digital cards"
              : "Install Phantom wallet to get started"
          }
        >
          <Button
            onClick={connectWallet}
            disabled={connecting}
            size="sm"
            className="text-white transition-all duration-300 transform hover:scale-105"
            style={{ backgroundColor: "#0EA5E9" }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#0284C7")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#0EA5E9")}
          >
            <Wallet className="w-4 h-4 mr-2" />
            {connecting ? "Connecting..." : wallet ? "Connect" : "Install"}
          </Button>
        </Tooltip>

        {!wallet && (
          <Tooltip content="Phantom is a secure Solana wallet for Web3 applications">
            <Info className="w-4 h-4" style={{ color: "#64748B" }} />
          </Tooltip>
        )}
      </div>
    )
  }

  return (
    <div className="flex items-center space-x-2">
      <Tooltip content={`Connected: ${shortenAddress(publicKey)}`}>
        <div
          className="flex items-center space-x-2 px-3 py-1 rounded-lg"
          style={{ backgroundColor: "#F1F5F9" }}
        >
          <CheckCircle className="w-4 h-4" style={{ color: "#22C55E" }} />
          <span className="font-mono text-sm" style={{ color: "#1E293B" }}>
            {shortenAddress(publicKey)}
          </span>
        </div>
      </Tooltip>

      <Tooltip content="Copy wallet address">
        <Button variant="ghost" size="sm" onClick={copyAddress} className="h-8 w-8 p-0">
          {copied ? (
            <CheckCircle className="w-4 h-4" style={{ color: "#22C55E" }} />
          ) : (
            <Copy className="w-4 h-4" style={{ color: "#64748B" }} />
          )}
        </Button>
      </Tooltip>

      <Tooltip content="View your digital cards">
        <Button
          size="sm"
          className="text-white transition-colors"
          style={{ backgroundColor: "#0EA5E9" }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#0284C7")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#0EA5E9")}
        >
          <ExternalLink className="w-4 h-4 mr-1" />
          Cards
        </Button>
      </Tooltip>

      <Tooltip content="Disconnect wallet">
        <Button
          variant="ghost"
          size="sm"
          onClick={disconnectWallet}
          className="h-8 w-8 p-0 transition-colors"
          style={{ color: "#EF4444" }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#FEF2F2")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
        >
          <Wallet className="w-4 h-4" />
        </Button>
      </Tooltip>
    </div>
  )
}
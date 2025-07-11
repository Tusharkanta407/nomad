"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { Menu, X, Globe } from "lucide-react"
import { WalletConnector } from "./wallet-connector"

/**
 * Mobile Navigation Component
 * Provides a responsive off-canvas menu for smaller screens.
 */
export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const handleLinkClick = () => {
    setIsOpen(false) // Close the sheet when a link is clicked
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[250px] sm:w-[300px] flex flex-col">
        <div className="flex items-center justify-between pb-4 border-b">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#0EA5E9" }}>
              <Globe className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold" style={{ color: "#1E293B" }}>
              Nomado
            </span>
          </div>
          <SheetClose asChild>
            <Button variant="ghost" size="icon">
              <X className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </Button>
          </SheetClose>
        </div>
        <nav className="flex flex-col gap-4 py-6 flex-grow">
          <Link
            href="#features"
            className="text-lg font-medium transition-colors hover:text-blue-500"
            style={{ color: "#1E293B" }}
            onClick={handleLinkClick}
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="text-lg font-medium transition-colors hover:text-blue-500"
            style={{ color: "#1E293B" }}
            onClick={handleLinkClick}
          >
            How It Works
          </Link>
          <Link
            href="/verify/demo"
            className="text-lg font-medium transition-colors hover:text-blue-500"
            style={{ color: "#1E293B" }}
            onClick={handleLinkClick}
          >
            Verify
          </Link>
        </nav>
        <div className="mt-auto py-4 border-t">
          <WalletConnector />
        </div>
      </SheetContent>
    </Sheet>
  )
}

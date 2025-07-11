"use client"

import { useState, useRef, useEffect } from "react"

/**
 * Tooltip component for displaying contextual information
 * @param {Object} props - Component props
 * @param {string} props.content - The tooltip content to display
 * @param {React.ReactNode} props.children - The trigger element
 * @param {"top" | "bottom" | "left" | "right"} props.position - Tooltip position relative to trigger
 */
export function Tooltip({ content, children, position = "top" }) {
  const [isVisible, setIsVisible] = useState(false)
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 })
  const triggerRef = useRef(null)

  useEffect(() => {
    if (isVisible && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect()
      const scrollX = window.pageXOffset
      const scrollY = window.pageYOffset

      let x = 0
      let y = 0

      switch (position) {
        case "top":
          x = rect.left + scrollX + rect.width / 2
          y = rect.top + scrollY - 10
          break
        case "bottom":
          x = rect.left + scrollX + rect.width / 2
          y = rect.bottom + scrollY + 10
          break
        case "left":
          x = rect.left + scrollX - 10
          y = rect.top + scrollY + rect.height / 2
          break
        case "right":
          x = rect.right + scrollX + 10
          y = rect.top + scrollY + rect.height / 2
          break
      }

      setTooltipPosition({ x, y })
    }
  }, [isVisible, position])

  return (
    <>
      <div
        ref={triggerRef}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        className="inline-block"
      >
        {children}
      </div>
      {isVisible && (
        <div
          className="fixed z-50 px-2 py-1 text-xs text-white bg-gray-900 rounded shadow-lg pointer-events-none"
          style={{
            left: tooltipPosition.x,
            top: tooltipPosition.y,
            transform:
              position === "top" || position === "bottom"
                ? "translateX(-50%)"
                : position === "left"
                  ? "translateX(-100%)"
                  : "translateY(-50%)",
          }}
        >
          {content}
          <div
            className="absolute w-2 h-2 bg-gray-900 transform rotate-45"
            style={{
              [position === "top" ? "bottom" : position === "bottom" ? "top" : position === "left" ? "right" : "left"]:
                "-4px",
              [position === "top" || position === "bottom" ? "left" : "top"]: "50%",
              transform:
                position === "top" || position === "bottom"
                  ? "translateX(-50%) rotate(45deg)"
                  : "translateY(-50%) rotate(45deg)",
            }}
          />
        </div>
      )}
    </>
  )
}

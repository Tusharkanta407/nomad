import "./globals.css"

export const metadata = {
  title: "Nomado - Digital Documents for Migrant Workers",
  description:
    "Secure, portable digital versions of health, ration, education, and welfare cards using Solana blockchain and IPFS",
  keywords: ["blockchain", "migrant workers", "digital documents", "Solana", "IPFS", "India"],
  authors: [{ name: "Nomado Team" }],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#0EA5E9",
  manifest: "/manifest.json",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}

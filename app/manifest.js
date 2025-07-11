export default function manifest() {
  return {
    name: "Nomado - Digital Documents for Migrant Workers",
    short_name: "Nomado",
    description:
      "Secure, portable digital versions of health, ration, education, and welfare cards using Solana blockchain and IPFS",
    start_url: "/",
    display: "standalone",
    background_color: "#F9FAFB",
    theme_color: "#0EA5E9",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    categories: ["productivity", "utilities", "finance"],
    lang: "en",
    orientation: "portrait-primary",
  }
}

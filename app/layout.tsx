import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import "../styles/bounce-small.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "IVIStore - Cursos Online de Qualidade",
  description:
    "Aprenda com os melhores cursos online. Desenvolva novas habilidades e impulsione sua carreira com especialistas da indústria.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/ivi-hexagono-gradiente.png",
        type: "image/png",
      },
      {
        url: "/ivi-hexagono-gradiente.png",
        type: "image/png",
      },
      {
        url: "/ivi-hexagono-gradiente.png",
        type: "image/png",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

"use client"

import React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Bell, Mail, Sparkles, ShoppingBag, Gift, Zap } from "lucide-react"
import Image from "next/image"

export default function Home() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [displayText, setDisplayText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [particles, setParticles] = useState<Array<{ width: number; height: number; left: number; top: number; delay: number; duration: number }>>([])
  const fullText = "Estamos preparando algo incrível para você..."
  
  // Gerar partículas apenas no cliente
  useEffect(() => {
    setParticles(
      [...Array(20)].map(() => ({
        width: Math.random() * 10 + 5,
        height: Math.random() * 10 + 5,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 2,
        duration: Math.random() * 3 + 2,
      }))
    )
  }, [])

  // Efeito de digitação
  useEffect(() => {
    if (isTyping && displayText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length + 1))
      }, 50)
      return () => clearTimeout(timeout)
    } else if (displayText.length === fullText.length) {
      setIsTyping(false)
    }
  }, [displayText, isTyping])

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail("")
    }
  }

  const features = [
    { icon: ShoppingBag, title: "Materiais Exclusivos", description: "Recursos premium para acelerar seu aprendizado" },
    { icon: Gift, title: "Ofertas Especiais", description: "Descontos exclusivos para membros da comunidade" },
    { icon: Zap, title: "Acesso Antecipado", description: "Seja o primeiro a conhecer novos produtos" },
  ]

  return (
    <div className="min-h-screen bg-linear-to-br from-background via-background to-secondary/10 relative overflow-hidden">
      {/* Partículas animadas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary/20 animate-pulse"
            style={{
              width: particle.width + "px",
              height: particle.height + "px",
              left: particle.left + "%",
              top: particle.top + "%",
              animationDelay: particle.delay + "s",
              animationDuration: particle.duration + "s",
            }}
          />
        ))}
      </div>

      {/* Formas geométricas decorativas */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "0.5s" }} />

      

      {/* Conteúdo principal */}
      <main className="relative z-10 flex flex-col items-center justify-center px-4 py-12 min-h-[80vh]">
        {/* Logo animada */}
        <div className="mb-8 relative">
          <div className="absolute inset-0 bg-linear-to-r from-primary to-secondary rounded-full blur-2xl opacity-30 animate-pulse" />
          <div className="relative bg-linear-to-br from-primary/20 to-secondary/20 p-8 rounded-full border border-primary/30">
            <Image
              src="/ivi-hexagono-gradiente.png"
              alt="IVI"
              width={120}
              height={120}
              className="animate-bounce-small"
              style={{ animationDuration: "3s" }}
            />
          </div>
        </div>

        {/* Badge */}
        <div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 border border-primary/20">
          <Sparkles className="h-4 w-4" />
          <span className="text-sm font-medium">Em Breve</span>
        </div>

        {/* Título */}
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 bg-linear-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
          IVI STORE
        </h1>

        {/* Texto com efeito de digitação */}
        <p className="text-lg md:text-xl text-muted-foreground text-center mb-8 h-8">
          {displayText}
          {isTyping && <span className="inline-block w-0.5 h-5 bg-primary ml-1 animate-pulse" />}
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 text-center hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-linear-to-br from-primary to-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Formulário de inscrição
        <div className="w-full max-w-md">
          {!isSubscribed ? (
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Bell className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Seja notificado no lançamento</h3>
                </div>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="email"
                      placeholder="Seu melhor email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                  <Button type="submit" className="bg-linear-to-r from-primary to-secondary hover:opacity-90">
                    Inscrever
                  </Button>
                </div>
              </div>
            </form>
          ) : (
            <div className="bg-linear-to-r from-primary/10 to-secondary/10 border border-primary/30 rounded-xl p-6 text-center">
              <Sparkles className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold text-lg mb-1">Pronto!</h3>
              <p className="text-muted-foreground">Você será notificado quando estivermos disponíveis.</p>
            </div>
          )}
        </div> */}
      </main>

      {/* Footer simples */}
      <footer className="relative z-10 text-center py-6 text-sm text-muted-foreground">
        <p>IVI Data Science - Transformando dados em conhecimento</p>
      </footer>
    </div>
  )
}

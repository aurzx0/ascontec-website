"use client"

import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import { MessageCircle, ArrowRight, ShieldCheck } from "lucide-react"

// O fundo 3D depende de WebGL e de valores aleatórios, então só é
// renderizado no cliente para evitar SSR e incompatibilidade de hidratação.
const Hero3DBackground = dynamic(
  () => import("./hero-3d-background").then((m) => m.Hero3DBackground),
  { ssr: false },
)

const WHATSAPP_URL =
  "https://wa.me/558299923184?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20contador%20da%20ASCONTEC."

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-background pt-16"
    >
      <Hero3DBackground />

      <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur"
          >
            <ShieldCheck className="h-4 w-4 text-primary" />
            Assessoria Contábil em Maceió — AL
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-balance font-serif text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Mais de 30 anos levando{" "}
            <span className="text-primary">segurança, clareza</span> e estratégia
            para a sua empresa.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground"
          >
            Soluções contábeis e assessoria técnica especializada em Maceió para
            fazer seu negócio crescer com tranquilidade.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-brand-bright hover:shadow-xl hover:shadow-primary/25"
            >
              <MessageCircle className="h-5 w-5" />
              Falar com um Contador no WhatsApp
            </a>
            <a
              href="#servicos"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background/60 px-6 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:border-primary hover:text-primary"
            >
              Conheça nossos serviços
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

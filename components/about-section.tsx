"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Target, Eye, Gem, Check } from "lucide-react"
import { Reveal } from "./reveal"
import { cn } from "@/lib/utils"

const tabs = [
  {
    id: "missao",
    label: "Missão",
    icon: Target,
    content:
      "Fornecer serviços de qualidade, precisão e confiabilidade para ajudar nossos clientes a alcançar o sucesso financeiro.",
  },
  {
    id: "visao",
    label: "Visão",
    icon: Eye,
    content:
      "Ser referência pela excelência em serviços contábeis, confiança, ética profissional e colaboração.",
  },
  {
    id: "valores",
    label: "Valores",
    icon: Gem,
    values: [
      "Integridade",
      "Excelência",
      "Parceria",
      "Responsabilidade",
      "Inovação",
      "Orientação ao Cliente",
    ],
  },
] as const

export function AboutSection() {
  const [active, setActive] = useState<string>("missao")
  const current = tabs.find((t) => t.id === active)!

  return (
    <section id="sobre" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Quem somos
          </span>
          <h2 className="mt-3 text-balance font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Princípios que guiam o nosso trabalho
          </h2>
        </Reveal>

        <Reveal className="mt-12" delay={0.1}>
          <div className="mx-auto mb-8 flex max-w-md items-center justify-center gap-2 rounded-full border border-border bg-secondary/60 p-1.5">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActive(tab.id)}
                className={cn(
                  "relative flex-1 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors",
                  active === tab.id
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {active === tab.id && (
                  <motion.span
                    layoutId="about-tab-pill"
                    className="absolute inset-0 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative flex items-center justify-center gap-1.5">
                  <tab.icon className="h-4 w-4" />
                  {tab.label}
                </span>
              </button>
            ))}
          </div>

          <div className="rounded-3xl border border-border bg-card p-8 shadow-sm sm:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-primary">
                  <current.icon className="h-7 w-7" />
                </span>
                {"content" in current && current.content ? (
                  <p className="mt-6 text-pretty text-xl font-medium leading-relaxed text-foreground">
                    {current.content}
                  </p>
                ) : (
                  <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {current.values?.map((v) => (
                      <li
                        key={v}
                        className="flex items-center gap-3 rounded-xl bg-secondary/60 px-4 py-3 text-foreground"
                      >
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        <span className="font-medium">{v}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

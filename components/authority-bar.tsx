"use client"

import { MapPin, Star, Award } from "lucide-react"
import { RevealGroup, fadeUp } from "./reveal"
import { motion } from "framer-motion"

const items = [
  {
    icon: Award,
    title: "+30 Anos de Tradição",
    desc: "Experiência consolidada no mercado contábil.",
  },
  {
    icon: MapPin,
    title: "Localização de Prestígio",
    desc: "No coração do Centro de Maceió.",
  },
  {
    icon: Star,
    title: "Avaliação 4.5 Estrelas",
    desc: "Reconhecimento de clientes no Google.",
  },
]

export function AuthorityBar() {
  return (
    <section className="relative z-10 -mt-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <RevealGroup className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {items.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="flex items-start gap-4 rounded-2xl border border-border bg-card/90 p-6 shadow-lg shadow-foreground/5 backdrop-blur transition-transform hover:-translate-y-1"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
                <item.icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-base font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}

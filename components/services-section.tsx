"use client"

import {
  Calculator,
  Receipt,
  TrendingUp,
  Users,
  ScrollText,
  Building2,
} from "lucide-react"
import { motion } from "framer-motion"
import { Reveal, RevealGroup, fadeUp } from "./reveal"

const services = [
  {
    icon: Calculator,
    title: "Contabilidade Geral",
    desc: "Escrituração completa e demonstrações financeiras precisas para a sua empresa.",
  },
  {
    icon: Receipt,
    title: "Fiscal e Tributário",
    desc: "Apuração de impostos e obrigações acessórias sempre em dia e sem riscos.",
  },
  {
    icon: TrendingUp,
    title: "Consultoria Financeira",
    desc: "Análises estratégicas para decisões seguras e crescimento sustentável.",
  },
  {
    icon: Users,
    title: "Departamento Pessoal",
    desc: "Folha de pagamento, admissões e rotinas trabalhistas com total conformidade.",
  },
  {
    icon: ScrollText,
    title: "Planejamento Tributário",
    desc: "Escolha do melhor regime para reduzir a carga tributária de forma legal.",
  },
  {
    icon: Building2,
    title: "Departamento Societário",
    desc: "Abertura, alterações e baixa de empresas com agilidade e segurança.",
  },
]

export function ServicesSection() {
  return (
    <section id="servicos" className="relative bg-secondary/40 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            O que fazemos
          </span>
          <h2 className="mt-3 text-balance font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Nossos Serviços
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Uma estrutura completa para cuidar de cada detalhe contábil do seu
            negócio.
          </p>
        </Reveal>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-xl hover:shadow-foreground/5"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <s.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}

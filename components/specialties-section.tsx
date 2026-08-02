"use client"

import { useEffect, useState } from "react"
import {
  Stethoscope,
  Beef,
  ScrollText,
  TrendingUp,
  Building2,
  Users,
  ArrowUpRight,
  X,
  Check,
  type LucideIcon,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Reveal, RevealGroup, fadeUp } from "./reveal"

type Specialty = {
  id: string
  icon: LucideIcon
  tag: string
  title: string
  desc: string
  full: string
  benefits: string[]
}

const specialties: Specialty[] = [
  {
    id: "medicos",
    icon: Stethoscope,
    tag: "Saúde",
    title: "Para Médicos e Clínicas",
    desc: "Organização financeira, economia tributária e mais tempo para focar nos seus pacientes.",
    full: "Profissionais da saúde perdem dinheiro todos os meses por causa de erros simples na gestão financeira e na escolha errada do regime tributário. Na ASCONTEC, cuidamos de toda a rotina contábil da sua clínica ou consultório: enquadramento correto como PJ, apuração de impostos, emissão de guias, folha da equipe e conciliação dos recebimentos de convênios e particulares. Assim, você reduz a carga tributária de forma 100% legal, ganha previsibilidade de caixa e recupera o tempo que hoje é gasto com burocracia — para dedicá-lo a quem realmente importa: os seus pacientes.",
    benefits: [
      "Enquadramento tributário ideal para PJ da saúde",
      "Controle de recebimentos de convênios e particulares",
      "Redução legal da carga de impostos",
      "Folha de pagamento da equipe em conformidade",
    ],
  },
  {
    id: "acougues",
    icon: Beef,
    tag: "Varejo",
    title: "Para Açougues e Varejo",
    desc: "Controle de custos, combate ao desperdício e o melhor regime tributário para lucrar mais.",
    full: "No varejo e no setor de carnes, a margem é apertada e cada centavo conta. Um controle contábil frouxo significa desperdício, estoque mal dimensionado e impostos pagos a mais. A ASCONTEC ajuda o seu açougue ou comércio a enxergar com clareza os custos reais, precificar corretamente, escolher entre Simples Nacional, Lucro Presumido ou Real e manter as obrigações fiscais rigorosamente em dia. O resultado é um negócio mais lucrativo, com decisões baseadas em números confiáveis e sem sustos com o fisco.",
    benefits: [
      "Análise de custos e precificação de produtos",
      "Escolha do regime tributário mais econômico",
      "Redução de desperdícios e perdas",
      "Obrigações fiscais sempre em dia",
    ],
  },
  {
    id: "tributario",
    icon: ScrollText,
    tag: "Economia",
    title: "Planejamento Tributário",
    desc: "Pague menos impostos de forma legal com o regime certo para o seu negócio.",
    full: "A maioria das empresas paga mais impostos do que deveria simplesmente por estar no regime errado. Fazemos um diagnóstico completo da sua operação e simulamos os cenários de Simples Nacional, Lucro Presumido e Lucro Real para identificar, com base em números, qual estrutura reduz legalmente a sua carga tributária. Acompanhamos as mudanças na legislação ao longo do ano e ajustamos a estratégia sempre que necessário, garantindo economia contínua e segurança jurídica para a sua empresa crescer.",
    benefits: [
      "Simulação comparativa entre regimes tributários",
      "Economia legal e recorrente de impostos",
      "Acompanhamento das mudanças na legislação",
      "Segurança jurídica em cada decisão",
    ],
  },
  {
    id: "financeiro",
    icon: TrendingUp,
    tag: "Gestão",
    title: "Gestão e Fluxo de Caixa",
    desc: "Relatórios claros para decisões seguras e crescimento sustentável.",
    full: "Não dá para crescer sem saber exatamente para onde o dinheiro está indo. Transformamos os números da sua empresa em relatórios gerenciais claros e objetivos: fluxo de caixa, ponto de equilíbrio, indicadores de lucratividade e projeções. Com essas informações em mãos, você deixa de decidir no escuro e passa a planejar investimentos, contratações e expansões com total segurança. Nossa equipe atua como uma verdadeira parceira estratégica na tomada de decisões do seu negócio.",
    benefits: [
      "Relatórios gerenciais de fácil leitura",
      "Controle de fluxo de caixa e ponto de equilíbrio",
      "Indicadores de lucratividade do negócio",
      "Apoio estratégico na tomada de decisão",
    ],
  },
  {
    id: "societario",
    icon: Building2,
    tag: "Empresarial",
    title: "Abertura e Regularização",
    desc: "Abra, altere ou regularize sua empresa com agilidade e sem dor de cabeça.",
    full: "Abrir uma empresa ou regularizar a situação da atual pode ser um labirinto de exigências, prazos e órgãos diferentes. A ASCONTEC conduz todo o processo por você: definição do tipo societário, registro na Junta Comercial, inscrições municipais e estaduais, alvarás e alterações contratuais. Cuidamos da burocracia com agilidade e precisão, para que você comece a operar — ou volte à regularidade — no menor tempo possível, com toda a documentação correta.",
    benefits: [
      "Abertura completa de empresas (CNPJ)",
      "Alterações e baixas societárias",
      "Inscrições, alvarás e licenças",
      "Regularização de pendências fiscais",
    ],
  },
  {
    id: "pessoal",
    icon: Users,
    tag: "Trabalhista",
    title: "Departamento Pessoal",
    desc: "Folha de pagamento, admissões e rotinas trabalhistas em total conformidade.",
    full: "Erros na folha de pagamento e no cumprimento das obrigações trabalhistas geram multas e passivos que podem comprometer o futuro da empresa. Assumimos toda a gestão do seu departamento pessoal: admissões e demissões, cálculo de folha, férias, 13º, eSocial, guias de INSS e FGTS e demais rotinas. Sua equipe fica em dia com a legislação e você elimina riscos trabalhistas, com a tranquilidade de saber que cada detalhe está sendo tratado por especialistas.",
    benefits: [
      "Admissões, demissões e folha de pagamento",
      "Férias, 13º e envio do eSocial",
      "Guias de INSS e FGTS em dia",
      "Eliminação de riscos trabalhistas",
    ],
  },
]

export function SpecialtiesSection() {
  const [activeId, setActiveId] = useState<string | null>(null)
  const active = specialties.find((s) => s.id === activeId) ?? null

  // Trava o scroll do body enquanto um card está expandido.
  useEffect(() => {
    if (active) {
      const prev = document.body.style.overflow
      document.body.style.overflow = "hidden"
      return () => {
        document.body.style.overflow = prev
      }
    }
  }, [active])

  // Fecha com a tecla Escape.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setActiveId(null)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  return (
    <section id="especialidades" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Como ajudamos a sua empresa
          </span>
          <h2 className="mt-3 text-balance font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Contabilidade especializada, feita para o seu negócio
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Clique em qualquer card para ver, em detalhes, como transformamos a
            rotina contábil da sua empresa em segurança, economia e crescimento.
          </p>
        </Reveal>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {specialties.map((s) => (
            <motion.button
              key={s.id}
              type="button"
              onClick={() => setActiveId(s.id)}
              layoutId={`card-${s.id}`}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card p-8 text-left shadow-sm transition-shadow hover:shadow-2xl hover:shadow-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <div className="flex items-center justify-between">
                <motion.span
                  layoutId={`icon-${s.id}`}
                  className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
                >
                  <s.icon className="h-7 w-7" />
                </motion.span>
                <span className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
                  {s.tag}
                </span>
              </div>
              <motion.h3
                layoutId={`title-${s.id}`}
                className="mt-6 text-2xl font-bold text-foreground"
              >
                {s.title}
              </motion.h3>
              <p className="mt-3 flex-1 text-pretty leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                Ver como ajudamos
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
              <span className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
            </motion.button>
          ))}
        </RevealGroup>
      </div>

      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 z-[90] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveId(null)}
              className="absolute inset-0 bg-foreground/60 backdrop-blur-sm"
            />
            <motion.div
              layoutId={`card-${active.id}`}
              className="relative z-10 max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-border bg-card p-8 shadow-2xl sm:p-10"
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
            >
              <button
                type="button"
                onClick={() => setActiveId(null)}
                aria-label="Fechar"
                className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-4">
                <motion.span
                  layoutId={`icon-${active.id}`}
                  className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground"
                >
                  <active.icon className="h-8 w-8" />
                </motion.span>
                <span className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
                  {active.tag}
                </span>
              </div>

              <motion.h3
                layoutId={`title-${active.id}`}
                className="mt-6 font-serif text-3xl font-bold text-foreground"
              >
                {active.title}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.4 }}
                className="mt-4 text-pretty leading-relaxed text-muted-foreground"
              >
                {active.full}
              </motion.p>

              <motion.ul
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { transition: { delayChildren: 0.25, staggerChildren: 0.08 } },
                }}
                className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2"
              >
                {active.benefits.map((b) => (
                  <motion.li
                    key={b}
                    variants={fadeUp}
                    className="flex items-start gap-3 rounded-xl bg-secondary/60 px-4 py-3"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm font-medium text-foreground">{b}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.a
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                href="https://wa.me/558299923184?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20como%20a%20ASCONTEC%20pode%20ajudar%20a%20minha%20empresa."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-brand-bright hover:shadow-xl"
              >
                Falar com um especialista
                <ArrowUpRight className="h-4 w-4" />
              </motion.a>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}

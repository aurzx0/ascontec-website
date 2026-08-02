"use client"

import { Phone, Mail, MapPin, Clock, AtSign, MessageCircle } from "lucide-react"
import { Reveal } from "./reveal"
import { ContactForm } from "./contact-form"

const WHATSAPP_URL =
  "https://wa.me/558299923184?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20contador%20da%20ASCONTEC."

const phones = ["(82) 9992-3184"]
const emails = ["contabilidade@ascontec.cnt.br", "hguedes@ascontec.cnt.br"]

export function SiteFooter() {
  return (
    <footer id="contato" className="border-t border-border bg-secondary/40">
      {/* CTA band */}
      <div className="px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto -mt-px max-w-6xl">
          <div className="my-16 flex flex-col items-center gap-6 rounded-3xl bg-primary px-8 py-12 text-center text-primary-foreground shadow-xl shadow-primary/20 sm:py-14">
            <h2 className="max-w-2xl text-balance font-serif text-3xl font-bold sm:text-4xl">
              Pronto para cuidar da sua empresa com tranquilidade?
            </h2>
            <p className="max-w-xl text-pretty leading-relaxed text-primary-foreground/85">
              Fale agora com um dos nossos contadores e descubra como podemos
              simplificar a sua rotina fiscal.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3.5 text-sm font-semibold text-primary shadow-lg transition-transform hover:scale-105"
            >
              <MessageCircle className="h-5 w-5" />
              Falar com um Contador
            </a>
          </div>
        </Reveal>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
        <Reveal className="mb-16">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-sm sm:p-10">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-balance font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Envie sua mensagem
              </h2>
              <p className="mt-3 text-pretty text-muted-foreground">
                Preencha o formulário abaixo e nossa equipe retornará o contato o
                mais breve possível.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Identidade */}
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
                A
              </span>
              <span className="font-serif text-xl font-bold tracking-tight text-foreground">
                ASCONTEC
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Segurança, clareza e estratégia contábil para o seu negócio há
              mais de 30 anos.
            </p>
            <a
              href="https://instagram.com/ascontecmaceio"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-brand-bright"
            >
              <AtSign className="h-4 w-4" />
              ascontecmaceio
            </a>
          </div>

          {/* Contatos */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Contato
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {phones.map((p) => (
                <li key={p} className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 shrink-0 text-primary" />
                  <a href={`tel:+55${p.replace(/\D/g, "")}`} className="hover:text-primary">
                    {p}
                  </a>
                </li>
              ))}
              {emails.map((e) => (
                <li key={e} className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4 shrink-0 text-primary" />
                  <a href={`mailto:${e}`} className="break-all hover:text-primary">
                    {e}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Localização */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Localização
            </h3>
            <div className="mt-4 flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <p>
                Rua do Imperador, 369, Centro — Maceió, AL
                <br />
                <span className="text-muted-foreground/80">
                  Galeria Elizeu Teixeira
                </span>
              </p>
            </div>
          </div>

          {/* Horários */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Horários
            </h3>
            <div className="mt-4 space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <p>
                  Seg a Sex: <span className="text-foreground">08h às 18h</span>
                </p>
              </div>
              <p className="pl-7">Sáb, Dom e Feriados: Fechado</p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} ASCONTEC — Assessoria Contábil. Todos os
          direitos reservados.
        </div>
      </div>
    </footer>
  )
}

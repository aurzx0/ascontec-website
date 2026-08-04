"use client"

import { useState, type FormEvent } from "react"
import { Loader2, Send } from "lucide-react"
import { createSupabaseClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type FormState = {
  nome: string
  email: string
  telefone: string
  mensagem: string
}

const initialForm: FormState = {
  nome: "",
  email: "",
  telefone: "",
  mensagem: "",
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [loading, setLoading] = useState(false)
  const [honeypot, setHoneypot] = useState("") 
  
  const [feedback, setFeedback] = useState<{
    type: "success" | "error"
    message: string
  } | null>(null)

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setFeedback(null)

    // 1. TRAVA DA ARMADILHA CONTRA BOTS (Honeypot)
    if (honeypot !== "") {
      console.log("Spam detectado e bloqueado pela armadilha Honeypot!")
      setFeedback({
        type: "success",
        message: "Mensagem enviada com sucesso! Entraremos em contato em breve."
      })
      setForm(initialForm)
      setHoneypot("")
      return
    }

    // 2. VALIDAÇÃO DE TAMANHO DE CARACTERES (Proteção contra Payload Gigante)
    if (form.nome.length > 100 || form.email.length > 150 || form.telefone.length > 20 || form.mensagem.length > 1000) {
      setFeedback({
        type: "error",
        message: "Os campos excedem o limite máximo de caracteres permitidos."
      })
      return
    }

    setLoading(true)

    try {
      const supabase = createSupabaseClient()
      
      const { error } = await supabase.from("contatos").insert([
        {
          nome: (form.nome || "").trim(),
          email: (form.email || "").trim(),
          telefone: (form.telefone || "").trim(),
          mensagem: (form.mensagem || "").trim(),
        }
      ])
    
      if (error) throw error
    
      setForm(initialForm)
      setFeedback({
        type: "success",
        message: "Mensagem enviada com sucesso! Entraremos em contato em breve."
      })
    } catch (err) {
      console.error("Erro detalhado do Supabase:", err)
      
      setFeedback({
        type: "error",
        message: "Não foi possível enviar sua mensagem. Tente novamente em instantes."
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      
      {/* CAMPO INVISÍVEL (ARMADILHA DE SPAM) */}
      <div style={{ display: 'none' }} aria-hidden="true">
        <label htmlFor="bot-field">Não preencha este campo se você for humano:</label>
        <input
          type="text"
          id="bot-field"
          name="bot-field"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="nome" className="text-sm font-medium text-foreground">
            Nome
          </label>
          <input
            id="nome"
            name="nome"
            type="text"
            required
            maxLength={100}
            value={form.nome}
            onChange={handleChange}
            placeholder="Seu nome completo"
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={150}
            value={form.email}
            onChange={handleChange}
            placeholder="seu@email.com"
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="telefone" className="text-sm font-medium text-foreground">
          Telefone
        </label>
        <input
          id="telefone"
          name="telefone"
          type="tel"
          required
          maxLength={20}
          value={form.telefone}
          onChange={handleChange}
          placeholder="(82) 99999-9999"
          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="mensagem" className="text-sm font-medium text-foreground">
          Mensagem
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          required
          rows={5}
          maxLength={1000}
          value={form.mensagem}
          onChange={handleChange}
          placeholder="Como podemos ajudar?"
          className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>

      {feedback && (
        <p
          role="status"
          className={cn(
            "rounded-xl px-4 py-3 text-sm",
            feedback.type === "success"
              ? "bg-primary/10 text-primary"
              : "bg-destructive/10 text-destructive",
          )}
        >
          {feedback.message}
        </p>
      )}

      <Button
        type="submit"
        disabled={loading}
        className="h-11 w-full rounded-full text-sm font-semibold sm:w-auto sm:px-8"
      >
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Enviar mensagem
          </>
        )}
      </Button>
    </form>
  )
}
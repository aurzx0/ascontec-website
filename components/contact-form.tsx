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
    setLoading(true)
    setFeedback(null)

    try {
      const supabase = createSupabaseClient()
      
      // Note os colchetes [ ] abraçando o objeto
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
      // Isso vai mostrar o erro exato no F12 caso algo dê errado no futuro
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

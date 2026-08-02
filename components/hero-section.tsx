import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageSquare, ArrowRight, ShieldCheck } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative pt-6 pb-12 md:pt-10 md:pb-20 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          
          {/* Tag / Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-medium text-slate-600 mb-6">
            <ShieldCheck className="w-4 h-4 text-red-700" />
            <span>Assessoria Contábil em Maceió — AL</span>
          </div>

          {/* Título Principal */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-slate-900 leading-[1.15] mb-6 tracking-tight">
            Mais de 30 anos levando{" "}
            <span className="text-red-800">segurança, clareza</span> e estratégia para a sua empresa.
          </h1>

          {/* Subtítulo */}
          <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-2xl leading-relaxed">
            Soluções contábeis e assessoria técnica especializada em Maceió para fazer seu negócio crescer com tranquilidade.
          </p>

          {/* Botões de Ação */}
          <div className="flex flex-wrap items-center gap-4">
            <Button size="lg" asChild className="bg-red-800 hover:bg-red-900 text-white rounded-full px-6 py-6 gap-2 text-base shadow-md shadow-red-900/10">
              <Link href="https://wa.me/5582999999999" target="_blank" rel="noopener noreferrer">
                <MessageSquare className="w-5 h-5" />
                Falar com um Contador no WhatsApp
              </Link>
            </Button>
            
            <Button variant="outline" size="lg" asChild> className="rounded-full px-6 py-6 gap-2 text-base border-slate-300 text-slate-700 hover:bg-slate-50">
              <Link href="#servicos">
                Conheça nossos serviços
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

        </div>
      </div>
    </section>
  )
}

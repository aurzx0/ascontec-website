import Link from "next/link"
import { MessageSquare, ArrowRight, ShieldCheck } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative pt-6 pb-16 md:pt-10 md:pb-20 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          
          {/* Tag / Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-medium text-slate-600 mb-6">
            <ShieldCheck className="w-4 h-4 text-red-700 shrink-0" />
            <span>Assessoria Contábil em Maceió — AL</span>
          </div>

          {/* Título Principal */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-slate-900 leading-[1.15] mb-6 tracking-tight">
            Mais de 30 anos levando{" "}
            <span className="text-red-800">segurança, clareza</span> e estratégia para a sua empresa.
          </h1>

          {/* Subtítulo */}
          <p className="text-base sm:text-xl text-slate-600 mb-8 max-w-2xl leading-relaxed">
            Soluções contábeis e assessoria técnica especializada em Maceió para fazer seu negócio crescer com tranquilidade.
          </p>

          {/* Botões de Ação - Ajustados para empilhar com segurança no mobile */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full">
            <Link
              href="https://wa.me/5582999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-red-800 hover:bg-red-900 text-white font-medium rounded-full px-5 py-3.5 gap-2 text-sm sm:text-base shadow-md shadow-red-900/10 transition-colors w-full sm:w-auto text-center"
            >
              <MessageSquare className="w-5 h-5 shrink-0" />
              <span>Falar com um Contador no WhatsApp</span>
            </Link>

            <Link
              href="#servicos"
              className="inline-flex items-center justify-center border border-slate-300 text-slate-700 hover:bg-slate-50 font-medium rounded-full px-5 py-3.5 gap-2 text-sm sm:text-base transition-colors w-full sm:w-auto text-center"
            >
              <span>Conheça nossos serviços</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
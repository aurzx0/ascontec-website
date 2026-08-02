import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MessageSquare, LogIn } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        
        {/* Logo e Nome da Marca - Atualizado para incluir o texto de volta */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image 
            src="/logo.png" // Assumindo que este é o arquivo do ícone (a vela vermelha)
            alt="Ícone Ascontec" 
            width={40} 
            height={40} 
            className="h-10 w-auto object-contain"
            priority 
          />
          {/* Este é o texto que trouxemos de volta, com formatação para não encavalar */}
          <span className="text-2xl font-bold text-slate-800 tracking-tight hidden sm:inline whitespace-nowrap">
            ASCONTEC
          </span>
        </Link>

        {/* Links do Menu - Com espaçamento dinâmico e mx-auto para centralizar */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-slate-700 mx-auto">
          <Link href="#especialidades" className="hover:text-red-700 transition-colors whitespace-nowrap">
            Especialidades
          </Link>
          <Link href="#servicos" className="hover:text-red-700 transition-colors whitespace-nowrap">
            Serviços
          </Link>
          <Link href="#sobre" className="hover:text-red-700 transition-colors whitespace-nowrap">
            Sobre
          </Link>
          <Link href="#contato" className="hover:text-red-700 transition-colors whitespace-nowrap">
            Contato
          </Link>
        </nav>

        {/* Botões de Ação */}
        <div className="flex items-center gap-3 shrink-0">
          <Button variant="outline" size="sm" className="hidden lg:inline-flex rounded-full gap-2 border-slate-300 text-slate-700">
            <LogIn className="w-4 h-4" />
            Área do Cliente
          </Button>
          <Button size="sm" className="bg-red-800 hover:bg-red-900 text-white rounded-full gap-2 px-4">
            <MessageSquare className="w-4 h-4" />
            <span className="hidden sm:inline">Falar com Contador</span>
            <span className="sm:hidden">Contato</span>
          </Button>
        </div>

      </div>
    </header>
  )
}
import { MapPin, MessageCircle } from "lucide-react"

export function ContactLocation() {
  // 1. Coloque o número do seu tio aqui (DDD + Número, sem espaços ou traços)
  const whatsappNumber = "5582999923184"
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços da Ascontec.")
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <section className="w-full py-16 bg-slate-900 text-white"> 
      {/* Nota: Troque o bg-slate-900 pela cor de fundo que combina com a Ascontec */}
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Lado Esquerdo - Textos e Botão WhatsApp */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm font-semibold tracking-wider text-blue-400 uppercase">
                Onde Estamos
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                Venha nos visitar ou fale online
              </h2>
              <p className="text-slate-300 max-w-[500px]">
                Para um atendimento mais rápido e direto, clique no botão abaixo e fale com a nossa equipe pelo WhatsApp, ou faça-nos uma visita!
              </p>
            </div>

            <div className="flex items-start space-x-3 text-slate-300">
              <MapPin className="w-6 h-6 mt-1 flex-shrink-0 text-blue-400" />
              <p>
                {/* Substitua pelo endereço real da Ascontec */}
                Rua Exemplo da Ascontec, 123 - Bairro<br />
                Maceió - AL, 57000-000
              </p>
            </div>

            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-[#25D366] px-8 text-sm font-bold text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Chamar no WhatsApp
            </a>
          </div>

          {/* Lado Direito - Mapa Interativo do Google */}
          <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
            <iframe
              // Substitua o link abaixo pelo link do mapa da Ascontec (instruções no Passo 2)
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.167018661898!2d-35.73761242417483!3d-9.666766702166202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x701457b88f95a25%3A0x6526aecbb032107d!2sR.%20do%20Imperador%2C%20369%20-%20Centro%2C%20Macei%C3%B3%20-%20AL%2C%2057020-670!5e0!3m2!1spt-BR!2sbr!4v1787604110462!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  )
}
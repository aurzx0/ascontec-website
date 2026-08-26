import { MapPin, Navigation } from "lucide-react"

export function ContactForm() {
  // Link direto para a rota no Google Maps
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=R.+do+Imperador,+369+-+Centro,+Maceió+-+AL,+57020-670"

  return (
    <section className="w-full py-8">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        
        {/* Cartão Vermelho com Animação de Subida e Opacidade */}
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-primary rounded-3xl p-8 md:p-12 shadow-xl shadow-primary/20 text-primary-foreground">

          {/* Lado Esquerdo - Textos e Botão Maps */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-sm font-semibold tracking-wider text-primary-foreground/80 uppercase">
                Localização
              </p>
              {/* Título com a fonte serifada do site */}
              <h2 className="text-3xl md:text-4xl font-bold font-serif tracking-tight">
                Venha nos visitar
              </h2>
              <p className="text-primary-foreground/90 max-w-[500px] leading-relaxed">
                Estamos localizados no coração de Maceió. Clique no botão abaixo para abrir a rota diretamente no seu GPS ou celular.
              </p>
            </div>

            <div className="flex items-start space-x-3 text-primary-foreground">
              <MapPin className="w-6 h-6 mt-1 flex-shrink-0" />
              <p>
                Rua do Imperador, 369 - Centro<br />
                Maceió - AL, 57020-670<br />
                Galeria Elizeu Teixeira
              </p>
            </div>

            {/* Botão Branco para o Google Maps */}
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3.5 text-sm font-semibold text-primary shadow-lg transition-transform hover:scale-105"
            >
              <Navigation className="h-5 w-5" />
              Ver no Google Maps
            </a>
          </div>

          {/* Lado Direito - Mapa Interativo do Google */}
          <div className="w-full h-[350px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
            <iframe
              title="Mapa de localização da Ascontec"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.167018661898!2d-35.73761242417483!3d-9.666766702166202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x701457b88f95a25%3A0x6526aecbb032107d!2sR.%20do%20Imperador%2C%20369%20-%20Centro%2C%20Macei%C3%B3%20-%20AL%2C%2057020-670!5e0!3m2!1spt-BR!2sbr!4v1787604110462!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
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
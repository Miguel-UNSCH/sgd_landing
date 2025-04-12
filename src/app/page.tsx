import Link from "next/link"
import { ArrowRight, FileText, Settings, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/views/hero-section"
import { FeatureCard } from "@/components/views/feature-card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeroSection />

      <section className="container py-20">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tighter md:text-5xl">
            Sistema de Gestión Documental
          </h2>
          <p className="mx-auto max-w-[700px] text-lg text-muted-foreground">
            Gestión eficiente de trámites documentarios con firma digital e interoperabilidad
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <FeatureCard
            icon={<FileText className="h-10 w-10" />}
            title="Trámite Documentario"
            description="Sistema completo para la gestión de documentos administrativos con firma digital."
          />
          <FeatureCard
            icon={<Users className="h-10 w-10" />}
            title="Mesa de Partes Virtual"
            description="Plataforma para que los ciudadanos puedan realizar trámites de manera virtual."
          />
          <FeatureCard
            icon={<Settings className="h-10 w-10" />}
            title="Configuración Avanzada"
            description="Módulos adicionales para la configuración y seguimiento de documentos."
          />
        </div>

        <div className="mt-12 flex justify-center">
          <Button asChild size="lg">
            <Link href="/modulos">
              Ver todos los módulos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

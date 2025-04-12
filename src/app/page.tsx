"use client"

import { useRef } from "react"
import Link from "next/link"
import { ArrowRight, FileText, Settings, Users } from "lucide-react"
import { motion, useInView } from "framer-motion"

import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/views/hero-section"
import { FeatureCard } from "@/components/views/feature-card"

export default function Home() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <div className="flex min-h-screen flex-col">
      <HeroSection />

      <section className="container py-20">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tighter dark:text-white md:text-5xl">
            Sistema de Gestión Documental
          </h2>
          <p className="mx-auto max-w-[700px] text-lg dark:text-white/70">
            Gestión eficiente de trámites documentarios con firma digital e interoperabilidad
          </p>
        </motion.div>

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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-12 flex justify-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-[#4CAF50] hover:bg-[#45a049] dark:text-white border-none rounded-full px-8"
          >
            <Link href="/modulos">
              Ver todos los módulos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </section>
    </div>
  )
}

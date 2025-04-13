"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { motion, useInView, useAnimation } from "framer-motion"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden py-20 md:py-32">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/inicio_fondo_sgd.jpg"
          alt="Kimbiri - Corazón del VRAEM"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mx-auto max-w-3xl"
        >
          <motion.h1
            variants={itemVariants}
            className="mb-6 text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl"
          >
            Sistema de Gestión Documental
          </motion.h1>

          <motion.p variants={itemVariants} className="mb-8 text-lg text-white/70 md:text-xl max-w-2xl">
            Plataforma integral para la gestión de trámites documentarios con firma digital e interoperabilidad para la
            Municipalidad de Kimbiri.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-primary/80 hover:bg-primary text-white border-none rounded-full px-8"
            >
              <a href="/sgd/login.do" target="_blank" rel="noopener noreferrer">
                Iniciar Sesión
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-transparent text-white hover:text-white border-white/30 hover:bg-white/10 rounded-full px-8"
            >
              <a href="/mpd/inicio.do" target="_blank" rel="noopener noreferrer">Mesa de partes</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

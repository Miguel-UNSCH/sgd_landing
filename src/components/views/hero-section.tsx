"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/inicio_fondo_sgd.jpg"
          alt="Kimbiri - Corazón del VRAEM"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" /> {/* Overlay para mejorar legibilidad del texto */}
      </div>

      <div className="container relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.h1
            variants={itemVariants}
            className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            Sistema de Gestión Documental
          </motion.h1>

          <motion.p variants={itemVariants} className="mb-8 text-lg text-white/90 md:text-xl">
            Plataforma integral para la gestión de trámites documentarios con firma digital e interoperabilidad para la
            Municipalidad de Kimbiri.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="bg-[#4CAF50] hover:bg-[#45a049] text-white border-none">
              <Link href="/modulos">
                Acceder a los módulos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-white/10 text-white border-white/30 hover:bg-white/20"
            >
              <Link href="/info">Ver información</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { useRef, useEffect } from "react"
import { ArrowRight, FileText, Users, Search, CheckCircle, Network, Settings, Footprints } from "lucide-react"
import { motion, useInView } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const modules = [
  {
    title: "Sistema de trámite documentario",
    description: "Gestión eficiente de documentos con firma digital",
    url: "/sgd/login.do",
    icon: FileText,
    gradient: "from-red-400 to-purple-500",
  },
  {
    title: "Mesa de partes del ciudadano",
    description: "Trámites virtuales al alcance de todos",
    url: "/mpd/inicio.do",
    icon: Users,
    gradient: "from-blue-400 to-indigo-500",
  },
  {
    title: "Consulta de documentos",
    description: "Accede a los documentos de mesa de partes",
    url: "/consulta/inicio.do",
    icon: Search,
    gradient: "from-green-400 to-teal-500",
  },
  {
    title: "Verificación de documentos",
    description: "Valida documentos internos y profesionales",
    url: "/verifica/inicio.do",
    icon: CheckCircle,
    gradient: "from-orange-400 to-red-500",
  },
  {
    title: "Mesa de partes virtual",
    description: "Interoperabilidad entre entidades públicas",
    url: "/mpv/login.jsf",
    icon: Network,
    gradient: "from-purple-400 to-pink-500",
  },
  {
    title: "Configuraciones del SGD",
    description: "Personaliza el sistema a tu medida",
    url: "https://config-sgd.munikimbiri.gob.pe:3443/",
    icon: Settings,
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    title: "Seguimiento de documentos",
    description: "Monitorea el estado de tus trámites",
    url: "https://seguimiento.munikimbiri.gob.pe:4443/",
    icon: Footprints,
    gradient: "from-cyan-400 to-blue-500",
  },
]

export default function ModulosPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  // Log para depurar el estado de isInView
  useEffect(() => {
    console.log("isInView:", isInView)
  }, [isInView])

  // Animaciones para las cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: i * 0.1,
        ease: "easeOut",
      },
    }),
  }

  // Animación para el título
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <div className="container py-16">
      <motion.div
        ref={ref}
        variants={titleVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-center mb-12"
      >
        <h1 className="mt-4 mb-4 text-4xl font-bold tracking-tight text-foreground">
          Módulos del Sistema
        </h1>
        <p className="mx-auto max-w-[700px] text-lg text-muted-foreground">
          Descubre herramientas diseñadas para simplificar y potenciar la gestión documental.
        </p>
      </motion.div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {modules.map((module, index) => {
          const Icon = module.icon
          return (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              className="relative group"
            >
              <Card className="relative rounded-xl overflow-hidden shadow-md transition-transform duration-300 ease-in-out hover:shadow-lg py-0">
                {/* Sección superior con gradiente */}
                <div className={`h-10 bg-gradient-to-r ${module.gradient}`} />
                {/* Contenido principal */}
                <CardContent className="relative -mt-12 bg-white rounded-t-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="h-6 w-6 text-gray-700" />
                    <h2 className="text-lg font-semibold text-gray-900">
                      {module.title}
                    </h2>
                  </div>
                  <p className="text-sm text-gray-500 mb-4">
                    {module.description}
                  </p>
                  <Button
                    asChild
                    className="w-full bg-blue-50 text-primary rounded-lg py-2 hover:bg-blue-100 transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    <a href={module.url} target="_blank" rel="noopener noreferrer">
                      <ArrowRight className="h-4 w-4" />
                      Explorar
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
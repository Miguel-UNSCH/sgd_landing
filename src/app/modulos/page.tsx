"use client"

import { useRef } from "react"
import { ExternalLink } from "lucide-react"
import { motion, useInView } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const modules = [
  {
    title: "Sistema de trámite documentario",
    description: "Gestión de documentos administrativos con firma digital",
    url: "https://192.168.1.246/sgd/login.do",
    credentials: [],
  },
  {
    title: "Mesa de partes del ciudadano",
    description: "Plataforma para que los ciudadanos realicen trámites virtuales",
    url: "https://192.168.1.246/mpd/inicio.do",
    credentials: [],
  },
  {
    title: "Consulta de documentos",
    description: "Consulta de documentos que ingresaron por mesa de partes del ciudadano",
    url: "https://192.168.1.246/consulta/inicio.do",
    credentials: [],
  },
  {
    title: "Verificación de documentos",
    description: "Verificación de documentos internos administrativos o profesionales",
    url: "https://192.168.1.246/verifica/inicio.do",
    credentials: [],
  },
  {
    title: "Mesa de partes virtual de interoperabilidad",
    description: "Sistema de interoperabilidad entre entidades",
    url: "https://192.168.1.246/mpv/login.jsf",
    credentials: [],
  },
  {
    title: "Módulo adicional de configuraciones del SGD",
    description: "Configuraciones avanzadas del sistema",
    url: "https://192.168.1.246:3443/",
    credentials: [],
  },
  {
    title: "Módulo adicional de seguimiento de documentos",
    description: "Seguimiento de documentos administrativos y documentos de mesa de partes del ciudadano",
    url: "https://192.168.1.246:4443/",
    credentials: [],
  },
]

export default function ModulosPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <div className="container py-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.7 }}
        className="mb-12 text-center"
      >
        <h1 className="mb-4 text-4xl font-bold tracking-tight dark:text-white">Módulos del Sistema</h1>
        <p className="mx-auto max-w-[700px] text-lg dark:text-white/70">
          Accede a los diferentes módulos del Sistema de Gestión Documental
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {modules.map((module, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="flex h-full flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#4CAF50]/10 dark:bg-black/40 backdrop-blur-sm dark:border-white/10">
              <CardHeader>
                <CardTitle className="dark:text-white">{module.title}</CardTitle>
                <CardDescription className="dark:text-white/70">{module.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild className="w-full bg-[#4CAF50] hover:bg-[#45a049] text-white border-none">
                  <a href={module.url} target="_blank" rel="noopener noreferrer">
                    Acceder
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

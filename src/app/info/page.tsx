"use client"

import { useRef } from "react"
import { FileText, Video } from "lucide-react"
import { motion, useInView } from "framer-motion"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function InfoPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const videos = [
    {
      id: "ogE42AjyGCE?si=5cos1PCWGK0WZtxW",
      title: "Presentación del Sistema de Gestión Documental - ONPE",
      description: "Aprende los conceptos básicos del sistema.",
    },
    {
      id: "20p1gmZuVLk?si=Lx3QYOs1u8-X6oFH",
      title: "Emisión de un documento personal",
      description: "Cómo emitir documentos personales en el sistema.",
    },
    {
      id: "PuN6d2JzhtE?si=2Ea-p3ytCopo_2Ea",
      title: "Emisión de un documento administrativo",
      description: "ómo emitir documentos administrativos en el sistema.",
    },
  ]

  return (
    <div className="container py-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.7 }}
        className="mb-12 text-center"
      >
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground">Información y Recursos</h1>
        <p className="mx-auto max-w-[700px] text-lg text-muted-foreground">
          Manuales, guías y videos para el uso del Sistema de Gestión Documental
        </p>
      </motion.div>

      <Tabs defaultValue="manuales" className="mx-auto max-w-4xl">
        <TabsList className="grid w-full grid-cols-2 border">
          <TabsTrigger
            value="manuales"
            className="data-[state=active]:bg-primary data-[state=active]:text-white hover:cursor-pointer"
          >
            Manuales
          </TabsTrigger>
          <TabsTrigger
            value="videos"
            className="data-[state=active]:bg-primary data-[state=active]:text-white hover:cursor-pointer"
          >
            Videos
          </TabsTrigger>
        </TabsList>

        <TabsContent value="manuales" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            {[1].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-secondary-foreground">
                      <FileText className="h-5 w-5 text-primary" />
                      Manual de Usuario
                    </CardTitle>
                    <CardDescription className="dark:text-muted-foreground">
                      Guía completa para el uso del sistema
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p className="text-sm text-muted-foreground">
                      Este manual proporciona instrucciones detalladas sobre cómo utilizar el módulo correspondiente del
                      sistema.
                    </p>
                    <a
                      href="https://sisadm.onpe.gob.pe/recursos/Manual_SGD.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
                    >
                      Descargar PDF
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="videos" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-secondary-foreground">
                      <Video className="h-5 w-5 text-primary" />
                      {video.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">{video.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="aspect-video overflow-hidden rounded-md bg-slate-200/50">
                      <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${video.id}`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <a
                      href={`https://www.youtube.com/watch?v=${video.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
                    >
                      Ver video completo en YouTube
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
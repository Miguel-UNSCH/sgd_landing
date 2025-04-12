"use client"

import { useRef } from "react"
import { FileText, Video } from "lucide-react"
import { motion, useInView } from "framer-motion"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function InfoPage() {
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
        <h1 className="mb-4 text-4xl font-bold tracking-tight dark:text-white">Información y Recursos</h1>
        <p className="mx-auto max-w-[700px] text-lg dark:text-white/70">
          Manuales, guías y videos para el uso del Sistema de Gestión Documental
        </p>
      </motion.div>

      <Tabs defaultValue="manuales" className="mx-auto max-w-4xl">
        <TabsList className="grid w-full grid-cols-2 dark:bg-black/40 border dark:border-white/10">
          <TabsTrigger value="manuales" className="data-[state=active]:bg-[#4CAF50] data-[state=active]:text-white">
            Manuales
          </TabsTrigger>
          <TabsTrigger value="videos" className="data-[state=active]:bg-[#4CAF50] data-[state=active]:text-white">
            Videos
          </TabsTrigger>
        </TabsList>

        <TabsContent value="manuales" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            {[1, 2, 3, 4].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#4CAF50]/10 dark:bg-black/40 backdrop-blur-sm dark:border-white/10">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 dark:text-white">
                      <FileText className="h-5 w-5 text-[#4CAF50]" />
                      Manual de Usuario {item}
                    </CardTitle>
                    <CardDescription className="dark:text-white/70">Guía completa para el uso del sistema</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p className="text-sm dark:text-white/70">
                      Este manual proporciona instrucciones detalladas sobre cómo utilizar el módulo correspondiente del
                      sistema.
                    </p>
                    <a
                      href="#"
                      className="mt-4 inline-flex items-center text-sm font-medium text-[#4CAF50] hover:underline"
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
            {[1, 2, 3, 4].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#4CAF50]/10 dark:bg-black/40 backdrop-blur-sm dark:border-white/10">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 dark:text-white">
                      <Video className="h-5 w-5 text-[#4CAF50]" />
                      Tutorial {item}
                    </CardTitle>
                    <CardDescription className="dark:text-white/70">Video tutorial del sistema</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="aspect-video overflow-hidden rounded-md bg-slate-200/50 dark:bg-black/50">
                      <div className="flex h-full items-center justify-center">
                        <p className="text-sm dark:text-white/50">Vista previa del video</p>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="mt-4 inline-flex items-center text-sm font-medium text-[#4CAF50] hover:underline"
                    >
                      Ver video completo
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

import { FileText, Video } from "lucide-react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function InfoPage() {
  return (
    <div className="container py-12">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">Información y Recursos</h1>
        <p className="mx-auto max-w-[700px] text-lg text-muted-foreground">
          Manuales, guías y videos para el uso del Sistema de Gestión Documental
        </p>
      </div>

      <Tabs defaultValue="manuales" className="mx-auto max-w-4xl">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="manuales">Manuales</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
        </TabsList>

        <TabsContent value="manuales" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            {[1, 2, 3, 4].map((item) => (
              <Card key={item} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <CardHeader className="bg-muted/50">
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Manual de Usuario {item}
                  </CardTitle>
                  <CardDescription>Guía completa para el uso del sistema</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground">
                    Este manual proporciona instrucciones detalladas sobre cómo utilizar el módulo correspondiente del
                    sistema.
                  </p>
                  <a
                    href="#"
                    className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    Descargar PDF
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="videos" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            {[1, 2, 3, 4].map((item) => (
              <Card key={item} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <CardHeader className="bg-muted/50">
                  <CardTitle className="flex items-center gap-2">
                    <Video className="h-5 w-5" />
                    Tutorial {item}
                  </CardTitle>
                  <CardDescription>Video tutorial del sistema</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="aspect-video overflow-hidden rounded-md bg-muted">
                    <div className="flex h-full items-center justify-center">
                      <p className="text-sm text-muted-foreground">Vista previa del video</p>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    Ver video completo
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

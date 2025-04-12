'use client'

import { ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const modules = [
  {
    title: "Sistema de trámite documentario",
    description: "Gestión de documentos administrativos con firma digital",
    url: "https://192.168.1.246/sgd/login.do",
    credentials: [
      { label: "ADMINISTRADOR", user: "ADMIN", pass: "Admin2018" },
      { label: "USUARIOS", user: "N° DNI", pass: "N° DNI (por única vez, se le solicitará actualizar)" },
    ],
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
    credentials: [{ label: "Nota", user: "", pass: "Tiene acceso solo el ADMIN" }],
  },
  {
    title: "Módulo adicional de configuraciones del SGD",
    description: "Configuraciones avanzadas del sistema",
    url: "https://192.168.1.246:3443/",
    credentials: [{ label: "Nota", user: "", pass: "Tiene acceso solo el ADMIN" }],
  },
  {
    title: "Módulo adicional de seguimiento de documentos",
    description: "Seguimiento de documentos administrativos y documentos de mesa de partes del ciudadano",
    url: "https://192.168.1.246:4443/",
    credentials: [
      {
        label: "Nota",
        user: "",
        pass: "Tienen acceso todos los usuarios internos de la institución que tengan cuenta en el SGD",
      },
    ],
  },
]

export default function ModulosPage() {
  return (
    <div className="container py-12">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">Módulos del Sistema</h1>
        <p className="mx-auto max-w-[700px] text-lg text-muted-foreground">
          Accede a los diferentes módulos del Sistema de Gestión Documental
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {modules.map((module, index) => (
          <Card key={index} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg">
            <CardHeader className="bg-muted/50">
              <CardTitle>{module.title}</CardTitle>
              <CardDescription>{module.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pt-6">
              {module.credentials.length > 0 && (
                <div className="space-y-2">
                  <h4 className="font-medium">Credenciales:</h4>
                  {module.credentials.map((cred, idx) => (
                    <div key={idx} className="text-sm">
                      <p className="font-medium">{cred.label}</p>
                      {cred.user && <p>Usuario: {cred.user}</p>}
                      {cred.pass && <p>Contraseña: {cred.pass}</p>}
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <a href={module.url} target="_blank" rel="noopener noreferrer">
                  Acceder
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

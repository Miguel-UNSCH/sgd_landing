import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-8 md:py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">SGD MUNI KIMBIRI</h3>
            <p className="text-sm text-muted-foreground">
              Sistema de Gestión Documental con firma digital e interoperabilidad para la Municipalidad de Kimbiri.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Enlaces</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground transition-colors hover:text-foreground">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/modulos" className="text-muted-foreground transition-colors hover:text-foreground">
                  Módulos
                </Link>
              </li>
              <li>
                <Link href="/info" className="text-muted-foreground transition-colors hover:text-foreground">
                  Información
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contacto</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">Dirección: Av. Principal 123, Kimbiri</li>
              <li className="text-muted-foreground">Teléfono: (01) 123-4567</li>
              <li className="text-muted-foreground">Email: info@munikimbiri.gob.pe</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Municipalidad de Kimbiri. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

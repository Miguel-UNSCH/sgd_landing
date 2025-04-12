import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-white dark:bg-black/50">
      <div className="container py-8 md:py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold dark:text-white">SGD MUNI KIMBIRI</h3>
            <p className="text-sm dark:text-white/70">
              Sistema de Gestión Documental con firma digital e interoperabilidad para la Municipalidad de Kimbiri.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold dark:text-white">Enlaces</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="dark:text-white/70 transition-colors dark:hover:text-white">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/modulos" className="dark:text-white/70 transition-colors dark:hover:text-white">
                  Módulos
                </Link>
              </li>
              <li>
                <Link href="/info" className="dark:text-white/70 transition-colors dark:hover:text-white">
                  Información
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold dark:text-white">Contacto</h3>
            <ul className="space-y-2 text-sm">
              <li className="dark:text-white/70">Dirección: Av. Principal 123, Kimbiri</li>
              <li className="dark:text-white/70">Teléfono: (01) 123-4567</li>
              <li className="dark:text-white/70">Email: info@munikimbiri.gob.pe</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold dark:text-white">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="dark:text-white/70 transition-colors dark:hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="dark:text-white/70 transition-colors dark:hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="dark:text-white/70 transition-colors dark:hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t dark:border-white/10 pt-8 text-center text-sm dark:text-white/50">
          <p>&copy; {new Date().getFullYear()} Municipalidad de Kimbiri. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

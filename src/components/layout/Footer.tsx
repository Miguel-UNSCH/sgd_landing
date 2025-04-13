import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container py-8 md:py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold text-secondary-foreground">
              SGD MUNI KIMBIRI
            </h3>
            <p className="text-sm text-muted-foreground">
              Sistema de Gestión Documental con firma digital e
              interoperabilidad para la Municipalidad de Kimbiri.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-secondary-foreground">
              Enlaces
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground transition-colors hover:text-secondary-foreground"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/modulos"
                  className="text-muted-foreground transition-colors hover:text-secondary-foreground"
                >
                  Módulos
                </Link>
              </li>
              <li>
                <Link
                  href="/info"
                  className="text-muted-foreground transition-colors hover:text-secondary-foreground"
                >
                  Información
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-secondary-foreground">
              Contacto
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">
                <span className="font-bold">Dirección: </span>
                Jr. José Olaya
                151-153 Plaza principal parque de la Pacificación - Kimbiri - La
                Convención - Cusco
              </li>
              <li className="text-muted-foreground">
                <span className="font-bold">Teléfono: </span>
                (51) 990711252
              </li>
              <li className="text-muted-foreground">
                <span className="font-bold">Horario de atención: </span>
                Lunes a Viernes de 8:00am a 1:00pm - 3:00pm
                a 6:00pm
              </li>
              <li className="text-muted-foreground">
                <span className="font-bold">Email: </span>
                gserviciosmunicipales@munikimbiri.gob.pe
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-secondary-foreground">
              Síguenos
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/KIMBIRIVRAEMPERU"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-secondary-foreground"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://x.com/munikimbirivrae"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-secondary-foreground"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://www.instagram.com/vraemkimbiri/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-secondary-foreground"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Municipalidad distrital de Kimbiri. Todos
            los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

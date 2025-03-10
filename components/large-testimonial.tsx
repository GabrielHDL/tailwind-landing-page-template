import Image from "next/image";
import TestimonialImg from "@/public/images/logo_hecsa_color.svg";

export default function LargeTestimonial() {
  return (
    <section id="services">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="space-y-3 text-center">
            <div className="relative inline-flex">
              <Image
                className="h-15 w-auto"
                src={TestimonialImg}
                width={48}
                height={48}
                alt="Large testimonial"
              />
            </div>
            {/* <p className="text-2xl font-bold text-gray-900">
              Nuestros Servicios
            </p> */}
            <div className="p-6 bg-gradient-to-br from-gray-50 to-primary/10 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-primary mb-6 border-b-2 border-blue-200 pb-2">
                Servicios de Ingeniería Especializada
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-8 mr-3 text-secondary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        Documentación Técnica
                      </h3>
                      <ul className="text-gray-600 space-y-2 mt-1">
                        <li>Memorias Técnicas de Cálculo Eléctrico/Mecánico</li>
                        <li>Planos e isométricos de tuberías</li>
                        <li>Diagramas Unifilares</li>
                        <li>Ingeniería As-Built</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-8 mr-3 text-secondary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        Sistemas de Protección
                      </h3>
                      <ul className=" text-gray-600 space-y-2 mt-1">
                        <li>Cálculos para Red de Tierra y Pararrayos</li>
                        <li>Cálculo de Alimentadores</li>
                        <li>Dictamen de Instalaciones Eléctricas</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-8 mr-3 text-secondary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        Iluminación y Normativas
                      </h3>
                      <ul className=" text-gray-600 space-y-2 mt-1">
                        <li>Sistemas de Iluminación Comercial/Industrial</li>
                        <li>Cálculos NOM-025-STPS</li>
                        <li>Centros de Carga</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-8 mr-3 text-secondary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        Pruebas Certificadas
                      </h3>
                      <ul className=" text-gray-600 space-y-2 mt-1">
                        <li>Pruebas TTR (Relación de Transformación)</li>
                        <li>Pruebas MEGGER (Aislamiento BT/MT)</li>
                        <li>Pruebas de Rigidez Dieléctrica</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

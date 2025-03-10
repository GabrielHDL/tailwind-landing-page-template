import HeroHome from "@/components/hero-home";
import PageIllustration from "@/components/page-illustration";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <section className="relative">
        <PageIllustration />
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* Hero content */}
          <div className="pb-12 pt-32 md:pb-20 md:pt-40">
            {/* Section header */}
            <div className="pb-12 text-center">
              <h1
                className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] md:text-6xl"
                data-aos="zoom-y-out"
                data-aos-delay={150}
              >
                Nosotros
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900 text-gray-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Section header */}
            <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
              <h2 className="text-3xl font-bold md:text-4xl">Misión</h2>
              <p className="mt-4">
                Nuestra misión es ofrecer Servicios Profesionales de Proyectos e
                Integración de Proyectos y proyectos ejecutivos para la
                Industria en General, apegados estrictamente a los estándares y
                normas de calidad de nuestros clientes, garantizando la
                confiabilidad de nuestros clientes en la intervención en sus
                instalaciones.
              </p>
              <h2 className="text-3xl font-bold md:text-4xl mt-8">Visión</h2>
              <p className="mt-4">
                Ser líderes en la Prestación de Servicios Profesionales de
                Proyectos e Integración de Proyectos para la industria en
                general a nivel nacional.
              </p>
              <h2 className="text-3xl font-bold md:text-4xl mt-8">Valores</h2>
              <p className="mt-4">
                El compromiso, la responsabilidad, la honestidad, el respeto, el
                compañerismo y el trabajo en equipo son los pilares y los
                cimientos de un buen ambiente de trabajo en HECSACAPITAL
                INSTALACIONES INDUSTRIALES, S.A.P.I. DE C.V teniendo como
                resultado buenos resultados en la realización de los servicios y
                proyectos con una gran profesionalidad.
              </p>
              <h2 className="text-3xl font-bold md:text-4xl mt-8">Objetivo</h2>
              <p className="mt-4">
                Cumplir con los lineamientos de la organización para llevar a
                cabo nuestra misión comprometiéndonos en dar la mejor calidad de
                servicio, precio y satisfacción al cliente para obtener una
                mejor demanda y rentabilidad de servicios y proyectos por parte
                de los mismos a corto y largo plazo.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

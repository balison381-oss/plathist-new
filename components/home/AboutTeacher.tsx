import Image from "next/image";

export default function AboutTeacher() {
  return (
    <section
  id="professor"
  className="
    relative
    py-20
    text-white
  "
>
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-10 md:grid-cols-2">


          {/* Foto do Professor */}
          <div className="flex justify-center">

            <div
              className="
              relative
              h-64
              w-64
              overflow-hidden
              rounded-full
              border-4
              border-yellow-500/40
              shadow-xl
              "
            >
              <Image
                src="/professor.png"
                alt="Professor Jorgin"
                fill
                sizes="256px"
                className="object-cover"
                priority
              />
            </div>

          </div>



          {/* Texto */}
          <div>

            <span
              className="
              text-sm
              font-semibold
              tracking-[0.25em]
              text-yellow-400
              "
            >
              SOBRE O PROFESSOR
            </span>


            <h2
              className="
              mt-4
              text-3xl
              font-black
              "
            >
              Professor Jorgin
            </h2>


            <p
              className="
              mt-5
              leading-relaxed
              text-slate-300
              "
            >
              Professor de História especializado na preparação para concursos,
              com foco em conteúdos objetivos, estratégia de estudo e preparação
              direcionada para provas.
            </p>


            <p
              className="
              mt-4
              leading-relaxed
              text-slate-300
              "
            >
              A plataforma foi criada para oferecer uma preparação organizada,
              reunindo aulas, materiais e questões em um único ambiente de estudos.
            </p>


          </div>


        </div>

      </div>

    </section>
  );
}
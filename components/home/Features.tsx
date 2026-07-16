const features = [
  {
    title: "Aulas Estratégicas",
    description:
      "Conteúdos organizados para facilitar sua preparação e melhorar seu desempenho.",
  },
  {
    title: "Materiais Exclusivos",
    description:
      "PDFs, resumos e materiais de apoio para complementar seus estudos.",
  },
  {
    title: "Banco de Questões",
    description:
      "Pratique com questões selecionadas e prepare-se para o estilo das provas.",
  },
  {
    title: "Mapas Mentais",
    description:
      "Revise conteúdos importantes de forma rápida e objetiva.",
  },
  {
    title: "Simulados",
    description:
      "Teste seus conhecimentos e acompanhe sua evolução.",
  },
];

export default function Features() {
  return (
    <section
      id="recursos"
      className="
        relative
        py-24
        text-white
      "
    >

      <div className="mx-auto max-w-7xl px-6">


        <div className="mx-auto max-w-3xl text-center">

          <span
            className="
            text-sm
            font-semibold
            tracking-[0.25em]
            text-yellow-400
            "
          >
            RECURSOS DA PLATAFORMA
          </span>


          <h2
            className="
            mt-5
            text-3xl
            font-black
            md:text-4xl
            "
          >
            Tudo que você precisa para sua preparação
          </h2>


          <p
            className="
            mx-auto
            mt-5
            max-w-2xl
            text-slate-300
            "
          >
            Uma estrutura completa para organizar seus estudos,
            melhorar seu desempenho e acelerar sua aprovação.
          </p>


        </div>



        <div
          className="
          mt-14
          grid
          gap-6
          sm:grid-cols-2
          lg:grid-cols-5
          "
        >

          {features.map((feature) => (

            <div
              key={feature.title}
              className="
                rounded-2xl
                border
                border-slate-700/50
                bg-black/20
                p-6
                backdrop-blur-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-yellow-500/50
                hover:bg-black/40
              "
            >

              <div
                className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-lg
                border
                border-yellow-500/20
                bg-yellow-500/10
                text-yellow-400
                font-bold
                "
              >
                ✓
              </div>


              <h3
                className="
                mt-6
                text-xl
                font-bold
                "
              >
                {feature.title}
              </h3>


              <p
                className="
                mt-3
                text-sm
                leading-relaxed
                text-slate-300
                "
              >
                {feature.description}
              </p>


            </div>

          ))}

        </div>


      </div>

    </section>
  );
}
export default function Differentials() {
  const items = [
    {
      number: "01",
      title: "Aulas Objetivas",
      description:
        "Conteúdos diretos ao ponto, focados no que realmente importa para sua preparação.",
    },
    {
      number: "02",
      title: "Material Organizado",
      description:
        "PDFs, resumos e conteúdos estruturados para otimizar seu tempo de estudo.",
    },
    {
      number: "03",
      title: "Questões Estratégicas",
      description:
        "Treine com exercícios selecionados para desenvolver desempenho nas provas.",
    },
    {
      number: "04",
      title: "Preparação Completa",
      description:
        "Uma estrutura completa para acompanhar sua evolução até a aprovação.",
    },
  ];

  return (
   <section
  className="
    relative
    overflow-hidden
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
            NOSSO MÉTODO
          </span>


          <h2
            className="
              mt-5
              text-3xl
              font-black
              md:text-4xl
            "
          >
            Uma preparação feita para aprovação
          </h2>


          <p
            className="
              mt-5
              text-slate-300
            "
          >
            Estratégia, organização e conteúdo direcionado para você evoluir
            nos estudos.
          </p>


        </div>



        <div
          className="
            mt-14
            grid
            gap-6
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >

          {items.map((item) => (

            <div
              key={item.number}
              className="
                rounded-2xl
                border
                border-slate-700/50
                bg-black/20
                p-7
                backdrop-blur-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-yellow-500/50
              "
            >

              <span
                className="
                  text-4xl
                  font-black
                  text-yellow-400
                "
              >
                {item.number}
              </span>


              <h3
                className="
                  mt-6
                  text-xl
                  font-bold
                "
              >
                {item.title}
              </h3>


              <p
                className="
                  mt-3
                  text-sm
                  leading-relaxed
                  text-slate-300
                "
              >
                {item.description}
              </p>


            </div>

          ))}


        </div>


      </div>

    </section>
  );
}
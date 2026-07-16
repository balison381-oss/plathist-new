export default function Hero() {
  return (
    <section className="relative overflow-hidden text-white">

      <div className="mx-auto flex min-h-[70vh] max-w-7xl items-center px-6">

        <div className="max-w-3xl">


          <span
            className="
            inline-block
            rounded-full
            border
            border-yellow-500/40
            bg-yellow-500/10
            px-4
            py-2
            text-sm
            font-semibold
            text-yellow-400
            "
          >
            PLATAFORMA DE PREPARAÇÃO PARA CONCURSOS
          </span>



          <h1
            className="
            mt-6
            text-4xl
            font-black
            leading-tight
            sm:text-5xl
            md:text-6xl
            "
          >
            Disciplina nos estudos.
            <br />

            <span className="text-yellow-400">
              Estratégia na aprovação.
            </span>

          </h1>



          <p
            className="
            mt-5
            max-w-2xl
            text-base
            leading-relaxed
            text-slate-300
            sm:text-lg
            "
          >
            Uma plataforma completa para candidatos que buscam aprovação em
            concursos públicos, com foco especial nas carreiras militares.
            Tenha aulas, materiais, questões e simulados organizados em um só lugar.
          </p>



          <div
            className="
            mt-8
            flex
            gap-4
            "
          >

            <a
              href="/cadastro"
              className="
              rounded-lg
              bg-yellow-500
              px-8
              py-3
              font-bold
              text-slate-950
              transition
              hover:bg-yellow-400
              "
            >
              Comprar Acesso
            </a>



            <a
  href="#recursos"
  className="
  rounded-lg
  border
  border-slate-600
  px-8
  py-3
  font-semibold
  text-white
  transition
  hover:bg-white
  hover:text-slate-950
  "
>
  Conhecer Plataforma
</a>


          </div>


        </div>

      </div>

    </section>
  );
}
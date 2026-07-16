export default function Contact() {
  const contacts = [
    {
      title: "WhatsApp",
      description: "Fale diretamente com nossa equipe.",
      link: "#",
    },
    {
      title: "Instagram",
      description: "Acompanhe conteúdos e novidades.",
      link: "#",
    },
    {
      title: "E-mail",
      description: "Envie suas dúvidas ou sugestões.",
      link: "#",
    },
  ];

  return (
    <section
      id="contato"
      className="
        py-20
        text-white
      "
    >

      <div className="mx-auto max-w-6xl px-6">


        <div className="text-center">

          <span
            className="
              text-sm
              font-semibold
              tracking-[0.25em]
              text-yellow-400
            "
          >
            ENTRE EM CONTATO
          </span>


          <h2
            className="
              mt-4
              text-3xl
              font-black
            "
          >
            Ficou com alguma dúvida?
          </h2>


          <p
            className="
              mt-4
              text-slate-300
            "
          >
            Entre em contato e saiba mais sobre a plataforma.
          </p>


        </div>




        <div
          className="
            mt-10
            grid
            gap-6
            md:grid-cols-3
          "
        >

          {contacts.map((contact) => (

            <a
              key={contact.title}
              href={contact.link}
              className="
                rounded-2xl
                border
                border-slate-700/50
                bg-white/5
                p-6
                transition-all
                hover:-translate-y-2
                hover:border-yellow-500/50
                hover:bg-white/10
              "
            >

              <h3
                className="
                  text-xl
                  font-bold
                "
              >
                {contact.title}
              </h3>


              <p
                className="
                  mt-3
                  text-sm
                  text-slate-300
                "
              >
                {contact.description}
              </p>


            </a>

          ))}


        </div>


      </div>


    </section>
  );
}
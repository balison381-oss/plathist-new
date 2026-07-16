import Link from "next/link";

export default function Navbar() {
  return (
    <header
      className="
        fixed
        top-0
        z-50
        w-full
        border-b
        border-white/10
        bg-slate-950/70
        backdrop-blur-md
        text-white
      "
    >

      <div
        className="
          mx-auto
          flex
          max-w-7xl
          items-center
          justify-between
          px-6
          py-4
        "
      >


        {/* Logo */}

        <Link
          href="/"
          className="
            text-2xl
            font-black
            tracking-tight
          "
        >
          Prof
          <span className="text-yellow-400">
            Jorge
          </span>
        </Link>



        {/* Menu */}

        <nav
          className="
            hidden
            items-center
            gap-8
            md:flex
          "
        >

          <Link
            href="#inicio"
            className="
              text-sm
              font-medium
              text-slate-300
              transition
              hover:text-yellow-400
            "
          >
            Início
          </Link>



          <Link
            href="#recursos"
            className="
              text-sm
              font-medium
              text-slate-300
              transition
              hover:text-yellow-400
            "
          >
            Plataforma
          </Link>



          <Link
            href="#professor"
            className="
              text-sm
              font-medium
              text-slate-300
              transition
              hover:text-yellow-400
            "
          >
            Professor
          </Link>


        </nav>




        {/* Botões */}

        <div
          className="
            flex
            items-center
            gap-3
          "
        >


          {/* LOGIN */}

          <Link
            href="/login"
            className="
              rounded-lg
              border
              border-slate-700
              px-5
              py-2
              text-sm
              font-semibold
              text-white
              transition
              hover:border-yellow-400
              hover:text-yellow-400
            "
          >
            Entrar
          </Link>




          {/* CADASTRO / COMPRA */}

          <Link
            href="/cadastro"
            className="
              rounded-lg
              bg-yellow-500
              px-5
              py-2
              text-sm
              font-bold
              text-slate-950
              transition
              hover:bg-yellow-400
              hover:scale-105
            "
          >
            Comprar Acesso
          </Link>



        </div>



      </div>


    </header>
  );
}
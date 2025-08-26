import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="h-screen w-full flex flex-col md:flex-row">
      {/* parte do formulário */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white">
        <div className="w-full max-w-md p-8 text-black ">
          <Image
            src="/hose.png"
            alt="login"
            height={200}
            width={200}
            className="mb-6 md:mb-10 lg:hidden sm:hidden md:hidden mx-auto "
          />
          <h1 className="text-2xl font-bold mb-6 text-center md:text-left">
            Faça seu Login
          </h1>
          <form className="space-y-4" action="">
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Digite seu email"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                id="password"
                placeholder="Digite sua senha"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label htmlFor="remember" className="flex items-center gap-2">
                Lembrar-me
                <input type="checkbox" id="remember" />
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg shadow transition"
            >
              Entrar
            </button>
          </form>
        </div>
      </div>

      {/* parte da imagem e texto */}
      <div className="w-full md:w-1/2 bg-indigo-500 text-white lg:flex  sm:block md:block flex-col items-center justify-center p-10 hidden">
        <Image
          src="/hose.png"
          alt="login"
          height={300}
          width={500}
          className="mb-6 md:mb-10"
        />
        <div className="text-center max-w-md">
          <h2 className="text-xl font-semibold mb-2">
            Gerencie seus aluguéis de forma simples e segura.
          </h2>
          <p className="text-sm opacity-90">
            Acesse sua conta e tenha tudo sob controle em poucos cliques.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;

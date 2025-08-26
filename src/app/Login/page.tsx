import Image from 'next/image'
import React from 'react'

const Page = () => {
  return (
    <div className="h-screen w-full flex">
      {/* parte dos formularios */}
      <div className="w-1/2 flex items-center justify-center bg-white">
        <div className='w-full max-w-md p-8 text-black'>
          <h1 className='text-2xl font-bold mb-6'>Faça seu Login</h1>
          <form className='space-y-4' action="">
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder='Digite seu email'
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>

            <div>
              <label htmlFor="password">Senha</label>
              <input type="password" id="password" placeholder='Digite sua senha'
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>

            <div className='flex items-center justify-between text-sm'>
              <label htmlFor="remember" className='flex items-center gap-2'>
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

      <div className="w-1/2 bg-indigo-500 text-white flex flex-col items-center justify-center p-10">
        <Image src="/hose.png" alt="login" height={300} width={500} />
        <div className="text-center max-w-md">
          <h2 className="text-xl font-semibold mb-2">
            Gerencie seus aluguéis de forma simples e segura.
          </h2>
          <p className="text-sm opacity-90">
            Acesse sua conta e tenha tudo sob controle em poucos cliques.
          </p>
        </div>

      </div>
    </div >
  )
}

export default Page

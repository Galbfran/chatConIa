"use client"
import {useChat} from 'ai/react';

export default function Home() {
  const  { handleInputChange , handleSubmit , messages} = useChat();

  

  return (
    <section className="flex justify-center items-center h-screen bg-slate-900">
      <form className="max-w-xl x-full" onSubmit={handleSubmit}>
      {messages.map((m) => (
    <div className="bg-slate-300" key={m.id}>
      {m.content}
    </div>
  ))}
        <div className="flex justify-between my-4">
          <label className="text-white block font-bold my-2">
            Dime algo
          </label>
          <button className="bg-blue-600 text-white px-3 py-2 rounded-md focus:outline-none">
            Enviar
          </button>
        </div>
        <textarea rows={4}
          placeholder="Escribe tu mensaje aqui..."
          className="text-black  bg-slate-300 px-3 py-2 w-full rounded-md focus:outline-none"
          onChange={handleInputChange}
        ></textarea>
      </form>
    </section>
    
  )
}

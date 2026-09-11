"use client"
import { useState } from "react"

const PLAZAS = [
  {id:1,nombre:"PLAZA BARRANCO",lugar:"Parque Municipal",fecha:"Sáb 13 SET",hora:"5:00 PM",inscripcion:"5 SOLES",host:"NATAN - ZK",jurados:"LOA - KEDRIC - BEEF",resultado:"100 SOLES + CUPO",distrito:"BARRANCO",zona:"SUR",visitas:1200,batallas:12,badge:"HOT",img:"https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800"},
  {id:2,nombre:"CAMPO DE MARTE",lugar:"Jesus Maria",fecha:"Dom 14 SET",hora:"4:00 PM",inscripcion:"GRATIS",host:"JOTA FLOW",jurados:"POR CONFIRMAR",resultado:"50 SOLES",distrito:"JESUS MARIA",zona:"CENTRO",visitas:890,batallas:8,badge:"NUEVA",img:"https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800"},
]

export default function Home(){
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      <nav className="p-4 flex justify-between border-b border-white/10">
        <b>ACA.PE</b>
        <a href="/admin" className="bg-[#CCFF00] text-black px-4 py-1 rounded-full text-[11px] font-black">ADMIN 🔒</a>
      </nav>
      <div className="p-6 text-center">
        <h1 className="text-[40px] font-black leading-none">¿DÓNDE ES?<br/><span className="text-[#CCFF00]">ACA PE</span></h1>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {PLAZAS.map(p=>(
            <div key={p.id} className="bg-[#111] border border-white/10 rounded-2xl overflow-hidden text-left">
              <img src={p.img} className="h-[200px] w-full object-cover"/>
              <div className="p-4">
                <div className="text-[10px] bg-[#CCFF00] text-black inline-block px-2 py-1 rounded-full font-black">{p.badge}</div>
                <h2 className="font-black text-[18px] mt-2">{p.nombre}</h2>
                <p className="text-[11px] opacity-60 mt-1">{p.lugar} | {p.fecha} {p.hora}</p>
                <div className="text-[10px] mt-3 space-y-1 opacity-80">
                  <div>📍 LUGAR: {p.lugar}</div>
                  <div>🕐 HORA: {p.hora}</div>
                  <div>💰 INSCRIPCIÓN: {p.inscripcion}</div>
                  <div>🎤 HOST: {p.host}</div>
                  <div>⚖️ JURADOS: {p.jurados}</div>
                  <div>🏆 RESULTADO: {p.resultado}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
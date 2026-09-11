"use client"
import { useState } from "react"

const PLAZAS = [
  {id:1,nombre:"PLAZA BARRANCO",distrito:"BARRANCO",lugar:"Parque Municipal",fecha:"Sáb 13 SET",hora:"5:00 PM",inscripcion:"5 SOLES",host:"NATAN - ZK",jurados:"LOA - KEDRIC - BEEF",resultado:"100 SOLES + CUPO",zona:"SUR",badge:"HOT",visitas:1200,batallas:12,img:"https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800"},
  {id:2,nombre:"RAPTONDA PLAZA",distrito:"COMAS",lugar:"Parque Sinchi Roca",fecha:"Sáb 13 SET",hora:"4:30 PM",inscripcion:"GRATIS",host:"GATO - CHOLO",jurados:"RACSO - YAN - SKILL",resultado:"50 SOLES + CLASIFICATORIA",zona:"NORTE",badge:"NUEVA",visitas:890,batallas:8,img:"https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800"},
  {id:3,nombre:"PLAZA DE ARMAS SJL",distrito:"SJL",lugar:"Plaza Principal",fecha:"Dom 14 SET",hora:"3:00 PM",inscripcion:"3 SOLES",host:"MC CALLE",jurados:"POR CONFIRMAR",resultado:"70 SOLES",zona:"ESTE",badge:"CLASICA",visitas:650,batallas:15,img:"https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?w=800"},
  {id:4,nombre:"PARQUE LA MURALLA",distrito:"CERCADO",lugar:"Centro Lima",fecha:"Sáb 13 SET",hora:"6:00 PM",inscripcion:"5 SOLES",host:"LUCAS",jurados:"VITTO - KAOS",resultado:"80 SOLES",zona:"CENTRO",badge:"PRO",visitas:2100,batallas:20,img:"https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800"},
  {id:5,nombre:"PLAZA VES",distrito:"VES",lugar:"Parque Central",fecha:"Dom 14 SET",hora:"4:00 PM",inscripcion:"GRATIS",host:"BRAYAN",jurados:"LEO - CHINO",resultado:"40 SOLES",zona:"SUR",badge:"HOT",visitas:540,batallas:6,img:"https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800"},
  {id:6,nombre:"PLAZA NORTE LOS OLIVOS",distrito:"LOS OLIVOS",lugar:"Parque Naranjal",fecha:"Sáb 13 SET",hora:"5:30 PM",inscripcion:"4 SOLES",host:"DARK",jurados:"JOTA - STICK",resultado:"60 SOLES",zona:"NORTE",badge:"NUEVA",visitas:780,batallas:9,img:"https://images.unsplash.com/photo-1516450360452-9312abbf6f7e?w=800"},
]

export default function Home(){
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      <nav className="p-4 flex justify-between items-center border-b border-white/10 sticky top-0 bg-[#0A0A0A] z-10">
        <b className="font-black tracking-widest">ACA.PE</b>
        <a href="/admin" className="bg-[#CCFF00] text-black px-5 py-2 rounded-full text-[11px] font-black">ADMIN 🔒</a>
      </nav>
      <div className="p-4 text-center">
        <h1 className="text-[42px] font-black leading-[0.9] mt-6">¿DÓNDE ES?<br/><span className="text-[#CCFF00]">ACA PE</span></h1>
        <p className="text-[11px] opacity-50 mt-3">12 PLAZAS HOY | 240 BATALLAS | 5/5 ESTRELLAS | 1047 VISITAS</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto text-left">
          {PLAZAS.map(p=>(
            <div key={p.id} className="bg-[#111] border border-white/10 rounded-[24px] overflow-hidden">
              <img src={p.img} className="h-[220px] w-full object-cover"/>
              <div className="p-5">
                <span className="text-[10px] bg-[#CCFF00] text-black px-3 py-1 rounded-full font-black">{p.badge} • {p.distrito}</span>
                <h2 className="font-black text-[20px] mt-3 leading-none">{p.nombre}</h2>
                <p className="text-[12px] opacity-60 mt-1">{p.lugar} | {p.fecha} {p.hora}</p>
                <div className="text-[11px] mt-4 space-y-1.5 bg-black/50 rounded-xl p-3 border border-white/5">
                  <div>📍 LUGAR: <b className="text-white">{p.lugar}</b></div>
                  <div>🕐 HORA: <b>{p.hora}</b></div>
                  <div>💰 INSCRIPCIÓN: <b>{p.inscripcion}</b></div>
                  <div>🎤 HOST: <b>{p.host}</b></div>
                  <div>⚖️ JURADOS: <b>{p.jurados}</b></div>
                  <div>🏆 RESULTADO: <b className="text-[#CCFF00]">{p.resultado}</b></div>
                </div>
                <div className="flex gap-2 mt-4">
                  <button className="flex-1 bg-white text-black py-2.5 rounded-full text-[11px] font-black">VER MAPA →</button>
                  <button className="flex-1 bg-[#CCFF00] text-black py-2.5 rounded-full text-[11px] font-black">INSCRIBIRME</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
"use client"
import { useState } from "react"

const plazas = [
  { id:1, zona:"SUR", distrito:"BARRANCO", nombre:"PLAZA BARRANCO", hora:"Sáb 8PM", host:"@jotaflow", lugar:"Barranco", badge:"PRO", visitas:126, batallas:2, img:"https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600", destacada:true, live:true },
  { id:2, zona:"CENTRO", distrito:"MIRAFLORES", nombre:"PARQUE KENNEDY", hora:"Dom 4PM", host:"@llacalle", lugar:"Miraflores", badge:"OPEN", visitas:89, batallas:1, img:"https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600", destacada:false, live:true },
  { id:3, zona:"NORTE", distrito:"SMP", nombre:"PLAZA DE ARMAS SMP", hora:"Vie 8PM", host:"@zorraok", lugar:"SMP", badge:"UNDER", visitas:56, batallas:1, img:"https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600", destacada:false, live:false },
  { id:4, zona:"CENTRO", distrito:"CENTRO DE LIMA", nombre:"ALAMEDA CHABUCA", hora:"Sáb 3PM", host:"@mcperu", lugar:"Centro de Lima", badge:"SEMI", visitas:102, batallas:1, img:"https://images.unsplash.com/photo-1504704911898-68304a7d2807?w=600", destacada:true, live:true },
  { id:5, zona:"SUR", distrito:"VILLA EL SALVADOR", nombre:"PARQUE VES", hora:"Dom 5PM", host:"@elsalvador", lugar:"Villa El Salvador", badge:"OPEN", visitas:78, batallas:2, img:"https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600", destacada:false, live:false },
  { id:6, zona:"NORTE", distrito:"COMAS", nombre:"PARQUE COMAS", hora:"Sáb 4PM", host:"@mcperu", lugar:"Comas", badge:"PRO", visitas:95, batallas:3, img:"https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=600", destacada:true, live:false },
]

export default function Page(){
  const [filtro, setFiltro] = useState("TODOS")
  const filtradas = filtro==="TODOS"? plazas : plazas.filter(p=>p.zona===filtro)

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white relative overflow-hidden">
      {/* FONDO GRAFFITI */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.06] anton text-[18vw] leading-none">ACA PE</div>
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-[5%] top-[20%] w-2 h-2 bg-[#CCFF00] rounded-full blur-[1px]"></div>
        <div className="absolute right-[10%] top-[40%] w-1 h-1 bg-[#ff2d95] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-6">
        {/* HEADER */}
        <div className="flex justify-between items-start">
          <div className="anton text-[36px] leading-none tracking-tighter" style={{textShadow:"3px 3px 0 #CCFF00"}}>ACA.PE<br/><span className="text-[10px] tracking-[0.4em] opacity-60 font-sans">¿DÓNDE ES? ACA PE</span></div>
          <div className="bg-white text-black px-3 py-1 rounded-full text-[10px] font-black">ADMIN 🔒</div>
        </div>

        {/* HERO */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-3 py-1 text-[10px] tracking-widest mb-4"><span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span> 4 BATALLAS HOY</div>
          <h1 className="anton text-[52px] leading-[0.85] uppercase">¿DÓNDE ES?<br/><span className="text-[64px] text-[#CCFF00] graffiti-outline">ACA PE</span></h1>
          <p className="mt-4 text-white/60 text-[12px] max-w-lg mx-auto">El mapa real del freestyle de Lima — sin humo, puro barrio. Plazas verificadas, horarios que si se cumplen, y el host que responde DM.</p>
          <div className="mt-6 flex justify-center gap-3">
            <button className="bg-[#CCFF00] text-black px-5 py-2.5 rounded-full text-[11px] font-black">VER PLAZAS HOY →</button>
            <button className="bg-white/10 backdrop-blur px-5 py-2.5 rounded-full text-[11px] font-bold">AGREGAR MI PLAZA</button>
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-4 gap-3 mt-10">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center"><div className="font-black text-[18px]">12</div><div className="text-[8px] opacity-50 tracking-widest mt-1">PLAZAS</div></div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center"><div className="font-black text-[18px]">340</div><div className="text-[8px] opacity-50 tracking-widest mt-1">FREESTYLERS</div></div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center"><div className="font-black text-[18px]">S/5 +</div><div className="text-[8px] opacity-50 tracking-widest mt-1">INGRESOS</div></div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center"><div className="font-black text-[18px]">1047</div><div className="text-[8px] opacity-50 tracking-widest mt-1">VISITAS HOY</div></div>
        </div>

        {/* FILTROS */}
        <div className="flex justify-center gap-2 mt-8 flex-wrap">
          {["TODOS","HOY","NORTE","SUR","CENTRO"].map(f=>(
            <button key={f} onClick={()=>setFiltro(f)} className={`px-4 py-2 rounded-full text-[11px] font-black tracking-wider ${filtro===f? 'bg-[#CCFF00] text-black shadow-[0_0_15px_rgba(204,255,0,0.5)]' : 'bg-white/10 text-white/70'}`}>{f}</button>
          ))}
        </div>

        {/* GRID PLAZAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
          {filtradas.map(plaza=>(
            <div key={plaza.id} className="bg-white rounded-[18px] overflow-hidden text-black group hover:scale-[1.01] transition-transform">
              <div className="relative h-[190px]">
                <img src={plaza.img} className="w-full h-full object-cover" />
                <div className="absolute top-3 left-3 flex gap-1">
                  <span className="bg-black text-white text-[8px] font-black px-2 py-1 rounded-full">{plaza.distrito}</span>
                  {plaza.destacada && <span className="bg-[#CCFF00] text-black text-[8px] font-black px-2 py-1 rounded-full">DESTACADA</span>}
                  <span className="bg-[#CCFF00] text-black text-[8px] font-black px-2 py-1 rounded-full">VERIFICADO</span>
                </div>
                {plaza.live && <span className="absolute top-3 right-3 bg-red-600 text-white text-[8px] font-black px-2 py-1 rounded-full">● LIVE</span>}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-4 text-center">
                <h3 className="font-black text-[16px] tracking-tighter">{plaza.nombre}</h3>
                <div className="flex justify-center gap-2 mt-2 text-[10px] text-black/50"><span>🕒 {plaza.hora}</span><span>{plaza.host}</span><span>📍 {plaza.lugar}</span><span className="bg-black text-white px-2 rounded-full text-[8px]">{plaza.badge}</span></div>
                <button className="mt-4 w-full bg-black text-white py-2.5 rounded-full text-[11px] font-black">📍 CÓMO LLEGAR — VER EN MAPS</button>
                <button className="mt-2 w-full bg-white border border-black py-2.5 rounded-full text-[11px] font-black">VER BATALLAS ({plaza.batallas})</button>
                <div className="mt-3 text-[8px] opacity-40 tracking-widest">{plaza.visitas} VISITAS • ACTIVA</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
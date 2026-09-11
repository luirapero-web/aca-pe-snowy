"use client"
import { useState } from "react"

const PLAZAS = [
  {id:1, distrito:"JESÚS MARÍA", tag:"DESTACADA", estado:"VERIFICADO", live:true, nombre:"CLASIFICATORIA 08", hora:"Sab 4:30PM", host:"Natan - ZK", lugar:"JESÚS MARÍA", tipo:"PRO", visitas:126, img: "/plazas/campito.webp", data:{LUGAR:"CAMPO DE MARTE - ENTRADA AV. SALAVERRY", HORA:"4:30 PM", INSCRIPCION:"5 - 7 SOLES", HOST:"NATAN - ZK", JURADOS:"LOA - KEDRIC - BEEF", RESULTADO:"100 SOLES + CUPO"}},
  {id:2, distrito:"MIRAFLORES", tag:"", estado:"VERIFICADO", live:true, nombre:"PARQUE KENNEDY", hora:"Dom 4PM", host:"@lacalle", lugar:"Miraflores", tipo:"OPEN", visitas:89, img:"https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800", data:{LUGAR:"Parque Kennedy", HORA:"4:00 PM", INSCRIPCION:"GRATIS", HOST:"JOTA FLOW", JURADOS:"POR CONFIRMAR", RESULTADO:"50 SOLES"}},
  {id:3, distrito:"SMP", tag:"", estado:"VERIFICADO", live:false, nombre:"PLAZA DE ARMAS SMP", hora:"Vie 5PM", host:"@zcrank", lugar:"SMP", tipo:"UNDER", visitas:56, img:"https://images.unsplash.com/photo-1518831959646-742a3a5b6f6b?w=800", data:{LUGAR:"Plaza de Armas SMP", HORA:"5:00 PM", INSCRIPCION:"3 SOLES", HOST:"MC CALLE", JURADOS:"VITTO - KAOS", RESULTADO:"70 SOLES"}},
  {id:4, distrito:"CENTRO DE LIMA", tag:"DESTACADA", estado:"VERIFICADO", live:true, nombre:"ALAMEDA CHABUCA", hora:"Sab 3PM", host:"@mcperu", lugar:"Centro de Lima", tipo:"SEMI", visitas:102, img:"https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800", data:{LUGAR:"Alameda Chabuca", HORA:"3:00 PM", INSCRIPCION:"4 SOLES", HOST:"LUCAS", JURADOS:"LEO - CHINO", RESULTADO:"80 SOLES"}},
  {id:5, distrito:"VILLA EL SALVADOR", tag:"", estado:"VERIFICADO", live:false, nombre:"PARQUE VES", hora:"Dom 4PM", host:"@brayan", lugar:"VES", tipo:"HOT", visitas:78, img:"https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800", data:{LUGAR:"Parque Central VES", HORA:"4:00 PM", INSCRIPCION:"GRATIS", HOST:"BRAYAN", JURADOS:"JOTA - STICK", RESULTADO:"40 SOLES"}},
  {id:6, distrito:"COMAS", tag:"", estado:"VERIFICADO", live:false, nombre:"PLAZA NORTE COMAS", hora:"Sab 5:30PM", host:"@dark", lugar:"Comas", tipo:"PRO", visitas:95, img:"https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?w=800", data:{LUGAR:"Parque Sinchi Roca", HORA:"5:30 PM", INSCRIPCION:"5 SOLES", HOST:"DARK", JURADOS:"RACSO - YAN", RESULTADO:"60 SOLES"}},
]

export default function Home(){
  const [filtro,setFiltro]=useState("TODOS")
  const [modal,setModal]=useState<any>(null)
  const filtradas = PLAZAS.filter(p=> filtro==="TODOS" || p.distrito.includes(filtro) || (filtro==="NORTE" && ["COMAS","SMP"].includes(p.distrito)) || (filtro==="SUR" && ["BARRANCO","VES","VILLA EL SALVADOR"].includes(p.distrito)) || (filtro==="CENTRO" && ["MIRAFLORES","CENTRO DE LIMA"].includes(p.distrito)))

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      <nav className="flex justify-between p-4 items-center">
        <div className="font-black text-[22px] tracking-tighter leading-none">ACA<span className="text-[#CCFF00]">.PE</span><div className="text-[8px] font-normal tracking-[3px] opacity-50">¿DÓNDE ES? ACA PE</div></div>
        <a href="/admin" className="bg-white text-black px-4 py-1.5 rounded-full text-[10px] font-black">ADMIN 🔒</a>
      </nav>

      <div className="text-center px-4 mt-8">
        <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-3 py-1 text-[10px]"><span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span> 4 BATALLAS HOY</div>
        <h1 className="text-[48px] font-black leading-[0.85] mt-4">¿DÓNDE ES?<br/><span className="text-[#CCFF00]">ACA PE</span></h1>
        <p className="text-[11px] opacity-60 mt-4 max-w-[320px] mx-auto">El mapa real del freestyle de Lima — sin humo, puro barrio. Plazas verificadas, horarios que si se cumplen, y el host que responde DM.</p>
        <div className="flex justify-center gap-3 mt-5">
          <button className="bg-[#CCFF00] text-black px-5 py-2.5 rounded-full text-[11px] font-black">VER PLAZAS HOY →</button>
          <button className="bg-white/10 px-5 py-2.5 rounded-full text-[11px] font-bold">AGREGAR MI PLAZA</button>
        </div>

        <div className="grid grid-cols-4 gap-2 mt-10 max-w-md mx-auto">
          {[{n:"12",l:"PLAZAS"},{n:"340",l:"FREESTYLERS"},{n:"5/5 +",l:"INGRESOS"},{n:"1047",l:"VISITAS HOY"}].map((s,i)=>(
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-3"><div className="font-black text-[18px]">{s.n}</div><div className="text-[7px] opacity-40 tracking-widest">{s.l}</div></div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {["TODOS","HOY","NORTE","SUR","CENTRO"].map(f=>(
            <button key={f} onClick={()=>setFiltro(f)} className={`px-4 py-1.5 rounded-full text-[10px] font-black ${filtro===f?"bg-[#CCFF00] text-black":"bg-white/10"}`}>{f}</button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 max-w-5xl mx-auto mt-6">
        {filtradas.map(p=>(
          <div key={p.id} className="bg-white text-black rounded-[20px] overflow-hidden border border-white/10">
            <div className="relative"><img src={p.img} className="h-[200px] w-full object-cover"/><div className="absolute top-2 left-2 flex gap-1"><span className="bg-black text-white text-[8px] px-2 py-1 rounded-full font-black">{p.distrito}</span>{p.tag&&<span className="bg-[#CCFF00] text-black text-[8px] px-2 py-1 rounded-full font-black">{p.tag}</span>}<span className="bg-[#CCFF00] text-black text-[7px] px-2 py-1 rounded-full font-bold">{p.estado}</span></div>{p.live&&<span className="absolute top-2 right-2 bg-red-600 text-white text-[8px] px-2 py-1 rounded-full font-black">● LIVE</span>}</div>
            <div className="p-4 text-center">
              <h3 className="font-black text-[16px]">{p.nombre}</h3>
              <div className="text-[10px] opacity-60 flex justify-center gap-2 mt-1"><span>🕐 {p.hora}</span><span>{p.host}</span><span>{p.lugar}</span><span className="bg-black text-white px-1.5 rounded-full text-[7px]">{p.tipo}</span></div>
              <button className="w-full bg-black text-white py-2.5 rounded-full text-[10px] font-black mt-3">📍 CÓMO LLEGAR — VER EN MAPS</button>
              <button onClick={()=>setModal(p)} className="w-full border border-black py-2.5 rounded-full text-[10px] font-black mt-2">VER BATALLAS ({Math.floor(Math.random()*2)+1})</button>
              <div className="text-[8px] opacity-30 mt-2">{p.visitas} VISITAS • ACTIVA</div>
            </div>
          </div>
        ))}
      </div>

      {modal && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={()=>setModal(null)}>
          <div className="bg-[#111] border border-white/10 rounded-[24px] p-5 max-w-sm w-full text-white" onClick={e=>e.stopPropagation()}>
            <h2 className="font-black text-[20px]">{modal.nombre}</h2>
            <p className="text-[11px] opacity-60">{modal.distrito}</p>
            <div className="bg-black rounded-xl p-3 mt-4 text-[11px] space-y-2 border border-white/5">
              <div>📍 LUGAR: <b>{modal.data.LUGAR}</b></div>
              <div>🕐 HORA: <b>{modal.data.HORA}</b></div>
              <div>💰 INSCRIPCIÓN: <b>{modal.data.INSCRIPCION}</b></div>
              <div>🎤 HOST: <b>{modal.data.HOST}</b></div>
              <div>⚖️ JURADOS: <b>{modal.data.JURADOS}</b></div>
              <div>🏆 RESULTADO: <b className="text-[#CCFF00]">{modal.data.RESULTADO}</b></div>
            </div>
            <button onClick={()=>setModal(null)} className="w-full bg-[#CCFF00] text-black py-3 rounded-full font-black text-[12px] mt-4">CERRAR</button>
          </div>
        </div>
      )}
    </main>
  )
}
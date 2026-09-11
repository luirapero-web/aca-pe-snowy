"use client"
import { useState, useMemo } from "react"

const PLAZAS = [
  {id:1, distrito:"JESÚS MARÍA", tag:"DESTACADA", estado:"VERIFICADO", live:true, nombre:"CLASIFICATORIA 08", fecha:"SÁB 15 FEB", fechaISO:"2026-02-15", hora:"4:30PM", lugar:"CAMPO DE MARTE", host:"Natan - ZK", tipo:"PRO", visitas:126, img: "/plazas/cdmacape.webp", data:{LUGAR:"CAMPO DE MARTE - ENTRADA AV. SALAVERRY", HORA:"4:30 PM", FECHA:"Sábado 15 de Febrero", INSCRIPCION:"5 - 7 SOLES", HOST:"NATAN - ZK", JURADOS:"LOA - KEDRIC - BEEF", PREMIO:"100 SOLES + CUPO A NACIONAL"}},
  {id:2, distrito:"MIRAFLORES", tag:"", estado:"VERIFICADO", live:true, nombre:"PARQUE KENNEDY", fecha:"DOM 16 FEB", fechaISO:"2026-02-16", hora:"4PM", host:"@lacalle", lugar:"Miraflores", tipo:"OPEN", visitas:89, img:"https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800", data:{LUGAR:"Parque Kennedy", HORA:"4:00 PM", FECHA:"Domingo 16 Feb", INSCRIPCION:"GRATIS", HOST:"JOTA FLOW", JURADOS:"POR CONFIRMAR", PREMIO:"50 SOLES"}},
  {id:3, distrito:"SMP", tag:"", estado:"VERIFICADO", live:false, nombre:"PLAZA DE ARMAS SMP", fecha:"VIE 14 FEB", fechaISO:"2026-02-14", hora:"5PM", host:"@zcrank", lugar:"SMP", tipo:"UNDER", visitas:56, img:"https://images.unsplash.com/photo-1518831959646-742a3a5b6f6b?w=800", data:{LUGAR:"Plaza de Armas SMP", HORA:"5:00 PM", FECHA:"Viernes 14 Feb", INSCRIPCION:"3 SOLES", HOST:"MC CALLE", JURADOS:"VITTO - KAOS", PREMIO:"70 SOLES"}},
  {id:4, distrito:"CENTRO DE LIMA", tag:"DESTACADA", estado:"VERIFICADO", live:true, nombre:"ALAMEDA CHABUCA", fecha:"SÁB 15 FEB", fechaISO:"2026-02-15", hora:"3PM", host:"@mcperu", lugar:"Centro de Lima", tipo:"SEMI", visitas:102, img:"https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800", data:{LUGAR:"Alameda Chabuca", HORA:"3:00 PM", FECHA:"Sábado 15 Feb", INSCRIPCION:"4 SOLES", HOST:"LUCAS", JURADOS:"LEO - CHINO", PREMIO:"80 SOLES"}},
  {id:5, distrito:"VILLA EL SALVADOR", tag:"", estado:"VERIFICADO", live:false, nombre:"PARQUE VES", fecha:"DOM 16 FEB", fechaISO:"2026-02-16", hora:"4PM", host:"@brayan", lugar:"VES", tipo:"HOT", visitas:78, img:"https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800", data:{LUGAR:"Parque Central VES", HORA:"4:00 PM", FECHA:"Domingo 16 Feb", INSCRIPCION:"GRATIS", HOST:"BRAYAN", JURADOS:"JOTA - STICK", PREMIO:"40 SOLES"}},
  {id:6, distrito:"COMAS", tag:"", estado:"VERIFICADO", live:false, nombre:"PLAZA NORTE COMAS", fecha:"SÁB 15 FEB", fechaISO:"2026-02-15", hora:"5:30PM", host:"@dark", lugar:"Comas", tipo:"PRO", visitas:95, img:"https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?w=800", data:{LUGAR:"Parque Sinchi Roca", HORA:"5:30 PM", FECHA:"Sábado 15 Feb", INSCRIPCION:"5 SOLES", HOST:"DARK", JURADOS:"RACSO - YAN", PREMIO:"60 SOLES"}},
]

export default function Home(){
  const [filtro,setFiltro]=useState("TODOS")
  const [modal,setModal]=useState<any>(null)
  const [asistire, setAsistire] = useState<Record<number, boolean>>({})

  const filtradas = useMemo(()=>{
    const hoyISO = new Date().toISOString().slice(0,10)
    let list = PLAZAS.filter(p=>{
      if(filtro==="TODOS") return true
      if(filtro==="HOY") return p.fechaISO === hoyISO
      if(filtro==="NORTE" && ["COMAS","SMP"].includes(p.distrito)) return true
      if(filtro==="SUR" && ["BARRANCO","VES","VILLA EL SALVADOR"].includes(p.distrito)) return true
      if(filtro==="CENTRO" && ["MIRAFLORES","CENTRO DE LIMA"].includes(p.distrito)) return true
      if(p.distrito.includes(filtro)) return true
      return false
    })
    return list.sort((a,b)=> new Date(a.fechaISO).getTime() - new Date(b.fechaISO).getTime())
  },[filtro])

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      <nav className="flex justify-center p-5 items-center">
        <div className="font-black text-[22px] tracking-tighter leading-none text-center">ACA<span className="text-[#CCFF00]">.PE</span><div className="text-[8px] font-normal tracking-[3px] opacity-50">¿DÓNDE ES? ACA PE</div></div>
      </nav>

      <div className="text-center px-4 mt-4">
        <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-3 py-1 text-[10px]"><span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span> {filtradas.length} BATALLAS {filtro==="HOY"? "HOY" : ""}</div>
        <h1 className="text-[52px] font-black leading-[0.85] mt-4">¿DÓNDE ES?<br/><span className="text-[#CCFF00]">ACA PE</span></h1>
        <p className="text-[11px] opacity-60 mt-4 max-w-[320px] mx-auto">El mapa real del freestyle de Lima — sin humo, puro barrio.</p>
      </div>

      <div className="flex justify-center gap-2 mt-8 px-4">
        {["TODOS","HOY","NORTE","SUR","CENTRO"].map(f=>(
          <button key={f} onClick={()=>setFiltro(f)} className={`px-4 py-2 rounded-full text-[10px] font-black transition-all ${filtro===f?"bg-[#CCFF00] text-black":"bg-white/10 text-white"}`}>{f}</button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 max-w-5xl mx-auto mt-6">
        {filtradas.length===0? (
          <div className="col-span-full text-center py-16 opacity-40">
            <div className="text-[40px]">😴</div>
            <div className="font-black mt-2">NO HAY PLAZAS HOY</div>
            <div className="text-[11px] mt-1">Revisa en TODOS</div>
          </div>
        ) : filtradas.map(p=>(
          <div key={p.id} className="bg-white text-black rounded-[24px] overflow-hidden">
            <div className="relative cursor-pointer" onClick={()=>setModal(p)}>
              <img src={p.img} className="h-[210px] w-full object-cover"/>
              <div className="absolute top-3 left-3 flex gap-1">
                <span className="bg-black text-white text-[9px] px-2.5 py-1 rounded-full font-black">{p.distrito}</span>
                {p.tag&&<span className="bg-[#CCFF00] text-black text-[8px] px-2 py-1 rounded-full font-black">{p.tag}</span>}
                <span className="bg-[#CCFF00] text-black text-[7px] px-2 py-1 rounded-full font-bold">{p.estado}</span>
              </div>
              {p.live&&<span className="absolute top-3 right-3 bg-red-600 text-white text-[9px] px-2.5 py-1 rounded-full font-black">● LIVE</span>}
              <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur text-black text-[10px] px-2.5 py-1 rounded-full font-black">📅 {p.fecha} • {p.hora}</div>
            </div>

            <div className="p-4">
              <div className="flex justify-between items-start">
                <h3 className="font-black text-[17px] leading-none cursor-pointer" onClick={()=>setModal(p)}>{p.nombre}</h3>
                <span className="bg-black text-white px-2 py-0.5 rounded-full text-[8px] font-black">{p.tipo}</span>
              </div>
              <div className="text-[11px] opacity-60 mt-1">Host: {p.host} • {p.lugar}</div>

              {/* AQUÍ ESTABA EL ERROR - AHORA ESTÁ TODO DENTRO DEL MISMO GRID */}
              <div className="grid grid-cols-3 gap-2 mt-3 bg-[#F5F5F5] rounded-xl p-2.5 border border-black/5">
                <div>
                  <div className="text-[7px] tracking-widest opacity-40 font-black">🎤 HOST</div>
                  <div className="text-[10px] font-black leading-tight mt-0.5">{p.data.HOST}</div>
                </div>
                <div>
                  <div className="text-[7px] tracking-widest opacity-40 font-black">⚖️ JURADOS</div>
                  <div className="text-[10px] font-bold leading-tight mt-0.5">{p.data.JURADOS}</div>
                </div>
                <div>
                  <div className="text-[7px] tracking-widest opacity-40 font-black">🏆 PREMIO</div>
                  <div className="text-[10px] font-black leading-tight mt-0.5">{p.data.PREMIO}</div>
                </div>
              </div>

              <button
                onClick={()=>setAsistire(prev => ({...prev, [p.id]:!prev[p.id] }))}
                className={`w-full py-3.5 rounded-full text-[12px] font-black mt-3 border-2 transition-all ${
                  asistire[p.id]? "bg-[#CCFF00] border-[#CCFF00] text-black" : "bg-black border-black text-white"
                }`}
              >
                {asistire[p.id]? "✓ ASISTIRÉ" : "ASISTIRÉ"}
              </button>
              <div className="text-[8px] opacity-30 mt-2 text-center">{p.visitas + (asistire[p.id]?1:0)} VISITAS • ACTIVA</div>
            </div>
          </div>
        ))}
      </div>

      {modal && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={()=>setModal(null)}>
          <div className="bg-[#111] border border-white/10 rounded-[24px] p-5 max-w-sm w-full text-white" onClick={e=>e.stopPropagation()}>
            <h2 className="font-black text-[20px]">{modal.nombre}</h2>
            <p className="text-[11px] opacity-60">{modal.distrito} • {modal.data.FECHA} • {modal.data.HORA}</p>
            <div className="bg-black rounded-xl p-3 mt-4 text-[11px] space-y-2 border border-white/5">
              <div>📍 LUGAR: <b>{modal.data.LUGAR}</b></div>
              <div>📅 FECHA: <b>{modal.data.FECHA}</b></div>
              <div>🕐 HORA: <b>{modal.data.HORA}</b></div>
              <div>💰 INSCRIPCIÓN: <b>{modal.data.INSCRIPCION}</b></div>
              <div>🎤 HOST: <b>{modal.data.HOST}</b></div>
              <div>⚖️ JURADOS: <b>{modal.data.JURADOS}</b></div>
              <div>🏆 PREMIO: <b className="text-[#CCFF00]">{modal.data.PREMIO}</b></div>
            </div>
            <button onClick={()=>setModal(null)} className="w-full bg-[#CCFF00] text-black py-3 rounded-full font-black text-[12px] mt-4">CERRAR</button>
          </div>
        </div>
      )}
    </main>
  )
}
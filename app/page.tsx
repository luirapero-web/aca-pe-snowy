"use client"
import { useState, useMemo } from "react"

const PLAZAS = [
  {id:1, distrito:"JESUS MARIA", tag:"DESTACADA", estado:"VERIFICADO", live:true, nombre:"CLASIFICATORIA 08", fecha:"DOM 13 SET", fechaISO:"2026-09-13", hora:"4:30PM", lugar:"CAMPO DE MARTE - ENTRADA AV. SALAVERRY", tipo:"PLAZA", visitas:126, img: "/plazas/cdmacape.webp", data:{LUGAR:"CAMPO DE MARTE - ENTRADA AV. SALAVERRY", HORA:"4:30 PM", FECHA:"DOMINGO 13 DE SETIEMBRE", INSCRIPCION:"s/5 - s/7 filtros", HOST:"NATAN", BEATS:"ZK", JURADOS:"LOA<br/>KEDRIC<br/>BEEF", PREMIO:"100 SOLES<br/>CUPO A NACIONAL<br/>S/400 RUMBO A LA INTER"}},
  {id:2, distrito:"CERCADO DE LIMA", tag:"", estado:"VERIFICADO", live:true, nombre:"RAPBUCA", fecha:"LUN 14 SET", fechaISO:"2026-09-14", hora:"4PM", lugar:"PARQUE JUANA ALARCO DE DAMMERT", tipo:"OPEN", visitas:89, img:"/plazas/rapbuca.webp", data:{LUGAR:"Parque Juana Alarco de Dammert", HORA:"6:00 PM", FECHA:"Lunes 14 Setiembre", INSCRIPCION:"GRATIS", HOST:"Zismo", BEATS:"DJ ZK", JURADOS:"Sitho<br/>Sharp<br/>You", PREMIO:"s/80<br/>1 corte x Yisus<br/>1 prod x Flow<br/>1 pack x Wayquis"}},
]

function getBadge(fechaISO:string){
  const hoy = new Date(); hoy.setHours(0,0,0,0)
  const evento = new Date(fechaISO + "T12:00:00"); evento.setHours(0,0,0,0)
  const diff = Math.round((evento.getTime() - hoy.getTime()) / (1000*60*60*24))
  if(diff === 0) return { text:"● ACTIVO", clase:"bg-[#22c55e] text-black" }
  if(diff === 1) return { text:"● EN 1 DÍA", clase:"bg-white text-black" }
  if(diff > 1) return { text:`● EN ${diff} DÍAS`, clase:"bg-white text-black" }
  return { text:"● FINALIZADO", clase:"bg-black/60 text-white/70" }
}

export default function Home(){
  const [filtro,setFiltro]=useState("TODOS")
  const [modal,setModal]=useState<any>(null)
  const [asistire, setAsistire] = useState<Record<number, boolean>>({})
  const [seleccion, setSeleccion] = useState<number | null>(null)

  const filtradas = useMemo(()=>{
    const hoyISO = new Date().toISOString().slice(0,10)
    let list = PLAZAS.filter(p=>{
      if(filtro==="TODOS") return true
      if(filtro==="HOY") return p.fechaISO === hoyISO
      if(filtro==="NORTE" && ["COMAS","SMP"].includes(p.distrito)) return true
      if(filtro==="SUR" && ["BARRANCO","VES","VILLA EL SALVADOR"].includes(p.distrito)) return true
      if(filtro==="CENTRO" && ["MIRAFLORES","CENTRO DE LIMA","CERCADO DE LIMA","JESUS MARIA"].includes(p.distrito)) return true
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 max-w-5xl mx-auto mt-6">
        {filtradas.length===0? (
          <div className="col-span-full text-center py-16 opacity-40">
            <div className="text-[40px]">😴</div>
            <div className="font-black mt-2">NO HAY PLAZAS HOY</div>
            <div className="text-[11px] mt-1">Revisa en TODOS</div>
          </div>
        ) : filtradas.map((p, i)=>{
          const badge = getBadge(p.fechaISO)
          const activo = seleccion === p.id || asistire[p.id]
          return (
          <div
            key={p.id}
            onClick={()=> {
              if(seleccion === p.id){
                setModal(p)
              } else {
                setSeleccion(p.id)
              }
            }}
            className={`group bg-white text-black rounded-[24px] overflow-hidden border-[2.5px] cursor-pointer ${activo? 'border-[#CCFF00] shadow-[0_0_0_4px_rgba(204,255,0,0.35),0_8px_30px_rgba(0,0,0,0.5)]' : 'border-white shadow-[0_8px_30px_rgba(0,0,0,0.5)]'} ${i % 2 === 0? 'rotate-[-1.5deg]' : 'rotate-[1.5deg]'} hover:rotate-0 active:rotate-0 hover:scale-[1.02] active:scale-[1.02] transition-all duration-300 ease-out will-change-transform`}>

            <div className="relative overflow-hidden">
              <img src={p.img} className={`h-[210px] w-full object-cover transition-transform duration-500 ease-out ${activo? 'scale-110' : 'scale-100 group-hover:scale-110'}`}/>
              <div className="absolute top-3 left-3 flex gap-1">
                <span className="bg-black text-white text-[9px] px-2.5 py-1 rounded-full font-black">{p.distrito}</span>
                {p.tag&&<span className="bg-[#CCFF00] text-black text-[8px] px-2 py-1 rounded-full font-black">{p.tag}</span>}
                <span className="bg-[#CCFF00] text-black text-[7px] px-2 py-1 rounded-full font-bold">{p.estado}</span>
              </div>
              <span className={`absolute top-3 right-3 ${badge.clase} text-[9px] px-2.5 py-1 rounded-full font-black border border-black/10`}>{badge.text}</span>
              <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur text-black text-[10px] px-2.5 py-1 rounded-full font-black">📅 {p.fecha} • {p.hora}</div>
            </div>

            <div className="p-4">
              <div className="flex justify-between items-start">
                <h3 className="font-black text-[17px] leading-none">{p.nombre}</h3>
                <span className="bg-black text-white px-2 py-0.5 rounded-full text-[8px] font-black">{p.tipo}</span>
              </div>
              <div className="text-[11px] opacity-60 mt-1"> • {p.lugar}</div>

              <div className="flex gap-3 mt-3 bg-[#F5F5F5] rounded-xl p-2.5 border border-black/5">
                <div style={{width:"25%"}}>
                  <div className="text-[7px] tracking-widest opacity-40 font-black">🎤 HOST</div>
                  <div className="text-[10px] font-black leading-tight mt-0.5 break-words" dangerouslySetInnerHTML={{__html: p.data.HOST}} />
                  <div className="text-[7px] tracking-widest opacity-40 font-black mt-2">🎧 BEATS</div>
                  <div className="text-[10px] font-black leading-tight mt-0.5 break-words" dangerouslySetInnerHTML={{__html: p.data.BEATS || ""}} />
                </div>
                <div style={{width:"25%"}}>
                  <div className="text-[7px] tracking-widest opacity-40 font-black">⚖️ JURADOS</div>
                  <div className="text-[10px] font-bold leading-tight mt-0.5 break-words" dangerouslySetInnerHTML={{__html: p.data.JURADOS}} />
                </div>
                <div style={{width:"50%"}}>
                  <div className="text-[7px] tracking-widest opacity-40 font-black">🏆 PREMIO</div>
                  <div className="text-[10px] font-black leading-tight mt-0.5" dangerouslySetInnerHTML={{__html: p.data.PREMIO}} />
                </div>
              </div>

              <button
                onClick={(e)=>{
                  e.stopPropagation();
                  setAsistire(prev => ({...prev, [p.id]:!prev[p.id] }));
                  setSeleccion(p.id);
                }}
                className={`w-full py-3.5 rounded-full text-[12px] font-black mt-3 border-2 transition-all ${
                  asistire[p.id]? "bg-[#CCFF00] border-[#CCFF00] text-black" : "bg-black border-black text-white"
                }`}
              >
                {asistire[p.id]? "✓ ASISTIRÉ" : "ASISTIRÉ"}
              </button>
              <div className="text-[8px] opacity-30 mt-2 text-center">{p.visitas + (asistire[p.id]?1:0)} VISITAS • ACTIVA</div>
            </div>
          </div>
        )})}
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
              <div>🎤 HOST: <b dangerouslySetInnerHTML={{__html: modal.data.HOST}} /></div>
              <div>🎧 BEATS: <b dangerouslySetInnerHTML={{__html: modal.data.BEATS || "-"}} /></div>
              <div>⚖️ JURADOS: <b className="block mt-1" dangerouslySetInnerHTML={{__html: modal.data.JURADOS}} /></div>
              <div>🏆 PREMIO: <b className="text-[#CCFF00] block mt-1 leading-tight" dangerouslySetInnerHTML={{__html: modal.data.PREMIO}} /></div>
            </div>
            <button onClick={()=>setModal(null)} className="w-full bg-[#CCFF00] text-black py-3 rounded-full font-black text-[12px] mt-4">CERRAR</button>
          </div>
        </div>
      )}
    </main>
  )
}
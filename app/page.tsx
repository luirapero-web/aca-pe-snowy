"use client"
import { useState } from "react"

const eventosInicial = [
  { id:1, nombre:"CLASIFICATORIA 08", lugar:"Campo de Marte - Jesús María", fecha:"DOM 13 SET", hora:"5PM", inscripcion:"5 SOLES", host:"NATAN - ZK", jurados:"LOA - KEDRIC - BEEF", resultado:"Por jugar", asistentes:23, color:"#CCFF00" },
  { id:2, nombre:"LIMA NORTE UNDER", lugar:"Parque Sinchi Roca - Comas", fecha:"SAB 12 SET", hora:"4PM", inscripcion:"GRATIS", host:"JOTA", jurados:"SWEET - KIAN - GOAT", resultado:"Clasifica a Norte Final", asistentes:41, color:"#ff2d95" },
  { id:3, nombre:"SUR RANKS", lugar:"Parque Huayna Cápac - SJM", fecha:"DOM 14 SET", hora:"3:30PM", inscripcion:"3 SOLES", host:"CUBANITO", jurados:"MARICHI - ZERO", resultado:"Fecha 02", asistentes:18, color:"#00e5ff" },
  { id:4, nombre:"ESTE PUNCH", lugar:"Parque Canto Rey - SJL", fecha:"SAB 13 SET", hora:"5PM", inscripcion:"5 SOLES", host:"TURBO", jurados:"ZEG - SHUFFLE", resultado:"Semifinal", asistentes:56, color:"#CCFF00" },
  { id:5, nombre:"CALLAO BRAVOS", lugar:"Plaza Grau - Callao", fecha:"DOM 13 SET", hora:"4PM", inscripcion:"GRATIS", host:"GONZA", jurados:"WALY - JACHO", resultado:"Por definir", asistentes:12, color:"#ff2d95" },
  { id:6, nombre:"CENTRO LEYENDA", lugar:"Parque La Muralla - Centro", fecha:"VIE 12 SET", hora:"6PM", inscripcion:"2 SOLES", host:"KAOS", jurados:"SOYER - VILLESTE", resultado:"Final Centro", asistentes:33, color:"#00e5ff" },
]

export default function Page(){
  const [eventos, setEventos] = useState(eventosInicial)
  const [expandido, setExpandido] = useState<number|null>(null)
  const [voy, setVoy] = useState<number[]>([])

  const toggleAsistir = (id:number) => {
    if(voy.includes(id)){
      setVoy(voy.filter(v=>v!==id))
      setEventos(eventos.map(e=> e.id===id? {...e, asistentes:e.asistentes-1} : e))
    } else {
      setVoy([...voy, id])
      setEventos(eventos.map(e=> e.id===id? {...e, asistentes:e.asistentes+1} : e))
    }
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Space+Grotesk:wght@500;700;900&display=swap');
       .anton{font-family:'Anton',sans-serif}
        @keyframes slide{from{transform:translateY(24px);opacity:0}to{transform:translateY(0);opacity:1}}
        @keyframes float{0%,100%{transform:translateY(0) rotate(-12deg)}50%{transform:translateY(-10px) rotate(-10deg)}}
       .slide{animation:slide 0.6s ease both}
      `}</style>

      <main className="min-h-screen bg-[#0A0A0A] text-white relative overflow-hidden">
        {/* GRAFFITI FONDO ANIMADO */}
        <div className="pointer-events-none fixed inset-0">
          <div className="absolute -rotate-12 left-[-10%] top-[5%] text-[26vw] font-black leading-none anton text-white opacity-[0.03]">FREESTYLE</div>
          <div className="absolute rotate-6 right-[-10%] top-[30%] text-[20vw] font-black leading-none anton text-[#CCFF00] opacity-[0.04]">BARRIO</div>
          <div className="absolute -rotate-3 left-[10%] bottom-[5%] text-[18vw] font-black leading-none anton text-white opacity-[0.03]">ACÁ.PE</div>
          <div className="absolute left-[15%] top-[20%] w-3 h-3 rounded-full bg-[#CCFF00] blur-[1px]"></div>
          <div className="absolute right-[20%] top-[60%] w-2 h-2 rounded-full bg-[#ff2d95]"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 py-6">
          {/* HEADER ACA.PE */}
          <div className="flex justify-between items-center slide">
            <h1 className="anton text-[32px] tracking-tighter">ACA.PE</h1>
            <div className="bg-white text-black px-3 py-1 rounded-full text-[10px] font-black tracking-widest">acá.pe</div>
          </div>

          {/* TITULO DONDE ES HOY */}
          <div className="mt-8 slide" style={{animationDelay:"0.1s"}}>
            <p className="text-[12px] tracking-[0.4em] opacity-50">¿DONDE ES HOY?</p>
            <h2 className="anton text-[52px] md:text-[84px] leading-[0.85] uppercase mt-2">
              ACA PE<br/><span className="text-[#CCFF00]">EN TU BARRIO</span>
            </h2>
            <p className="mt-3 text-white/60 max-w-xl text-[14px]">Eventos de freestyle en cada parque de Lima. Toca un cuadro para ver info completa y dale a ASISTIRÉ.</p>
          </div>

          {/* GRID 6 EVENTOS INTERACTIVOS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {eventos.map((ev,i)=>(
              <div key={ev.id}
                onClick={()=> setExpandido(expandido===ev.id? null : ev.id)}
                className={`slide group cursor-pointer rounded-[24px] border-2 bg-[#111] p-5 transition-all duration-300 hover:scale-[1.02] hover:-rotate-1 ${expandido===ev.id? 'border-white col-span-1 md:col-span-2 lg:col-span-1 shadow-[0_20px_60px_rgba(0,0,0,0.6)]' : 'border-white/10'}`}
                style={{animationDelay:`${0.2 + i*0.08}s`, borderColor: expandido===ev.id? ev.color : undefined}}
              >
                <div className="flex justify-between">
                  <span className="text-[10px] font-black px-2.5 py-1 rounded-full" style={{background:ev.color, color:"black"}}>{ev.fecha} - {ev.hora}</span>
                  <span className="text-[11px] opacity-50">{ev.asistentes} van</span>
                </div>

                <h3 className="anton text-[28px] leading-[0.9] mt-4 uppercase group-hover:text-[#CCFF00] transition-colors">{ev.nombre}</h3>
                <p className="text-[12px] mt-2 text-white/60 flex items-center gap-1">📍 {ev.lugar}</p>

                {/* INFO QUE SE EXPANDE */}
                <div className={`grid transition-all duration-300 ${expandido===ev.id? 'grid-rows-[1fr] mt-4 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <div className="space-y-2 pt-3 border-t border-white/10 mt-3">
                      <div className="flex justify-between text-[12px]"><span className="opacity-50">INSCRIPCIÓN</span><b style={{color:ev.color}}>{ev.inscripcion}</b></div>
                      <div className="flex justify-between text-[12px]"><span className="opacity-50">HOST</span><b>{ev.host}</b></div>
                      <div className="flex justify-between text-[12px]"><span className="opacity-50">JURADOS</span><b>{ev.jurados}</b></div>
                      <div className="bg-white/5 rounded-xl p-3 mt-2"><span className="text-[10px] opacity-50">RESULTADO</span><div className="font-bold text-[13px] mt-1">{ev.resultado}</div></div>
                    </div>
                  </div>
                </div>

                {/* BOTON ASISTIRE */}
                <button
                  onClick={(e)=>{e.stopPropagation(); toggleAsistir(ev.id)}}
                  className={`mt-4 w-full py-3 rounded-full font-black text-[13px] tracking-wider transition-all ${voy.includes(ev.id)? 'bg-white text-black' : 'bg-[#CCFF00] text-black hover:bg-white'}`}
                >
                  {voy.includes(ev.id)? '✓ VOY A IR' : 'ASISTIRÉ →'}
                </button>
              </div>
            ))}
          </div>

          <p className="text-center text-[11px] opacity-30 mt-12 tracking-widest">ACA.PE - CULTURA HIP HOP DESDE EL BARRIO - LIMA PERÚ 2026</p>
        </div>
      </main>
    </>
  )
}
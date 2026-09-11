"use client"
import { useEffect } from "react"

export default function Page(){
  useEffect(()=>{
    // Fix Tailwind si no lo tienes
    const link = document.createElement("link")
    link.href = "https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
    link.rel = "stylesheet"
    if(!document.querySelector(`[href="${link.href}"]`)) document.head.appendChild(link)
  },[])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Space+Grotesk:wght@500;700&display=swap');
       .anton{font-family:'Anton',sans-serif}
        body{font-family:'Space Grotesk',sans-serif}
        @keyframes slideUp{from{transform:translateY(20px);opacity:0}to{transform:translateY(0);opacity:1}}
        @keyframes pulseSlow{0%,100%{box-shadow:0 0 0 0 rgba(204,255,0,0.4)}50%{box-shadow:0 0 0 12px rgba(204,255,0,0)}}
       .slide{animation:slideUp 0.6s ease both}
       .pulse{animation:pulseSlow 2s ease-in-out infinite}
      `}</style>

      <main className="min-h-screen bg-[#0A0A0A] text-white relative overflow-x-hidden selection:bg-[#CCFF00] selection:text-black">
        {/* FONDO GRAFFITI ANIMADO - ESTO ES LO QUE FALTABA */}
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
          <div className="absolute -rotate-12 left-[-10%] top-[10%] text-[22vw] font-black leading-none tracking-tighter text-white opacity-[0.035] anton">FREESTYLE</div>
          <div className="absolute rotate-6 right-[-5%] top-[35%] text-[18vw] font-black leading-none tracking-tighter text-[#CCFF00] opacity-[0.04] anton">LIMA</div>
          <div className="absolute -rotate-3 left-[5%] bottom-[15%] text-[20vw] font-black leading-none tracking-tighter text-white opacity-[0.03] anton">BARRIO</div>
          <div className="absolute rotate-12 left-[40%] top-[60%] text-[14vw] font-black leading-none tracking-tighter text-white opacity-[0.02] anton">ACÁ PE</div>
          <div className="absolute top-[12%] left-[20%] w-3 h-3 rounded-full bg-[#CCFF00] blur-[0.5px] opacity-70"></div>
          <div className="absolute top-[45%] right-[10%] w-2 h-2 rounded-full bg-[#CCFF00] opacity-50"></div>
          <div className="absolute bottom-[30%] left-[30%] w-1.5 h-1.5 rounded-full bg-white opacity-40"></div>
        </div>

        <div className="relative z-10 max-w-md mx-auto px-4 py-8 pb-20">
          {/* HEADER */}
          <div className="flex justify-between items-center mb-8 slide">
            <span className="bg-[#CCFF00] text-black px-3 py-1 rounded-full text-[11px] font-black tracking-wider">CAMPO DE MARTE</span>
            <span className="anton text-[12px] tracking-[0.25em] opacity-60">ACA PERU // 2026</span>
          </div>

          {/* TITULO */}
          <h1 className="anton text-[52px] leading-[0.85] tracking-[-0.05em] uppercase slide" style={{animationDelay:"0.1s"}}>
            BARRIO<br/>UNDERGROUND<br/><span className="text-[#CCFF00] drop-shadow-[4px_4px_0_#CCFF00] blur-[0.5px]">FREESTYLE REAL</span>
          </h1>

          {/* FLYER - AHORA SOLO FLYER */}
          <div className="mt-6 rounded-[20px] overflow-hidden border-2 border-[#CCFF00] shadow-[0_0_20px_rgba(204,255,0,0.4)] bg-[#111] slide" style={{animationDelay:"0.2s"}}>
            <img src="/flyer.jpg" alt="Clasificatoria 08" className="w-full block" />
            <a href="https://www.instagram.com/p/DdH-joVALUn/" target="_blank" className="block text-center bg-black/70 backdrop-blur text-white/60 py-2.5 text-[11px] tracking-wider">Ver post original en @campo_de_marte ↗</a>
          </div>

          {/* INFO */}
          <div className="grid grid-cols-2 gap-3 mt-6 slide" style={{animationDelay:"0.3s"}}>
            <div className="bg-white/[0.06] backdrop-blur border border-white/10 rounded-2xl p-4"><div className="text-[10px] tracking-widest opacity-50">FECHA</div><div className="font-bold text-[14px] mt-1">Domingo 13 SET</div></div>
            <div className="bg-white/[0.06] backdrop-blur border border-white/10 rounded-2xl p-4"><div className="text-[10px] tracking-widest opacity-50">HORA</div><div className="font-bold text-[14px] mt-1">5:00 PM (Sangre Nueva 4:30 PM)</div></div>
            <div className="bg-white/[0.06] backdrop-blur border border-white/10 rounded-2xl p-4 col-span-full"><div className="text-[10px] tracking-widest opacity-50">LUGAR</div><div className="font-bold text-[14px] mt-1">Campo de Marte - Entrada Av. Salaverri, Jesús María</div></div>
            <div className="bg-[#CCFF00]/90 border border-[#CCFF00] rounded-2xl p-4 col-span-full"><div className="text-[10px] tracking-widest text-black/60">INSCRIPCIÓN</div><div className="font-black text-black text-[16px] mt-1">05 Soles / 07 Filtros</div></div>
          </div>

          <div className="bg-white/[0.06] backdrop-blur border border-white/10 rounded-2xl p-5 mt-3 space-y-2 slide" style={{animationDelay:"0.4s"}}>
            <div className="flex gap-2"><span className="text-[10px] tracking-widest opacity-50">HOST - BEATS</span><span className="font-black text-[14px]">NATAN - ZK</span></div>
            <div className="flex gap-2"><span className="text-[10px] tracking-widest opacity-50">JURADOS</span><span className="font-bold text-[14px]">LOA - KEDRIC - BEEF</span></div>
            <div><span className="text-[10px] tracking-widest opacity-50">PREMIOS</span><div className="font-black text-[#CCFF00] text-[15px] leading-relaxed mt-1">100 SOLES + CUPO NACIONAL (400 SOLES) RUMBO A LA INTER</div></div>
          </div>

          {/* BOTON CON PULSE */}
          <a href="https://wa.me/51999999999?text=Quiero inscribirme a Clasificatoria 08" className="mt-8 flex justify-center bg-[#CCFF00] text-black py-4 rounded-full font-black tracking-wider text-[14px] pulse slide shadow-[0_10px_30px_rgba(0,0,0,0.4)]" style={{animationDelay:"0.5s"}}>
            INSCRIBIRME POR WHATSAPP →
          </a>
        </div>
      </main>
    </>
  )
}
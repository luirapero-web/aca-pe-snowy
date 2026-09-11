"use client"
import Script from "next/script"

const evento = {
  nombre: "ACA - CLASIFICATORIA 08",
  fecha: "Domingo 13 Julio",
  hora: "4:00 PM",
  lugar: "Campo de Marte, Jesús María",
  inscripcion: "S/ 5 - Puerta",
  host: "Luirapero + Kaos",
  jurados: ["Soyer", "Valleste", "Litros"],
  premios: ["S/300 + Clasificación a Nacional", "S/100", "Clasificación"],
  resultados: "Aún no hay resultados - La batalla se viene",
  instagram: "https://www.instagram.com/p/DdH-joVALUn/",
  whatsapp: "51999999999"
}

export default function Page(){
  return (
    <main style={{minHeight:"100vh", background:"#0a0a0a", padding:"20px"}}>
      <div style={{maxWidth:"600px", margin:"0 auto"}}>

        {/* HEADER */}
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"20px"}}>
          <span style={{background:"#ccff00", color:"black", padding:"4px 10px", fontWeight:900, borderRadius:"20px", fontSize:"12px"}}>HIP HOP CULTURA</span>
          <span className="anton" style={{fontSize:"14px", letterSpacing:"1px"}}>ACA PERU // 2026</span>
        </div>

        {/* TITULO GRAFFITI */}
        <h1 className="anton graffiti-text" style={{fontSize:"56px", lineHeight:"0.9", margin:"0 0 10px 0"}}>{evento.nombre.split(" - ")[0]}<br/><span style={{color:"white", WebkitTextStroke:"0"}}>{evento.nombre.split(" - ")[1]}</span></h1>
        <p className="spray anton" style={{display:"inline-block", fontSize:"22px", margin:"0"}}>BARRIO UNDERGROUND - FREESTYLE REAL</p>

        {/* FLYER IG */}
        <div className="card neon" style={{marginTop:"20px"}}>
          <blockquote className="instagram-media" data-instgrm-permalink={evento.instagram} data-instgrm-version="14" style={{width:"100%!important"}}></blockquote>
        </div>
        <Script src="//www.instagram.com/embed.js" async />

        {/* INFO GRID */}
        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:"12px", marginTop:"20px"}}>
          <div className="card"><small style={{opacity:0.5}}>FECHA</small><br/><b>{evento.fecha}</b></div>
          <div className="card"><small style={{opacity:0.5}}>HORA</small><br/><b>{evento.hora}</b></div>
          <div className="card"><small style={{opacity:0.5}}>LUGAR</small><br/><b>{evento.lugar}</b></div>
          <div className="card"><small style={{opacity:0.5}}>INSCRIPCIÓN</small><br/><b style={{color:"#ccff00"}}>{evento.inscripcion}</b></div>
        </div>

        <div className="card" style={{marginTop:"12px"}}>
          <small style={{opacity:0.5}}>HOST</small><br/><b className="anton" style={{fontSize:"18px"}}>{evento.host}</b>
          <div style={{marginTop:"12px"}}><small style={{opacity:0.5}}>JURADOS</small><br/>{evento.jurados.map(j=> <span key={j} style={{background:"white", color:"black", padding:"4px 8px", borderRadius:"20px", marginRight:"6px", fontWeight:700, fontSize:"13px"}}>{j}</span>)}</div>
          <div style={{marginTop:"12px"}}><small style={{opacity:0.5}}>PREMIOS</small><br/>{evento.premios.map((p,i)=> <div key={i} style={{marginTop:"4px"}}>🥇 {p}</div>)}</div>
        </div>

        <div className="card" style={{marginTop:"12px", borderStyle:"dashed"}}>
          <small style={{opacity:0.5}}>RESULTADOS</small><br/><p style={{margin:"8px 0 0 0"}}>{evento.resultados}</p>
        </div>

        {/* CTA */}
        <a href={`https://wa.me/${evento.whatsapp}?text=Quiero inscribirme a ${evento.nombre}`} style={{display:"block", textAlign:"center", background:"#ccff00", color:"black", padding:"16px", borderRadius:"30px", fontWeight:900, marginTop:"20px", textDecoration:"none"}} className="anton">INSCRIBIRME POR WHATSAPP →</a>

        <p style={{textAlign:"center", opacity:0.4, fontSize:"11px", marginTop:"20px"}}>ACA • Cultura Hip Hop desde el barrio • Lima Peru</p>
      </div>
    </main>
  )
}
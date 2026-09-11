"use client"

const evento = {
  nombre: "CLASIFICATORIA 08",
  fecha: "Domingo 13 SET",
  hora: "5:00 PM (Sangre Nueva 4:30 PM)",
  lugar: "Campo de Marte - Entrada Av. Salaverri, Jesús María",
  inscripcion: "05 Soles / 07 Filtros",
  host: "NATAN - ZK",
  jurados: ["LOA", "KEDRIC", "BEEF"],
  premios: "100 SOLES + CUPO NACIONAL (400 SOLES) RUMBO A LA INTER",
  instagramUrl: "https://www.instagram.com/p/DdH-joVALUn/",
}

export default function Page(){
  return (
    <main style={{background:"#0a0a0a", minHeight:"100vh", padding:"16px", fontFamily:"sans-serif"}}>
      <div style={{maxWidth:"500px", margin:"0 auto"}}>
        
        <div style={{display:"flex", justifyContent:"space-between", marginBottom:"16px"}}>
          <span style={{background:"#ccff00", color:"black", padding:"4px 10px", borderRadius:"20px", fontWeight:900, fontSize:"11px"}}>CAMPO DE MARTE</span>
          <span style={{color:"white", fontWeight:900, fontSize:"12px", letterSpacing:"1px"}}>ACA PERU // 2026</span>
        </div>

        <h1 style={{fontSize:"38px", fontWeight:900, lineHeight:"0.9", margin:"0", textTransform:"uppercase", color:"white"}}>BARRIO UNDERGROUND<br/><span style={{color:"#ccff00"}}>FREESTYLE REAL</span></h1>

        {/* SOLO FLYER LIMPIO */}
        <div style={{marginTop:"16px", borderRadius:"18px", overflow:"hidden", border:"2px solid #ccff00", boxShadow:"0 0 30px rgba(204,255,0,0.2)"}}>
          <img src="/flyer.jpg" alt="Clasificatoria 08" style={{width:"100%", display:"block"}} />
          <a href={evento.instagramUrl} target="_blank" style={{display:"block", background:"#111", color:"#aaa", textAlign:"center", padding:"10px", fontSize:"12px", textDecoration:"none"}}>
            Ver post original en @campo_de_marte ↗
          </a>
        </div>

        {/* INFO */}
        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px", marginTop:"16px"}}>
          <div style={{background:"#111", border:"1px solid #222", borderRadius:"12px", padding:"12px"}}><small style={{opacity:0.5}}>FECHA</small><br/><b>{evento.fecha}</b></div>
          <div style={{background:"#111", border:"1px solid #222", borderRadius:"12px", padding:"12px"}}><small style={{opacity:0.5}}>HORA</small><br/><b>{evento.hora}</b></div>
          <div style={{background:"#111", border:"1px solid #222", borderRadius:"12px", padding:"12px"}}><small style={{opacity:0.5}}>LUGAR</small><br/><b style={{fontSize:"13px"}}>{evento.lugar}</b></div>
          <div style={{background:"#111", border:"1px solid #222", borderRadius:"12px", padding:"12px"}}><small style={{opacity:0.5}}>INSCRIPCIÓN</small><br/><b style={{color:"#ccff00"}}>{evento.inscripcion}</b></div>
        </div>

        <div style={{background:"#111", border:"1px solid #222", borderRadius:"12px", padding:"12px", marginTop:"10px"}}>
          <div><small style={{opacity:0.5}}>HOST - BEATS</small> <b>{evento.host}</b></div>
          <div style={{marginTop:"8px"}}><small style={{opacity:0.5}}>JURADOS</small> <b>{evento.jurados.join(" - ")}</b></div>
          <div style={{marginTop:"8px"}}><small style={{opacity:0.5}}>PREMIOS</small> <b style={{color:"#ccff00"}}>{evento.premios}</b></div>
        </div>

        <a href="https://wa.me/51999999999" style={{display:"block", textAlign:"center", background:"#ccff00", color:"black", padding:"16px", borderRadius:"30px", fontWeight:900, marginTop:"16px", textDecoration:"none"}}>INSCRIBIRME POR WHATSAPP →</a>
      </div>
    </main>
  )
}

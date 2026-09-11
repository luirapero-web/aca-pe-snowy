"use client"
import { useState, useEffect } from "react"

export default function Admin(){
  const [pass,setPass]=useState("")
  const [ok,setOk]=useState(false)
  const [plazas,setPlazas]=useState<any[]>([])
  const [f,setF]=useState({nombre:"",distrito:"",lugar:"",fecha:"",hora:"",inscripcion:"",host:"",jurados:"",resultado:"",zona:"SUR",badge:"HOT",img:""})

  useEffect(()=>{
    const s=localStorage.getItem("aca_plazas_admin")
    if(s) setPlazas(JSON.parse(s))
  },[])
  useEffect(()=>{ localStorage.setItem("aca_plazas_admin",JSON.stringify(plazas)) },[plazas])

  if(!ok){
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center p-6">
        <div className="bg-[#111] border border-white/10 rounded-2xl p-6 w-full max-w-sm text-center">
          <h1 className="font-black">ACA.PE / ADMIN 🔒</h1>
          <input type="password" value={pass} onChange={e=>setPass(e.target.value)} placeholder="Clave" className="mt-4 w-full bg-black border border-white/10 rounded-xl p-3 text-[12px]"/>
          <button onClick={()=> pass==="ACA2026"? setOk(true):alert("Clave incorrecta")} className="mt-3 w-full bg-[#CCFF00] text-black py-3 rounded-full font-black text-[12px]">ENTRAR →</button>
          <p className="text-[10px] opacity-30 mt-2">Clave: ACA2026</p>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white p-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-[20px] font-black">EDITOR ACA.PE</h1>
        <div className="bg-[#111] border border-white/10 rounded-2xl p-4 mt-4 grid grid-cols-2 gap-2">
          <input className="col-span-2 bg-black border border-white/10 rounded-xl p-3 text-[12px]" placeholder="NOMBRE EJ: PLAZA BARRANCO" value={f.nombre} onChange={e=>setF({...f,nombre:e.target.value})}/>
          <input className="bg-black border border-white/10 rounded-xl p-3 text-[12px]" placeholder="DISTRITO" value={f.distrito} onChange={e=>setF({...f,distrito:e.target.value})}/>
          <input className="bg-black border border-white/10 rounded-xl p-3 text-[12px]" placeholder="LUGAR" value={f.lugar} onChange={e=>setF({...f,lugar:e.target.value})}/>
          <input className="bg-black border border-white/10 rounded-xl p-3 text-[12px]" placeholder="FECHA" value={f.fecha} onChange={e=>setF({...f,fecha:e.target.value})}/>
          <input className="bg-black border border-white/10 rounded-xl p-3 text-[12px]" placeholder="HORA" value={f.hora} onChange={e=>setF({...f,hora:e.target.value})}/>
          <input className="bg-black border border-white/10 rounded-xl p-3 text-[12px]" placeholder="INSCRIPCIÓN" value={f.inscripcion} onChange={e=>setF({...f,inscripcion:e.target.value})}/>
          <input className="bg-black border border-white/10 rounded-xl p-3 text-[12px]" placeholder="HOST" value={f.host} onChange={e=>setF({...f,host:e.target.value})}/>
          <input className="bg-black border border-white/10 rounded-xl p-3 text-[12px]" placeholder="JURADOS" value={f.jurados} onChange={e=>setF({...f,jurados:e.target.value})}/>
          <input className="col-span-2 bg-black border border-white/10 rounded-xl p-3 text-[12px]" placeholder="RESULTADO" value={f.resultado} onChange={e=>setF({...f,resultado:e.target.value})}/>
          <input className="col-span-2 bg-black border border-white/10 rounded-xl p-3 text-[12px]" placeholder="LINK DE IMAGEN" value={f.img} onChange={e=>setF({...f,img:e.target.value})}/>
          <button onClick={()=>{ if(!f.nombre) return; setPlazas([...plazas,{id:Date.now(),...f,visitas:0,batallas:1}]); setF({nombre:"",distrito:"",lugar:"",fecha:"",hora:"",inscripcion:"",host:"",jurados:"",resultado:"",zona:"SUR",badge:"HOT",img:""}) }} className="col-span-2 bg-[#CCFF00] text-black py-3 rounded-full font-black text-[12px] mt-2">GUARDAR PLAZA →</button>
        </div>
        <div className="mt-6">
          <h2 className="text-[12px] font-black opacity-60">COPIA ESTE JSON Y PEGALO EN TU page.tsx:</h2>
          <pre className="bg-black border border-white/10 p-3 rounded-xl text-[9px] overflow-auto max-h-[400px] mt-2">{JSON.stringify(plazas, null, 2)}</pre>
        </div>
        <a href="/" className="mt-6 inline-block bg-white text-black px-5 py-2 rounded-full text-[11px] font-black">← VOLVER A ACA.PE</a>
      </div>
    </main>
  )
}
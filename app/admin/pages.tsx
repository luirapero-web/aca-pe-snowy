"use client"
import { useState, useEffect } from "react"

export default function AdminPage(){
  const [auth, setAuth] = useState(false)
  const [pass, setPass] = useState("")
  const [plazas, setPlazas] = useState<any[]>(()=> {
    if(typeof window==="undefined") return []
    const s = localStorage.getItem("aca_plazas")
    return s? JSON.parse(s) : []
  })
  const [form, setForm] = useState({nombre:"", lugar:"", fecha:"", hora:"", inscripcion:"", host:"", jurados:"", resultado:"", distrito:"", zona:"SUR", img:"", destacada:false, live:false})

  useEffect(()=>{ localStorage.setItem("aca_plazas", JSON.stringify(plazas)) },[plazas])

  if(!auth){
    return (
      <main className="min-h-screen bg-[#0A0A0A] text-white flex items-center justify-center p-6">
        <div className="bg-[#111] border border-white/10 rounded-2xl p-6 w-full max-w-sm text-center">
          <h1 className="font-black text-[20px]">ACA.PE / ADMIN 🔒</h1>
          <p className="text-[11px] opacity-60 mt-2">Ingresa la clave para editar</p>
          <input type="password" value={pass} onChange={e=>setPass(e.target.value)} placeholder="Clave" className="mt-4 w-full bg-black border border-white/10 rounded-xl p-3 text-[12px]"/>
          <button onClick={()=> pass==="ACA2026"? setAuth(true) : alert("Clave incorrecta")} className="mt-3 w-full bg-[#CCFF00] text-black py-3 rounded-full font-black text-[12px]">ENTRAR →</button>
          <p className="text-[10px] opacity-30 mt-3">Clave por defecto: ACA2026 - cámbiala en el código</p>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white p-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-[22px] font-black">EDITOR - ACA.PE</h1>
        <p className="text-[11px] opacity-60">Agrega: NOMBRE, LUGAR, FECHA, HORA, INSCRIPCIÓN, HOST, JURADOS, RESULTADO</p>
        <div className="bg-[#111] border border-white/10 rounded-2xl p-4 mt-4 grid grid-cols-2 gap-2">
          <input className="col-span-2 bg-black border border-white/10 rounded-xl p-3 text-[12px]" placeholder="NOMBRE" value={form.nombre} onChange={e=>setForm({...form,nombre:e.target.value})}/>
          <input className="bg-black border border-white/10 rounded-xl p-3 text-[12px]" placeholder="DISTRITO" value={form.distrito} onChange={e=>setForm({...form,distrito:e.target.value})}/>
          <input className="bg-black border border-white/10 rounded-xl p-3 text-[12px]" placeholder="LUGAR" value={form.lugar} onChange={e=>setForm({...form,lugar:e.target.value})}/>
          <input className="bg-black border border-white/10 rounded-xl p-3 text-[12px]" placeholder="FECHA" value={form.fecha} onChange={e=>setForm({...form,fecha:e.target.value})}/>
          <input className="bg-black border border-white/10 rounded-xl p-3 text-[12px]" placeholder="HORA" value={form.hora} onChange={e=>setForm({...form,hora:e.target.value})}/>
          <input className="bg-black border border-white/10 rounded-xl p-3 text-[12px]" placeholder="INSCRIPCIÓN" value={form.inscripcion} onChange={e=>setForm({...form,inscripcion:e.target.value})}/>
          <input className="bg-black border border-white/10 rounded-xl p-3 text-[12px]" placeholder="HOST" value={form.host} onChange={e=>setForm({...form,host:e.target.value})}/>
          <input className="bg-black border border-white/10 rounded-xl p-3 text-[12px]" placeholder="JURADOS" value={form.jurados} onChange={e=>setForm({...form,jurados:e.target.value})}/>
          <input className="col-span-2 bg-black border border-white/10 rounded-xl p-3 text-[12px]" placeholder="RESULTADO" value={form.resultado} onChange={e=>setForm({...form,resultado:e.target.value})}/>
          <button onClick={()=>{ if(!form.nombre) return; setPlazas([...plazas,{id:Date.now(),...form,visitas:0,batallas:1,badge:"PRO"}]); setForm({nombre:"", lugar:"", fecha:"", hora:"", inscripcion:"", host:"", jurados:"", resultado:"", distrito:"", zona:"SUR", img:"", destacada:false, live:false}) }} className="col-span-2 bg-[#CCFF00] text-black py-3 rounded-full font-black text-[12px] mt-2">GUARDAR EN BORRADOR →</button>
        </div>
        <pre className="bg-black p-3 rounded-xl text-[10px] overflow-auto max-h-[300px] mt-6">{JSON.stringify(plazas, null, 2)}</pre>
        <a href="/" className="mt-4 inline-block bg-white text-black px-5 py-2 rounded-full text-[11px] font-black">VER WEB →</a>
      </div>
    </main>
  )
}
"use client"
import { useState, useEffect } from "react"

export default function AdminPage(){
  const [plazas, setPlazas] = useState<any[]>(()=>{
    if(typeof window==="undefined") return []
    const saved = localStorage.getItem("aca_plazas")
    return saved? JSON.parse(saved) : []
  })
  const [form, setForm] = useState({
    nombre:"", lugar:"", fecha:"", hora:"", inscripcion:"", host:"", jurados:"", resultado:"",
    distrito:"", zona:"SUR", img:"", destacada:false, live:false
  })

  useEffect(()=>{ localStorage.setItem("aca_plazas", JSON.stringify(plazas)) },[plazas])

  const add = ()=>{
    if(!form.nombre ||!form.lugar) return alert("Falta NOMBRE y LUGAR")
    setPlazas([...plazas, {id:Date.now(),...form, visitas:0, batallas:1, badge:"PRO"}])
    setForm({nombre:"", lugar:"", fecha:"", hora:"", inscripcion:"", host:"", jurados:"", resultado:"", distrito:"", zona:"SUR", img:"", destacada:false, live:false})
  }

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white p-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-[28px] font-black">ACA.PE - EDITOR BORRADOR</h1>
        <p className="text-[12px] opacity-60 mt-1">Esta es tu interfaz para editar. Lo que guardes aquí se queda en tu celular. Cuando quieras que lo vea todo el mundo, copias el JSON de abajo y lo pegas en tu app/page.tsx y le das Commit. Luego ya estará en /admin cuando tengas el dominio.</p>

        <div className="bg-[#111] border border-white/10 rounded-2xl p-4 mt-6 grid grid-cols-2 gap-3">
          <input className="col-span-2 bg-black border border-white/10 rounded-xl p-3 text-[12px]" placeholder="NOMBRE: Ej PLAZA BARRANCO" value={form.nombre} onChange={e=>setForm({...form,nombre:e.target.value})}/>
          <input className="bg-black border border-white/10 rounded-xl p-3 text-[12px]" placeholder="DISTRITO: BARRANCO" value={form.distrito} onChange={e=>setForm({...form,distrito:e.target.value})}/>
          <input className="bg-black border border-white/10 rounded-xl p-3 text-[12px]" placeholder="LUGAR: Parque Barranco" value={form.lugar} onChange={e=>setForm({...form,lugar:e.target.value})}/>
          <input className="bg-black border border-white/10 rounded-xl p-3 text-[12px]" placeholder="FECHA: Sáb 13 SET" value={form.fecha} onChange={e=>setForm({...form,fecha:e.target.value})}/>
          <input className="bg-black border border-white/10 rounded-xl p-3 text-[12px]" placeholder="HORA: 5:00 PM" value={form.hora} onChange={e=>setForm({...form,hora:e.target.value})}/>
          <input className="bg-black border border-white/10 rounded-xl p-3 text-[12px]" placeholder="INSCRIPCIÓN: 5 SOLES" value={form.inscripcion} onChange={e=>setForm({...form,inscripcion:e.target.value})}/>
          <input className="bg-black border border-white/10 rounded-xl p-3 text-[12px]" placeholder="HOST: NATAN - ZK / @jotaflow" value={form.host} onChange={e=>setForm({...form,host:e.target.value})}/>
          <input className="bg-black border border-white/10 rounded-xl p-3 text-[12px]" placeholder="JURADOS: LOA - KEDRIC - BEEF" value={form.jurados} onChange={e=>setForm({...form,jurados:e.target.value})}/>
          <input className="col-span-2 bg-black border border-white/10 rounded-xl p-3 text-[12px]" placeholder="RESULTADO: 100 SOLES + CUPO NACIONAL" value={form.resultado} onChange={e=>setForm({...form,resultado:e.target.value})}/>
          <select className="bg-black border border-white/10 rounded-xl p-3 text-[12px]" value={form.zona} onChange={e=>setForm({...form,zona:e.target.value})}>
            <option>NORTE</option><option>SUR</option><option>CENTRO</option><option>ESTE</option><option>CALLAO</option>
          </select>
          <input className="bg-black border border-white/10 rounded-xl p-3 text-[12px]" placeholder="IMG URL" value={form.img} onChange={e=>setForm({...form,img:e.target.value})}/>
          <button onClick={add} className="col-span-2 bg-[#CCFF00] text-black py-3 rounded-full font-black text-[12px]">AGREGAR A BORRADOR →</button>
        </div>

        <div className="mt-6">
          <h2 className="font-black text-[14px]">BORRADORES ({plazas.length}) - Solo tú los ves ahora</h2>
          <div className="mt-3 space-y-2">
            {plazas.map((p:any)=><div key={p.id} className="bg-white text-black rounded-xl p-3 flex justify-between"><div><b className="text-[12px]">{p.nombre}</b><div className="text-[10px] opacity-60">{p.lugar} | {p.fecha} {p.hora} | {p.inscripcion} | {p.host} | {p.jurados} | {p.resultado}</div></div><button onClick={()=>setPlazas(plazas.filter(x=>x.id!==p.id))} className="bg-red-600 text-white px-2 py-1 rounded-full text-[10px]">X</button></div>)}
          </div>
        </div>

        <div className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-4">
          <div className="font-black text-[12px]">PASO FINAL PARA QUE LO VEA TODO EL MUNDO:</div>
          <p className="text-[11px] opacity-60 mt-1">Copia esto y reemplaza tu array DEFAULT_PLAZAS en app/page.tsx, luego Commit en GitHub. Ahí ya queda para todos. Cuando compres aca.pe, este mismo archivo será aca.pe/admin</p>
          <pre className="bg-black p-3 rounded-xl text-[10px] overflow-auto max-h-[300px] mt-3">{JSON.stringify(plazas, null, 2)}</pre>
        </div>
      </div>
    </main>
  )
}
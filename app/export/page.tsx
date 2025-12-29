
'use client';
import { useState } from 'react';
export default function Page(){
  const [q,setQ]=useState('');
  const [out,setOut]=useState<any>(null);
  async function run(path:string){
    const r=await fetch(path,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({q})});
    setOut(await r.json());
  }
  return (<div className="card">
    <h2>Tool</h2>
    <input placeholder="Enter keyword" value={q} onChange={e=>setQ(e.target.value)} />
    <div style={{marginTop:8,display:'flex',gap:8,flexWrap:'wrap'}}>
      <button onClick={()=>run('/app/api/analyze')}>Analyze</button>
      <button onClick={()=>run('/app/api/offers')}>Offers</button>
      <button onClick={()=>run('/app/api/domains')}>Domains</button>
      <button onClick={()=>run('/app/api/blueprint')}>Blueprint</button>
      <button onClick={()=>run('/app/api/export')}>Export</button>
    </div>
    <pre className="card" style={{whiteSpace:'pre-wrap'}}>{out?JSON.stringify(out,null,2):'Results appear here'}</pre>
  </div>);
}

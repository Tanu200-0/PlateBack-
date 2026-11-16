import {useState} from 'react'
import {Provider,useApp} from './store'
import Donor from './Donor'
import Ngo from './Ngo'
import Impact from './Impact'
const TABS=[['donor','Donor'],['ngo','NGO'],['impact','Impact']]
function Shell(){
 const [tab,setTab]=useState('donor'),{reset}=useApp()
 return<div className="app"><header><h1>PlateBack</h1><p>Surplus food to the people who need it, before it spoils.</p>
  <nav>{TABS.map(([k,v])=><button key={k} className={tab===k?'on':''} onClick={()=>setTab(k)}>{v}</button>)}</nav></header>
  <main>{tab==='donor'&&<Donor go={()=>setTab('ngo')}/>}{tab==='ngo'&&<Ngo/>}{tab==='impact'&&<Impact/>}</main>
  <button className="reset" onClick={reset} title="Restore the starting demo data">Reset demo</button></div>}
export default()=><Provider><Shell/></Provider>

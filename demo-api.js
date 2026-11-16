/* Demo mode: replaces the server with an in-browser mock (data lives only in this browser). */
(()=>{const real=window.fetch.bind(window);
const LS={get(k,d){try{const v=JSON.parse(localStorage.getItem(k));return v??d}catch{return d}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch{}}};
const GR=["A+","A-","B+","B-","O+","O-","AB+","AB-"];
const CAN={"A+":["A+","A-","O+","O-"],"A-":["A-","O-"],"B+":["B+","B-","O+","O-"],"B-":["B-","O-"],"O+":["O+","O-"],"O-":["O-"],"AB+":GR,"AB-":["AB-","A-","B-","O-"]};
const ago=n=>new Date(Date.now()-n*864e5).toISOString().slice(0,10);
const seed=[["Hamza Raza","O+","DHA",140],["Sana Khan","A+","Gulshan-e-Iqbal",95],["Bilal Ahmed","B+","Clifton",30],["Mariam Shah","O-","North Nazimabad",200],["Usman Tariq","AB+","Saddar",110],["Zainab Farooq","A-","Korangi",60],["Faisal Malik","B-","Malir",180],["Hira Naz","O+","Gulshan-e-Iqbal",75],["Danish Qureshi","A+","DHA",130],["Rida Javed","B+","North Nazimabad",100],["Ahsan Parvez","O+","Clifton",260],["Noor Bano","AB-","DHA",91]];
let donors=LS.get("dhd_donors",null)||seed.map((d,i)=>({id:i+1,name:d[0],phone:"+92300000000"+i,grp:d[1],area:d[2],last:ago(d[3])}));
let reqs=LS.get("dhd_reqs",[]),otps={};
const banks=[["Sample Blood Bank – Gulshan","Gulshan-e-Iqbal",[12,3,18,2,25,4,6,1],2],["Sample Blood Bank – Clifton","Clifton",[20,6,9,1,14,2,3,0],5],["Sample Blood Bank – Saddar","Saddar",[4,1,7,0,11,3,2,1],1]].map((b,i)=>({id:i+1,name:b[0],area:b[1],stock:b[2],hours:b[3]}));
const days=d=>d?Math.max(0,Math.floor((Date.now()-Date.parse(d))/864e5)):999;
const pub=r=>{const p=r.name.trim().split(/\s+/);return{id:r.id,n:p[0]+(p[1]?" "+p[1][0]+".":""),g:r.grp,a:r.area,d:days(r.last)}};
const norm=p=>{p=String(p||"").replace(/[\s-]/g,"");if(/^03\d{9}$/.test(p))return"+92"+p.slice(1);if(/^\+?923\d{9}$/.test(p))return"+"+p.replace("+","");return null};
const J=(c,o)=>new Response(JSON.stringify(o),{status:c,headers:{"Content-Type":"application/json"}});
const E=(c,m)=>J(c,{error:m});
const save=()=>{LS.set("dhd_donors",donors);LS.set("dhd_reqs",reqs)};
window.fetch=async(u,o={})=>{
 if(typeof u!=="string"||!u.startsWith("/api/"))return real(u,o);
 const url=new URL(u,location.origin),meth=o.method||"GET",r=meth+" "+url.pathname;let b={};try{b=o.body?JSON.parse(o.body):{}}catch{}
 if(r==="GET /api/donors")return J(200,{donors:donors.map(pub)});
 if(r==="GET /api/banks")return J(200,{banks});
 if(r==="GET /api/stats")return J(200,{donors:donors.length,requests:reqs.length,fulfilled:reqs.filter(x=>x.status==="fulfilled").length});
 if(r==="POST /api/otp/send"){const ph=norm(b.phone);if(!ph)return E(400,"Enter a valid Pakistani mobile number, e.g. 0300 1234567.");const c=String(1000+Math.floor(Math.random()*9000));otps[ph]=c;return J(200,{ok:true,demoCode:c})}
 if(r==="POST /api/donors"){const ph=norm(b.phone),name=String(b.name||"").trim(),area=String(b.area||"").trim();
  if(!ph||name.length<2||!GR.includes(b.group)||!area)return E(400,"Please fill in all fields correctly.");if(b.consent!==true)return E(400,"Consent is required.");
  if(!otps[ph]||otps[ph]!==String(b.otp||""))return E(400,"That code is not correct. Check the 4 digits and try again.");
  if(donors.some(d=>d.phone===ph))return E(409,"This number is already registered.");
  delete otps[ph];const d={id:Math.max(0,...donors.map(x=>x.id))+1,name,phone:ph,grp:b.group,area,last:b.lastDonation||null};donors.push(d);save();return J(201,{donor:pub(d)})}
 if(r==="POST /api/contact"){const d=donors.find(x=>x.id===+b.donorId);if(!d||!norm(b.phone)||String(b.name||"").trim().length<2)return E(400,"Please enter your name and a valid mobile number.");return J(201,{ok:true})}
 if(r==="POST /api/requests"){const ph=norm(b.phone),units=+b.units,patient=String(b.patient||"").trim(),hospital=String(b.hospital||"").trim();
  if(!ph||patient.length<2||hospital.length<2||!GR.includes(b.group)||!(units>=1&&units<=10))return E(400,"Please fill in all fields correctly.");
  const m=donors.filter(d=>CAN[b.group].includes(d.grp)&&days(d.last)>=90).length,id=reqs.length+1,key=Math.random().toString(16).slice(2,10);
  reqs.push({id,key,patient,grp:b.group,units,urgency:b.urgency||"today",hospital,phone:ph,status:"open"});save();return J(201,{matched:m,id,key})}
 if(r==="POST /api/partners"){const ph=norm(b.phone);if(String(b.org||"").trim().length<2||String(b.name||"").trim().length<2||!ph)return E(400,"Please enter the organisation, contact person and a valid mobile number.");return J(201,{ok:true})}
 const q=url.pathname.match(/^\/api\/requests\/(\d+)(\/status)?$/);
 if(q){const x=reqs.find(v=>v.id===+q[1]);if(!x)return E(404,"Request not found.");
  if(meth==="GET"&&!q[2]){const p=x.patient.split(/\s+/);return J(200,{request:{id:x.id,g:x.grp,units:x.units,urgency:x.urgency,hospital:x.hospital,status:x.status,patient:p[0]+(p[1]?" "+p[1][0]+".":""),phone:x.phone}})}
  if(meth==="POST"&&q[2]){if(b.key!==x.key)return E(403,"Only the person who made this request can change its status.");x.status="fulfilled";save();return J(200,{ok:true,status:x.status})}}
 return E(404,"Not found.")};
})();

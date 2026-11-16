const $=s=>document.querySelector(s),esc=s=>String(s??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const id=new URLSearchParams(location.search).get("id")||location.pathname.split("/").pop(),UR={"6h":"Within 6 hours",today:"Today",week:"This week"};
async function load(){const r=await fetch("/api/requests/"+id),j=await r.json().catch(()=>({}));
if(!r.ok){$("#box").innerHTML=`<div class="msg er">${esc(j.error||"Request not found.")}</div>`;return}
const q=j.request,done=q.status==="fulfilled";let key="";try{key=localStorage.getItem("dh_"+id)||""}catch{}
const wa="https://wa.me/?text="+encodeURIComponent(`URGENT: ${q.units} unit(s) of ${q.g} blood needed at ${q.hospital}. Details and contact: ${location.href}`);
$("#box").innerHTML=`<div class="row"><div class="gt" style="font-size:2.6rem">${esc(q.g)}</div><div class="i"><strong>${q.units} unit(s) needed</strong><span class="bd ${done?"ok":"wt"}">${done?"Fulfilled":"Still needed"}</span><div>${esc(q.hospital)} · ${esc(UR[q.urgency]||q.urgency)} · for ${esc(q.patient)}</div></div></div>
<p class="sub" style="margin-top:16px">${done?"This request has been marked fulfilled. Thank you to everyone who helped.":"If you can donate and are eligible, please call the requester. The blood bank doctor makes the final decision."}</p>
<p>${done?"":`<a class="btn" href="tel:${esc(q.phone)}">Call ${esc(q.phone)}</a> `}<a class="btn sec" href="${wa}" target="_blank" rel="noopener">Share on WhatsApp</a>${key&&!done?` <button class="btn sec" id="mk">Mark as fulfilled</button>`:""}</p><div id="e"></div>`;
const mk=$("#mk");if(mk)mk.onclick=async()=>{const r=await fetch(`/api/requests/${id}/status`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({key,status:"fulfilled"})});if(r.ok)load();else $("#e").innerHTML='<div class="msg er">Could not update the status.</div>'}}
load();

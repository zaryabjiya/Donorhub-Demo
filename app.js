
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const GR=["A+","A-","B+","B-","O+","O-","AB+","AB-"];
const AR=["Gulshan-e-Iqbal","DHA","Clifton","North Nazimabad","Saddar","Korangi","Malir"];
const L={en:{nFind:"Find donors",nReq:"Request blood",nReg:"Become a donor",nBanks:"Blood banks",
h1:"Find a verified blood donor in minutes",sub:"Pick the blood group the patient needs, then an area. Eligible donors with compatible blood are shown first, and every donor is phone-verified.",
area:"Area",allAreas:"All areas",search:"Search donors",ready:"{n} ready",avail:"Available now",wait:"Eligible in {n} days",lastD:"Last donated {n} days ago",never:"No donation yet",
ask:"Request contact",asked:"Request sent",askNote:"The donor decides whether to share their number.",none:"No donors found. Try another area or send an emergency request.",
reqSub:"Tell us what is needed. Eligible donors with the same blood group get an alert.",patient:"Patient name",group:"Blood group",units:"Units needed",urg:"How urgent?",u6:"Within 6 hours",uToday:"Today",uWeek:"This week",hosp:"Hospital and city",phone:"Mobile number",sendReq:"Send emergency request",
reqDone:"Demo: {n} eligible {g} donors would be alerted right now.",see:"See matching donors",
regSub:"Join in two minutes. We only contact you when your blood group is needed nearby.",name:"Full name",last:"Last donation date (optional)",consent:"I agree to be contacted only when my blood group is needed.",verify:"Verify phone",
otpInfo:"We sent a 4-digit code to your phone.",demo:"Demo mode (no SMS provider yet). Your code: {c}",sendAsk:"Send request",cancel:"Cancel",err:"Something went wrong. Please try again.",reqSent:"{n} eligible donors who can give {g} have been alerted.",otp:"Verification code",confirm:"Confirm and join",bad:"That code is not correct. Check the 4 digits and try again.",
joined:"You are verified and visible to people searching for {g}.",joinedW:"You are verified. You will show as available in {n} days.",
banksSub:"Stock levels are updated by partner blood banks.",bank:"Blood bank",updated:"updated {h}h ago",
nQuiz:"Can I donate?",qSub:"Answer 6 quick questions. This is guidance only; the blood bank doctor decides.",yes:"Yes",no:"No",qCheck:"Check my eligibility",qOk:"You may be able to donate. The blood bank doctor makes the final decision.",qNo:"You may not be able to donate right now. Please check with a doctor or the blood bank.",qWhy:"Why:",
q1:"Are you between 18 and 60 years old?",q2:"Do you weigh at least 50 kg?",q3:"Do you feel healthy today (no fever, cough or infection)?",q4:"Have you donated blood in the last 3 months?",q5:"Any tattoo, piercing, surgery or tooth extraction in the last 6 months?",q6:"Hepatitis B or C, HIV, heart disease, uncontrolled diabetes, pregnancy or breastfeeding?",
howT:"How DonorHub works",s1t:"Register and verify",s1d:"Donors join with a phone OTP and say when they last donated.",s2t:"Search or request",s2d:"Pick a blood group and area. Compatible, eligible donors are shown first.",s3t:"Connect safely",s3d:"The donor decides whether to share their number. Numbers are never public.",
whyT:"Why not just a WhatsApp group?",grpT:"WhatsApp / Facebook groups",r1:"Donor phone verified",r2:"90-day eligibility tracked",r3:"Compatible groups matched",r4:"Live blood bank stock",r5:"Donor number stays private",
faqT:"Questions",f1q:"Is DonorHub free?",f1a:"Yes, for donors and families. Blood banks can partner with us for premium listings.",f2q:"Is my phone number public?",f2a:"No. A donor’s number is never shown publicly, and donors decide whether to share it after a request.",f3q:"Do you sell blood?",f3a:"Never. DonorHub only connects people; blood is never bought or sold.",f4q:"Who can donate?",f4a:"Try the Can I donate? quiz. The blood bank doctor always makes the final decision.",
ptT:"Blood bank or lab?",ptD:"List your stock and reach verified donors. Partner with DonorHub.",ptB:"Become a partner",stD:"donors",stR:"blood requests",stF:"marked fulfilled",
reqNote:"Your number will be visible on the shareable request page so donors can reach you.",share:"Share on WhatsApp",pageL:"Open request page",priv:"Privacy",terms:"Terms",contact:"Partner with us",compat:"Compatible",
pOrg:"Organisation name (blood bank, lab, hospital, NGO)",pName:"Contact person",pMail:"Email (optional)",pNote:"How would you like to work with us?",sendP:"Send enquiry",pDone:"Thank you! We have received your enquiry and will contact you soon.",
foot:"DonorHub is a student project. In a real emergency, contact the hospital blood bank directly."},
ur:{nFind:"ڈونر تلاش کریں",nReq:"خون کی درخواست",nReg:"ڈونر بنیں",nBanks:"بلڈ بینک",
h1:"منٹوں میں تصدیق شدہ ڈونر تلاش کریں",sub:"مریض کو جو بلڈ گروپ چاہیے وہ اور علاقہ چنیں۔ مطابقت رکھنے والے اہل ڈونر پہلے نظر آتے ہیں، اور ہر ڈونر کا فون تصدیق شدہ ہے۔",
area:"علاقہ",allAreas:"تمام علاقے",search:"ڈونر تلاش کریں",ready:"{n} تیار",avail:"ابھی دستیاب",wait:"{n} دن بعد اہل",lastD:"آخری عطیہ {n} دن پہلے",never:"ابھی تک عطیہ نہیں",
ask:"رابطے کی درخواست",asked:"درخواست بھیج دی گئی",askNote:"نمبر شیئر کرنے کا فیصلہ ڈونر خود کرتا ہے۔",none:"کوئی ڈونر نہیں ملا۔ دوسرا علاقہ آزمائیں یا ہنگامی درخواست بھیجیں۔",
reqSub:"بتائیں کیا چاہیے۔ اسی بلڈ گروپ کے اہل ڈونرز کو الرٹ ملے گا۔",patient:"مریض کا نام",group:"بلڈ گروپ",units:"درکار یونٹ",urg:"کتنی جلدی؟",u6:"6 گھنٹے کے اندر",uToday:"آج",uWeek:"اس ہفتے",hosp:"ہسپتال اور شہر",phone:"موبائل نمبر",sendReq:"ہنگامی درخواست بھیجیں",
reqDone:"ڈیمو: {n} اہل {g} ڈونرز کو ابھی الرٹ ملتا۔",see:"موزوں ڈونر دیکھیں",
regSub:"دو منٹ میں شامل ہوں۔ ہم صرف تب رابطہ کریں گے جب آپ کے قریب آپ کا بلڈ گروپ درکار ہو۔",name:"پورا نام",last:"آخری عطیہ کی تاریخ (اختیاری)",consent:"میں اتفاق کرتا/کرتی ہوں کہ صرف ضرورت پر رابطہ کیا جائے۔",verify:"فون کی تصدیق کریں",
otpInfo:"آپ کے فون پر 4 ہندسوں کا کوڈ بھیجا گیا۔",demo:"ڈیمو موڈ (ابھی SMS سروس نہیں)۔ آپ کا کوڈ: {c}",sendAsk:"درخواست بھیجیں",cancel:"منسوخ",err:"کچھ غلط ہو گیا۔ دوبارہ کوشش کریں۔",reqSent:"{n} اہل ڈونرز کو، جو {g} دے سکتے ہیں، الرٹ بھیج دیا گیا۔",otp:"تصدیقی کوڈ",confirm:"تصدیق کریں اور شامل ہوں",bad:"کوڈ درست نہیں۔ 4 ہندسے دوبارہ چیک کریں۔",
joined:"آپ تصدیق شدہ ہیں اور {g} تلاش کرنے والوں کو نظر آئیں گے۔",joinedW:"آپ تصدیق شدہ ہیں۔ {n} دن بعد دستیاب نظر آئیں گے۔",
banksSub:"اسٹاک لیول شراکت دار بلڈ بینک خود اپ ڈیٹ کرتے ہیں۔",bank:"بلڈ بینک",updated:"{h} گھنٹے پہلے اپ ڈیٹ",
nQuiz:"کیا میں عطیہ دے سکتا ہوں؟",qSub:"6 مختصر سوالوں کے جواب دیں۔ یہ صرف رہنمائی ہے، حتمی فیصلہ بلڈ بینک کا ڈاکٹر کرتا ہے۔",yes:"ہاں",no:"نہیں",qCheck:"میری اہلیت چیک کریں",qOk:"ممکن ہے آپ عطیہ دے سکیں۔ حتمی فیصلہ بلڈ بینک کا ڈاکٹر کرے گا۔",qNo:"ممکن ہے آپ ابھی عطیہ نہ دے سکیں۔ ڈاکٹر یا بلڈ بینک سے پوچھ لیں۔",qWhy:"وجہ:",
q1:"کیا آپ کی عمر 18 سے 60 سال کے درمیان ہے؟",q2:"کیا آپ کا وزن کم از کم 50 کلو ہے؟",q3:"کیا آج آپ صحت مند ہیں (بخار، کھانسی یا انفیکشن نہیں)؟",q4:"کیا آپ نے پچھلے 3 مہینوں میں خون دیا ہے؟",q5:"پچھلے 6 مہینوں میں ٹیٹو، پیئرسنگ، سرجری یا دانت نکلوایا؟",q6:"ہیپاٹائٹس بی یا سی، ایچ آئی وی، دل کی بیماری، بے قابو ذیابیطس، حمل یا دودھ پلانا؟",
howT:"ڈونر ہب کیسے کام کرتا ہے",s1t:"رجسٹر کریں اور تصدیق کریں",s1d:"ڈونر فون OTP سے شامل ہوتے ہیں اور آخری عطیہ کی تاریخ بتاتے ہیں۔",s2t:"تلاش کریں یا درخواست دیں",s2d:"بلڈ گروپ اور علاقہ چنیں۔ مطابقت رکھنے والے اہل ڈونر پہلے نظر آتے ہیں۔",s3t:"محفوظ رابطہ",s3d:"نمبر شیئر کرنا ڈونر کی مرضی ہے۔ نمبر کبھی عام نہیں ہوتے۔",
whyT:"صرف واٹس ایپ گروپ کیوں نہیں؟",grpT:"واٹس ایپ / فیس بک گروپس",r1:"ڈونر کا فون تصدیق شدہ",r2:"90 دن کی اہلیت کا ریکارڈ",r3:"مطابق بلڈ گروپس کی میچنگ",r4:"بلڈ بینک کا لائیو اسٹاک",r5:"ڈونر کا نمبر پرائیویٹ",
faqT:"سوالات",f1q:"کیا ڈونر ہب مفت ہے؟",f1a:"جی ہاں، ڈونرز اور خاندانوں کے لیے۔ بلڈ بینک پریمیم لسٹنگ کے لیے شراکت کر سکتے ہیں۔",f2q:"کیا میرا فون نمبر عام ہوتا ہے؟",f2a:"نہیں۔ ڈونر کا نمبر کبھی عام نہیں ہوتا، اور درخواست کے بعد شیئر کرنے کا فیصلہ ڈونر کرتا ہے۔",f3q:"کیا آپ خون بیچتے ہیں؟",f3a:"کبھی نہیں۔ ڈونر ہب صرف لوگوں کو جوڑتا ہے؛ خون کی خرید و فروخت نہیں ہوتی۔",f4q:"کون عطیہ دے سکتا ہے؟",f4a:"“کیا میں عطیہ دے سکتا ہوں؟” کوئز آزمائیں۔ حتمی فیصلہ ہمیشہ بلڈ بینک کا ڈاکٹر کرتا ہے۔",
ptT:"بلڈ بینک یا لیب؟",ptD:"اپنا اسٹاک لسٹ کریں اور تصدیق شدہ ڈونرز تک پہنچیں۔ ڈونر ہب کے ساتھ شراکت کریں۔",ptB:"شراکت دار بنیں",stD:"ڈونرز",stR:"خون کی درخواستیں",stF:"مکمل ہوئیں",
reqNote:"آپ کا نمبر شیئر ہونے والے درخواست پیج پر نظر آئے گا تاکہ ڈونر آپ سے رابطہ کر سکیں۔",share:"واٹس ایپ پر شیئر کریں",pageL:"درخواست کا پیج کھولیں",priv:"پرائیویسی",terms:"شرائط",contact:"ہمارے ساتھ شراکت",compat:"مطابق",
pOrg:"ادارے کا نام (بلڈ بینک، لیب، ہسپتال، این جی او)",pName:"رابطہ کرنے والا فرد",pMail:"ای میل (اختیاری)",pNote:"آپ ہمارے ساتھ کیسے کام کرنا چاہتے ہیں؟",sendP:"درخواست بھیجیں",pDone:"شکریہ! آپ کی درخواست مل گئی ہے، ہم جلد رابطہ کریں گے۔",
foot:"ڈونر ہب ایک طالب علم کا پراجیکٹ ہے۔ حقیقی ایمرجنسی میں ہسپتال کے بلڈ بینک سے براہ راست رابطہ کریں۔"}};
let lang="en",grp="",sent=new Set(),pend=null,askId=0,D=[],BK=[],ST=null;
const CG={"A+":["A+","A-","O+","O-"],"A-":["A-","O-"],"B+":["B+","B-","O+","O-"],"B-":["B-","O-"],"O+":["O+","O-"],"O-":["O-"],"AB+":["A+","A-","B+","B-","O+","O-","AB+","AB-"],"AB-":["AB-","A-","B-","O-"]};
const QZ=["q1","q2","q3","q4","q5","q6"],OK=["yes","yes","yes","no","no","no"];
const t=(k,v={})=>L[lang][k].replace(/\{(\w+)\}/g,(_,x)=>v[x]);

async function api(u,b){const r=await fetch(u,b?{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(b)}:{});const j=await r.json().catch(()=>({}));if(!r.ok)throw new Error(j.error||t("err"));return j}
const bad=(el,m)=>{$(el).innerHTML=`<div class="msg er">${esc(m)}</div>`};
async function load(){try{const[a,b,s]=await Promise.all([api("/api/donors"),api("/api/banks"),api("/api/stats")]);D=a.donors;ST=s;BK=b.banks.map(x=>[x.name,x.area,x.stock,x.hours])}catch(e){}tiles();results();banks();stats()}
function apply(){document.documentElement.lang=lang;document.documentElement.dir=lang==="ur"?"rtl":"ltr";document.body.classList.toggle("ur",lang==="ur");
$$("[data-i]").forEach(e=>e.textContent=t(e.dataset.i));$("#lang").textContent=lang==="ur"?"English":"اردو";tiles();results();banks();quiz();stats();}
function fillSelects(){const o=GR.map(g=>`<option>${g}</option>`).join(""),a=AR.map(x=>`<option>${x}</option>`).join("");
$("#gSel1").innerHTML=o;$("#gSel2").innerHTML=o;$("#aSel").innerHTML=a;$("#area").insertAdjacentHTML("beforeend",a);}
function tiles(){$("#tiles").innerHTML=GR.map(g=>{const n=D.filter(d=>CG[g].includes(d.g)&&d.d>=90).length;
return `<button class="g" data-g="${g}" aria-pressed="${grp===g}"><b>${g}</b><small>${t("ready",{n})}</small></button>`}).join("");}
function results(){const a=$("#area").value;
const list=D.filter(d=>(!grp||CG[grp].includes(d.g))&&(!a||d.a===a)).sort((x,y)=>(y.d>=90)-(x.d>=90)||(y.g===grp)-(x.g===grp)||y.d-x.d);
$("#res").innerHTML=list.length?list.map(d=>{const ok=d.d>=90,s=sent.has(d.id);
const bd=ok?`<span class="bd ok">${t("avail")}</span>`:`<span class="bd wt">${t("wait",{n:90-d.d})}</span>`;
const last=d.d>=999?t("never"):t("lastD",{n:d.d}),cp=grp&&d.g!==grp?`<span class="bd">${t("compat")}</span>`:"";
return `<div class="row"><div class="av" aria-hidden="true">${esc(d.n[0])}</div><div class="i"><strong>${esc(d.n)}</strong>${bd}${cp}<div>${esc(d.a)} · ${last}</div>${s?`<div>${t("askNote")}</div>`:""}</div><div class="gt">${d.g}</div><button class="btn sec" data-id="${d.id}" ${ok&&!s?"":"disabled"}>${s?t("asked"):t("ask")}</button></div>`}).join(""):`<p class="empty">${t("none")}</p>`;}
function banks(){const lv=n=>n<5?"lo":n<15?"mid":"hi";
$("#bt").innerHTML=`<tr><th>${t("bank")}</th>${GR.map(g=>`<th>${g}</th>`).join("")}</tr>`+BK.map(b=>`<tr><td>${esc(b[0])}<small>${esc(b[1])} · ${t("updated",{h:b[3]})}</small></td>${b[2].map(n=>`<td class="lv-${lv(n)}">${n}</td>`).join("")}</tr>`).join("");}
function show(id){$$("main>section").forEach(s=>s.hidden=s.id!==id);$$("#nav button").forEach(b=>b.setAttribute("aria-selected",b.dataset.t===id));}
$("#nav").onclick=e=>{const b=e.target.closest("button");if(b)show(b.dataset.t)};
$("#lang").onclick=()=>{lang=lang==="en"?"ur":"en";apply()};
$("#tiles").onclick=e=>{const b=e.target.closest("button");if(!b)return;grp=grp===b.dataset.g?"":b.dataset.g;tiles();results()};
$("#go").onclick=results;$("#area").onchange=results;
$("#res").onclick=e=>{const b=e.target.closest("button[data-id]");if(b){askId=+b.dataset.id;$("#aErr").innerHTML="";$("#dlg").showModal()}};
$("#cancel").onclick=()=>$("#dlg").close();
$("#fAsk").onsubmit=async e=>{e.preventDefault();const f=e.target;try{await api("/api/contact",{donorId:askId,name:f.n.value,phone:f.ph.value});sent.add(askId);$("#dlg").close();f.reset();results()}catch(x){bad("#aErr",x.message)}};
$("#fReq").onsubmit=async e=>{e.preventDefault();const f=e.target,g=f.g.value,hs=f.h.value,u=+f.u.value;try{const r=await api("/api/requests",{patient:f.p.value,group:g,units:u,urgency:f.ur.value,hospital:hs,phone:f.ph.value});
try{localStorage.setItem("dh_"+r.id,r.key)}catch{}
const link=location.origin+location.pathname.replace(/[^/]*$/,"")+"request.html?id="+r.id,wa="https://wa.me/?text="+encodeURIComponent(`URGENT: ${u} unit(s) of ${g} blood needed at ${hs}. Details and contact: ${link}`);
$("#rMsg").innerHTML=`<div class="msg ok"><p>${t("reqSent",{n:r.matched,g})}</p><p><a class="btn" href="${wa}" target="_blank" rel="noopener">${t("share")}</a> <a class="btn sec" href="${link}">${t("pageL")}</a> <button class="btn sec" id="see">${t("see")}</button></p></div>`;
$("#see").onclick=()=>{grp=g;show("find");tiles();results()};f.reset();load()}catch(x){bad("#rMsg",x.message)}};
$("#fReg").onsubmit=async e=>{e.preventDefault();const f=e.target;pend={name:f.n.value,phone:f.ph.value,group:f.g.value,area:f.a.value,lastDonation:f.d.value,consent:true};
try{const r=await api("/api/otp/send",{phone:pend.phone});const d=$("#demo");d.hidden=!r.demoCode;if(r.demoCode)d.textContent=t("demo",{c:r.demoCode});
f.hidden=true;$("#fOtp").hidden=false;$("#gMsg").innerHTML=""}catch(x){bad("#gMsg",x.message)}};
$("#fOtp").onsubmit=async e=>{e.preventDefault();try{const r=await api("/api/donors",{...pend,otp:e.target.c.value.trim()});const d=r.donor.d;
$("#gMsg").innerHTML=`<div class="msg ok">${d>=90?t("joined",{g:r.donor.g}):t("joinedW",{n:90-d})}</div>`;
e.target.hidden=true;e.target.reset();$("#demo").hidden=true;$("#fReg").reset();$("#fReg").hidden=false;load()}catch(x){bad("#gMsg",x.message)}};
fillSelects();show("find");apply();load();

function stats(){$("#stats").innerHTML=ST?[[ST.donors,"stD"],[ST.requests,"stR"],[ST.fulfilled,"stF"]].map(x=>`<div><b>${x[0]}</b><span>${t(x[1])}</span></div>`).join(""):""}
function quiz(){$("#fQz").innerHTML=QZ.map(k=>`<fieldset><legend>${t(k)}</legend><label class="chk"><input type="radio" name="${k}" value="yes" required> ${t("yes")}</label><label class="chk"><input type="radio" name="${k}" value="no"> ${t("no")}</label></fieldset>`).join("")+`<button class="btn">${t("qCheck")}</button>`;$("#qRes").innerHTML=""}
$("#fQz").onsubmit=e=>{e.preventDefault();const f=e.target,nb=QZ.filter((k,i)=>f[k].value!==OK[i]);
$("#qRes").innerHTML=nb.length?`<div class="msg er"><p>${t("qNo")}</p><p>${t("qWhy")}</p><ul>${nb.map(k=>`<li>${t(k)}</li>`).join("")}</ul></div>`:`<div class="msg ok">${t("qOk")}</div>`};

const openP=e=>{e&&e.preventDefault();$("#pErr").innerHTML="";$("#pdlg").showModal()};
$("#pb").onclick=openP;$("#pl").onclick=openP;$("#pcancel").onclick=()=>$("#pdlg").close();
$("#fPar").onsubmit=async e=>{e.preventDefault();const f=e.target;try{await api("/api/partners",{org:f.o.value,name:f.n.value,phone:f.ph.value,email:f.e.value,note:f.m.value});
f.reset();$("#pErr").innerHTML=`<div class="msg ok">${t("pDone")}</div>`;setTimeout(()=>{$("#pdlg").open&&$("#pdlg").close()},2500)}catch(x){bad("#pErr",x.message)}};

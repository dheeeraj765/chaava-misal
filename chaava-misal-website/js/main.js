const L=(n,p,e,big)=>`<li${big?' class="big"':''}><span class="n${/[\u0900-\u097F]/.test(n)?' dev':''}">${n}${e?`<small>${e}</small>`:''}</span><i></i><b>₹${p}</b></li>`;
const M=[["छावा मिसळ",90,"Chhaava Misal",1],["रेग्युलर मिसळ",70,"Regular Misal"],["कट वडा",70,"Cut Vada"],["सुकी मिसळ",40,"Sukhi Misal"],["चिवडा बाऊल",35,"Chivda Bowl"]];
const S=[["चिवडा वाटी",10,"Chivda Vati"],["सोलकढी",20,"Solkadhi"],["ब्रेड",3,"Bread"],["चहा",15,"Chai"]];
const C={"Coffee (Hot)":[["Hot Coffee",30],["Black Coffee",30],["Hot Milk",30],["Special Coffee",40],["Hot Chocolate",40]],
"Cad-B":[["Cad-B Half",80],["Cad-B Full",90],["Vanilla Cad-B Half",80],["Vanilla Cad-B Full",90],["Mix Cad-B",100]],
"Coffee (Cold)":[["Cold Coffee",60],["Thick Cold Coffee",70],["Cold Coffee with Ice Cream",80],["Thick Choco Cold with Ice Cream",90]],
"Black Tea (Hot)":[["Green Tea",40],["Lemon",40]],"Refreshment":[["Lemon Ice Tea",70],["Mojito",70],["Flavour Mojito",80]],
"Milk Shakes":[["Vanilla",80],["Chocolate",80],["Butterscotch",80],["Strawberry",80],["Blueberry",80],["Black Currant",80],["Kiwi",80],["Raspberry",80],["Mango",90],["Oreo Milk Shake",90],["Kitkat Milk Shake",90],["Shake + Ice Cream (extra)",30]]};
document.getElementById('pm').innerHTML=`<div class="mis"><div><h3 class="dev">मिसळ</h3><ul class="pl">${M.map(m=>L(m[0],m[1],m[2],m[3])).join('')}</ul></div><div><h3 class="dev">सोबतीला</h3><ul class="pl">${S.map(m=>L(m[0],m[1],m[2])).join('')}</ul></div></div>`;
document.getElementById('pc').innerHTML=`<div class="cafe">${Object.entries(C).map(([k,v])=>`<div class="cat"><h3>${k}</h3><ul class="pl">${v.map(m=>L(m[0],m[1])).join('')}</ul></div>`).join('')}</div>`;
const tabs=[...document.querySelectorAll('.tabs button')];
tabs.forEach(b=>b.onclick=()=>{tabs.forEach(x=>x.setAttribute('aria-selected',x==b));pm.hidden=b.dataset.t!='m';pc.hidden=b.dataset.t!='c'});
const t=document.getElementById('tg'),n=document.getElementById('nv');
t.onclick=()=>{const o=n.classList.toggle('o');t.setAttribute('aria-expanded',o)};n.onclick=e=>{if(e.target.tagName=='A'){n.classList.remove('o');t.setAttribute('aria-expanded',false)}};
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.rv').forEach(e=>io.observe(e));
const hd=document.querySelector('header'),hr=document.querySelector('.hero'),rm=matchMedia('(prefers-reduced-motion:reduce)').matches;let tk=false;
function onS(){tk=false;hd.classList.toggle('s',scrollY>40);if(!rm&&scrollY<900)hr.style.setProperty('--py',scrollY*.12+'px')}
addEventListener('scroll',()=>{if(!tk){tk=true;requestAnimationFrame(onS)}},{passive:true});onS();

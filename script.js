


consttabs=document.querySelectorAll('.nav-link');
constsections=document.querySelectorAll('.tab');

tabs.forEach(btn=>{
btn.addEventListener('click',()=>{
tabs.forEach(b=>{
b.classList.remove('active');
b.setAttribute('aria-selected','false');
});
sections.forEach(s=>s.classList.remove('active'));
btn.classList.add('active');
btn.setAttribute('aria-selected','true');
constactiveSection=document.getElementById(btn.dataset.tab);
activeSection.classList.add('active');

activeSection.offsetHeight;
});


btn.addEventListener('keydown',(e)=>{
if(e.key==='Enter'||e.key===''){
e.preventDefault();
btn.click();
}
});
});


consttoggle=document.getElementById('themeToggle');
toggle.addEventListener('click',()=>{
document.body.classList.toggle('dark');
toggle.setAttribute('aria-pressed',document.body.classList.contains('dark'));
});


consttw=document.getElementById('typewriter');
consttxt=tw.dataset.text;
leti=0;
functiontype(){
if(i<txt.length){
tw.textContent+=txt.charAt(i);
i++;
setTimeout(type,70);
}
}
type();


document.getElementById('year').textContent=newDate().getFullYear();


asyncfunctionfetchTIL(){
consttilList=document.getElementById('tilList');
tilList.innerHTML='<p>LoadingTILs...</p>';

try{

constrepoRes=awaitfetch('https:
constrepos=awaitrepoRes.json();

tilList.innerHTML='';


consttilRepos=repos.filter(r=>
r.name.toLowerCase().includes('til')||
(r.description&&r.description.toLowerCase().includes('til'))
);

tilRepos.forEach(r=>{
constcard=document.createElement('div');
card.className='card';
card.innerHTML=`
<h3>${r.name}</h3>
<p>${r.description||''}</p>
<aclass='btn'href='${r.html_url}'target='_blank'>ViewRepo</a>
`;
tilList.appendChild(card);
});


for(constrepoofrepos.slice(0,10)){
constcommitsRes=awaitfetch(`https:
constcommits=awaitcommitsRes.json();

commits
.filter(c=>c.commit.message.toLowerCase().includes('til'))
.slice(0,3)
.forEach(c=>{
constcard=document.createElement('div');
card.className='card';
card.innerHTML=`
<h3>TILCommit•${repo.name}</h3>
<p>${c.commit.message}</p>
<aclass='btn'href='${c.html_url}'target='_blank'>ViewCommit</a>
`;
tilList.appendChild(card);
});
}

if(tilList.children.length===0){
tilList.innerHTML='<p>NoTILreposorcommitsfoundyet🚀</p>';
}
}catch(err){
console.error('ErrorfetchingTILs:',err);
tilList.innerHTML='<p>ErrorloadingTILs.Pleasetryagainlater.</p>';
}
}

fetchTIL();


functionfetchLeetCodeStats(){
constcontainer=document.getElementById('leetcode-stats');

container.innerHTML=`
<p><strong>TotalSolved:</strong>50</p>
<p><strong>Easy:</strong>30</p>
<p><strong>Medium:</strong>15</p>
<p><strong>Hard:</strong>5</p>
`;
}

functionloadCodingStats(){
fetchLeetCodeStats();
}


document.querySelector('[data-tab="coding"]').addEventListener('click',loadCodingStats);

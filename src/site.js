
(() => {
  const header=document.querySelector('[data-header]');
  const onScroll=()=>header?.classList.toggle('is-scrolled',scrollY>16); onScroll(); addEventListener('scroll',onScroll,{passive:true});
  const toggle=document.querySelector('[data-menu-toggle]'); const nav=document.querySelector('[data-site-nav]');
  const setMenuState=(isOpen)=>{toggle?.setAttribute('aria-expanded',String(isOpen));nav?.classList.toggle('is-open',isOpen);document.body.classList.toggle('menu-open',isOpen)};
  toggle?.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')==='true';setMenuState(!open)});
  nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMenuState(false)));
  addEventListener('resize',()=>{if(innerWidth>760)setMenuState(false)});
  // Pre-blurred cover atlas: same atmosphere without realtime GPU blur.
  const BACKDROP_POS={
    "кто_я":[0.00000,0.00000],
    "я_надеюсь":[14.28571,0.00000],
    "волхвы":[28.57143,0.00000],
    "душа":[42.85714,0.00000],
    "уходят_дни":[57.14286,0.00000],
    "ветер_перемен":[71.42857,0.00000],
    "признание":[85.71429,0.00000],
    "сны":[100.00000,0.00000],
    "трибьют_01":[0.00000,14.28571],
    "осень_жизни":[14.28571,14.28571],
    "ночь":[28.57143,14.28571],
    "говорящий_карман":[42.85714,14.28571],
    "блуд":[57.14286,14.28571],
    "путь_в_ночи":[71.42857,14.28571],
    "тишина":[85.71429,14.28571],
    "43":[100.00000,14.28571],
    "прощание":[0.00000,28.57143],
    "хамелеон":[14.28571,28.57143],
    "привкус_металла":[28.57143,28.57143],
    "словоблудие":[42.85714,28.57143],
    "что_такое_любовь":[57.14286,28.57143],
    "в_темноте":[71.42857,28.57143],
    "выбор":[85.71429,28.57143],
    "мы":[100.00000,28.57143],
    "пламя_победы":[0.00000,42.85714],
    "страсть":[14.28571,42.85714],
    "нет_слов":[28.57143,42.85714],
    "бамбук":[42.85714,42.85714],
    "грёзы":[57.14286,42.85714],
    "память":[71.42857,42.85714],
    "дети":[85.71429,42.85714],
    "ах":[100.00000,42.85714],
    "призрак":[0.00000,57.14286],
    "ёж":[14.28571,57.14286],
    "путь":[28.57143,57.14286],
    "никогда":[42.85714,57.14286],
    "выходной":[57.14286,57.14286],
    "клад":[71.42857,57.14286],
    "ядовитое_блаженство":[85.71429,57.14286],
    "ты_и_я":[100.00000,57.14286],
    "живу":[0.00000,71.42857],
    "горечь":[14.28571,71.42857],
    "что_то":[28.57143,71.42857],
    "новый_год":[42.85714,71.42857],
    "цуцик":[57.14286,71.42857],
    "сон":[71.42857,71.42857],
    "мошки_на_окошке":[85.71429,71.42857],
    "немые_сцены":[100.00000,71.42857],
    "сквозь_пыль_и_искры":[0.00000,85.71429],
    "пульс":[14.28571,85.71429],
    "хаос":[28.57143,85.71429],
    "падший_ангел":[42.85714,85.71429],
    "тёплый_снег":[57.14286,85.71429],
    "не_сломать":[71.42857,85.71429],
    "промежуток":[85.71429,85.71429],
    "оживаю":[100.00000,85.71429],
    "пепел":[0.00000,100.00000],
    "до_утра":[14.28571,100.00000],
    "страх":[28.57143,100.00000],
    "разные":[42.85714,100.00000],
    "галя_отмена":[57.14286,100.00000]
  };
  const backdropImg=document.querySelector('.hero__backdrop img,.track-hero__backdrop img');
  if(backdropImg){
    const raw=decodeURI(backdropImg.getAttribute('src')||'');
    const slug=(raw.split('/').pop()||'').replace(/\.webp(?:\?.*)?$/i,'');
    const xy=BACKDROP_POS[slug];
    const host=backdropImg.parentElement;
    if(xy&&host){host.style.setProperty('--backdrop-x',xy[0]+'%');host.style.setProperty('--backdrop-y',xy[1]+'%')}
  }
  const path=decodeURI(location.pathname.split('/').pop()||'index.html'); document.querySelectorAll('.site-nav__link').forEach(a=>{const href=decodeURI(a.getAttribute('href')||'').split('/').pop();if(href===path)a.classList.add('is-active')});
  document.querySelectorAll('[data-current-year]').forEach(x=>x.textContent=new Date().getFullYear());
  const reveals=[...document.querySelectorAll('.reveal')]; if('IntersectionObserver'in window){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');io.unobserve(e.target)}}),{threshold:.08,rootMargin:'0px 0px -40px'});reveals.forEach(x=>io.observe(x))}else reveals.forEach(x=>x.classList.add('is-visible'));
  const search=document.querySelector('[data-track-search]'), cards=[...document.querySelectorAll('[data-track-card]')], count=document.querySelector('[data-archive-count]'), empty=document.querySelector('[data-empty-state]'); let year='all';
  function filter(){const q=(search?.value||'').trim().toLocaleLowerCase('ru');let n=0;cards.forEach(c=>{const okYear=year==='all'||c.dataset.year===year;const okQ=!q||(c.dataset.search||'').includes(q);c.hidden=!(okYear&&okQ);if(!c.hidden)n++});if(count)count.textContent=`Показано: ${n}`;if(empty)empty.hidden=n!==0}
  search?.addEventListener('input',filter);document.querySelectorAll('[data-year-filter]').forEach(b=>b.addEventListener('click',()=>{year=b.dataset.yearFilter;document.querySelectorAll('[data-year-filter]').forEach(x=>x.classList.toggle('is-active',x===b));filter()}));
  document.querySelectorAll('[data-share]').forEach(btn=>btn.addEventListener('click',async()=>{try{if(navigator.share)await navigator.share({title:document.title,url:location.href});else{await navigator.clipboard.writeText(location.href);const old=btn.textContent;btn.textContent='Ссылка скопирована';setTimeout(()=>btn.textContent=old,1800)}}catch(_){}}));
})();

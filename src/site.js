
(() => {
  const header=document.querySelector('[data-header]');
  const onScroll=()=>header?.classList.toggle('is-scrolled',scrollY>16); onScroll(); addEventListener('scroll',onScroll,{passive:true});
  const toggle=document.querySelector('[data-menu-toggle]'); const nav=document.querySelector('[data-site-nav]');
  const setMenuState=(isOpen)=>{toggle?.setAttribute('aria-expanded',String(isOpen));nav?.classList.toggle('is-open',isOpen);document.body.classList.toggle('menu-open',isOpen)};
  toggle?.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')==='true';setMenuState(!open)});
  nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMenuState(false)));
  addEventListener('resize',()=>{if(innerWidth>760)setMenuState(false)});
  const path=decodeURI(location.pathname.split('/').pop()||'index.html'); document.querySelectorAll('.site-nav__link').forEach(a=>{const href=decodeURI(a.getAttribute('href')||'').split('/').pop();if(href===path)a.classList.add('is-active')});
  document.querySelectorAll('[data-current-year]').forEach(x=>x.textContent=new Date().getFullYear());
  const reveals=[...document.querySelectorAll('.reveal')]; if('IntersectionObserver'in window){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');io.unobserve(e.target)}}),{threshold:.08,rootMargin:'0px 0px -40px'});reveals.forEach(x=>io.observe(x))}else reveals.forEach(x=>x.classList.add('is-visible'));
  const search=document.querySelector('[data-track-search]'), cards=[...document.querySelectorAll('[data-track-card]')], count=document.querySelector('[data-archive-count]'), empty=document.querySelector('[data-empty-state]'); let year='all';
  function filter(){const q=(search?.value||'').trim().toLocaleLowerCase('ru');let n=0;cards.forEach(c=>{const okYear=year==='all'||c.dataset.year===year;const okQ=!q||(c.dataset.search||'').includes(q);c.hidden=!(okYear&&okQ);if(!c.hidden)n++});if(count)count.textContent=`Показано: ${n}`;if(empty)empty.hidden=n!==0}
  search?.addEventListener('input',filter);document.querySelectorAll('[data-year-filter]').forEach(b=>b.addEventListener('click',()=>{year=b.dataset.yearFilter;document.querySelectorAll('[data-year-filter]').forEach(x=>x.classList.toggle('is-active',x===b));filter()}));
  document.querySelectorAll('[data-share]').forEach(btn=>btn.addEventListener('click',async()=>{try{if(navigator.share)await navigator.share({title:document.title,url:location.href});else{await navigator.clipboard.writeText(location.href);const old=btn.textContent;btn.textContent='Ссылка скопирована';setTimeout(()=>btn.textContent=old,1800)}}catch(_){}}));
})();

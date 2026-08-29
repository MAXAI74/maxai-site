(() => {
  const toggle=document.querySelector('[data-menu-toggle]');
  const nav=document.querySelector('[data-site-nav]');
  const setMenuState=(isOpen)=>{
    if(toggle) toggle.setAttribute('aria-expanded',String(isOpen));
    if(nav) nav.classList.toggle('is-open',isOpen);
    document.body.classList.toggle('menu-open',isOpen);
  };
  if(toggle) toggle.addEventListener('click',()=>setMenuState(toggle.getAttribute('aria-expanded')!=='true'));
  if(nav) nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMenuState(false)));
  addEventListener('resize',()=>{if(innerWidth>760)setMenuState(false)});

  let path='index.html';
  try{path=decodeURI(location.pathname.split('/').pop()||'index.html')}catch(_){}
  document.querySelectorAll('.site-nav__link').forEach(a=>{
    let href=(a.getAttribute('href')||'').split('/').pop();
    try{href=decodeURI(href)}catch(_){}
    if(href===path)a.classList.add('is-active');
  });

  document.querySelectorAll('[data-current-year]').forEach(x=>x.textContent=String(new Date().getFullYear()));

  const search=document.querySelector('[data-track-search]');
  const cards=[...document.querySelectorAll('[data-track-card]')];
  const count=document.querySelector('[data-archive-count]');
  const empty=document.querySelector('[data-empty-state]');
  let year='all';
  const filter=()=>{
    const q=((search&&search.value)||'').trim().toLowerCase();
    let n=0;
    cards.forEach(c=>{
      const okYear=year==='all'||c.dataset.year===year;
      const okQ=!q||(c.dataset.search||'').toLowerCase().includes(q);
      const show=okYear&&okQ;
      c.hidden=!show;
      if(show)n++;
    });
    if(count)count.textContent='Показано: '+n;
    if(empty)empty.hidden=n!==0;
  };
  if(search)search.addEventListener('input',filter);
  document.querySelectorAll('[data-year-filter]').forEach(b=>b.addEventListener('click',()=>{
    year=b.dataset.yearFilter||'all';
    document.querySelectorAll('[data-year-filter]').forEach(x=>x.classList.toggle('is-active',x===b));
    filter();
  }));

  document.querySelectorAll('[data-share]').forEach(btn=>btn.addEventListener('click',async()=>{
    try{
      if(navigator.share){await navigator.share({title:document.title,url:location.href});return;}
      if(navigator.clipboard&&navigator.clipboard.writeText){
        await navigator.clipboard.writeText(location.href);
        const old=btn.textContent;btn.textContent='Ссылка скопирована';
        setTimeout(()=>btn.textContent=old,1800);
      }
    }catch(_){}
  }));
})();

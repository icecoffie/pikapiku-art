document.querySelectorAll('#navContent .nav-link').forEach(link=>{
    link.addEventListener('click',()=>{
      const nav=document.getElementById('navContent');
      const bsCollapse=bootstrap.Collapse.getInstance(nav);
      if(bsCollapse) bsCollapse.hide();
    });
  });
  document.getElementById('year').textContent=new Date().getFullYear();
  const buyModal=document.getElementById('buyModal');
  buyModal.addEventListener('show.bs.modal',e=>{
    const t=e.relatedTarget?.getAttribute('data-ticket')||'';
    buyModal.querySelector('#ticketName').value=t;
  });

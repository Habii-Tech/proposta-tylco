document.getElementById('slides-container').insertAdjacentHTML('beforeend', `
<!-- S3 — DORES DO CLIENTE -->
<section class="slide w-full min-h-screen relative overflow-hidden flex flex-col bg-[#F4F8F5]" id="s3" data-i="4">
  <div class="absolute top-0 left-0 right-0 h-[72px] flex items-center justify-between px-[34px] z-10 overflow-visible">
    <img src="assets/images/logotipo_branco.png" alt="Habii.tech" style="height:150px;width:auto;display:block;padding-left:0;">
    <span class="text-[11px] font-bold tracking-[.1em] uppercase text-[#8FA398]">Problemas identificados</span>
  </div>
  <div class="flex-1 flex flex-col pt-[88px] px-16 pb-6">
    <div>
      <div class="text-[11px] font-bold tracking-[.1em] uppercase text-[#158A3E] mb-[14px]">Diagnóstico</div>
      <h2 class="text-[clamp(36px,4vw,54px)] font-black leading-none tracking-[-0.03em] text-[#0C1410] mb-0">Os desafios do<br><em class="text-[#6EBF8B] not-italic">Tylco.</em></h2>
    </div>
    <div class="grid grid-cols-3 gap-4 mt-8 flex-1">

      <div class="sc bg-white border border-[#DDE8E2] rounded-[20px] p-7 flex flex-col gap-[14px] shadow-[0_4px_20px_rgba(0,0,0,.06)]">
        <div class="w-11 h-11 bg-[#FFF5F5] border border-[#FECACA] rounded-[10px] flex items-center justify-center flex-shrink-0">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        </div>
        <div class="text-[16px] font-extrabold text-[#0C1410] tracking-[-0.01em] leading-[1.25]">Acesso ao ERP leva cerca de 10 minutos</div>
        <div class="text-[14px] text-[#5C6E64] leading-[1.65]">Para consultar preço, estoque ou cliente durante a visita, o representante precisa acessar o Pro Syst remotamente, o que alonga a visita e atrasa a conversa técnica.</div>
      </div>

      <div class="sc bg-white border border-[#DDE8E2] rounded-[20px] p-7 flex flex-col gap-[14px] shadow-[0_4px_20px_rgba(0,0,0,.06)]">
        <div class="w-11 h-11 bg-[#FFF5F5] border border-[#FECACA] rounded-[10px] flex items-center justify-center flex-shrink-0">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>
        </div>
        <div class="text-[16px] font-extrabold text-[#0C1410] tracking-[-0.01em] leading-[1.25]">Dependência de notebook, VPN e internet estável</div>
        <div class="text-[14px] text-[#5C6E64] leading-[1.65]">O acesso exige notebook, VPN e conexão estável, nem sempre disponíveis em campo. O problema é crítico no setor agrícola, onde o sinal costuma ser fraco.</div>
      </div>

      <div class="sc bg-white border border-[#DDE8E2] rounded-[20px] p-7 flex flex-col gap-[14px] shadow-[0_4px_20px_rgba(0,0,0,.06)]">
        <div class="w-11 h-11 bg-[#FFF5F5] border border-[#FECACA] rounded-[10px] flex items-center justify-center flex-shrink-0">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
        </div>
        <div class="text-[16px] font-extrabold text-[#0C1410] tracking-[-0.01em] leading-[1.25]">Imagem pouco profissional na visita</div>
        <div class="text-[14px] text-[#5C6E64] leading-[1.65]">Abrir o notebook e esperar a conexão diante do cliente passa uma imagem improvisada, longe da qualidade técnica dos produtos Tylco.</div>
      </div>

      <div class="sc bg-white border border-[#DDE8E2] rounded-[20px] p-7 flex flex-col gap-[14px] shadow-[0_4px_20px_rgba(0,0,0,.06)]">
        <div class="w-11 h-11 bg-[#FFF5F5] border border-[#FECACA] rounded-[10px] flex items-center justify-center flex-shrink-0">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>
        </div>
        <div class="text-[16px] font-extrabold text-[#0C1410] tracking-[-0.01em] leading-[1.25]">Espera e retrabalho com o comercial interno</div>
        <div class="text-[14px] text-[#5C6E64] leading-[1.65]">Quando o representante não consegue acessar o ERP, precisa pedir cada orçamento ao comercial interno, gerando fila, retrabalho e dependência para pedidos simples.</div>
      </div>

      <div class="sc bg-white border border-[#DDE8E2] rounded-[20px] p-7 flex flex-col gap-[14px] shadow-[0_4px_20px_rgba(0,0,0,.06)]">
        <div class="w-11 h-11 bg-[#FFF5F5] border border-[#FECACA] rounded-[10px] flex items-center justify-center flex-shrink-0">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/></svg>
        </div>
        <div class="text-[16px] font-extrabold text-[#0C1410] tracking-[-0.01em] leading-[1.25]">Perda do momento da venda</div>
        <div class="text-[14px] text-[#5C6E64] leading-[1.65]">A demora para enviar o orçamento faz o cliente esfriar. O que poderia ser fechado na visita se arrasta por dias.</div>
      </div>

      <div class="sc bg-white border border-[#DDE8E2] rounded-[20px] p-7 flex flex-col gap-[14px] shadow-[0_4px_20px_rgba(0,0,0,.06)]">
        <div class="w-11 h-11 bg-[#FFF5F5] border border-[#FECACA] rounded-[10px] flex items-center justify-center flex-shrink-0">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        </div>
        <div class="text-[16px] font-extrabold text-[#0C1410] tracking-[-0.01em] leading-[1.25]">Dificuldade de escalar com novos representantes</div>
        <div class="text-[14px] text-[#5C6E64] leading-[1.65]">Com o time comercial em expansão, o processo atual não acompanha o crescimento e cada novo representante aumenta a carga sobre o comercial interno.</div>
      </div>

    </div>
  </div>
</section>
`);

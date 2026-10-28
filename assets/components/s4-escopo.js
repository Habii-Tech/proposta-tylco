document.getElementById('slides-container').insertAdjacentHTML('beforeend', `
<!-- S4 — ESCOPO -->
<section class="slide w-full min-h-screen relative overflow-hidden flex flex-col bg-white" id="s4" data-i="5">
  <div class="absolute top-0 left-0 right-0 h-[72px] flex items-center justify-between px-[34px] z-10 overflow-visible">
    <img src="assets/images/logotipo_branco.png" alt="Habii.tech" style="height:150px;width:auto;display:block;padding-left:0;">
    <span class="text-[11px] font-bold tracking-[.1em] uppercase text-[#8FA398]">Escopo · Tylco</span>
  </div>
  <div class="flex-1 flex flex-col pt-[88px] px-16 pb-6">
    <div class="mb-4 flex items-end justify-between gap-8">
      <div>
        <div class="text-[11px] font-bold tracking-[.1em] uppercase text-[#158A3E] mb-[14px]">O que vamos construir</div>
        <h2 class="text-[clamp(36px,4vw,54px)] font-black leading-none tracking-[-0.03em] text-[#0C1410] mb-0">Escopo<br><em class="text-[#6EBF8B] not-italic">do projeto.</em></h2>
      </div>
      <p class="text-[15px] text-[#5C6E64] max-w-[380px] leading-[1.65] pb-1 flex-shrink-0">App mobile para o <strong class="text-[#1F2B23] font-semibold">representante externo</strong> + painel web para o <strong class="text-[#1F2B23] font-semibold">comercial interno</strong>, integrados ao Pro Syst. O <strong class="text-[#1F2B23] font-semibold">MVP</strong> entrega o fluxo completo de orçamento; a <strong class="text-[#1F2B23] font-semibold">versão completa</strong> traz as evoluções futuras.</p>
    </div>

    <!-- Legenda -->
    <div class="flex items-center gap-6 mb-4 text-[11px] font-bold tracking-[.06em] uppercase text-[#5C6E64]">
      <span class="text-[#8FA398]">Legenda</span>
      <span class="flex items-center gap-2"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#E3F4EA] text-[#158A3E] text-[11px] font-extrabold normal-case">→</span>MVP · entrega inicial</span>
      <span class="flex items-center gap-2"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#FFF3DC] text-[#B7791F] text-[13px] font-extrabold normal-case">+</span>Versão completa · fase futura</span>
    </div>

    <div class="flex-1 grid gap-4" style="grid-template-columns: repeat(3,1fr);">

      <!-- App Representantes -->
      <div class="sc bg-[#F4F8F5] border border-[#DDE8E2] rounded-[20px] flex flex-col overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,.06)]">
        <div class="sc-head px-7 py-[18px] flex items-center gap-4 relative overflow-hidden" style="background:linear-gradient(135deg,#0D5C2E 0%,#158A3E 100%);">
          <div class="w-11 h-11 bg-white/15 border border-white/20 rounded-[11px] flex items-center justify-center flex-shrink-0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
          </div>
          <div class="flex-1">
            <div class="text-[16px] font-extrabold text-white leading-[1.2] tracking-[-0.015em]">App Mobile · Representantes</div>
            <div class="text-[11px] font-semibold text-white/55 mt-[5px] tracking-[.06em] uppercase">MVP · 12 funcionalidades</div>
          </div>
        </div>
        <div class="px-7 pt-[10px] pb-[8px] bg-white">
          <div class="si flex items-baseline gap-3 text-[13px] text-[#374840] py-[4px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Login individual por representante, com sessão persistente e abertura rápida</div>
          <div class="si flex items-baseline gap-3 text-[13px] text-[#374840] py-[4px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Catálogo sincronizado com o Pro Syst</div>
          <div class="si flex items-baseline gap-3 text-[13px] text-[#374840] py-[4px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Busca por código, descrição e aplicação (marca/modelo)</div>
          <div class="si flex items-baseline gap-3 text-[13px] text-[#374840] py-[4px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Filtros por linha (rodoviário/agrícola) e categoria (PTO, bomba hidráulica etc.)</div>
          <div class="si flex items-baseline gap-3 text-[13px] text-[#374840] py-[4px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Detalhe do produto: fotos, especificações, preço, estoque e anexos técnicos</div>
          <div class="si flex items-baseline gap-3 text-[13px] text-[#374840] py-[4px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Clientes do ERP e cadastro simplificado de cliente novo</div>
          <div class="si flex items-baseline gap-3 text-[13px] text-[#374840] py-[4px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Orçamento com itens, quantidades, pagamento, observações e descontos dentro do limite</div>
          <div class="si flex items-baseline gap-3 text-[13px] text-[#374840] py-[4px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Rascunho, histórico e acompanhamento de status</div>
          <div class="si flex items-baseline gap-3 text-[13px] text-[#374840] py-[4px] font-medium border-b border-[#E8F0EB] leading-[1.35]">PDF com a identidade da Tylco, enviado por e-mail e WhatsApp</div>
          <div class="si flex items-baseline gap-3 text-[13px] text-[#374840] py-[4px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Envio do orçamento ao Pro Syst</div>
          <div class="si flex items-baseline gap-3 text-[13px] text-[#374840] py-[4px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Sincronização de preços e estoque (ao abrir o app + manual)</div>
          <div class="si flex items-baseline gap-3 text-[13px] text-[#374840] py-[4px] font-medium leading-[1.35]">Segurança: login por usuário e tráfego criptografado</div>
        </div>
      </div>

      <!-- Painel Web -->
      <div class="sc bg-[#F4F8F5] border border-[#DDE8E2] rounded-[20px] flex flex-col overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,.06)]">
        <div class="sc-head px-7 py-[18px] flex items-center gap-4 relative overflow-hidden" style="background:linear-gradient(135deg,#0D5C2E 0%,#158A3E 100%);">
          <div class="w-11 h-11 bg-white/15 border border-white/20 rounded-[11px] flex items-center justify-center flex-shrink-0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
          </div>
          <div class="flex-1">
            <div class="text-[16px] font-extrabold text-white leading-[1.2] tracking-[-0.015em]">Painel · Portaria / Admin</div>
            <div class="text-[11px] font-semibold text-white/55 mt-[5px] tracking-[.06em] uppercase">MVP · 7 funcionalidades</div>
          </div>
        </div>
        <div class="px-7 pt-[10px] pb-[8px] flex-1 bg-white">
          <div class="si flex items-baseline gap-3 text-[13px] text-[#374840] py-[7px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Recebimento dos orçamentos dos representantes</div>
          <div class="si flex items-baseline gap-3 text-[13px] text-[#374840] py-[7px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Validação e ajuste pelo comercial interno</div>
          <div class="si flex items-baseline gap-3 text-[13px] text-[#374840] py-[7px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Conversão do orçamento em pedido no Pro Syst</div>
          <div class="si flex items-baseline gap-3 text-[13px] text-[#374840] py-[7px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Acompanhamento do status dos orçamentos</div>
          <div class="si flex items-baseline gap-3 text-[13px] text-[#374840] py-[7px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Gestão de usuários e representantes</div>
          <div class="si flex items-baseline gap-3 text-[13px] text-[#374840] py-[7px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Bloqueio de acesso de quem sair da empresa</div>
          <div class="si flex items-baseline gap-3 text-[13px] text-[#374840] py-[7px] font-medium leading-[1.35]">Limites de desconto por representante</div>
        </div>
      </div>

      <!-- Versão Completa -->
      <div class="sc bg-[#F4F8F5] border border-[#DDE8E2] rounded-[20px] flex flex-col overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,.06)]">
        <div class="sc-head px-7 py-[18px] flex items-center gap-4 relative overflow-hidden" style="background:linear-gradient(135deg,#0C1410 0%,#1F2B23 100%);">
          <div class="w-11 h-11 bg-white/15 border border-white/20 rounded-[11px] flex items-center justify-center flex-shrink-0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
          </div>
          <div class="flex-1">
            <div class="text-[16px] font-extrabold text-white leading-[1.2] tracking-[-0.015em]">Versão Completa · Evolução</div>
            <div class="text-[11px] font-semibold text-white/55 mt-[5px] tracking-[.06em] uppercase">4 funcionalidades · fase futura</div>
          </div>
        </div>
        <div class="px-7 pt-[10px] pb-[8px] flex-1 bg-white">
          <div class="si-full flex items-baseline gap-3 text-[13px] text-[#374840] py-[7px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Modo offline: catálogo, preços e clientes no aparelho, com envio automático ao reconectar</div>
          <div class="si-full flex items-baseline gap-3 text-[13px] text-[#374840] py-[7px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Pedido direto do app, sem validação interna</div>
          <div class="si-full flex items-baseline gap-3 text-[13px] text-[#374840] py-[7px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Agenda/roteiro de visitas e check-in</div>
          <div class="si-full flex items-baseline gap-3 text-[13px] text-[#374840] py-[7px] font-medium leading-[1.35]">Dashboard gerencial: orçamentos e desempenho do time</div>
        </div>
      </div>

    </div>
  </div>
</section>
`);

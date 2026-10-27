document.getElementById('slides-container').insertAdjacentHTML('beforeend', `
<!-- S1 — CAPA -->
<section class="slide w-full min-h-screen relative overflow-hidden flex flex-col" id="s1" data-i="0" style="background:linear-gradient(120deg,#0a110d 0%,#102019 38%,#0f3a22 72%,#14502c 100%)">
  <!-- mesh: verde Habii + pôr do sol do mockup -->
  <div class="absolute inset-0 pointer-events-none" style="background:radial-gradient(ellipse 38% 46% at 76% 58%, rgba(255,184,77,.30) 0%, rgba(232,131,42,.14) 40%, transparent 72%), radial-gradient(ellipse 50% 65% at 88% 28%, rgba(29,185,84,.28) 0%, transparent 68%), radial-gradient(ellipse 45% 55% at 62% 100%, rgba(15,118,110,.22) 0%, transparent 70%), radial-gradient(ellipse 40% 50% at 0% 0%, rgba(29,185,84,.10) 0%, transparent 70%)"></div>
  <!-- feixe de luz cônico atrás do celular -->
  <div class="absolute pointer-events-none" style="left:76%;top:56%;width:1100px;height:1100px;transform:translate(-50%,-50%);background:conic-gradient(from 210deg at 50% 50%, transparent 0deg, rgba(29,185,84,.14) 40deg, transparent 90deg, rgba(255,184,77,.12) 150deg, transparent 210deg, rgba(29,185,84,.08) 280deg, transparent 360deg);filter:blur(40px);"></div>
  <!-- grade com fade radial -->
  <div class="bg-grid" style="-webkit-mask-image:radial-gradient(ellipse 80% 80% at 75% 50%,#000 0%,transparent 75%);mask-image:radial-gradient(ellipse 80% 80% at 75% 50%,#000 0%,transparent 75%)"></div>
  <!-- anéis concêntricos -->
  <div class="absolute pointer-events-none rounded-full" style="left:76%;top:56%;width:640px;height:640px;transform:translate(-50%,-50%);border:1px solid rgba(255,255,255,.06);"></div>
  <div class="absolute pointer-events-none rounded-full" style="left:76%;top:56%;width:900px;height:900px;transform:translate(-50%,-50%);border:1px solid rgba(255,255,255,.035);"></div>
  <!-- vinheta + granulado -->
  <div class="absolute inset-0 pointer-events-none" style="background:radial-gradient(ellipse 120% 100% at 50% 50%, transparent 55%, rgba(0,0,0,.45) 100%)"></div>
  <div class="absolute inset-0 pointer-events-none" style="opacity:.07;mix-blend-mode:overlay;background-image:url(&quot;data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>&quot;);"></div>
  <!-- bar -->
  <div class="absolute top-0 left-0 right-0 h-[72px] flex items-center justify-between px-[34px] z-10 overflow-visible">
    <a class="flex items-center no-underline" href="#">
      <img src="assets/images/logo.png" alt="Habii.tech" style="height:28px;width:auto;display:block;margin-left:30px">
    </a>
    <span class="text-[11px] font-bold tracking-[.1em] uppercase text-white/30">Proposta Comercial · 2026</span>
  </div>
  <!-- body -->
  <div class="relative z-[5] flex-1 grid grid-cols-2 gap-0 items-center pt-[88px] px-16 pb-8">
    <div>
      <div class="inline-flex items-center gap-[7px] bg-[rgba(29,185,84,.12)] border border-[rgba(29,185,84,.28)] text-[#1DB954] text-[11px] font-bold px-[14px] py-[6px] rounded-full tracking-[.08em] uppercase mb-7">
        <span class="w-[5px] h-[5px] bg-[#1DB954] rounded-full block"></span>Proposta Comercial · 2026
      </div>
      <h1 class="text-[clamp(52px,6vw,82px)] font-black leading-[.95] tracking-[-0.04em] text-white mb-6">Proposta<br><em class="text-[#1DB954] not-italic">Comercial</em><br><span class="text-white/20"> Tylco</span></h1>
      <p class="text-[17px] text-white/45 leading-[1.72] max-w-[460px] mb-[52px]">Desenvolvimento de <strong class="text-white/75 font-semibold">aplicativo mobile + painel administrativo web</strong> para a <strong class="text-white/75 font-semibold">Tylco, em Joinville/SC</strong></p>
    </div>
    <!-- Phone mockup -->
    <div style="display:flex; justify-content:center; align-items:center; position:relative; z-index:5;">
      <img src="assets/images/mockup_capa.png" alt="Preview do app Tylco" style="width:400px; height:auto; display:block; margin:-70px 0; filter:drop-shadow(0 40px 80px rgba(0,0,0,.55));">
    </div>
  </div>
</section>
`);

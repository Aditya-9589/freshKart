const svgToDataUri = (svg) => `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`

export const imageFallbacks = {
  tomatoes: svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" role="img" aria-label="Tomatoes illustration">
      <defs>
        <linearGradient id="bg" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stop-color="#fff7ed" />
          <stop offset="100%" stop-color="#fee2e2" />
        </linearGradient>
      </defs>
      <rect width="600" height="600" fill="url(#bg)" />
      <g opacity="0.14" fill="#f97316">
        <circle cx="90" cy="90" r="22" />
        <circle cx="520" cy="120" r="18" />
        <circle cx="480" cy="510" r="16" />
        <circle cx="110" cy="500" r="24" />
      </g>
      <g>
        <circle cx="180" cy="220" r="88" fill="#ef4444" />
        <circle cx="340" cy="200" r="82" fill="#dc2626" />
        <circle cx="430" cy="330" r="92" fill="#f87171" />
        <circle cx="230" cy="380" r="96" fill="#ef4444" />
        <circle cx="355" cy="410" r="72" fill="#b91c1c" />
      </g>
      <g fill="#2f855a">
        <path d="M180 130l18 32 34 4-24 22 6 33-34-18-34 18 6-33-24-22 34-4z" />
        <path d="M340 125l16 28 30 4-22 20 6 30-30-16-30 16 6-30-22-20 30-4z" />
        <path d="M430 235l18 32 34 4-24 22 6 33-34-18-34 18 6-33-24-22 34-4z" />
        <path d="M230 286l18 32 34 4-24 22 6 33-34-18-34 18 6-33-24-22 34-4z" />
        <path d="M355 332l14 24 26 3-18 17 5 25-27-14-27 14 5-25-18-17 26-3z" />
      </g>
    </svg>
  `),
  avocados: svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" role="img" aria-label="Avocados illustration">
      <defs>
        <linearGradient id="bg" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stop-color="#ecfccb" />
          <stop offset="100%" stop-color="#dcfce7" />
        </linearGradient>
      </defs>
      <rect width="600" height="600" fill="url(#bg)" />
      <g opacity="0.12" fill="#84cc16">
        <circle cx="120" cy="110" r="34" />
        <circle cx="520" cy="120" r="24" />
        <circle cx="500" cy="500" r="20" />
      </g>
      <g transform="translate(75 85)">
        <path d="M150 20c64 0 122 48 122 132 0 112-93 188-122 188S28 264 28 152C28 68 86 20 150 20z" fill="#365314" />
        <path d="M150 52c48 0 90 36 90 102 0 88-73 154-90 154s-90-66-90-154c0-66 42-102 90-102z" fill="#a3e635" />
        <circle cx="150" cy="178" r="38" fill="#92400e" />
      </g>
      <g transform="translate(305 135) rotate(-12 110 150)">
        <path d="M110 12c58 0 110 42 110 118 0 99-84 166-110 166S0 229 0 130C0 54 52 12 110 12z" fill="#3f6212" />
        <path d="M110 40c42 0 79 31 79 88 0 78-64 136-79 136s-79-58-79-136c0-57 37-88 79-88z" fill="#bef264" />
      </g>
    </svg>
  `),
  marketProduce: svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" role="img" aria-label="Fresh produce market illustration">
      <defs>
        <linearGradient id="bg" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stop-color="#f0fdf4" />
          <stop offset="100%" stop-color="#ecfeff" />
        </linearGradient>
      </defs>
      <rect width="600" height="600" fill="url(#bg)" />
      <rect x="72" y="140" width="200" height="160" rx="24" fill="#b45309" />
      <rect x="328" y="140" width="200" height="160" rx="24" fill="#92400e" />
      <rect x="72" y="326" width="200" height="160" rx="24" fill="#92400e" />
      <rect x="328" y="326" width="200" height="160" rx="24" fill="#b45309" />
      <g>
        <circle cx="120" cy="190" r="28" fill="#22c55e" />
        <circle cx="176" cy="220" r="34" fill="#16a34a" />
        <circle cx="224" cy="186" r="24" fill="#86efac" />
        <circle cx="364" cy="198" r="30" fill="#fb923c" />
        <circle cx="416" cy="222" r="36" fill="#fdba74" />
        <circle cx="474" cy="186" r="24" fill="#f97316" />
        <circle cx="126" cy="390" r="26" fill="#ef4444" />
        <circle cx="180" cy="416" r="34" fill="#dc2626" />
        <circle cx="226" cy="382" r="24" fill="#f87171" />
        <circle cx="368" cy="390" r="28" fill="#fde047" />
        <circle cx="418" cy="416" r="34" fill="#facc15" />
        <circle cx="474" cy="382" r="24" fill="#84cc16" />
      </g>
      <path d="M64 122c72-56 150-84 236-84s164 28 236 84" fill="none" stroke="#16a34a" stroke-linecap="round" stroke-width="20" />
    </svg>
  `),
}

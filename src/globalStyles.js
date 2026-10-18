import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
:root { --paper:#f8f6f0; --ink:#252b25; --olive:#4c5841; --muted:#696b62; --line:#dcded2; --serif:'Cormorant Garamond',Georgia,serif; --sans:'Plus Jakarta Sans',Arial,sans-serif; --bg-light:#f8f6f0; --bg-surface:#fffefb; --bg-card:#fffefb; --bg-secondary:#eeeee5; --primary-blue:#4c5841; --primary-emerald:#3e5845; --gold-accent:#947653; --text-main:#252b25; --text-muted:#696b62; --text-light:#696b62; --border-color:#dcded2; }
*,*::before,*::after { box-sizing:border-box; }
html { scroll-behavior:smooth; scroll-padding-top:100px; }
body { margin:0; background:var(--paper); color:var(--ink); font-family:var(--sans); -webkit-font-smoothing:antialiased; }
h1,h2,h3,h4,p { margin-top:0; }
h1,h2,h3,h4 { font-family:var(--serif); font-weight:500; }
p { line-height:1.8; }
a { color:inherit; }
button,input,select,textarea { font:inherit; }
button,a,input,select,textarea { -webkit-tap-highlight-color:transparent; }
button { cursor:pointer; }
button:disabled { cursor:not-allowed; opacity:.6; }
img { display:block; max-width:100%; }
svg { flex-shrink:0; }
:focus-visible { outline:2px solid var(--olive); outline-offset:5px; }
::selection { background:#dfe4d3; color:#252b25; }
[id] { scroll-margin-top:105px; }
@media(prefers-reduced-motion:reduce) { html { scroll-behavior:auto; } *,*::before,*::after { animation-duration:.01ms!important; animation-iteration-count:1!important; transition-duration:.01ms!important; scroll-behavior:auto!important; } }
`;
export default GlobalStyle;

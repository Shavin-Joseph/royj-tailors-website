import React, { useId, useState } from 'react';
import { FiRotateCcw } from 'react-icons/fi';

function Garment({ product, color, back }) {
  const id = useId().replace(/:/g, '');
  const shirt = product.category === 'shirts';
  const uniform = product.type === 'uniform';
  const shorts = product.category === 'shorts' || uniform;
  const longSleeves = product.type === 'shirt-long';
  const shirtShape = longSleeves
    ? 'M114 45L76 59 26 324 65 332 94 135 91 375Q160 394 229 375L226 135 255 332 294 324 244 59 206 45Z'
    : 'M114 45L76 59 26 162 70 180 94 135 91 375Q160 394 229 375L226 135 250 180 294 162 244 59 206 45Z';
  const cargo = product.id.includes('cargo');
  return <svg viewBox="0 0 320 440" role="img" aria-label={product.name + ', ' + (back ? 'back' : 'front') + ' style sketch'}>
    <defs><linearGradient id={id}><stop stopColor="#fff" stopOpacity=".28" /><stop offset=".3" stopColor="#fff" stopOpacity="0" /><stop offset=".65" stopColor="#000" stopOpacity=".18" /><stop offset="1" stopColor="#fff" stopOpacity=".16" /></linearGradient><pattern id={id + 'weave'} width="4" height="4" patternUnits="userSpaceOnUse"><path d="M0 1h4M1 0v4" stroke="#fff" strokeOpacity=".1" strokeWidth=".5" /></pattern></defs>
    <g fill={color} stroke="#1c241c" strokeOpacity=".28" strokeLinejoin="round" strokeWidth="1.5">
      {shirt || uniform ? <g fill={uniform ? '#fafafa' : color} transform={uniform ? 'translate(45 5) scale(.72 .6)' : undefined}>
        <path d={shirtShape} fill={uniform ? '#fafafa' : color} />
        <path d={shirtShape} fill={'url(#' + id + ')'} />
        <path d={shirtShape} fill={'url(#' + id + 'weave)'} />
        {back ? <path d="M96 103H224M160 106V347" fill="none" /> : <><path d="M115 43L160 65 144 107 111 66ZM205 43L160 65 176 107 209 66Z" /><path d="M156 85V382M164 85V382" fill="none" />{[121,164,207,250,293,336].map(y => <circle key={y} cx="160" cy={y} r="2.4" fill="#ddd8c9" />)}<path d="M186 131H218V174L202 182 186 174Z" fill="none" /></>}
        <path d={longSleeves ? "M29 307L67 315M253 315L291 307M95 368Q160 386 225 368" : "M34 157L68 171M252 171L286 157M95 368Q160 386 225 368"} fill="none" strokeDasharray="3 2" />
      </g> : null}
      {!shirt && <g transform={uniform ? 'translate(56 212) scale(.65 .65)' : undefined}>
        <path d={shorts ? 'M83 43Q160 50 237 43L254 307 178 312 160 170 142 312 66 307Z' : 'M83 43Q160 50 237 43L240 403 178 403 160 180 142 403 80 403Z'} />
        <path d={shorts ? 'M83 43Q160 50 237 43L254 307 178 312 160 170 142 312 66 307Z' : 'M83 43Q160 50 237 43L240 403 178 403 160 180 142 403 80 403Z'} fill={'url(#' + id + ')'} />
        <path d={shorts ? 'M83 43Q160 50 237 43L254 307 178 312 160 170 142 312 66 307Z' : 'M83 43Q160 50 237 43L240 403 178 403 160 180 142 403 80 403Z'} fill={'url(#' + id + 'weave)'} />
        <path d="M84 62Q160 68 236 62" fill="none" /><path d="M107 46V72H113V46M209 46V72H215V46" />
        {back ? cargo ? <><path d="M95 88H140V123L117 132 95 123ZM180 88H225V123L203 132 180 123Z" /><path d="M95 91L117 109 140 91M180 91L203 109 225 91" fill="none" /></> : <path d="M97 91H140V98H97ZM180 91H223V98H180Z" fill="none" /> : <><path d="M126 66L86 116M194 66L235 116M160 68V169Q173 159 173 147V67" fill="none" /><circle cx="161" cy="55" r="3" fill="#b5a080" /></>}
        {cargo && <><path d="M77 166H123V234L100 240 76 234ZM197 166H241V234L220 240 197 234Z" /><path d="M77 166L100 185 123 166M197 166L220 185 241 166" fill="none" /><circle cx="100" cy="180" r="2" fill="#b5a080" /><circle cx="220" cy="180" r="2" fill="#b5a080" /></>}
        <path d={shorts ? 'M70 298L141 304M180 304L248 298' : 'M83 396H142M178 396H237M113 255L111 392M207 255L209 392'} fill="none" strokeDasharray="3 3" />
      </g>}
    </g>
  </svg>;
}
export default function GarmentPreview({ product, color }) {
  const [rotation, setRotation] = useState(-12);
  const [back, setBack] = useState(false);
  return <div className="garment-preview">
    <div className="preview-topline"><span>THE FIT STUDIO</span><span>INTERACTIVE SKETCH</span></div>
    <div className="preview-perspective">
      <div className="garment-model" style={{ transform: 'rotateY(' + (rotation + (back ? 180 : 0)) + 'deg) rotateX(3deg)' }}>
        <div className="garment-face"><Garment product={product} color={color} back={false} /></div>
        <div className="garment-face garment-back"><Garment product={product} color={color} back /></div>
      </div>
      <div className="garment-shadow" />
    </div>
    <div className="preview-controls"><div className="segmented"><button type="button" aria-pressed={!back} onClick={() => setBack(false)}>Front</button><button type="button" aria-pressed={back} onClick={() => setBack(true)}>Back</button></div><button className="icon-button" type="button" aria-label="Reset preview rotation" onClick={() => { setRotation(-12); setBack(false); }}><FiRotateCcw /></button></div>
    <label className="rotation-control"><span>Rotate preview</span><input type="range" min="-45" max="45" value={rotation} onChange={e => setRotation(Number(e.target.value))} /></label>
    <p className="preview-disclaimer">An illustrative style preview. Fabric, color and details are confirmed with the studio.</p>
  </div>;
}

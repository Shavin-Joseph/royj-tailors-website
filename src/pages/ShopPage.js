import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { FiSearch, FiArrowUpRight, FiHeart, FiX } from 'react-icons/fi';
import { products } from '../data/products';
import { categories } from '../data/studio';
import { useStore } from '../components/StoreContext';
import ProductCard from '../components/ProductCard';
import FitQuizModal from '../components/FitQuizModal';

export default function ShopPage() {
  const [params, setParams] = useSearchParams();
  const [quiz, setQuiz] = useState(false);
  const { saved } = useStore();
  const category = categories.some(c => c.id === params.get('category')) ? params.get('category') : 'all';
  const query = params.get('q') || '';
  const sort = params.get('sort') || 'featured';
  const savedOnly = params.get('saved') === 'true';
  const update = (key, value) => {
    const next = new URLSearchParams(params);
    if (!value || value === 'all' || value === 'featured') next.delete(key); else next.set(key, value);
    setParams(next, { replace: key === 'q' });
  };
  const filtered = products.filter(p => (category === 'all' || category === p.category)
    && (!savedOnly || saved.includes(p.id))
    && [p.name, p.fabric, p.category, ...p.colors].join(' ').toLowerCase().includes(query.trim().toLowerCase()));
  if (sort === 'price-low' || sort === 'price-high') filtered.sort((a,b) => {
    if (a.priceValue == null) return b.priceValue == null ? 0 : 1;
    if (b.priceValue == null) return -1;
    return sort === 'price-low' ? a.priceValue - b.priceValue : b.priceValue - a.priceValue;
  });
  else filtered.sort((a,b) => Number(b.isFeatured) - Number(a.isFeatured));
  return <div className="container shop-page">
    <><title>{(savedOnly ? 'Saved pieces' : 'The collection') + ' | Royj Tailors'}</title><meta name="description" content="Explore tailored trousers, cotton shirts, shorts and school uniforms. Find your color and fit at Royj Tailors, Wattala." /></>
    <div className="page-heading"><span className="eyebrow">{savedOnly ? 'KEEP THE ONES YOU LOVE CLOSE' : 'THOUGHTFUL PIECES. EVERYDAY POSSIBILITIES.'}</span><h1>{savedOnly ? <>Your <em>saved pieces.</em></> : <>The everyday <em>collection.</em></>}</h1><p>Good fabric. Considered details. A fit that’s yours.</p></div>
    <div className="shop-toolbar"><label className="search-field"><FiSearch /><span className="sr-only">Search the collection</span><input type="search" placeholder="Find a piece, fabric or color…" value={query} onChange={e => update('q', e.target.value)} /></label><button className={'saved-filter ' + (savedOnly ? 'active' : '')} aria-pressed={savedOnly} onClick={() => update('saved', savedOnly ? '' : 'true')}><FiHeart /> Saved ({saved.length})</button><label className="sort-field"><span>Sort by</span><select aria-label="Sort collection" value={sort} onChange={e => update('sort', e.target.value)}><option value="featured">Featured</option><option value="price-low">Price: low to high</option><option value="price-high">Price: high to low</option></select></label></div>
    <div className="collection-tabs" aria-label="Product categories">{categories.map(c => <button key={c.id} aria-pressed={category === c.id} onClick={() => update('category', c.id)}>{c.name}<span>{c.id === 'all' ? products.length : products.filter(p => p.category === c.id).length}</span></button>)}</div>
    <div className="results-line"><span aria-live="polite">{filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'} to make your own</span>{(query || category !== 'all' || savedOnly) && <button className="text-button" onClick={() => setParams({})}>Clear filters <FiX /></button>}</div>
    {filtered.length ? <div className="product-grid shop-grid">{filtered.map(p => <ProductCard key={p.id} product={p} />)}</div> : <div className="empty-state"><FiSearch /><h2>{savedOnly && !saved.length ? 'Keep a little inspiration.' : 'No pieces found this time.'}</h2><p>{savedOnly && !saved.length ? 'Tap the heart on a piece to save it here for later.' : 'Try a different search, or clear your filters to explore the collection.'}</p><button className="button" onClick={() => setParams({})}>Explore all pieces <FiArrowUpRight /></button></div>}
    <div className="fit-banner"><div><span className="eyebrow">A LITTLE HELP WITH THE FIT?</span><h2>Let’s take the guesswork out.</h2><p>Use your measurements to find a starting size, or visit us for a fitting.</p></div><div><button className="button" onClick={() => setQuiz(true)}>Find your fit <FiArrowUpRight /></button><Link className="text-link" to="/contact">Visit the studio <FiArrowUpRight /></Link></div></div>
    <FitQuizModal isOpen={quiz} onClose={() => setQuiz(false)} />
  </div>;
}

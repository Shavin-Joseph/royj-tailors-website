import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
export default function NotFoundPage({ product = false }) {
  return <section className="container empty-page">
    <><title>Page not found | Royj Tailors</title><meta name="robots" content="noindex" /></>
    <span className="eyebrow">A loose thread · 404</span>
    <h1>{product ? 'This piece isn’t here.' : 'Let’s find your way back.'}</h1>
    <p>{product ? 'That product link may be out of date. Explore the collection to find your next piece.' : 'The page you’re looking for could not be found.'}</p>
    <Link className="button" to="/shop">Explore the collection <FiArrowRight /></Link>
  </section>;
}

import React from 'react';
export default function TrousersMeasurementGuide({ shorts = false }) {
  return <div className="measurement-guide"><h3>{shorts ? 'Measuring for your shorts' : 'Measuring for your trousers'}</h3><ul>
    <li><strong>Waist:</strong> Measure around where you wear the waistband. Keep the tape level.</li>
    <li><strong>Inseam:</strong> {shorts ? 'Measure down the inner leg from the crotch seam to your preferred shorts hem.' : 'Measure a well-fitting pair from the crotch seam down the inner leg to the hem.'}</li>
    <li><strong>Hips / seat:</strong> Measure around the fullest part of your hips.</li>
    <li><strong>Thigh:</strong> Measure around the widest part of your upper thigh.</li>
    <li><strong>Leg opening:</strong> Measure around the full opening at the hem, rather than its flat width.</li>
    {!shorts && <li><strong>Outseam:</strong> Measure from the top of the waistband down the outside seam to the hem.</li>}
  </ul></div>;
}

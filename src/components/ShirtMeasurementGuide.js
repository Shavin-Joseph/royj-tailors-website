import React from 'react';
export default function ShirtMeasurementGuide({ shortSleeve = false }) {
  return <div className="measurement-guide"><h3>Measuring for your shirt</h3><ul>
    <li><strong>Collar:</strong> Measure around the base of your neck where the collar sits.</li>
    <li><strong>Chest:</strong> Measure around the fullest part of your chest, under the arms. These custom fields use body measurements; the studio adds the appropriate ease.</li>
    <li><strong>Shoulder:</strong> Measure across your upper back from shoulder point to shoulder point.</li>
    <li><strong>Sleeve:</strong> {shortSleeve ? 'Measure from the shoulder seam to your preferred short-sleeve hem.' : 'Measure from the shoulder seam to the wrist, with your arm slightly bent.'}</li>
    <li><strong>Shirt length:</strong> Measure from the highest point of the shoulder to your preferred hem.</li>
  </ul></div>;
}

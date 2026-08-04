// src/components/TrousersSizeChart.js
import React from 'react';
import styled from 'styled-components';

const ChartContainer = styled.div`
  font-family: 'Plus Jakarta Sans', sans-serif;
  color: var(--text-main);
`;

const Title = styled.h2`
  font-family: 'DM Serif Display', serif;
  font-size: 1.8rem;
  color: var(--primary-blue);
  text-align: center;
  margin-top: 0;
  margin-bottom: 0.3rem;
`;

const Sub = styled.p`
  text-align: center;
  color: var(--text-muted);
  font-size: 0.85rem;
  margin-bottom: 1.2rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 0.5rem;
  border-radius: 8px;
  overflow: hidden;

  th, td {
    border: 1px solid var(--border-color);
    padding: 10px;
    text-align: center;
    font-size: 0.88rem;
  }

  th {
    background-color: var(--bg-light);
    color: var(--primary-blue);
    font-weight: 700;
  }

  tr:nth-child(even) {
    background-color: #F8FAFC;
  }
`;

const trousersSizes = [
  { size: '28', waist: '28"', inseam: '30"', hips: '36"' },
  { size: '30', waist: '30"', inseam: '31"', hips: '38"' },
  { size: '32', waist: '32"', inseam: '32"', hips: '40"' },
  { size: '34', waist: '34"', inseam: '32"', hips: '42"' },
  { size: '36', waist: '36"', inseam: '33"', hips: '44"' },
  { size: '38', waist: '38"', inseam: '34"', hips: '46"' },
  { size: '40', waist: '40"', inseam: '34"', hips: '48"' },
];

const TrousersSizeChart = () => {
  return (
    <ChartContainer>
      <Title>Pants & Cargo Trousers Sizing Chart</Title>
      <Sub>All sizes listed in inches</Sub>
      <Table>
        <thead>
          <tr>
            <th>Waist Tag</th>
            <th>Waist Inches</th>
            <th>Leg Length (Inseam)</th>
            <th>Hips</th>
          </tr>
        </thead>
        <tbody>
          {trousersSizes.map((s) => (
            <tr key={s.size}>
              <td style={{ fontWeight: 'bold', color: 'var(--primary-blue)' }}>{s.size}</td>
              <td>{s.waist}</td>
              <td>{s.inseam}</td>
              <td>{s.hips}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </ChartContainer>
  );
};

export default TrousersSizeChart;
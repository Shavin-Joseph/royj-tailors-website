// src/components/ShirtSizeChart.js
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

const shirtSizes = [
  { size: 'S', collar: '15"', chest: '38"', shoulder: '17"', length: '28"' },
  { size: 'M', collar: '15.5"', chest: '40"', shoulder: '18"', length: '29"' },
  { size: 'L', collar: '16"', chest: '42"', shoulder: '19"', length: '30"' },
  { size: 'XL', collar: '16.5"', chest: '44"', shoulder: '20"', length: '31"' },
  { size: 'XXL', collar: '17"', chest: '46"', shoulder: '21"', length: '31.5"' },
];

const ShirtSizeChart = () => {
  return (
    <ChartContainer>
      <Title>Standard Shirt Sizes</Title>
      <Sub>All sizes listed in inches</Sub>
      <Table>
        <thead>
          <tr>
            <th>Size Tag</th>
            <th>Neck/Collar</th>
            <th>Chest</th>
            <th>Shoulder</th>
            <th>Length</th>
          </tr>
        </thead>
        <tbody>
          {shirtSizes.map((s) => (
            <tr key={s.size}>
              <td style={{ fontWeight: 'bold', color: 'var(--primary-blue)' }}>{s.size}</td>
              <td>{s.collar}</td>
              <td>{s.chest}</td>
              <td>{s.shoulder}</td>
              <td>{s.length}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </ChartContainer>
  );
};

export default ShirtSizeChart;
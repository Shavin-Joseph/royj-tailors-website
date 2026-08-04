// src/components/BespokeCustomizer.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaWhatsapp } from 'react-icons/fa';

const Container = styled.div`
  background: #FFFFFF;
  border: 1px solid var(--border-color);
  border-radius: 20px;
  padding: 3rem;
  box-shadow: var(--shadow-md);
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 900px) {
    padding: 1.5rem;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
`;

const Badge = styled.span`
  display: inline-block;
  background: #EFF6FF;
  color: var(--primary-blue);
  border: 1px solid var(--primary-blue);
  padding: 0.4rem 1rem;
  border-radius: 30px;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 0.8rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin: 0 0 0.5rem 0;
  color: var(--text-main);

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Subtitle = styled.p`
  color: var(--text-muted);
  font-size: 1.05rem;
  margin: 0 auto;
  max-width: 650px;
`;

const CustomizerLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 2.5rem;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

const ControlsArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const StepSection = styled.div`
  background: var(--bg-light);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 1.5rem;
`;

const StepTitle = styled.h3`
  font-size: 1.2rem;
  margin: 0 0 1rem 0;
  color: var(--text-main);
  display: flex;
  align-items: center;
  gap: 10px;
  
  span.step-num {
    background: var(--primary-blue);
    color: #FFFFFF;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 0.85rem;
    font-weight: bold;
  }
`;

const GridSelector = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1rem;
`;

const OptionCard = styled.div`
  background: ${props => props.selected ? '#EFF6FF' : '#FFFFFF'};
  border: 2px solid ${props => props.selected ? 'var(--primary-blue)' : 'var(--border-color)'};
  border-radius: 10px;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: var(--primary-blue);
  }

  .name {
    font-weight: 700;
    font-size: 0.95rem;
    color: ${props => props.selected ? 'var(--primary-blue)' : 'var(--text-main)'};
    margin-bottom: 0.3rem;
  }

  .subtext {
    font-size: 0.8rem;
    color: var(--text-muted);
  }
`;

const ColorSwatch = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: ${props => props.color};
  border: 2px solid #E2E8F0;
  margin-bottom: 0.5rem;
`;

const SummaryBox = styled.div`
  background: #FFFFFF;
  border: 2px solid var(--primary-blue);
  border-radius: 16px;
  padding: 2rem;
  position: sticky;
  top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: fit-content;
  box-shadow: var(--shadow-md);
`;

const SummaryTitle = styled.h3`
  font-size: 1.5rem;
  margin: 0 0 1.2rem 0;
  color: var(--primary-blue);
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 0.8rem;
`;

const SpecItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem 0;
  border-bottom: 1px dashed var(--border-color);
  font-size: 0.9rem;

  .label {
    color: var(--text-muted);
  }
  .value {
    color: var(--text-main);
    font-weight: 700;
  }
`;

const TotalPriceRow = styled.div`
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 2px solid var(--primary-blue);
  display: flex;
  justify-content: space-between;
  align-items: center;

  .label {
    font-size: 1rem;
    font-weight: 700;
    color: var(--text-main);
  }
  .price {
    font-size: 1.8rem;
    font-weight: 800;
    color: var(--primary-blue);
  }
`;

const OrderCTA = styled.button`
  width: 100%;
  margin-top: 1.5rem;
  background: #25D366;
  color: #FFFFFF;
  border: none;
  padding: 1.1rem 1.5rem;
  border-radius: 10px;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 0.25s ease;
  box-shadow: 0 6px 16px rgba(37, 211, 102, 0.3);

  &:hover {
    transform: translateY(-2px);
    filter: brightness(1.05);
  }
`;

const categoriesList = [
  { id: 'cargo', name: 'Dark Green Cargo Trousers', basePrice: 8500, icon: '👖' },
  { id: 'trousers', name: 'Formal Trousers & Pants', basePrice: 7200, icon: '👖' },
  { id: 'shirts', name: 'Custom Shirts (Long/Short)', basePrice: 5500, icon: '👔' },
  { id: 'shorts', name: 'Men\'s Tailored Shorts', basePrice: 6200, icon: '🩳' },
  { id: 'uniforms', name: 'Children\'s School Uniforms', basePrice: 4800, icon: '🎒' }
];

const colorsList = [
  { id: 'dark-green', name: 'Dark Forest Green (Main)', hex: '#1E3A2B' },
  { id: 'navy', name: 'Deep Navy Blue', hex: '#1E293B' },
  { id: 'black', name: 'Classic Black', hex: '#0F172A' },
  { id: 'khaki', name: 'Khaki Tan', hex: '#D97706' },
  { id: 'white', name: 'Crisp White', hex: '#F8FAFC' }
];

const fitTypes = [
  { id: 'custom-fit', name: 'Custom Measurement Inches', desc: 'Enter exact waist, length, chest, or height.' },
  { id: 'standard-fit', name: 'Standard Sizing (S, M, L, XL, 30, 32, 34...)', desc: 'Quick pick standard size.' }
];

const BespokeCustomizer = () => {
  const [selectedCategory, setSelectedCategory] = useState(categoriesList[0]);
  const [selectedColor, setSelectedColor] = useState(colorsList[0]);
  const [selectedFit, setSelectedFit] = useState(fitTypes[0]);

  const formattedPrice = `LKR ${selectedCategory.basePrice.toLocaleString()}`;

  const handleWhatsAppSubmit = () => {
    const phoneNumber = '94775532642';
    let msg = `*Product Customizer Inquiry - Royj Tailors*\n\n`;
    msg += `Product Type: ${selectedCategory.name}\n`;
    msg += `Color Preference: ${selectedColor.name}\n`;
    msg += `Sizing Choice: ${selectedFit.name}\n`;
    msg += `Price: ${formattedPrice}\n\n`;
    msg += `Please send me size options and measurement details. Thank you!`;

    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <Container id="customizer-tool">
      <Header>
        <Badge>Easy Customizer</Badge>
        <Title>Select Product & Order via WhatsApp</Title>
        <Subtitle>
          Choose what you need, pick your color, and send your order directly to our Wattala tailor studio on WhatsApp!
        </Subtitle>
      </Header>

      <CustomizerLayout>
        <ControlsArea>
          {/* Step 1: Select Product */}
          <StepSection>
            <StepTitle><span className="step-num">1</span> What product do you need?</StepTitle>
            <GridSelector>
              {categoriesList.map(item => (
                <OptionCard
                  key={item.id}
                  selected={selectedCategory.id === item.id}
                  onClick={() => setSelectedCategory(item)}
                >
                  <div style={{ fontSize: '1.5rem', marginBottom: '0.3rem' }}>{item.icon}</div>
                  <div className="name">{item.name}</div>
                  <div className="subtext">From LKR {item.basePrice.toLocaleString()}</div>
                </OptionCard>
              ))}
            </GridSelector>
          </StepSection>

          {/* Step 2: Select Color */}
          <StepSection>
            <StepTitle><span className="step-num">2</span> Choose Color / Cloth</StepTitle>
            <GridSelector>
              {colorsList.map(col => (
                <OptionCard
                  key={col.id}
                  selected={selectedColor.id === col.id}
                  onClick={() => setSelectedColor(col)}
                >
                  <ColorSwatch color={col.hex} />
                  <div className="name">{col.name}</div>
                </OptionCard>
              ))}
            </GridSelector>
          </StepSection>

          {/* Step 3: Sizing Choice */}
          <StepSection>
            <StepTitle><span className="step-num">3</span> How will you provide measurements?</StepTitle>
            <GridSelector style={{ gridTemplateColumns: '1fr' }}>
              {fitTypes.map(fit => (
                <OptionCard
                  key={fit.id}
                  selected={selectedFit.id === fit.id}
                  onClick={() => setSelectedFit(fit)}
                >
                  <div className="name">{fit.name}</div>
                  <div className="subtext">{fit.desc}</div>
                </OptionCard>
              ))}
            </GridSelector>
          </StepSection>
        </ControlsArea>

        {/* Summary Card */}
        <SummaryBox>
          <div>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SpecItem>
              <span className="label">Item:</span>
              <span className="value">{selectedCategory.name}</span>
            </SpecItem>
            <SpecItem>
              <span className="label">Color:</span>
              <span className="value">{selectedColor.name}</span>
            </SpecItem>
            <SpecItem>
              <span className="label">Sizing:</span>
              <span className="value">{selectedFit.name}</span>
            </SpecItem>

            <TotalPriceRow>
              <span className="label">Starting Price</span>
              <span className="price">{formattedPrice}</span>
            </TotalPriceRow>
          </div>

          <OrderCTA onClick={handleWhatsAppSubmit}>
            <FaWhatsapp style={{ fontSize: '1.3rem' }} /> Order Now on WhatsApp
          </OrderCTA>
        </SummaryBox>
      </CustomizerLayout>
    </Container>
  );
};

export default BespokeCustomizer;

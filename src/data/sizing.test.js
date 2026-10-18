import { recommendSize, buildOrderMessage, sizeOptions } from './sizing';
import { products } from './products';

test.each([
  ['trousers',32,'in','32 inch waist'],
  ['trousers',33,'in','34 inch waist'],
  ['trousers',81.28,'cm','32 inch waist'],
  ['shirts',40,'in','M'],
  ['shirts',106.68,'cm','L'],
  ['shirts',48,'in','Custom measurements'],
  ['trousers',24,'in','Custom measurements'],
  ['trousers',-1,'in','Custom measurements'],
])('finds a meaningful starting size for %s, %s %s', (type,value,unit,expected) => {
  expect(recommendSize(type,value,unit)).toBe(expected);
});
test('school age is never labeled as inches', () => {
  const message = buildOrderMessage({
    product:products[1], color:'White & Navy', fit:'Regular', orderType:'custom',
    measurements:{0:'7 / Grade 2',1:'12',2:'28',3:'24',4:'27',5:'48'}, notes:' School badge ',
  });
  expect(message).toContain('Age / School Class: 7 / Grade 2\n');
  expect(message).not.toContain('Grade 2 inches');
  expect(message).toContain('Child Height: 48 inches');
  expect(message).toContain('Notes: School badge');
});
test('shorts use waist sizes and uniforms use age ranges', () => {
  expect(sizeOptions(products[2])).toContain('32 inch waist');
  expect(sizeOptions(products[1])).toContain('7–8 years');
});

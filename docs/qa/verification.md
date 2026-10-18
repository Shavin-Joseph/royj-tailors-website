# Final verification

- Production build: passed.
- Regression suite: 24 tests passed across three suites.
- Browser widths checked: 320, 390, 768 and 1366 pixels; no document-level horizontal overflow on checked views.
- Mobile navigation, product enquiry dialog, collection filters and interactive preview controls checked.
- All seven catalogue front images and the cargo back image have alpha transparency. Lossless WebP encoding preserves every alpha value and every visible pixel from the generated PNG master.
- Browser inspection confirms no rectangular backgrounds or visible outer glow; transparent RGB is ignored correctly by the browser.
- Garment types checked visually: one green cargo trouser (front/back), khaki cargo shorts, white shirt/navy school shorts, white full-length school trousers, white long-sleeve shirt, blue short-sleeve shirt, grey formal trousers.
- Browser console: no warnings or errors during the catalogue check.
- New white school trousers are quotation-only. Requirements vary by school and are confirmed during enquiry.
- No test enquiry sent and no deployment performed.

| Asset in public/products | Dimensions | Size | Alpha |
| --- | --- | --- | --- |
| cargo-shorts.webp | 1451 × 1084 | 1204 KB | Verified |
| cargo-trousers-back.webp | 1199 × 1312 | 732 KB | Verified |
| cargo-trousers-front.webp | 1024 × 1536 | 1031 KB | Verified |
| school-trousers-white.webp | 1024 × 1536 | 526 KB | Verified |
| school-uniform-shorts.webp | 1024 × 1536 | 734 KB | Verified |
| shirt-blue-short.webp | 1115 × 1410 | 932 KB | Verified |
| shirt-white-long.webp | 1089 × 1444 | 922 KB | Verified |
| trousers-gray.webp | 1141 × 1379 | 569 KB | Verified |

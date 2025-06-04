# Product Carousel – Vanilla JS Case Study
This project is a pixel-perfect product carousel implementation for the [ebebek](https://www.e-bebek.com) homepage, mimicking the style and functionality of the real site's component. It was built entirely using **vanilla JavaScript** and **DOM manipulation**, without any third-party libraries.

---

## 📌 Features

- ✅ Works **only on homepage** (`/` or `/index.html`); logs `"wrong page"` otherwise.
- ✅ **Pixel-perfect** design matching the actual ebebek homepage.
- ✅ Fetches product data via **GET request** (from a given endpoint).
- ✅ Stores fetched data in **localStorage** on first load.
- ✅ Displays previously fetched data on subsequent loads (offline-ready).
- ✅ Favorite button (heart icon) stores state in localStorage.
- ✅ Discounts are calculated and shown if applicable.
- ✅ Clicking a product opens it in a new tab.
- ✅ **Fully responsive** layout for all devices.
- ✅ Custom horizontal scroll with navigation arrows.
- ✅ No external CSS/JS libraries used (no Bootstrap, no Swiper, etc.).

---

## 📁 File Structure

📦 product-carousel-case/ </br>
└── 📄 index.html </br>
└── 📄 script.js


All the logic including DOM creation, styling, data fetching, event handling, and responsiveness are included inside the `script.js`.

---

## 🛠️ Technologies Used

- Vanilla JavaScript
- DOM API
- localStorage
- CSS-in-JS (via `<style>` tag creation)
- Google Fonts (Quicksand)

---

## 📦 API Source

- If the products are not found in localStorage when the page is first loaded, they are fetched from a remote data source in JSON format. This source contains pre-configured product data. Once the data is retrieved, product cards are created and added to the carousel, and the data is stored in localStorage for use on future visits.
---

## 📅 Deadline

⏰ Delivered within 24 hours as per project requirement.

---

## 📷 Screenshots

<img width="1420" alt="Ekran Resmi 2025-06-04 04 28 29" src="https://github.com/user-attachments/assets/d16ffc4b-0e40-42aa-b6f9-f82be5f7f3cb" />
<img width="1392" alt="Ekran Resmi 2025-06-04 04 35 00" src="https://github.com/user-attachments/assets/cbbb715c-3584-4612-b5c1-eb46834d856b" />
<img width="1294" alt="Ekran Resmi 2025-06-04 04 29 31" src="https://github.com/user-attachments/assets/350656cf-9d7e-4af3-b4e2-eb918198be8d" />
<img width="1443" alt="Ekran Resmi 2025-06-04 04 27 46" src="https://github.com/user-attachments/assets/c494249a-8e2f-424f-81db-17bdfbffd921" />


---



# Calvo Auto Locks
 
A single-page marketing and booking website for **Calvo Auto Locks**, a mobile automotive locksmith service in Nairobi, Kenya. Visitors can see the services on offer, understand how the process works, call for emergency help, or book a technician visit online.
 
## Features
 
- **Hero carousel** – full-screen, auto-rotating, fading slideshow of car photos with "Call Now" and "Book a Visit" calls to action
- **Services** – grid of six services with icons and starting prices (lockout, key duplication, ignition repair, transponder keys, emergency call-out, lock replacement)
- **How It Works** – emergency call banner plus a four-step process overview
- **Booking form** – validated form (name, Kenyan phone number, email, service, car make/model, location, date/time, notes)
- **Sticky header** with anchor navigation and a "Get Help Now" button
- **Footer** with quick links, embedded Google Map, and social media links
- **Responsive layout** for desktop, tablet and mobile
## Tech Stack
 
- [React](https://react.dev/) (function components and hooks)
- [React Hook Form](https://react-hook-form.com/) for form state and validation
- [Axios](https://axios-http.com/) for API calls (currently commented out, see below)
- [Bootstrap 5](https://getbootstrap.com/) JS bundle for the carousel (loaded globally as `window.bootstrap`)
- [Font Awesome 6](https://fontawesome.com/) for social icons (`fa-brands`)
- [Bebas Neue](https://fonts.google.com/specimen/Bebas+Neue) via Google Fonts
- Plain CSS, with one stylesheet per component
## Project Structure
 
```
src/
├── assets/
│   ├── bmwCar_clean.png
│   ├── discovery_clean.jpg
│   ├── G-wagonCar_clean.png
│   ├── porscheCar_clean.png
│   └── vwCar.jpg
└── components/
    ├── Header.jsx / Header.css
    ├── Hero.jsx / Hero.css
    ├── Services.jsx / Services.css
    ├── HowItWorks.jsx / HowItWorks.css
    ├── Booking.jsx / Booking.css
    └── Footer.jsx / Footer.css
```
 
> `Hero.jsx` imports images from `../assets/`, so the `assets` folder should sit next to the folder containing the components.
 
## Getting Started
 
### Prerequisites
 
- Node.js 18+
- npm, yarn or pnpm
### Install dependencies
 
```bash
npm install react react-dom react-hook-form axios
```
 
### Load Bootstrap and Font Awesome
 
Add these to your `index.html`. The carousel needs the Bootstrap JS bundle, and the footer icons need Font Awesome.
 
```html
<head>
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
</head>
<body>
  <div id="root"></div>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
```
 
### Compose the page
 
```jsx
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { HowItWorks } from "./components/HowItWorks";
import { Booking } from "./components/Booking";
import { Footer } from "./components/Footer";
 
export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <HowItWorks />
      <Booking />
      <Footer />
    </>
  );
}
```
 
### Run
 
```bash
npm run dev     # development server (Vite)
npm run build   # production build
```
 
## Booking API
 
The booking form is designed to talk to a backend, but the calls are commented out in `Booking.jsx`. To enable them, uncomment:
 
- `GET /api/services/` to populate the service dropdown. Expected shape: `[{ id, name, price }]`
- `POST /api/orders/` to submit a booking. The payload is the form data with `service` converted to a number.
Until then, submitting the form only shows an alert and resets the form.
 
## Customisation
 
| What                           | Where                                                         |
| ------------------------------ | ------------------------------------------------------------- |
| Phone numbers                  | `Hero.jsx` (`tel:` link), `HowItWorks.jsx` (banner)           |
| WhatsApp / social links        | `Footer.jsx`                                                  |
| Map location                   | `Footer.jsx` (Google Maps `iframe` `src`)                     |
| Services and prices            | `Services.jsx`                                                |
| Carousel images                | `Hero.jsx` and `src/assets/`                                  |
| Brand colours                  | `#c8922a` (gold), `#141410` (near-black), `#f5f2eb` (cream)   |
| Phone validation               | `Booking.jsx` (regex accepts `+254` or `0` followed by `1`/`7` and 8 digits) |
 
## Known Issues and TODOs

- **Empty social links** for Facebook and X in `Footer.jsx`.

## License
 
All rights reserved. &copy; 2026 Calvo Auto Locks.
 
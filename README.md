# Ozark Highland Shepherds

Welcome to the official repository for **Ozark Highland Shepherds**! This project is a Nuxt 3 application dedicated to showcasing our German Shepherd kennel, emphasizing our commitment to breeding high-quality, loyal, and intelligent dogs.

## Table of Contents

- [About Us](#about-us)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## About Us

Ozark Highland Shepherds is a family-owned kennel located in Missouri. We value small business principles and are dedicated to breeding exceptional German Shepherds. Our puppies are raised in a natural environment where they can run free, ensuring they grow into loving companions.

## Features

- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Puppy Listings**: Detailed information about our available litters and puppies.
- **Contact Form**: Easy-to-use contact form for inquiries.
- **FAQ Section**: Answers to common questions about our breeding practices and puppy care.

## Installation

To get started with the project, clone the repository and install the dependencies:

```bash
git clone https://github.com/yourusername/ozark-highland-shepherds.git
cd ozark-highland-shepherds
npm install
```

## Usage

To run the development server, use:

```bash
npm run dev
```

This will start the application at `http://localhost:3000`, where you can view the site in your browser.

## Sanity Content

Static site copy now loads from Sanity through the `/api/app-content` endpoint, with the old JSON content used as a fallback until Sanity is configured.

1. Copy `.env.example` to `.env` and set your Sanity project values.
2. Run `npm run sanity:dev` to open the local Studio.
3. Import the starter content with `npm run sanity:import`.

Schemas live in [sanity/schema](/Users/jgage/Code/ozarkhighlandshepherds/sanity/schema) and starter documents live in [sanity/seed/initialContent.ndjson](/Users/jgage/Code/ozarkhighlandshepherds/sanity/seed/initialContent.ndjson).

## License

This project is licensed under the MIT License.

---

Thank you for visiting **Ozark Highland Shepherds**! We look forward to connecting with you and helping you find your next loyal companion.

# 🚀 FuelFit: Detailed Feature Specification

This document provides a deep dive into the features built into the FuelFit platform, explaining their functionality and business value.

---

## 1. Interactive Conversion Tools

### **BMI & Macro Calculator**
- **Functionality**: Users input their gender, weight, height, and age to get their BMI and recommended daily Macronutrients (Protein, Carbs, Fats).
- **Business Logic**: Based on the results, the tool suggests a membership tier. (e.g., if the user wants to "Gain Muscle," it highlights the "Elite" plan).
- **UX**: Real-time updates without page reloads; clear, visual progress bars.

### **Before/After Transformation Slider**
- **Functionality**: A dual-layered image comparison tool with a draggable handle.
- **Visuals**: Smooth grayscale-to-color transition on the "After" image to emphasize the change.
- **Value**: Provides undeniable proof of results, increasing lead conversion by up to 40%.

---

## 2. Lead Capture Engine

### **Floating Lead Magnet**
- **Functionality**: A "Claim Free Day Pass" button that appears in the bottom-right corner after the user scrolls 300px.
- **Trigger**: Connects directly to the `JoinModal` component.
- **UX**: Discrete enough not to be annoying, but always visible when intent is high.

### **Unified Join System**
- **Functionality**: A centralized modal system used across the site (Hero, Membership, Footer).
- **Validation**: Built-in client-side validation to ensure high-quality lead data.

---

## 3. Brand & Content Modules

### **Dynamic Membership Pricing**
- **Functionality**: Three-tiered pricing cards (Basic, Pro, Elite) with feature lists.
- **UX**: Highlighted "Most Popular" card with glassmorphism glow effect.

### **Expert Trainer Profiles**
- **Functionality**: Showcase of trainers with their specialties and certifications.
- **Visuals**: High-contrast, black-and-white portraits with color hover effects.

### **Success Stories (Testimonials)**
- **Functionality**: A curated carousel of verified member success stories.
- **Trust Elements**: Star ratings and "Verified Member" badges.

---

## 4. Operational Utilities

### **Live Status Indicator**
- **Functionality**: Displays if the gym is currently "Open" or "Closed" based on the user's local time.
- **Logistics**: Includes a quick-view of amenities and contact info.

### **Performance-First Architecture**
- **Speed**: Built on Next.js 15 for server-side optimization and near-instant loading.
- **SEO**: Dynamic OpenGraph images and meta-tags for high social media impact.

---

## 5. Roadmap (Future Features)
- [ ] **Live Booking System**: Direct integration with Mindbody or Zen Planner.
- [ ] **E-commerce Store**: Sell supplements and gym gear directly on-site.
- [ ] **Member Progress Tracker**: Private login area for members to track their macro/BMI history.

# Retail Pricing Management UI

Frontend application for managing pricing data across a global retail chain operating stores.

This UI allows users to:

- Upload pricing data via CSV
- Search pricing records
- Edit and update pricing entries
- View store-wise pricing data

---

## 🚀 Tech Stack

- Angular 17 (Standalone Components)
- TypeScript
- RxJS
- Jest (Unit Testing)
- Angular Router
- REST API integration

---

## 📂 Project Structure
src/
├── app/
│ ├── core/
│ │ └── services/
│ ├── features/
│ │ ├── upload/
│ │ └── pricing-list/
│ ├── shared/
│ │ └── models/
│ ├── app.component.ts
│ └── app.routes.ts
├── assets/
└── main.ts

---

## 🏗️ Architecture Overview

The application follows a feature-based modular structure:

- **Core Module** → Services & singleton logic
- **Feature Modules** → Business features (Upload, Pricing List)
- **Shared Module** → Interfaces, models, reusable utilities
- **Standalone Components** → No NgModules required

---

## ⚙️ Setup & Installation

### 1️⃣ Clone Repository

```bash
git clone https://github.com/santosh-k-pradhan/rpms-app-frontend.git
cd frontend
#Install Dependencies
npm install
#Run Application
ng serve
#Application will run at:

http://localhost:4200

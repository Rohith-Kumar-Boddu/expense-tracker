# Expense Tracker Web Application

## Overview

This monorepo contains three isolated parts that work together to form a full-stack expense-tracking system:

1. **backend/** – Express.js + Prisma + PostgreSQL API service
2. **frontend/** – React (Vite) client using Material-UI components
3. **database/** – Raw SQL schema equivalent to the Prisma data-model for direct execution

Each folder can be deployed or developed independently while sharing a consistent data model.

---

## Prerequisites

* **Node.js** ≥ 18 (frontend & backend)
* **PostgreSQL** ≥ 13  (database)
* **pnpm**/npm/yarn – your choice of package manager

---

## Quick Start

### 1. Clone & install

```bash
# clone
git clone <repo-url>
cd expense-tracker

# install backend deps
cd backend && npm install

# install frontend deps
cd ../frontend && npm install
```

### 2. Configure environment variables

Copy the example file and fill in your PostgreSQL credentials:

```bash
cp backend/.env.example backend/.env
```

```dotenv
DATABASE_URL="postgresql://USER:PASSWORD@HOST:5432/expense_tracker?schema=public"
JWT_SECRET="please_change_me"
```

### 3. Set-up database

Option-A (recommended): let Prisma handle migrations –

```bash
cd backend
npx prisma migrate dev --name init
```

Option-B: run the raw SQL script –

```bash
psql -U USER -d postgres -f database/schema.sql
```

### 4. Run services

```bash
# start backend API (port 4000)
cd backend && npm run dev

# in another terminal – start frontend (port 5173)
cd frontend && npm run dev
```

Open http://localhost:5173 and sign-up!

---

## Folder Structure

```
.
├── backend          # Node/Express/Prisma API
│   ├── src
│   │   ├── index.js
│   │   └── routes/...
│   └── prisma
│       └── schema.prisma
│
├── frontend         # React Vite app (Material-UI)
│   ├── index.html
│   └── src
│       ├── main.jsx
│       ├── App.jsx
│       └── pages/...
│
└── database
    └── schema.sql  # raw SQL for PostgreSQL
```

---

## Scripts

* `backend` – `npm run dev` starts nodemon; `npm start` runs in prod mode.
* `frontend` – `npm run dev` runs Vite; `npm run build` builds static bundle.

---

## License

This project is open-source and licensed under the MIT License.

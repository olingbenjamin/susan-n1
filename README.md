# Susan Tumuhairwe — Personal Brand Website

A premium four-page brand ecosystem for coach, mentor & speaker **Susan Tumuhairwe**:

- **Master Hub** (`/`) — universal router harmonising all three sub-brands
- **Nourish & Thrive** (`/nourish-and-thrive`) — health & nutrition coaching (green)
- **Women Prosper** (`/women-prosper`) — financial freedom & enterprise (pink)
- **Speaking & Workshops** (`/speaking-and-workshops`) — corporate training + working inquiry form (blue)

**Stack:** React 19 · Tailwind · Framer Motion · Lenis · FastAPI · MongoDB.

---

## Local Development

### Prerequisites
- Node.js 18+ and **Yarn** (do not use npm)
- Python 3.11+
- MongoDB running locally (or a connection string)

### Backend
```bash
cd backend
pip install -r requirements.txt
# backend/.env must contain: MONGO_URL, DB_NAME, CORS_ORIGINS
uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```

### Frontend
```bash
cd frontend
yarn install
# frontend/.env must contain: REACT_APP_BACKEND_URL
yarn start
```

The frontend runs on `:3000`, the backend on `:8001`. All backend routes are prefixed with `/api`.

---

## Environment Variables

**backend/.env**
```
MONGO_URL="mongodb://localhost:27017"
DB_NAME="susan_brand"
CORS_ORIGINS="*"
```

**frontend/.env**
```
REACT_APP_BACKEND_URL=https://your-domain.com
```

> Never hardcode these values in code. The frontend must always call the API via `REACT_APP_BACKEND_URL`, and the backend must read Mongo settings from the environment only.

---

## Deployment

### Option A — Deploy on Emergent (recommended, one click)
1. Open your project on **Emergent**.
2. Click the **Deploy** button in the top-right of the interface.
3. Choose your plan/resources and confirm.
4. Emergent builds the frontend, provisions the FastAPI backend + MongoDB, wires the environment variables, and gives you a live URL.
5. To ship updates later, make your changes in the chat and click **Deploy** again.

> Deployment requires a paid plan. The preview URL (`*.preview.emergentagent.com`) is for testing; use **Deploy** to get a production URL.

### Option B — Manual / self-hosted

**1. Backend (FastAPI)** — host on Render, Railway, Fly.io, or any container platform.
```bash
cd backend
pip install -r requirements.txt
uvicorn server:app --host 0.0.0.0 --port 8001
```
- Set env vars on the host: `MONGO_URL`, `DB_NAME`, `CORS_ORIGINS`.
- Use a managed MongoDB (e.g. **MongoDB Atlas**) and put its SRV string in `MONGO_URL`.
- Set `CORS_ORIGINS` to your frontend domain (e.g. `https://susan-n1.vercel.app`).
- Ensure your host routes external `/api/*` traffic to this service.

**2. Frontend (React)** — host static build on Vercel, Netlify, or Cloudflare Pages.
```bash
cd frontend
yarn install
REACT_APP_BACKEND_URL="https://your-backend-domain.com" yarn build
```
- Deploy the generated `frontend/build/` folder.
- On Vercel/Netlify, add the env var **`REACT_APP_BACKEND_URL`** pointing to your backend's public URL.
- Add a SPA rewrite so client-side routes work:
  - **Vercel** (`vercel.json`):
    ```json
    { "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
    ```
  - **Netlify** (`_redirects`):
    ```
    /*  /index.html  200
    ```

**3. Verify**
```bash
curl https://your-backend-domain.com/api/            # -> {"message":"Hello World"}
```
Then open the frontend URL and submit the Speaking & Workshops inquiry form — it should save and be retrievable at `GET /api/inquiries`.

---

## API Reference

| Method | Route | Description |
|-------|-------|-------------|
| GET | `/api/` | Health check |
| POST | `/api/inquiries` | Create a booking inquiry (name, email, organization, event_type, message required) |
| GET | `/api/inquiries` | List all inquiries (newest first) |

> **Production note:** `GET /api/inquiries` is currently unauthenticated. Gate it behind admin auth before going live.

# Trendora Backend API Reference

This document outlines the core RESTful endpoints available in the Flask backend. All authenticated routes require a JWT token passed in the `Authorization: Bearer <token>` header.

---

## 🔐 Authentication (`/api/auth`)

### `POST /api/auth/register`
Creates a new user account.
- **Payload**: `{"username": "testuser", "password": "password123", "default_niche": "tech"}`
- **Response**: `201 Created`

### `POST /api/auth/login`
Authenticates a user and returns a JWT token.
- **Payload**: `{"username": "testuser", "password": "password123"}`
- **Response**: `{"token": "eyJhbGciOiJIUz...", "userId": 1}`

### `GET /api/auth/profile`
Retrieves the logged-in user's profile and default settings.
- **Auth Required**: Yes
- **Response**: `{"id": 1, "username": "testuser", "default_niche": "tech", ...}`

---

## 📈 Trends (`/api/trends`)

### `POST /api/trends/fetch`
Fetches global search trends from PyTrends or our fast-fallback RSS mechanisms. Automatically caches to the database.
- **Auth Required**: Yes
- **Payload**: `{"niche": "tech", "geo": "US", "timeframe": "now 7-d"}`
- **Response**: `{"trends": [...], "source": "live"}`

### `GET /api/trends/leaderboard`
Fetches the top 10 trends across the entire platform based on total global search volume, along with community bookmark counts.
- **Auth Required**: Yes
- **Query Params**: None
- **Response**: `{"leaderboard": [{"rank": 1, "keyword": "Apple", "avg_volume": 1200000, "saves": 4}]}`

### `POST /api/trends/analyze` (Powered by Llama 3)
Generates an AI breakdown, hooks, and content strategy for a specific trend.
- **Auth Required**: Yes
- **Payload**: `{"keyword": "OpenAI Sora", "niche": "tech", "volume": 50000, "velocity": "rising_fast"}`
- **Response**: JSON structure containing hooks, market gaps, and thumbnail ideas.

### `POST /api/trends/script` (Powered by Llama 3)
Generates a 60-second viral video script based on a trend.
- **Auth Required**: Yes
- **Payload**: `{"keyword": "OpenAI Sora", "niche": "tech"}`
- **Response**: `{"script": "**0:00-0:05 Hook:** Did you see..."}`

---

## 📌 Bookmarks (`/api/bookmarks`)

### `GET /api/bookmarks/`
Retrieves all trends the user has bookmarked.
- **Auth Required**: Yes
- **Response**: List of saved trend objects including any attached notes.

### `POST /api/bookmarks/`
Saves a trend to the user's personal vault.
- **Auth Required**: Yes
- **Payload**: `{"keyword": "Sora", "volume": 50000, "velocity": "rising_fast"}`
- **Response**: `201 Created`

### `PUT /api/bookmarks/<id>`
Updates the attached content note/script for a saved trend.
- **Auth Required**: Yes
- **Payload**: `{"note": "Drafting out a video on this..."}`

### `DELETE /api/bookmarks/<id>`
Removes a trend from the user's vault.
- **Auth Required**: Yes

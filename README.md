# URL Shortening Service

## Overview
This project is a simple RESTful API that allows users to shorten long URLs. The API provides endpoints to create, retrieve, update, and delete short URLs, as well as track the number of times a short URL has been accessed.

## Features
- Create a new short URL
- Retrieve an original URL from a short URL
- Update an existing short URL
- Delete an existing short URL
- Get statistics on the short URL (e.g., number of times accessed)
- Optionally, a minimal frontend to interact with the API

## API Endpoints

### Create Short URL
**Endpoint:** `POST /shorten`

**Request Body:**
```json
{
  "url": "https://www.example.com/some/long/url"
}
```

**Response (201 Created):**
```json
{
  "id": "1",
  "url": "https://www.example.com/some/long/url",
  "shortCode": "abc123",
  "createdAt": "2021-09-01T12:00:00Z",
  "updatedAt": "2021-09-01T12:00:00Z"
}
```

**Errors:**
- `400 Bad Request` (if validation fails)

### Retrieve Original URL
**Endpoint:** `GET /shorten/{shortCode}`

**Response (200 OK):**
```json
{
  "id": "1",
  "url": "https://www.example.com/some/long/url",
  "shortCode": "abc123",
  "createdAt": "2021-09-01T12:00:00Z",
  "updatedAt": "2021-09-01T12:00:00Z"
}
```

**Errors:**
- `404 Not Found` (if short URL does not exist)

### Update Short URL
**Endpoint:** `PUT /shorten/{shortCode}`

**Request Body:**
```json
{
  "url": "https://www.example.com/some/updated/url"
}
```

**Response (200 OK):**
```json
{
  "id": "1",
  "url": "https://www.example.com/some/updated/url",
  "shortCode": "abc123",
  "createdAt": "2021-09-01T12:00:00Z",
  "updatedAt": "2021-09-01T12:30:00Z"
}
```

**Errors:**
- `400 Bad Request` (if validation fails)
- `404 Not Found` (if short URL does not exist)

### Delete Short URL
**Endpoint:** `DELETE /shorten/{shortCode}`

**Response:**
- `204 No Content` (if successfully deleted)
- `404 Not Found` (if short URL does not exist)

### Get URL Statistics
**Endpoint:** `GET /shorten/{shortCode}/stats`

**Response (200 OK):**
```json
{
  "id": "1",
  "url": "https://www.example.com/some/long/url",
  "shortCode": "abc123",
  "createdAt": "2021-09-01T12:00:00Z",
  "updatedAt": "2021-09-01T12:00:00Z",
  "accessCount": 10
}
```

**Errors:**
- `404 Not Found` (if short URL does not exist)

## Tech Stack
Choose any programming language, framework, and database:

### Backend
- **JavaScript**: Node.js with Express.js
- **Python**: Flask or Django
- **Java**: Spring Boot
- **Ruby**: Ruby on Rails

### Database
- **SQL**: MySQL
- **NoSQL**: MongoDB

## Notes
- Short codes must be unique and randomly generated.
- No authentication or authorization is required.
- The frontend (if implemented) should handle redirection of short URLs to the original URLs.

---
Enjoy coding! 🚀

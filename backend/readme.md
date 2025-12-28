# POST /users/register ✅

## Description
Registers a new user by accepting a JSON payload with the user's full name, email and password. Returns a JWT token and the created user (password is not returned).

> Note: This documentation assumes the router is mounted at `/users` (so the full path is `POST /users/register`).

---

## Request
- Method: `POST`
- URL: `/users/register`
- Headers:
  - `Content-Type: application/json`

### Body (JSON)

Required fields:

- `fullname` (object)
  - `firstname` (string) — REQUIRED, minimum 3 characters
  - `lastname` (string) — optional, minimum 3 characters if provided
- `email` (string) — REQUIRED, must be a valid email
- `password` (string) — REQUIRED, minimum 6 characters

Example request body:

```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "jane.doe@example.com",
  "password": "secret123"
}
```

---

## Validation Rules
- `email` must be a valid email (validated with `express-validator`).
- `fullname.firstname` must be at least 3 characters.
- `password` must be at least 6 characters.

If validation fails, the endpoint responds with status `400` and a JSON body containing `errors` (array of validation errors).

---

## Responses

- 201 Created
  - Content: `{ token, user }`
  - `token` is a JWT for authentication (expires in 24h).
  - `user` is the created user object (password is not included because it's excluded in the model).

Example successful response:

```json
HTTP/1.1 201 Created
{
  "token": "<jwt-token>",
  "user": {
    "_id": "636...",
    "fullname": { "firstname": "Jane", "lastname": "Doe" },
    "email": "jane.doe@example.com",
    "socketId": null
  }
}
```

- 400 Bad Request
  - Validation errors: `{ "errors": [ ... ] }`

Example validation error response:

```json
HTTP/1.1 400 Bad Request
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    }
  ]
}
```

  - User already exists: `{ "message": "User already exist" }`

Example user already exists response:

```json
HTTP/1.1 400 Bad Request
{
  "message": "User already exist"
}
```

- 500 Internal Server Error
  - Unexpected server/database errors. Response will usually contain an error message.

Example server error response:

```json
HTTP/1.1 500 Internal Server Error
{
  "message": "Something went wrong"
}
```

---

## Notes & Security
- Passwords are hashed before saving (using bcrypt).
- The returned `token` should be sent by the client in `Authorization: Bearer <token>` for protected routes.

---

## cURL Example

```bash
curl -X POST http://localhost:3000/users/register \
  -H "Content-Type: application/json" \
  -d '{"fullname": {"firstname":"Jane","lastname":"Doe"}, "email":"jane.doe@example.com", "password":"secret123"}'
```

---

If you'd like, I can add examples in the repo's main README or document other user endpoints (login, profile, etc.).

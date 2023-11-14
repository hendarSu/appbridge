import { http } from 'msw';

const fakeUserResponse = {
  "status": "success",
  "data": {
    "id": 17,
    "name": "hendar",
    "username": "hendar@clodeo.com",
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTcsInVzZXJuYW1lIjoiaGVuZGFyQGNsb2Rlby5jb20iLCJmdWxsbmFtZSI6ImhlbmRhciIsImlhdCI6MTY5OTkzNjc1OH0.EC1N5Cbf28El0mfUdj6YXBpBKl5jURuo5SC2n-TZF5w"
  },
  "message": "Login Berhasil!"
}

export const handlers = [
  http.post('/api/v1/auth/login', (req, res, ctx) => {
    return res(ctx.json(fakeUserResponse))
  }),
];

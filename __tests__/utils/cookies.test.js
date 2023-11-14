import { setCookie, getCookie, removeCookie } from "./../../utils/cookies";

const fakeUserData = {
    "status": "success",
    "data": {
        "id": 17,
        "name": "hendar",
        "username": "hendar@clodeo.com",
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTcsInVzZXJuYW1lIjoiaGVuZGFyQGNsb2Rlby5jb20iLCJmdWxsbmFtZSI6ImhlbmRhciIsImlhdCI6MTY5OTkzNjc1OH0.EC1N5Cbf28El0mfUdj6YXBpBKl5jURuo5SC2n-TZF5w"
    },
    "message": "Login Berhasil!"
}

describe("Testing Cookies Service", () => {
    it("Testing flow set Cookies", () => {
        setCookie('userData', JSON.stringify(fakeUserData));
        const userData = JSON.parse(getCookie("userData"));

        expect(userData.status).toEqual(fakeUserData.status);
        expect(userData.data).toEqual(fakeUserData.data);
    })

    it("Testing Flow Remove Cookies", () => {
        removeCookie("userData");
    })
})
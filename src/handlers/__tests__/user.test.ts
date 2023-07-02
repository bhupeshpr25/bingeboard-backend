import * as user from "../user";

describe("user handler", () => {
  it("should create a new user", async () => {
    const req = {
      body: { username: "hello", email: "hello@hello.com", password: "hi" },
    };
    const res = {
      json({ token }) {
        expect(token).toBeTruthy();
      },
    };
    await user.signup(req, res, () => {});
  });
  jest.setTimeout(5000000);
});

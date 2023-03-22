import app from "../server";
import supertest from "supertest";

describe("GET /", () => {
  it("SHOULD SEND BACK DATA", async () => {
    const res = await supertest(app).get("/");

    expect(res.body.message).toBe("hello");
  });
});

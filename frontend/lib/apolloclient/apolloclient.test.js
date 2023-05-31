import { getPaths } from "../queries";
import client from "./apolloclient";

describe("apollo client should work", () => {
  it("should be able to make a query", async () => {
    const { data, error } = await client.query({ query: getPaths });

    // so we got no errors
    expect(error).toBeFalsy();

    // and we received an object mening we got data
    expect(typeof data).toBe("object");
  });
});

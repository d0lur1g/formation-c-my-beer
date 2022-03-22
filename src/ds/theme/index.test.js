import theme from "./theme";

describe("theme", () => {
  it("returns a correct settings of values", () => {
    expect(theme).toMatchSnapshot();
  });
});

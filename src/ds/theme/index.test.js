import theme from ".";

describe("theme", () => {
  it("returns a correct settings of values", () => {
    expect(theme).toMatchSnapshot();
  });
});

import renderer from "react-test-renderer";
import Terminal from "./terminal";

describe("terminal should work", () => {
  it("should match the snapshot", () => {
    const component = renderer.create(
      <Terminal sdout={["$ echo kaas", "blah blah blah"]} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

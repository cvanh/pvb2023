import Footer from "./footer";
import renderer from "react-test-renderer";

describe("footer", () => {
  it("footer should match the snapshot", () => {
    const component = renderer.create(<Footer />);
    let tree = component.toJSON();
  });
});

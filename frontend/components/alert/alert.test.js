import renderer from "react-test-renderer";
import Alert from "./alert";
// import Link from '../Link';

// it('changes the class when hovered', () => {
//   const component = renderer.create(
//     <Link page="http://www.facebook.com">Facebook</Link>,
//   );
//   let tree = component.toJSON();
//   expect(tree).toMatchSnapshot();

//   // manually trigger the callback
//   renderer.act(() => {
//     tree.props.onMouseEnter();
//   });
//   // re-rendering
//   tree = component.toJSON();
//   expect(tree).toMatchSnapshot();

//   // manually trigger the callback
//   renderer.act(() => {
//     tree.props.onMouseLeave();
//   });
//   // re-rendering
//   tree = component.toJSON();
//   expect(tree).toMatchSnapshot();
// });

it("alert should show", () => {});

describe("alert should work", () => {
  it("should match", () => {
    const component = renderer.create(<Alert preview={true} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

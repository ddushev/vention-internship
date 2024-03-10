import renderer from "react-test-renderer";
import About from "./about";

describe("About snapshot", () => {
  test("renders correctly", () => {
    const tree = renderer.create(<About />).toJSON();

    expect(tree).toMatchInlineSnapshot(`
    <div
      className="center-text"
    >
      <h2>
        About page
      </h2>
      <p>
        This is the about page
      </p>
    </div>
  `);
  });
});

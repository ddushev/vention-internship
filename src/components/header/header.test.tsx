import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import Header from "./header";

describe("Header component", () => {
  test("renders correctly", () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Provider store={store}>
            <Header />
          </Provider>
        </MemoryRouter>,
      )
      .toJSON();

    expect(tree).toMatchInlineSnapshot(`
<header
  className="headerContainer"
>
  <h1
    className="storeName"
  >
    Games Store
  </h1>
  <nav>
    <ul
      className="navbarLinkItems"
    >
      <a
        aria-current="page"
        className="linkItem active"
        href="/"
        onClick={[Function]}
      >
        Home
      </a>
      <a
        className="linkItem"
        href="/products"
        onClick={[Function]}
        onMouseEnter={[Function]}
        onMouseLeave={[Function]}
      >
        Products
        <ul
          className="productsDropDownContainer"
        >
          <button
            className="linkItem"
            onClick={[Function]}
            type="button"
          >
            PC
          </button>
          <button
            className="linkItem"
            onClick={[Function]}
            type="button"
          >
            Playstation 5
          </button>
          <button
            className="linkItem"
            onClick={[Function]}
            type="button"
          >
            XBox One
          </button>
        </ul>
      </a>
      <a
        className="linkItem"
        href="/about"
        onClick={[Function]}
      >
        About
      </a>
      <a
        className="linkItem"
        href="/user/sign-in"
        onClick={[Function]}
      >
        Sign In
      </a>
      <a
        className="linkItem"
        href="/user/sign-up"
        onClick={[Function]}
      >
        Sign Up
      </a>
    </ul>
  </nav>
</header>
`);
  });
});

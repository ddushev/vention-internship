import { cleanup, render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import TestWrapper from "@/elements/testWrapper";
import GameCard from "./gameCard";

const game = {
  id: 1,
  name: "Counter-Strike",
  price: 29.99,
  image: "https://raw.githubusercontent.com/ddushev/Vention/master/src/publicMock/cs.jpg",
  rating: 3,
  platforms: ["pc"],
  genre: "Shooter",
  minAge: 18,
  addDate: new Date("2023-01-02"),
  description:
    "Minecraft is a game made up of blocks, creatures, and community. Blocks can be used to reshape the world or build fantastical creations. Creatures can be battled or befriended, depending on your playstyle.",
};

afterEach(cleanup);

describe("GameCard snapshot", () => {
  test("renders a specific game with predefined values", () => {
    const tree = renderer.create(
      <TestWrapper>
        <GameCard game={game} />
      </TestWrapper>,
    );
    expect(tree).toMatchInlineSnapshot(`
<div
  aria-selected={true}
  className="gameCardBox"
  role="option"
  tabIndex={0}
>
  <div
    className="gameCardContainer"
  >
    <div
      className="frontSide"
    >
      <div
        className="imageContainer"
      >
        <div
          className="platformsContainer"
        >
          <img
            alt="pc"
            className="platformIcon"
            src="mock-file-stub"
          />
        </div>
        <img
          alt="Counter-Strike"
          className="gameImage"
          src="https://raw.githubusercontent.com/ddushev/Vention/master/src/publicMock/cs.jpg"
        />
      </div>
      <div
        className="detailsContainer"
      >
        <h4
          className="gameTitle"
        >
          Counter-Strike
        </h4>
        <p>
          29.99
          $
        </p>
      </div>
      <div
        className="starsWrapper"
      >
        <span
          aria-label="3 Stars"
          className="MuiRating-root MuiRating-sizeSmall Mui-readOnly MuiRating-readOnly css-1lauo1g-MuiRating-root"
          onMouseLeave={[Function]}
          onMouseMove={[Function]}
          role="img"
        >
          <span>
            <span
              className="MuiRating-icon MuiRating-iconFilled css-7qmtgc-MuiRating-icon"
            >
              <svg
                aria-hidden={true}
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1vooibu-MuiSvgIcon-root"
                data-testid="StarIcon"
                focusable="false"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                />
              </svg>
            </span>
          </span>
          <span>
            <span
              className="MuiRating-icon MuiRating-iconFilled css-7qmtgc-MuiRating-icon"
            >
              <svg
                aria-hidden={true}
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1vooibu-MuiSvgIcon-root"
                data-testid="StarIcon"
                focusable="false"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                />
              </svg>
            </span>
          </span>
          <span>
            <span
              className="MuiRating-icon MuiRating-iconFilled css-7qmtgc-MuiRating-icon"
            >
              <svg
                aria-hidden={true}
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1vooibu-MuiSvgIcon-root"
                data-testid="StarIcon"
                focusable="false"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                />
              </svg>
            </span>
          </span>
          <span>
            <span
              className="MuiRating-icon MuiRating-iconEmpty css-1c99szj-MuiRating-icon"
            >
              <svg
                aria-hidden={true}
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiRating-iconEmpty css-i4bv87-MuiSvgIcon-root"
                data-testid="StarIcon"
                focusable="false"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                />
              </svg>
            </span>
          </span>
          <span>
            <span
              className="MuiRating-icon MuiRating-iconEmpty css-1c99szj-MuiRating-icon"
            >
              <svg
                aria-hidden={true}
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiRating-iconEmpty css-i4bv87-MuiSvgIcon-root"
                data-testid="StarIcon"
                focusable="false"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                />
              </svg>
            </span>
          </span>
        </span>
      </div>
    </div>
    <div
      className="backSide"
    >
      <p
        className="description"
      >
        Minecraft is a game made up of blocks, creatures, and community. Blocks can be used to reshape the world or build fantastical creations. Creatures can be battled or befriended, depending on your playstyle.
      </p>
      <p>
        18
        +
      </p>
      <div
        className="buttonsContainer"
      >
        <button
          className="cardButtons"
          onClick={[Function]}
          type="button"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</div>
`);
  });
});

describe("GameCard functional", () => {
  beforeEach(() => {
    render(
      <TestWrapper>
        <GameCard game={game} />
      </TestWrapper>,
    );
  });

  test("game name", () => {
    expect(screen.getByText("Counter-Strike")).toBeDefined();
    expect(
      screen.getByText(
        "Minecraft is a game made up of blocks, creatures, and community. Blocks can be used to reshape the world or build fantastical creations. Creatures can be battled or befriended, depending on your playstyle.",
      ),
    ).toBeDefined();
  });

  test("game description", () => {
    expect(
      screen.getByText(
        "Minecraft is a game made up of blocks, creatures, and community. Blocks can be used to reshape the world or build fantastical creations. Creatures can be battled or befriended, depending on your playstyle.",
      ),
    ).toBeDefined();
  });

  test("game price", () => {
    expect(screen.getByText("29.99$")).toBeDefined();
  });

  test("game rating", () => {
    expect(screen.getByLabelText("3 Stars")).toBeDefined();
  });

  test("game platform", () => {
    expect(screen.getByAltText("pc")).toBeDefined();
  });
});

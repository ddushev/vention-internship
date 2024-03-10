import { render } from "@testing-library/react";
import { useNavigate, NavigateFunction } from "react-router-dom";

import ErrorPage from "./errorPage";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("ErrorPage functional", () => {
  beforeEach(() => {
    (useNavigate as jest.Mock<NavigateFunction>).mockReset();
  });

  test('useEffect navigates to "/something-went-wrong"', () => {
    const mockNavigate = jest.fn();
    (useNavigate as jest.Mock<NavigateFunction>).mockReturnValue(mockNavigate);

    render(<ErrorPage onResetError={() => {}} />);

    expect(useNavigate).toHaveBeenCalled();

    expect(mockNavigate).toHaveBeenCalledWith("/something-went-wrong");
  });
});

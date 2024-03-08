// eslint-disable-next-line import/no-extraneous-dependencies
import userEvent from "@testing-library/user-event";
// eslint-disable-next-line import/no-extraneous-dependencies
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";

import PATHS from "@/utils/paths";
import FiltersSection from "@/components/products/filtersSection/filtersSection";
import Categories from "./categories";

const mockHandleFilterChange = jest.fn();

describe("Categories functional", () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={[PATHS.HOME]}>
        <Routes>
          <Route path={PATHS.HOME} element={<Categories />} />
          <Route path={PATHS.PRODUCTS} element={<FiltersSection handleFilterChange={mockHandleFilterChange} />} />
        </Routes>
      </MemoryRouter>,
    );
  });

  test("PC category click", async () => {
    const user = userEvent.setup();
    await user.click(screen.getByRole("link", { name: "pc PC" }));
    expect(screen.getByRole("heading", { name: "PC" })).toBeDefined();
  });

  test("PS5 category click", async () => {
    const user = userEvent.setup();
    await user.click(screen.getByRole("link", { name: "ps5 Playstation 5" }));
    expect(screen.getByRole("heading", { name: "PS5" })).toBeDefined();
  });

  test("XBOX category click", async () => {
    const user = userEvent.setup();
    await user.click(screen.getByRole("link", { name: "xbox XBox One" }));
    expect(screen.getByRole("heading", { name: "XBOX" })).toBeDefined();
  });
});

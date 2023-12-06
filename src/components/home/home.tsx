import Page from "@/elements/page/page";
import SearchField from "@/elements/searchField/searchField";
import Categories from "./categories/categories";

export default function Home() {
  return (
    <Page title="Home page">
      <SearchField />
      <Categories />
    </Page>
  );
}

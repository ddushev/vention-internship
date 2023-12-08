import Page from "@/elements/page/page";
import SearchField from "@/elements/searchField/searchField";
import Categories from "./categories/categories";
import RecentGames from "./recentGames/recentGames";

export default function Home() {
  return (
    <Page title="Home">
      <SearchField />
      <Categories />
      <RecentGames />
    </Page>
  );
}

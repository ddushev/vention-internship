import Page from "@/elements/page/page";
import HomeSearch from "@/components/home/homeSearch/homeSearch";
import Categories from "./categories/categories";
import RecentGames from "./recentGames/recentGames";

export default function Home() {
  return (
    <Page title="Home">
      <HomeSearch />
      <Categories />
      <RecentGames />
    </Page>
  );
}

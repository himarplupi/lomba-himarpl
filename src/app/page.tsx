import { Banner } from "@/components/common/banner";
import { Countdown } from "@/components/common/countdown";
import { PosterTheme } from "@/components/common/poster-theme";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden pb-96">
      <Banner />
      <Countdown />
      <PosterTheme />
    </main>
  );
}

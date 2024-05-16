import { Banner } from "@/components/common/banner";
import { Countdown } from "@/components/common/countdown";
import { PosterTheme } from "@/components/common/poster-theme";
import { Timeline } from "@/components/common/timeline";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden pb-96">
      <Banner />
      <Countdown />
      <PosterTheme />
      <Timeline />
    </main>
  );
}

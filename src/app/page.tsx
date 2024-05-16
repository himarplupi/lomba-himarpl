import { Banner } from "@/components/common/banner";
import { Countdown } from "@/components/common/countdown";
import { Footer } from "@/components/common/footer";
import { GlobalFooter } from "@/components/common/global-footer";
import { Navbar } from "@/components/common/navbar";
import { PosterTheme } from "@/components/common/poster-theme";
import { Timeline } from "@/components/common/timeline";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen overflow-hidden">
        <Banner />
        <Countdown />
        <PosterTheme />
        <Timeline />
        <Footer />
        <GlobalFooter />
      </main>
    </>
  );
}

import { Banner } from "@/components/common/banner";
import { Countdown } from "@/components/common/countdown";
import { Footer } from "@/components/common/footer";
import { GlobalFooter } from "@/components/common/global-footer";
import { HorizontalScrollText } from "@/components/common/horizontal-scroll-text";
import { Navbar } from "@/components/common/navbar";
import { PosterTheme } from "@/components/common/poster-theme";
import { Timeline } from "@/components/common/timeline";
import { ReactLenis } from "@/lib/lenis";

export default function Home() {
  return (
    <>
      <Navbar />
      <ReactLenis root>
        <main className="overflow-hidden xl:container">
          <Banner />
          <Countdown />
          <HorizontalScrollText />
          <PosterTheme />
          <Timeline />
          <Footer />
          <GlobalFooter />
        </main>
      </ReactLenis>
    </>
  );
}

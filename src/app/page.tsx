import { Banner } from "@/components/common/banner";
import { Countdown } from "@/components/common/countdown";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden pb-96">
      <Banner />
      <Countdown />
    </main>
  );
}

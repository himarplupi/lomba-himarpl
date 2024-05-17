"use client";

export function Timeline() {
  return (
    <section id="timeline" className="relative flex">
      <div className="bg-[#E6E7CB] md:basis-1/3"></div>
      <div className="relative h-[768px] basis-full space-y-8 bg-[#E2BF91] bg-opacity-65 px-10 py-20 md:basis-2/3">
        <h2 className="scroll-m-20 text-center font-wildrodeo text-5xl font-semibold tracking-tight text-[#31180E] md:text-left md:text-7xl lg:text-8xl">
          Jadwal Lomba
        </h2>
        <div className="absolute -top-10 left-0 -z-10 h-full w-full bg-[url('https://raw.githubusercontent.com/himarplupi/assets-himarpl/main/lomba/bg-wave-sand.jpg')] bg-[length:64px_64px] bg-repeat " />
      </div>
      <div className="absolute top-32 ml-4 flex w-full">
        <div className="flex basis-1/6 flex-col items-center justify-start md:basis-1/3">
          <div className="relative z-10 mt-20 grid aspect-square w-12 place-content-center rounded-full bg-[#7B3018]" />

          <div className="relative z-10 mt-20 grid aspect-square w-12 place-content-center rounded-full bg-[#7B3018]" />

          <div className="relative z-10 mt-20 grid aspect-square w-12 place-content-center rounded-full bg-[#7B3018]" />

          <div className="relative z-10 mt-20 grid aspect-square w-12 place-content-center rounded-full bg-[#7B3018]" />

          <div className="absolute top-28 h-96 w-2 bg-[#31180E]" />
        </div>
        <div className=" mt-20 basis-5/6 space-y-[78px] pr-8 md:basis-2/3 md:space-y-16 md:px-10">
          <div>
            <h4 className="scroll-m-20 font-wildrodeo text-xl font-semibold tracking-tight text-[#31180E] md:text-3xl lg:text-4xl">
              18 Mei 2024
            </h4>
            <p className="font-serif leading-6 text-[#31180E] md:text-lg">
              Pendaftaran dan Penyerahan Poster
            </p>
          </div>
          <div>
            <h4 className="scroll-m-20 font-wildrodeo text-xl font-semibold tracking-tight text-[#31180E] md:text-3xl lg:text-4xl">
              8 Juni 2024
            </h4>
            <p className="font-serif leading-6 text-[#31180E] md:text-lg">
              Akhir Masa Pendaftaran dan Penyerahan Poster
            </p>
          </div>
          <div>
            <h4 className="scroll-m-20 font-wildrodeo text-xl font-semibold tracking-tight text-[#31180E] md:text-3xl lg:text-4xl">
              9 hingga 12 Juni 2024
            </h4>
            <p className="font-serif leading-6 text-[#31180E] md:text-lg">
              Masa Penilaian Poster
            </p>
          </div>
          <div>
            <h4 className="scroll-m-20 font-wildrodeo text-xl font-semibold tracking-tight text-[#31180E] md:text-3xl lg:text-4xl">
              13 Juni 2024
            </h4>
            <p className="font-serif leading-6 text-[#31180E] md:text-lg">
              Pengumuman Pemenang Lomba
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

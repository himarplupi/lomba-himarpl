"use client";

export function Timeline() {
  return (
    <section id="timeline" className="relative flex">
      <div className="basis-1/3 bg-[#E6E7CB]"></div>
      <div className="relative h-[768px] basis-2/3 space-y-8 bg-[#E2BF91] bg-opacity-65 px-10 py-20">
        <h2 className="scroll-m-20 font-wildrodeo text-8xl font-semibold tracking-tight text-[#31180E]">
          Jadwal Lomba
        </h2>
        <div className="absolute -top-10 left-0 -z-10 h-full w-full bg-[url('https://raw.githubusercontent.com/himarplupi/assets-himarpl/main/lomba/bg-wave-sand.jpg')] bg-[length:64px_64px] bg-repeat " />
      </div>
      <div className="absolute top-32 flex w-full">
        <div className="flex basis-1/3 flex-col items-center justify-start">
          <div className="relative z-10 mt-20 grid aspect-square w-12 place-content-center rounded-full bg-[#7B3018]" />

          <div className="relative z-10 mt-20 grid aspect-square w-12 place-content-center rounded-full bg-[#7B3018]" />

          <div className="relative z-10 mt-20 grid aspect-square w-12 place-content-center rounded-full bg-[#7B3018]" />

          <div className="relative z-10 mt-20 grid aspect-square w-12 place-content-center rounded-full bg-[#7B3018]" />

          <div className="absolute top-28 h-96 w-2 bg-[#31180E]" />
        </div>
        <div className="mt-20 basis-2/3 space-y-16 px-10">
          <div>
            <h4 className="scroll-m-20 font-wildrodeo text-4xl font-semibold tracking-tight text-[#31180E]">
              18 Mei 2024
            </h4>
            <p className="font-serif text-lg leading-6 text-[#31180E]">
              Pendaftaran dan Penyerahan Poster
            </p>
          </div>
          <div>
            <h4 className="scroll-m-20 font-wildrodeo text-4xl font-semibold tracking-tight text-[#31180E]">
              8 Juni 2024
            </h4>
            <p className="font-serif text-lg leading-6 text-[#31180E]">
              Akhir Masa Pendaftaran dan Penyerahan Poster
            </p>
          </div>
          <div>
            <h4 className="scroll-m-20 font-wildrodeo text-4xl font-semibold tracking-tight text-[#31180E]">
              9 hingga 12 Juni 2024
            </h4>
            <p className="font-serif text-lg leading-6 text-[#31180E]">
              Masa Penilaian Poster
            </p>
          </div>
          <div>
            <h4 className="scroll-m-20 font-wildrodeo text-4xl font-semibold tracking-tight text-[#31180E]">
              13 Juni 2024
            </h4>
            <p className="font-serif text-lg leading-6 text-[#31180E]">
              Pengumuman Pemenang Lomba
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

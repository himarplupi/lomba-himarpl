"use client";

export function Timeline() {
  return (
    <section id="timeline" className="relative flex">
      <div className="basis-1/3 bg-[#A2672F]"></div>
      <div className="h-[768px] basis-2/3 space-y-8 bg-[#B6924A] px-10 py-20">
        <h2 className="scroll-m-20 font-wildrodeo text-8xl font-semibold tracking-tight text-zinc-50">
          Jadwal Lomba
        </h2>
      </div>
      <div className="absolute top-32 flex w-full">
        <div className="flex basis-1/3 flex-col items-center justify-start">
          <div className="relative z-10 mt-20 grid aspect-square w-12 place-content-center rounded-full bg-[#E6E7CB]" />

          <div className="relative z-10 mt-20 grid aspect-square w-12 place-content-center rounded-full bg-[#E6E7CB]" />

          <div className="relative z-10 mt-20 grid aspect-square w-12 place-content-center rounded-full bg-[#E6E7CB]" />

          <div className="relative z-10 mt-20 grid aspect-square w-12 place-content-center rounded-full bg-[#E6E7CB]" />

          <div className="absolute top-28 h-96 w-2 bg-[#E3BB67]" />
        </div>
        <div className="mt-20 basis-2/3 space-y-16 px-10">
          <div>
            <h4 className="scroll-m-20 font-wildrodeo text-4xl font-semibold tracking-tight text-zinc-50">
              18 Mei 2024
            </h4>
            <p className="font-serif text-lg leading-6 text-zinc-50">
              Pendaftaran dan Penyerahan Poster
            </p>
          </div>
          <div>
            <h4 className="scroll-m-20 font-wildrodeo text-4xl font-semibold tracking-tight text-zinc-50">
              8 Juni 2024
            </h4>
            <p className="font-serif text-lg leading-6 text-zinc-50">
              Akhir Masa Pendaftaran dan Penyerahan Poster
            </p>
          </div>
          <div>
            <h4 className="scroll-m-20 font-wildrodeo text-4xl font-semibold tracking-tight text-zinc-50">
              9 hingga 12 Juni 2024
            </h4>
            <p className="font-serif text-lg leading-6 text-zinc-50">
              Masa Penilaian Poster
            </p>
          </div>
          <div>
            <h4 className="scroll-m-20 font-wildrodeo text-4xl font-semibold tracking-tight text-zinc-50">
              13 Juni 2024
            </h4>
            <p className="font-serif text-lg leading-6 text-zinc-50">
              Pengumuman Pemenang Lomba
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

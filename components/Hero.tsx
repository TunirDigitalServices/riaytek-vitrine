import Image from "next/image";

export default function Hero({ t }: { t: any }) {
  return (
    <section
      id="home"
      className="min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-white to-gray-50 px-6 mt-10"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl w-full">

        {/* LEFT TEXT */}
        <div className="text-center md:text-left">

          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#08b096]/10 text-[#08b096] text-sm mb-6">
            💚 Your daily health companion
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold text-[#053769] leading-tight">
            Riay<span className="text-[#08b096]">tek</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-600">
            {t.subtitle}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

            <button className="bg-[#08b096] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 hover:bg-[#053769] transition">
              {t.download}
            </button>

            <button className="border border-[#053769] text-[#053769] px-8 py-4 rounded-xl font-semibold hover:bg-[#053769] hover:text-white transition">
              Learn More
            </button>

          </div>

          <p className="mt-6 text-sm text-gray-400">
            Free • Private • Built for your health
          </p>

        </div>

        {/* RIGHT MOCKUP */}
        <div className="flex justify-center">

          <div className="relative">

            {/* glow effect */}
            <div className="absolute -inset-6 bg-[#08b096] opacity-20 blur-3xl rounded-full" />

            {/* phone */}
            <div className="relative bg-black rounded-[40px] p-3 shadow-2xl">

              <Image
                src="/screen-shot.webp"
                alt="Riaytek app"
                width={280}
                height={600}
                className="rounded-[32px]"
              />

            </div>

            {/* floating badge */}
            <div className="absolute -top-6 -right-6 bg-white shadow-lg px-4 py-2 rounded-xl text-sm text-[#053769]">
              💊 Reminders
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white shadow-lg px-4 py-2 rounded-xl text-sm text-[#08b096]">
              💧 Water tracking
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
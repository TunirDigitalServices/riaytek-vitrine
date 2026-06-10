import { translations } from "@/lib/translations";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const t =
    translations[locale as keyof typeof translations] ??
    translations.en;

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-zinc-900">

      {/* HERO */}
      <section className="container mx-auto px-6 py-28 text-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-green-100 text-green-700 text-sm mb-6">
          💚 Your daily health companion
        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold text-green-600 tracking-tight">
          Riaytek
        </h1>

        <h2 className="mt-6 text-3xl md:text-4xl font-bold max-w-2xl mx-auto leading-tight">
          {t.title}
        </h2>

        <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto">
          {t.subtitle}
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-green-600 text-white px-8 py-4 rounded-xl hover:bg-green-700 transition shadow-lg hover:scale-105">
            {t.download}
          </button>

          <button className="px-8 py-4 rounded-xl border border-gray-300 hover:bg-gray-100 transition">
            Learn More
          </button>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">

          <h3 className="text-center text-3xl font-bold mb-14">
            {t.features}
          </h3>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="p-8 rounded-2xl bg-gray-50 hover:shadow-xl transition hover:-translate-y-1">
              <div className="text-3xl">💧</div>
              <h4 className="mt-4 font-bold text-xl">Water Tracking</h4>
              <p className="text-gray-600 mt-2">
                Keep your hydration on track with smart reminders.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gray-50 hover:shadow-xl transition hover:-translate-y-1">
              <div className="text-3xl">💊</div>
              <h4 className="mt-4 font-bold text-xl">Medication Reminders</h4>
              <p className="text-gray-600 mt-2">
                Never miss a dose with intelligent notifications.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gray-50 hover:shadow-xl transition hover:-translate-y-1">
              <div className="text-3xl">❤️</div>
              <h4 className="mt-4 font-bold text-xl">Daily Motivation</h4>
              <p className="text-gray-600 mt-2">
                Stay consistent with positive daily encouragement.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 text-center">

          <h3 className="text-3xl font-bold mb-14">
            How it works
          </h3>

          <div className="grid md:grid-cols-3 gap-8 text-left">

            <div className="p-6">
              <span className="text-green-600 font-bold">01</span>
              <h4 className="font-bold mt-2">Create your profile</h4>
              <p className="text-gray-600">Set your health goals in seconds.</p>
            </div>

            <div className="p-6">
              <span className="text-green-600 font-bold">02</span>
              <h4 className="font-bold mt-2">Get smart reminders</h4>
              <p className="text-gray-600">Receive personalized notifications.</p>
            </div>

            <div className="p-6">
              <span className="text-green-600 font-bold">03</span>
              <h4 className="font-bold mt-2">Build healthy habits</h4>
              <p className="text-gray-600">Improve your life step by step.</p>
            </div>

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 text-center bg-green-600 text-white">

        <h3 className="text-3xl font-bold">
          Start taking care of your health today
        </h3>

        <p className="mt-4 text-green-100">
          Join Riaytek and build better habits effortlessly
        </p>

        <button className="mt-8 bg-white text-green-600 px-8 py-4 rounded-xl font-bold hover:scale-105 transition">
          Download Now
        </button>

      </section>

    </main>
  );
}
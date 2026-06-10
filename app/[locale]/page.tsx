import Hero from "@/components/Hero";
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
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-zinc-900 pt-30" >

      {/* HERO */}
      <Hero t={t} />

      {/* FEATURES */}
      <section className="py-24 bg-white" id="features">
        <div className="container mx-auto px-6">

          <h3 className="text-center text-3xl font-bold mb-14 text-[#053769]">
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
      <section className="py-24 bg-gray-50" id="how-it-works">
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
      <section className="py-24 text-center bg-[#053769] text-white" id="final-cta">

        <h3 className="text-3xl font-bold">
          Start taking care of your health today
        </h3>

        <p className="mt-4 text-[#08b096]">
          Join Riaytek and build better habits effortlessly
        </p>

        <button className="mt-8 bg-white text-[#053769] px-8 py-4 rounded-xl font-bold hover:scale-105 transition">
          Download Now
        </button>

      </section>

    </main>
  );
}
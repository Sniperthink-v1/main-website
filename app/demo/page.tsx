import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Demo – SniperThink",
  description:
    "Schedule a live walkthrough of SniperThink's AI automation platform.",
};

const CALENDLY_URL =
  "https://calendly.com/admin-sniperthink/walk-through-for-demos?hide_event_type_details=1&hide_gdpr_banner=1";

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-16">
        <section className="space-y-6">
          <p className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
            Live walkthrough
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Get a personalized SniperThink demo
          </h1>
          <p className="text-lg text-gray-600">
            See how our AI agents and business intelligence dashboards automate
            work, surface insights, and keep your operators focused on decisions
            that matter. Choose a time that works best for you and we will
            tailor the walkthrough to your use cases.
          </p>
          <ul className="grid gap-4 text-gray-700 sm:grid-cols-2">
            <li className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
              <h2 className="text-base font-semibold text-gray-900">
                What to expect
              </h2>
              <p className="text-sm text-gray-600">
                30-minute live session covering automation pipelines, analytics,
                and onboarding plans.
              </p>
            </li>
            <li className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
              <h2 className="text-base font-semibold text-gray-900">
                Bring your team
              </h2>
              <p className="text-sm text-gray-600">
                Invite operators, sales leads, or founders—anyone who will
                collaborate inside SniperThink.
              </p>
            </li>
          </ul>
        </section>

        <section className="rounded-3xl border border-gray-200 bg-white p-4 shadow-lg">
          <iframe
            title="SniperThink Demo Booking"
            src={CALENDLY_URL}
            className="h-[840px] w-full rounded-2xl border-0"
            loading="lazy"
          />
          <p className="mt-4 text-center text-sm text-gray-500">
            Prefer a direct link?{" "}
            <a
              href="https://calendly.com/admin-sniperthink/walk-through-for-demos"
              className="font-semibold text-blue-600 hover:text-blue-700"
              target="_blank"
              rel="noreferrer"
            >
              Open Calendly in a new tab
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}

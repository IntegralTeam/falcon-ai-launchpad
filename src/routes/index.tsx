import { createFileRoute } from "@tanstack/react-router";

import { LandingPage } from "@/components/landing/landing-page";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Falcon Innovation Academy — Learn AI as a Business Advantage" },
      {
        name: "description",
        content:
          "A practical four-course AI for Business program: fundamentals, tools, agents and implementation. Build real artifacts, not just prompts.",
      },
      { property: "og:title", content: "Falcon Innovation Academy — AI for Business" },
      {
        property: "og:description",
        content:
          "Master AI tools and decision-making to make your business competitive and future-proof.",
      },
    ],
  }),
  component: LandingPage,
});

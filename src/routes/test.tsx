import { createFileRoute } from "@tanstack/react-router";
import { Index } from "./index";

export const Route = createFileRoute("/test")({
  head: () => ({
    meta: [
      { title: "solynx. — test" },
      { name: "description", content: "solynx. scroll test: 1200 ms fade, 20 vh swipe." },
      { property: "og:title", content: "solynx. — test" },
      { property: "og:description", content: "scroll test version of solynx." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => <Index duration={1200} pauseVh={20} label="test: 1200ms / 20vh — back" />,
});

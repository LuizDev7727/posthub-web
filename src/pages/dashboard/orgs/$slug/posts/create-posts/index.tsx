import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/dashboard/orgs/$slug/posts/create-posts/",
)({
  component: CreatePostsPage,
});

function CreatePostsPage() {
  return <div>Hello "/dashboard/orgs/$slug/posts/create-posts/"!</div>;
}

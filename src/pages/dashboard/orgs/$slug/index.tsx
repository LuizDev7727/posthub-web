import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/orgs/$slug/")({
  component: Metrics,
});

function Metrics() {
  return (
    <div>
      <h1>Metrics</h1>
    </div>
  );
}

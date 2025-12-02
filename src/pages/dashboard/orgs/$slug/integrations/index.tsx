import { createFileRoute } from "@tanstack/react-router";
import { IntegrationsList } from "./-components/integrations-list";
import { Suspense } from "react";
import { IntegrationsLoading } from "./-components/integrations-loading";

export const Route = createFileRoute("/dashboard/orgs/$slug/integrations/")({
  component: IntegrationsPage,
});

function IntegrationsPage() {
  return (
    <div>
      <h1 className="mt-6 text-xl font-semibold">Integrations</h1>

      <Suspense fallback={<IntegrationsLoading />}>
        <IntegrationsList />
      </Suspense>
    </div>
  );
}

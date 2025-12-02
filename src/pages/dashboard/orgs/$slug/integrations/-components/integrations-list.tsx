import { Button } from "@/components/ui/button";
import { getIntegrationsHttp } from "@/http/integrations/get-integrations.http";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useParams } from "@tanstack/react-router";
import { Youtube } from "lucide-react";

export function IntegrationsList() {
  const { slug } = useParams({
    from: "/dashboard/orgs/$slug",
  });

  const {
    data: { integrations },
  } = useSuspenseQuery({
    queryKey: ["integrations"],
    queryFn: () =>
      getIntegrationsHttp({
        slug,
      }),
  });

  const hasYoutubeIntegration = integrations.find(
    (integration) => integration.social === "YOUTUBE",
  );

  return (
    <div>
      <h1>Integrations List</h1>
      <p>{slug}</p>

      <div className="w-fit p-4 rounded-lg border border-input space-y-2.5 mt-4">
        <Youtube />
        <h1>
          Youtube{" "}
          {hasYoutubeIntegration
            ? `- ${hasYoutubeIntegration.channelName}`
            : ""}
        </h1>
        <p className="text-sm text-muted-foreground">
          Connect your youtube account with your organization
        </p>
        <form>
          <Button
            className="w-full"
            variant={hasYoutubeIntegration ? "destructive" : "outline"}
          >
            {hasYoutubeIntegration ? "Disconnect" : "Connect"}
          </Button>
        </form>
      </div>
    </div>
  );
}

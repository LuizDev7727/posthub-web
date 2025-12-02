import { Separator } from "@/components/ui/separator";
import { createFileRoute, Link } from "@tanstack/react-router";
import { General } from "./-components/general";
import { Billing } from "./-components/billing";

type OrgSettingsSearch = {
  tab: string;
};

export const Route = createFileRoute("/dashboard/orgs/$slug/settings/")({
  component: OrgSettings,
  validateSearch: (search: OrgSettingsSearch) => {
    return {
      tab: search.tab ?? "general",
    };
  },
});

function OrgSettings() {
  const { slug } = Route.useParams();
  const { tab } = Route.useSearch();

  return (
    <div className="mt-4 space-y-4">
      <div className="space-y-2">
        <h1 className="text-xl font-medium">Settings</h1>
        <p className="text-muted-foreground text-sm">
          Manage your account settings and set e-mail preferences.
        </p>
      </div>

      <Separator />

      <section className="w-full flex items-start gap-x-10">
        <div className="flex flex-col gap-y-2">
          {/* Tabs */}
          <Link
            to={"/dashboard/orgs/$slug/settings"}
            params={{ slug }}
            search={{ tab: "general" }}
          >
            General
          </Link>
          <Link
            to={"/dashboard/orgs/$slug/settings"}
            params={{ slug }}
            search={{ tab: "billing" }}
          >
            Billing
          </Link>
        </div>
        <div className="w-full">
          {tab === "general" && <General />}
          {tab === "billing" && <Billing />}
        </div>
      </section>
    </div>
  );
}

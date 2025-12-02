import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { formatBytes } from "@/utils/format-bytes";
import { getInitials } from "@/utils/get-initials";
import { createFileRoute, Link } from "@tanstack/react-router";
import { CreditCard, UploadCloudIcon, Users, Workflow } from "lucide-react";

export const Route = createFileRoute("/dashboard/orgs/$slug/")({
  component: Metrics,
});

function Metrics() {
  const { slug } = Route.useParams();

  const metrics = {
    totalPosts: 0,
    totalMembers: 0,
    totalIntegrations: 0,
    usage: {
      totalStorage: 0,
      totalMonthlyBandwidth: 0,
    },
  };

  const { totalPosts, totalMembers, totalIntegrations, usage } = metrics;

  return (
    <div className="space-y-4 mt-4 flex w-full flex-col justify-center">
      <div className="flex items-center gap-x-4">
        <div className="w-full h-auto rounded-[12px] flex flex-col gap-y-[9px] border border-zinc-800 bg-[#18181B]/20 p-4">
          <header className="flex items-center justify-between">
            <h1 className="text-sm font-medium">Posts</h1>
            <UploadCloudIcon className="size-5 text-zinc-400" />
          </header>

          <footer>
            <h2 className="text-xl font-bold">{totalPosts}</h2>
            <span className="text-sm text-muted-foreground">
              Want to add more posts ?{" "}
              <Link
                to="/dashboard/orgs/$slug/posts"
                params={{ slug }}
                className="text-zinc-50 underline"
              >
                Click here
              </Link>
            </span>
          </footer>
        </div>

        <div className="w-full h-auto rounded-[12px] flex flex-col gap-y-[9px] border border-zinc-800 bg-[#18181B]/20 p-4">
          <header className="flex items-center justify-between">
            <h1 className="text-sm font-medium">Members</h1>
            <Users className="size-5 text-zinc-400" />
          </header>

          <footer>
            <h2 className="text-xl font-bold">{totalMembers}</h2>
            <span className="text-sm text-muted-foreground">
              Want to add more members ?{" "}
              <Link
                to={`/dashboard/orgs/$slug/members`}
                params={{ slug }}
                className="text-zinc-50 underline"
              >
                Click here
              </Link>
            </span>
          </footer>
        </div>

        <div className="w-full h-auto rounded-[12px] flex flex-col gap-y-[9px] border border-zinc-800 bg-[#18181B]/20 p-4">
          <header className="flex items-center justify-between">
            <h1 className="text-sm font-medium">Integrations</h1>
            <Workflow className="size-5 text-zinc-400" />
          </header>

          <footer>
            <h2 className="text-xl font-bold">{totalIntegrations}</h2>
            <span className="text-sm text-muted-foreground">
              Want to add more integrations ?{" "}
              <Link
                to={`/dashboard/orgs/$slug/integrations`}
                params={{ slug }}
                className="text-zinc-50 underline"
              >
                Click here
              </Link>
            </span>
          </footer>
        </div>
      </div>

      <section className="w-full bg-[#18181B]/20 p-4 rounded-lg border border-zinc-800">
        <h1>Recent Activities</h1>

        <div className="mt-4">
          <div className="flex items-center gap-x-4">
            <Avatar>
              <AvatarImage />
              <AvatarFallback>{getInitials("John Doe")}</AvatarFallback>
            </Avatar>
            <div>
              <h1>Jeferson Oliveira created organization with name Stripe</h1>
              <p className="text-muted-foreground">2 minutes ago</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#18181B]/20 rounded-lg border border-zinc-800">
        <header className="flex items-center p-4 justify-between">
          <div className="flex items-center gap-x-4">
            <h3>Usage</h3>
            <Badge>PRO</Badge>
          </div>
          <Button variant={"outline"}>
            <CreditCard />
            <p>Manage Plan</p>
          </Button>
        </header>

        <div className="space-y-4 p-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h4>Storage Amount</h4>
              <span className="text-sm text-muted-foreground">
                <span className="text-zinc-300 ml-2">
                  {formatBytes(usage.totalStorage)}
                </span>{" "}
                / 6TB
              </span>
            </div>
            <Progress value={usage.totalStorage / (1024 * 1024)} />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h4>Monthly bandwidth</h4>
              <span className="text-sm text-muted-foreground">
                <span className="text-zinc-300 ml-2">
                  {formatBytes(usage.totalMonthlyBandwidth)}
                </span>{" "}
                / 6TB
              </span>
            </div>
            <Progress value={usage.totalMonthlyBandwidth / (1024 * 1024)} />
          </div>
        </div>

        <footer className="w-full p-4 rounded-b-lg bg-zinc-950">
          <p className="text-muted-foreground text-sm">
            Your next payment is on{" "}
            <span className="text-zinc-50">April 7th</span>
          </p>
        </footer>
      </section>
    </div>
  );
}

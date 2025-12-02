import { OrganizationSwitcher } from "@/components/organization-switcher";
import { PendingInvites } from "@/components/pending-invites";
import { Profile } from "@/components/profile";
import { Tabs } from "@/components/tabs";
import { Button } from "@/components/ui/button";
import {
  createFileRoute,
  Link,
  Outlet,
  useParams,
} from "@tanstack/react-router";
import { Slash, UploadCloudIcon } from "lucide-react";

export const Route = createFileRoute("/dashboard/orgs/$slug")({
  component: OrgLayout,
});

function OrgLayout() {
  const { slug } = useParams({
    from: "/dashboard/orgs/$slug",
  });

  return (
    <div>
      <div>
        <header className="w-full flex items-center justify-between border-input p-4">
          <div className="flex items-center gap-3">
            <img
              width={100}
              height={100}
              src={"/logo.svg"}
              className="size-6"
              alt="Rocketseat"
            />

            <Slash className="size-3 -rotate-24 text-border" />

            <OrganizationSwitcher />
          </div>
          <div className="flex items-center gap-x-2">
            <Button className="bg-lime-500 hover:bg-lime-600" asChild>
              <Link
                to={`/dashboard/orgs/$slug/posts/create-posts`}
                params={{ slug }}
              >
                <UploadCloudIcon />
                Create Posts
              </Link>
            </Button>
            <PendingInvites />
            <Profile />
          </div>
        </header>
        <Tabs />
      </div>

      <div className="mx-auto max-w-[1440px] w-full mt-4">
        <Outlet />
      </div>
    </div>
  );
}

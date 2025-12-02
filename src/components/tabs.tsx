import {
  LayoutDashboard,
  Projector,
  Settings2,
  UploadCloud,
  Users,
  Workflow,
} from "lucide-react";
import { NavLink } from "./nav-link";
import { Button } from "./ui/button";
import { useParams } from "@tanstack/react-router";

export function Tabs() {
  const { slug } = useParams({
    from: "/dashboard/orgs/$slug",
  });

  return (
    <div className="border-b p-4">
      <nav className="flex items-center gap-2">
        <Button
          asChild
          variant="ghost"
          size="sm"
          className="border border-transparent text-muted-foreground data-[current=true]:border-lime-400 data-[current=true]:text-foreground"
        >
          <NavLink to={`/dashboard/orgs/$slug`} params={{ slug }}>
            <LayoutDashboard />
            Metrics
          </NavLink>
        </Button>

        <Button
          asChild
          variant="ghost"
          size="sm"
          className="border border-transparent text-muted-foreground data-[current=true]:border-lime-400 data-[current=true]:text-foreground"
        >
          <NavLink to={`/dashboard/orgs/$slug/posts`} params={{ slug }}>
            <UploadCloud />
            Posts
          </NavLink>
        </Button>

        <Button
          asChild
          variant="ghost"
          size="sm"
          className="border border-transparent text-muted-foreground data-[current=true]:border-lime-400 data-[current=true]:text-foreground"
        >
          <NavLink href={`/dashboard/orgs/$slug/projects`} params={{ slug }}>
            <Projector />
            Projects
          </NavLink>
        </Button>

        <Button
          asChild
          variant="ghost"
          size="sm"
          className="border border-transparent text-muted-foreground data-[current=true]:border-lime-400 data-[current=true]:text-foreground"
        >
          <NavLink
            href={`/dashboard/orgs/$slug/integrations`}
            params={{ slug }}
          >
            <Workflow />
            Integrations
          </NavLink>
        </Button>

        <Button
          asChild
          variant="ghost"
          size="sm"
          className="border border-transparent text-muted-foreground data-[current=true]:border-lime-400 data-[current=true]:text-foreground"
        >
          <NavLink href={`/dashboard/orgs/$slug/members`} params={{ slug }}>
            <Users />
            Members
          </NavLink>
        </Button>

        <Button
          asChild
          variant="ghost"
          size="sm"
          className="border border-transparent text-muted-foreground data-[current=true]:border-lime-400 data-[current=true]:text-foreground"
        >
          <NavLink to={`/dashboard/orgs/$slug/settings`} params={{ slug }}>
            <Settings2 />
            Settings & Billing
          </NavLink>
        </Button>
      </nav>
    </div>
  );
}

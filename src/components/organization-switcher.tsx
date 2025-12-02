import { getInitials } from "@/utils/get-initials";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ChevronsUpDown } from "lucide-react";
import { Badge } from "./ui/badge";
import { Link } from "@tanstack/react-router";

export function OrganizationSwitcher() {
  const currentOrg = "stripe";

  const organizations = [
    {
      id: "asdasd",
      name: "Stripe",
      slug: "stripe",
      plan: "PRO",
      avatarUrl: "https://github.com/stripe.png",
    },
  ];

  const isCurrentOrgSelectedFoundOnArray = organizations.find(
    (org) => org.slug === currentOrg,
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 rounded p-1 text-sm font-medium outline-none focus-visible:ring-2 focus-visible:ring-primary">
        {isCurrentOrgSelectedFoundOnArray ? (
          <>
            <Avatar className="size-4">
              {isCurrentOrgSelectedFoundOnArray.avatarUrl && (
                <AvatarImage src={isCurrentOrgSelectedFoundOnArray.avatarUrl} />
              )}
              <AvatarFallback className="text-xs">
                {getInitials(isCurrentOrgSelectedFoundOnArray.name)}
              </AvatarFallback>
            </Avatar>
            <span className="truncate text-left">
              {isCurrentOrgSelectedFoundOnArray.name}
            </span>
            <Badge variant={"success"}>
              {isCurrentOrgSelectedFoundOnArray.plan}
            </Badge>
          </>
        ) : (
          <span className="text-muted-foreground">Select organization</span>
        )}
        <ChevronsUpDown className="ml-auto size-4 text-muted-foreground" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        alignOffset={-16}
        sideOffset={12}
        className="w-[200px]"
      >
        <DropdownMenuGroup>
          <DropdownMenuLabel>Organizations</DropdownMenuLabel>
          {organizations.map((organization) => {
            return (
              <DropdownMenuItem key={organization.id} asChild>
                <Link
                  className="cursor-pointer"
                  href={`/dashboard/orgs/${organization.slug}`}
                  to="/dashboard/orgs/$id"
                  params={{ id: organization.slug }}
                >
                  <Avatar className="mr-2 size-4">
                    {organization.avatarUrl && (
                      <AvatarImage src={organization.avatarUrl} />
                    )}
                    <AvatarFallback />
                  </Avatar>
                  <span className="line-clamp-1">{organization.name}</span>
                </Link>
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          {/* <CreateOrganizationDialog/> */}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

import { BellIcon, XIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { getInitials } from "@/utils/get-initials";

export function PendingInvites() {
  const pendingInvites = [
    {
      id: "2323",
      inviter: {
        id: "123",
        name: "John Doe",
        avatarUrl: "https://example.com/avatar.jpg",
      },
      organization: {
        name: "I dont know",
      },
    },
  ];

  const pendingInvitesLength = pendingInvites.length;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          aria-label="Notifications"
          className="relative"
          // onClick={handleClick}
          size="icon"
          variant="outline"
        >
          <BellIcon aria-hidden="true" size={16} />
          {pendingInvitesLength > 0 && (
            <Badge className="-top-2 -translate-x-1/2 absolute left-full min-w-5 px-1">
              {pendingInvitesLength > 99 ? "99+" : pendingInvitesLength}
            </Badge>
          )}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        {pendingInvites.map((pendingInvite) => {
          return (
            <div
              key={pendingInvite.id}
              className="z-50 max-w-[400px] rounded-md border bg-background p-4 shadow-lg"
            >
              <div className="flex gap-3">
                <Avatar>
                  {pendingInvite.inviter.avatarUrl && (
                    <AvatarImage src={pendingInvite.inviter.avatarUrl} />
                  )}
                  <AvatarFallback>
                    {getInitials(pendingInvite.inviter.name)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex grow flex-col gap-3">
                  <div className="space-y-1">
                    <p className="text-muted-foreground text-sm">
                      <a
                        className="font-medium text-foreground hover:underline"
                        href="/"
                      >
                        {pendingInvite.inviter.name}
                      </a>{" "}
                      invited you in{" "}
                      <a
                        className="font-medium text-foreground hover:underline"
                        href="/"
                      >
                        {pendingInvite.organization.name}
                      </a>
                      .
                    </p>
                    <p className="text-muted-foreground text-xs">2 min ago</p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm">Accept</Button>
                    <Button size="sm" variant="outline">
                      Decline
                    </Button>
                  </div>
                </div>
                <Button
                  aria-label="Close notification"
                  className="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent"
                  variant="ghost"
                >
                  <XIcon
                    aria-hidden="true"
                    className="opacity-60 transition-opacity group-hover:opacity-100"
                    size={16}
                  />
                </Button>
              </div>
            </div>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

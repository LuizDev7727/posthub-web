import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getInitials } from "@/utils/get-initials";
import { Ellipsis } from "lucide-react";

type PendingInvitesTableProps = {
  pendingInvites: {
    id: string;
    name: string;
    email: string;
    role: string | null;
    avatarUrl: string | null;
  }[];
};

export function PendingInvitesTable({
  pendingInvites,
}: PendingInvitesTableProps) {
  const isPendingInvitesEmpty = pendingInvites.length === 0;

  return (
    <div className="rounded-lg border border-input mt-4 p-2 bg-[#18181B]/20">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Pending Invites</TableHead>
            <TableHead className="text-right">Role</TableHead>
            <TableHead className="text-right"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isPendingInvitesEmpty ? (
            <p>No Pending Invites</p>
          ) : (
            pendingInvites.map((member) => {
              return (
                <TableRow key={member.id}>
                  <TableCell className="font-medium" style={{ width: 1180 }}>
                    <div className="flex items-center gap-x-2">
                      <Avatar>
                        {member.avatarUrl && (
                          <AvatarImage src={member.avatarUrl} />
                        )}
                        <AvatarFallback>
                          {getInitials(member.name)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h1 className="font-medium">{member.name}</h1>
                        <p className="text-sm text-muted-foreground">
                          {member.email}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-right text-muted-foreground">
                    {member.role}
                  </TableCell>
                  <TableCell className="text-right" style={{ width: 60 }}>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant={"outline"} size={"icon-sm"}>
                          <Ellipsis className="size-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>Update Role</DropdownMenuItem>
                        <DropdownMenuItem>Remove Member</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              );
            })
          )}
        </TableBody>
      </Table>
    </div>
  );
}

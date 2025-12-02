import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getInitials } from "@/utils/get-initials";
import { Ellipsis } from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

type TeamMembersTableProps = {
  teamMembers: {
    id: string;
    name: string;
    email: string;
    avatarUrl: string | null;
    joinedAt: Date;
    role: string;
  }[];
};

export function TeamMembersTable({ teamMembers }: TeamMembersTableProps) {
  return (
    <div className="rounded-lg border border-input mt-4 p-2 bg-[#18181B]/20">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Member</TableHead>
            <TableHead className="text-right">Role</TableHead>
            <TableHead className="text-right">Joined at</TableHead>
            <TableHead className="text-right"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {teamMembers.map((member) => {
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
                <TableCell className="text-right text-muted-foreground">
                  {member.joinedAt.toDateString()}
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
          })}
        </TableBody>
      </Table>
    </div>
  );
}

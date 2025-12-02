import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { createFileRoute } from "@tanstack/react-router";
import { Crown, Search, User } from "lucide-react";
import { TeamMembersTable } from "./-components/team-members-table";
import { PendingInvitesTable } from "./-components/pending-invites-table";

export const Route = createFileRoute("/dashboard/orgs/$slug/members/")({
  component: MembersPage,
});

function MembersPage() {
  const teamMembers = [
    {
      id: 1,
      name: "John Doe",
      email: "johndoe@gmail.com",
      role: "ADMIN",
      joinedAt: new Date(),
    },
    {
      id: 2,
      name: "Jane Doe",
      email: "janedoe@gmail.com",
      role: "MEMBER",
      joinedAt: new Date(),
    },
  ];

  const pendingInvites = [
    { id: 1, name: "John Doe", email: "johndoe@gmail.com", role: "ADMIN" },
    { id: 2, name: "John Doe", email: "janedoe@gmail.com", role: "MEMBER" },
  ];

  return (
    <div className="mt-4 space-y-4">
      <h1 className="text-xl font-semibold">Members</h1>

      <div className="w-full rounded-lg bg-[#18181B]/20 border border-zinc-900 p-4">
        <header>
          <h2>Invite Member</h2>
          <p className="text-muted-foreground">
            Invite new members by email address
          </p>
        </header>

        <form className="space-y-4">
          <div className="flex items-center gap-x-4 mt-4">
            <div className="flex flex-col gap-y-2 w-full">
              <Label>Email</Label>
              <Input placeholder="johndoe@gmail.com" />
            </div>
            <div className="flex flex-col gap-y-2">
              <Label>Role</Label>
              <Select name="role" defaultValue="MEMBER">
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ADMIN">
                    <Crown />
                    Admin
                  </SelectItem>
                  <SelectItem value="MEMBER">
                    <User />
                    Member
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button
            type="submit"
            className="w-full bg-lime-500 hover:bg-lime-600"
          >
            Send Invite
          </Button>
        </form>
      </div>

      <div className="mt-4">
        <div className="w-[259px] h-[36px] border border-zinc-900 rounded-lg px-[12px] py-[7.5px] flex text-muted-foreground items-center gap-x-2">
          <Search className="size-4" />
          <input
            placeholder="Search by email"
            className="w-full placeholder:text-sm focus:none outline-none text-primary"
          />
        </div>

        <TeamMembersTable teamMembers={teamMembers} />

        <PendingInvitesTable pendingInvites={pendingInvites} />
      </div>
    </div>
  );
}

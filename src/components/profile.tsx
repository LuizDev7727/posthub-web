import { ChevronDown, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { getInitials } from "@/utils/get-initials";

export function Profile() {

  const profile = {
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    avatarUrl: 'https://github.com/LuizDev7727.png',
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-3 outline-none">
        <div className="flex flex-col items-end">
          <span className="text-sm font-medium">{profile.name}</span>
          <span className="text-xs text-muted-foreground">{profile.email}</span>
        </div>
        <Avatar className="size-8">
          {profile.avatarUrl && <AvatarImage src={profile.avatarUrl} />}
          {profile.name && (
            <AvatarFallback>{getInitials(profile.name)}</AvatarFallback>
          )}
        </Avatar>
        <ChevronDown className="size-4 text-muted-foreground" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem asChild>
          <a href="/api/sign-out" className='cursor-pointer'>
            <LogOut className="mr-2 size-4" />
            Sign Out
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
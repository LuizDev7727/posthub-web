import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { getInitials } from "@/utils/get-initials"
import { ArrowRight } from "lucide-react"

export function OrganizationList() {

  const organizations = [
    {
      id:'1212',
      name: 'Stripe',
      slug: 'stripe',
      avatarUrl: 'https://github.com/stripe.png',
      postsCount: 0,
      owner: {
        name: 'John Doe',
        avatarUrl: 'https://github.com/LuizDev7727.png'
      },
      createdAt: new Date(),
    }
  ]

  return (
    <div className="flex flex-wrap gap-4">
      {organizations.map((org) => (
        <div
          key={org.id}
          className="flex h-[200px] w-full max-w-[388px] flex-col justify-between rounded-lg border dark:border-zinc-800 dark:bg-[#18181B]/20"
        >

          <header className="flex items-center justify-between gap-2.5 self-stretch px-5 pt-5">
            <div className='flex items-center gap-x-2'>
              <Avatar className="size-9 shrink-0">
                {org.avatarUrl && <AvatarImage src={org.avatarUrl}/> }
                <AvatarFallback className="text-xs">
                  {getInitials(org.name)}
                </AvatarFallback>
              </Avatar>

              {/* Organization Info */}
              <div className="flex flex-col gap-y-1">
                <h3 className="font-sans text-lg font-semibold leading-[1.21em] dartk:text-zinc-50">
                  {org.name}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="font-sans text-xs font-normal leading-[1.21em] text-zinc-500">
                  {org.postsCount} Posts
                  </span>
                  <div className="size-1 shrink-0 rounded-full bg-zinc-600" />
                  <span className="font-sans text-xs font-normal leading-[1.21em] text-zinc-500">
                    0 storage
                  </span>
                </div>
              </div>
            </div>
            <Button variant={'outline'} asChild>
              <a href={`/dashboard/orgs/${org.slug}`}>
                View
                <ArrowRight/>
              </a>
            </Button>
          </header>

          {/* Footer */}
          <footer className="flex items-center gap-2 self-stretch rounded-b-lg border-t dark:border-zinc-800 dark:bg-zinc-950 px-5 py-4">
            {/* Creator Avatar */}
            <Avatar className="size-4 shrink-0">
              {org.owner.avatarUrl && <AvatarImage src={org.owner.avatarUrl}/> }
              <AvatarFallback className="text-xs">
                {getInitials(org.owner.name)}
              </AvatarFallback>
            </Avatar>

            {/* Creator Info */}
            <span className="font-sans text-xs font-normal leading-[1.21em] ">
              <span className='text-zinc-900 dark:text-primary font-medium'>{org.owner.name} </span> <span className='underline text-zinc-500'> created {org.createdAt.toDateString()}</span>
            </span>
          </footer>
        </div>
      ))}
    </div>
  )
}
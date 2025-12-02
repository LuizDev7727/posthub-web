import { createFileRoute } from '@tanstack/react-router'
import { OrganizationList } from './-components/organizations-list'
import { Slash } from 'lucide-react'
import { Profile } from '@/components/profile'
import { OrganizationSwitcher } from '@/components/organization-switcher'

export const Route = createFileRoute('/dashboard/orgs/')({
  component: Organizations,
})

function Organizations() {
  return (
    <div>
      <header className="w-full flex items-center justify-between border-b border-input p-4">
        <div className="flex items-center gap-3">
          <img
            width={100}
            height={100}
            src={'/logo.svg'}
            className="size-6"
            alt="Rocketseat"
          />

          <Slash className="size-3 -rotate-24 text-border" />

          <OrganizationSwitcher/>
        </div>
        <Profile/>
      </header>

      <div className='p-4'>
        <OrganizationList/>
      </div>

    </div>
  )
}

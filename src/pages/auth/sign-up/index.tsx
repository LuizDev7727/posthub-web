import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/auth/sign-up/')({
  component: SignUpPage,
})

function SignUpPage() {
  return <div>
    <h1>Hello</h1>
  </div>
}

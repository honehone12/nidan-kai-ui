import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/verify/result/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/verify/result/"!</div>
}

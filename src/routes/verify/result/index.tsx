import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/verify/result/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <p className="text-2xl">OK</p>
    </main>
  )
}

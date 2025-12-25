import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/setup/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <form
        method="GET"
        action="/setup/qr"
        className="flex flex-col items-center justify-center"
      >
        <div className="mb-10 ">
          <input
            name="email"
            type="email"
            required
            placeholder="email@email.com"
            title="Email"
            className="input validator w-90"
          />
        </div>
        <div className="mb-10">
          <button type="submit" className="btn btn-accent w-50">
            Set Up
          </button>
        </div>
      </form>
    </main>
  )
}

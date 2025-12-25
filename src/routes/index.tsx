import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <main className="flex gap-10 flex-col min-h-screen items-center justify-center">
      <div>
        <Link to="/setup">
          <button className="btn btn-accent w-50">Set Up</button>
        </Link>
      </div>
      <div>
        <Link to="/verify">
          <button className="btn btn-accent w-50">Verify</button>
        </Link>
      </div>
    </main>
  )
}

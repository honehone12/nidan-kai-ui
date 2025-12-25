import Loading from '@/components/Loading'
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useTransition } from 'react'

export const Route = createFileRoute('/verify/')({
  component: RouteComponent,
})

function RouteComponent() {
  const navigate = useNavigate()
  const [pending, startTransition] = useTransition()

  async function action(form: FormData) {
    startTransition(async () => {
      const res = await fetch('http://localhost:8081/api/mfa/qr/verify', {
        method: 'POST',
        body: form,
      })
      if (res.status !== 200) {
        throw new Error(`response ${res.status}:${res.statusText}`)
      }

      navigate({ to: '/verify/result' })
    })
  }

  function Form() {
    return (
      <form
        action={action}
        className="flex flex-col gap-10 items-center justify-center"
      >
        <div>
          <input
            name="email"
            type="email"
            required
            disabled={pending}
            placeholder="email@email.com"
            title="Email"
            className="input validator w-90"
          />
        </div>
        <div>
          <input
            name="code"
            type="text"
            required
            maxLength={6}
            minLength={6}
            placeholder="code"
            pattern="^[0-9]{6}$"
            title="Code"
            className="input validator w-30"
          />
          <p className="validator-hint">Must be numbers</p>
        </div>
        <div>
          <button
            type="submit"
            disabled={pending}
            className="btn btn-accent w-50"
          >
            Verify
          </button>
        </div>
      </form>
    )
  }

  return (
    <main className="flex min-h-screen items-center justify-center">
      {pending ? <Loading /> : <Form />}
    </main>
  )
}

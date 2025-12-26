import Loading from '@/components/Loading'
import { EMAIL_QUERY_SCHEMA } from '@/lib/validation'
import { createFileRoute } from '@tanstack/react-router'
import { Suspense, use } from 'react'

export const Route = createFileRoute('/setup/qr/')({
  component: RouteComponent,
  validateSearch: EMAIL_QUERY_SCHEMA,
})

let __qrPromise: Promise<string> | null = null

function RouteComponent() {
  const { email } = Route.useSearch()

  interface Props {
    loadPromise: Promise<string>
  }

  function QR({ loadPromise }: Props) {
    const qr = use(loadPromise)

    return (
      <div>
        <img src={qr} />
      </div>
    )
  }

  async function load(): Promise<string> {
    const form = new FormData()
    form.set('email', email)

    const res = await fetch('http://localhost:8081/api/mfa/qr/setup', {
      method: 'POST',
      body: form,
    })
    if (res.status !== 200) {
      throw new Error(`response ${res.status}:${res.statusText}`)
    }

    return await res.text()
  }

  if (!__qrPromise) {
    __qrPromise = load()
  }

  return (
    <main className="flex min-h-screen items-center justify-center">
      <Suspense fallback={<Loading />}>
        <QR loadPromise={__qrPromise} />
      </Suspense>
    </main>
  )
}

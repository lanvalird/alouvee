import Link from 'next/link'

export default function Landing() {
  return (
    <main className="flex flex-col p-4">
      <h1>Alouvee</h1>
      <p>Маленький блокнотик на основе браузера</p>
      <h2 className="mt-8 text-center text-lg">Log in as</h2>
      <div className="mt-4 flex w-full flex-col gap-2 sm:flex-row">
        <Link href="/storage" className="btn btn-primary w-full">
          Guest
        </Link>
        <button className="btn btn-secondary w-full" disabled>
          User
        </button>
      </div>
    </main>
  )
}

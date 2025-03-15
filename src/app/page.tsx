import Link from "next/link";

export default function Landing() {
  return (
    <main className="flex flex-col p-4">
      <h1>Alouvee</h1>
      <p>Маленький блокнотик на основе браузера</p>
      <Link href="/storage" className="btn btn-primary">
        Войти, как гость
      </Link>
      <button className="btn btn-secondary" disabled>
        Войти, как юзер
      </button>
    </main>
  );
}

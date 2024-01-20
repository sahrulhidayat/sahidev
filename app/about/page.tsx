import Link from 'next/link'

export default function About() {
  return (
    <section className="mx-auto my-12 max-w-4xl p-6">
      <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 sm:text-5xl dark:text-white">
        About me
      </h2>
      <p className="mt-4 text-center text-xl text-slate-900 dark:text-white">
        Hello, my name is sahrul Hidayat. I&apos;am android and web developer. I
        have completed several online courses from{' '}
        <a className="underline" href="https://dicoding.com">
          Dicoding
        </a>{' '}
        and others. Currently, I mostly develop Android applications.
      </p>
      <p className="mt-4 text-center text-xl text-slate-900 dark:text-white">
        I mainly use Kotlin for Android development. The concise and powerful
        language is a derivative of Java. It has all the built-in power and adds
        more features that make it faster and more powerful for developing
        Android apps.
      </p>
      <div className="flex w-4-xl justify-center sm:justify-center">
        <Link
          href={'/projects'}
          className="mt-8 rounded-lg border-2  stroke-slate-700 px-4 py-2 font-bold shadow-sm dark:stroke-slate-400"
        >
          more..
        </Link>
      </div>
    </section>
  )
}

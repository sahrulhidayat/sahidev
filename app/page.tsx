import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="mx-auto max-w-4xl">
      <section
        id="hero"
        className="my-12 flex flex-col-reverse items-center justify-center gap-8 p-6 sm:flex-row"
      >
        <article className="sm:w-1/2">
          <h2 className="max-w-md text-center text-4xl font-bold text-slate-900 sm:text-left sm:text-5xl dark:text-white">
            <span className="text-indigo-900 dark:text-indigo-300">
              Welcome
            </span>{' '}
            Visitor
          </h2>
          <p className="mt-4 max-w-md text-center text-2xl text-slate-700 sm:text-left dark:text-slate-400">
            Hello, this is my personal website.
          </p>
          <div className="flex w-full justify-center sm:justify-start">
            <Link
              href={'/about'}
              className="mt-8 rounded-lg border-2 stroke-slate-700 px-4 py-2 font-bold shadow-sm dark:stroke-slate-400"
            >
              more..
            </Link>
          </div>
        </article>
        <Image
          src={'/hero.png'}
          width={250}
          height={250}
          alt={'Person dab on the rocket'}
        />
      </section>
    </main>
  )
}

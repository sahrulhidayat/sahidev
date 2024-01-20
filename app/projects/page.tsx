import Image from 'next/image'

export default function Projects() {
  return (
    <section className="mx-auto my-12 max-w-4xl scroll-mt-20 p-6">
      <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 sm:text-5xl dark:text-white">
        Projects
      </h2>
      <ul className="mx-auto my-12 flex list-none flex-col items-center gap-8">
        <li className="flex w-2/3 flex-col items-center rounded-3xl border border-solid border-slate-900 px-12 py-6 shadow-xl sm:w-5/6 dark:border-gray-100">
          <Image
            className="mb-6 rounded-3xl"
            src={'/elingnote.png'}
            width={250}
            height={250}
            alt="Elingnote"
          />
          <h3 className="slate-900 mt-2 text-center text-2xl font-bold sm:text-3xl dark:text-white">
            Elingnote
          </h3>
          <p className="mt-2 text-center text-xl text-slate-500 sm:block sm:text-2xl dark:text-slate-400">
            Lightweight note and reminder. 
          </p>
          <a
            className="mt-6 h-auto w-36"
            href="https://play.google.com/store/apps/details?id=com.sahi.elingnote"
          >
            <Image
              src={'/google-play.png'}
              width={256}
              height={82}
              alt="Google Play"
            />
          </a>
          <p className="mt-2 text-center text-lg text-slate-500 sm:block sm:text-lg dark:text-slate-400">
            Source Code :{' '}
            <a href="https://github.com/sahrulhidayat/elingnote" className='underline'>Github</a>
          </p>
        </li>
      </ul>
    </section>
  )
}

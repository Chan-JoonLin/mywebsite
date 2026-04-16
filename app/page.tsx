import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        {/* Top section: intro + headshot */}
        <div className="flex items-center flex-col gap-6">
          <Image
            className=""
            src="/myhead.jpg"
            alt="My Face"
            width={400}
            height={100}
            priority
          />

          <h1 className="max-w-xs text-2xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Hello! My name is Joon Lin.
          </h1>

          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            I am a student currently studying at the University of Sydney, and
            here is my
            <a
              href="https://www.linkedin.com/in/joonlinchan156/"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              {" "}
              Linkedin
            </a>
            {" "}and my{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Instagram.
            </a>
          </p>

          {/* EXTRA TEXT SLOT 1: about you / summary */}
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            {/* Replace this comment with more intro text about yourself, your interests, goals, etc. */}
            Throughout my studies I have had the opportunity to work on various
            projects, from robot calibration to building circuits to video game
            design.
          </p>
        </div>

        {/* Buttons section */}
        <div className="mt-10 flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://docs.google.com/document/d/18rq30SDzDgOsDPSV6NBt6qKrlvO_7B8u/edit?usp=sharing&ouid=110862824482583026058&rtpof=true&sd=true&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            View my Resume
          </a>

          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>

        {/* Photos section */}
        <section className="mt-16 w-full">
          <p className="mb-6 text-base leading-7 text-zinc-700 dark:text-zinc-300">
            These photos illustrate my journey throughout 2025 – starting when I
            received news of my offer at the University of Sydney.
          </p>

          {/* EXTRA TEXT SLOT 2: caption / story about the photos */}
          <p className="mb-6 text-base leading-7 text-zinc-700 dark:text-zinc-300">
            {/* Replace this comment with a short story or reflection about what this year meant to you. */}
          </p>

          <div className="flex flex-wrap gap-4">
            <Image
              className="dark:invert"
              src="/20160125_123052.jpg"
              alt="photo1"
              width={160}
              height={160}
            />
            <Image
              className="dark:invert"
              src="/20211202_165153.jpg"
              alt="photo2"
              width={160}
              height={160}
            />
            <Image
              className="dark:invert"
              src="/20250101_070129.jpg"
              alt="photo3"
              width={160}
              height={160}
            />
            <Image
              className="dark:invert"
              src="/20250213_124338.jpg"
              alt="photo4"
              width={160}
              height={160}
            />
            <Image
              className="invert dark:invert-0"
              src="/20251213_183258.jpg"
              alt="photo5"
              width={160}
              height={160}
            />
          </div>
        </section>

        {/* EXTRA TEXT SLOT 3: closing / call to action */}
        <section className="mt-16 w-full">
          <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300">
            I look forward to getting an internship during my term break!
          </p>
        </section>
      </main>
    </div>
  );
}

import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center bg-zinc-50 dark:bg-black min-h-screen px-6 lg:px-0">
      <main className="w-full max-w-6xl py-20 flex flex-col gap-20">

        {/* ===========================
            HERO SECTION — TWO COLUMNS
        ============================ */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT COLUMN — HEADSHOT */}
          <div className="flex justify-center lg:justify-start">
            <Image
              src="/myhead.jpg"
              alt="My Face"
              width={420}
              height={420}
              className="rounded-xl object-cover"
              priority
            />
          </div>

          {/* RIGHT COLUMN — INTRO TEXT */}
          <div className="flex flex-col gap-6">
            <h1 className="text-3xl lg:text-4xl font-semibold text-black dark:text-zinc-50">
              Hello! My name is Joon Lin.
            </h1>

            <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              I am a student currently studying at the University of Sydney.
              Here is my{" "}
              <a
                href="https://www.linkedin.com/in/joonlinchan156/"
                className="font-medium text-black dark:text-zinc-50 underline"
              >
                LinkedIn
              </a>{" "}
              and my{" "}
              <a
                href="https://instagram.com"
                className="font-medium text-black dark:text-zinc-50 underline"
              >
                Instagram
              </a>.
            </p>

            <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Throughout my studies I have worked on projects ranging from robot
              calibration to circuit design to game development.
            </p>

            {/* EXTRA TEXT SLOT 1 */}
            <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              {/* Add more intro text here if you want */}
            </p>
          </div>
        </section>

        {/* ===========================
            BUTTONS SECTION
        ============================ */}
        <section className="flex flex-col sm:flex-row gap-4">
          <a
            className="flex h-12 w-full sm:w-48 items-center justify-center gap-2 rounded-full bg-black text-white dark:bg-white dark:text-black hover:opacity-80 transition"
            href="https://docs.google.com/document/d/18rq30SDzDgOsDPSV6NBt6qKrlvO_7B8u/edit?usp=sharing"
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
            className="flex h-12 w-full sm:w-48 items-center justify-center rounded-full border border-black/20 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/10 transition"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </section>

        {/* ===========================
            PHOTO GALLERY
        ============================ */}
        <section className="flex flex-col gap-6">
          <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300">
            These photos illustrate my journey throughout 2025 – starting when I
            received news of my offer at the University of Sydney.
          </p>

          {/* EXTRA TEXT SLOT 2 */}
          <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300">
            {/* Add a story or caption here */}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              "/20160125_123052.jpg",
              "/20211202_165153.jpg",
              "/20250101_070129.jpg",
              "/20250213_124338.jpg",
              "/20251213_183258.jpg",
            ].map((src, i) => (
              <Image
                key={i}
                src={src}
                alt={`photo${i + 1}`}
                width={160}
                height={160}
                className="invert rounded-md object-cover"
              />
            ))}
          </div>
        </section>

        {/* ===========================
            CLOSING SECTION
        ============================ */}
        <section>
          <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300">
            {/* Add closing text here — e.g. what you're looking for, future goals, etc. */}
          </p>
        </section>
      </main>
    </div>
  );
}

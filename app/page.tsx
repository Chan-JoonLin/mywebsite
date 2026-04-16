import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start w-full max-w-6xl">
  {/* LEFT COLUMN — Photo */}
  <div className="flex justify-center lg:justify-start">
    <Image
      src="/myhead.jpg"
      alt="My Face"
      width={400}
      height={400}
      className="rounded-xl"
      priority
    />
  </div>

  {/* RIGHT COLUMN — Text */}
  <div className="flex flex-col gap-6">
    <h1 className="text-3xl lg:text-4xl font-semibold text-black dark:text-zinc-50">
      Hello! My name is Joon Lin.
    </h1>

    <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
      I am a student currently studying at the University of Sydney. Here is my
      <a href="https://www.linkedin.com/in/joonlinchan156/" className="font-medium text-black dark:text-zinc-50"> LinkedIn</a>
      , my <a href="jlbear156@gmail.com" className="font-medium text-black dark:text-zinc-50"> email </a>and my
      <a href="https://instagram.com" className="font-medium text-black dark:text-zinc-50"> Instagram</a>.
    </p>

    <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
      Throughout my studies I have worked on projects ranging from robot calibration to circuit design to game development.
    </p>
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
              className="invert dark:invert-0"
              src="/20160125_123052.jpg"
              alt="photo1"
              width={160}
              height={160}
            />
            <Image
              className="invert dark:invert-0"
              src="/20211202_165153.jpg"
              alt="photo2"
              width={160}
              height={160}
            />
            <Image
              className="invert dark:invert-0"
              src="/20250101_070129.jpg"
              alt="photo3"
              width={160}
              height={160}
            />
            <Image
              className="invert dark:invert-0"
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

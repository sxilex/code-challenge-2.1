import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      className="grid w-full bg-black pt-12 text-center"
      id="Hero-section"
    >
      {/* Hero Banner */}
      <div className="relative w-full h-[50vh] md:h-[65vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          className="absolute inset-0 object-cover opacity-60"
          src="/star-rail.png"
          alt="Choo-choo"
          layout="fill"
          priority
        />

        {/* Title Text */}
        <h1 className="relative z-10 text-center text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-black bg-opacity-70 px-4 py-2 rounded-md mx-2">
          HONKAI STAR-RAIL CHARACTERS 3.0 to 3.2
        </h1>
      </div>

      {/* Description Section */}
      <div className="w-full px-4 py-12 bg-black text-yellow-400">
        <div className="max-w-4xl mx-auto space-y-6 text-base sm:text-lg md:text-xl leading-relaxed">
          <p>
            Honkai: Star Rail is a free-to-play turn-based role-playing game
            (RPG) developed and published by HoYoverse (the creators of Genshin
            Impact and Honkai Impact 3rd). Released globally in April 2023, the
            game is available on PC, iOS, Android, and later PlayStation
            platforms.
          </p>
          <p>
            The game revolves around the main characters Stelle (Female) and
            Caelus (Male). You can choose your gender, and some in-game
            responses are gender-specific.
          </p>
        </div>
      </div>
    </section>
  );
}

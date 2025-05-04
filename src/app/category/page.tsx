import Image from "next/image";
import Link from "next/link";

export default function Categories() {
  return (
    <section className="relative bg-black min-h-screen overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/star-rail.png"
          alt="Choo-choo"
          layout="fill"
          objectFit="cover"
          className="opacity-80"
          priority
        />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full min-h-screen px-4 md:px-12 gap-6">
        {/* Caelus */}
        <div className="group relative rounded-3xl overflow-hidden p-4">
          <Link href="/category/male">
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition duration-300 rounded-3xl z-0" />
            <div className="relative z-10">
              <Image
                src="/caelus.png"
                alt="Male MainCharacter"
                width={300}
                height={600}
                className="w-full h-auto object-contain"
              />
            </div>
          </Link>
        </div>

        {/* Center text */}
        <div className="text-center bg-slate-950 rounded-3xl px-6 py-4">
          <p className="text-2xl md:text-4xl text-yellow-300 font-bold">
            CHOOSE YOUR PATH
          </p>
        </div>

        {/* Stelle */}
        <div className="group relative rounded-3xl overflow-hidden p-4">
          <Link href="/category/female">
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition duration-300 rounded-3xl z-0" />
            <div className="relative z-10">
              <Image
                src="/stelle.png"
                alt="Female MainCharacter"
                width={300}
                height={600}
                className="w-full h-auto object-contain"
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

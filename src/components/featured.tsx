import Image from "next/image";
import Link from "next/link";

export default function FeaturedPost() {
  // Example hardcoded objectIds — replace with real ones or fetch them
  const characters = [
    {
      name: "Castorice",
      image:
        "https://static.wikia.nocookie.net/houkai-star-rail/images/9/94/Character_Castorice_Splash_Art.png/revision/latest/scale-to-width-down/1200?cb=20250409035111",
      objectId: "64E6C542-937E-4074-84CF-309CDD128EB6",
    },
    {
      name: "Anaxa",
      image:
        "https://static.wikia.nocookie.net/houkai-star-rail/images/7/73/Character_Anaxa_Splash_Art.png/revision/latest?cb=20250409035048",
      objectId: "12C1555F-18C4-4D4C-8B03-9FB85691A92E",
    },
  ];

  return (
    <section
      id="Featured-section"
      className="min-h-screen bg-black py-12 grid "
    >
      <h1 className="text-yellow-200 text-center bg-gray-800 rounded-[2rem] px-6 py-4 mx-auto mb-8 text-3xl w-fit h-fit">
        FEATURED CHARACTERS
      </h1>

      <div className="lg:flex grid justify-between place-items-center px-12">
        {characters.map((char) => (
          <div key={char.name} className="lg:max-w-[45%] max-w-[67%]">
            <Link href={`/blog/${char.objectId}`}>
              <Image
                src={char.image}
                alt={char.name}
                width={1000}
                height={1000}
                className="w-full h-auto hover:scale-105 transition-transform duration-300"
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

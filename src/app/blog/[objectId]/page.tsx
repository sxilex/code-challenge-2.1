import Image from "next/image";

interface CharacterData {
  characters: string;
  previewCharacters: string;
  imagePreview: string;
  fullDescription: string;
  characterImage: string;
  objectId: string;
  created: number;
  updated: number;
  background: string;
  genderCategory: { gender: string };
}

export default async function FilledCharacters({
  params,
}: {
  params: Promise<{ objectId: string }>;
}) {
  const { objectId } = await params;

  const res = await fetch(
    `https://sensualdrop-us.backendless.app/api/data/Characters/${objectId}?loadRelations=genderCategory`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch character data");
  }

  const data: CharacterData = await res.json();

  return (
    <main>
      <section className="w-full min-h-screen bg-black">
        <div className="relative w-full min-h-screen overflow-hidden">
          <Image
            src={data.background}
            alt="content-background"
            fill
            className="object-cover opacity-40"
          />
          <div className="relative top-16 grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-12">
            <div className="w-full max-h-screen relative">
              <Image
                src={data.characterImage}
                alt="Hero Image"
                width={800}
                height={800}
                className="object-cover w-full h-auto rounded-xl"
              />
            </div>
            <div className="text-center flex flex-col gap-6 justify-center items-center px-4">
              <h1 className="text-4xl md:text-7xl text-yellow-300 font-extrabold">
                {data.characters}
              </h1>
              <span
                className={`${
                  data.genderCategory?.gender === "Male"
                    ? "bg-blue-500 text-white"
                    : "bg-amber-300"
                } text-md md:text-lg font-mono border border-black px-4 py-2 rounded-3xl`}
              >
                {data.genderCategory?.gender ?? "Unknown"}
              </span>
              <p className="text-yellow-200 text-lg md:text-2xl">
                {data.fullDescription}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

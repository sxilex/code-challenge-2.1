import Image from "next/image";

type Props = {
  params: {
    objectId: string;
  };
};

export default async function FilledCharacters({ params }: Props) {
  const { objectId } = params;

  const res = await fetch(
    `https://sensualdrop-us.backendless.app/api/data/Characters/${objectId}?loadRelations=genderCategory`
  );

  const data: {
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
  } = await res.json();

  return (
    <main>
      <section className="mx-auto w-screen min-h-screen bg-black">
        <div className="w-screen h-screen relative overflow-hidden">
          <Image
            src={data.background}
            alt="content-background"
            width={10000}
            height={10000}
            className="object-cover opacity-40"
          />
          <div className="grid grid-cols-2 justify-between top-16 absolute">
            <div className="w-[86%] max-h-screen relative my-6 mr-6 ml-10">
              <Image
                src={data.characterImage}
                alt="Hero Image"
                width={100000}
                height={100000}
                className="object-cover"
              />
            </div>
            <div className="px-8 text-center flex flex-col gap-18 justify-center place-items-center">
              <h1 className="mt-2 w-full min-h-10 text-7xl text-yellow-300 font-extrabold">
                {data.characters}
              </h1>
              <span
                className={`${
                  data.genderCategory?.gender === "Male"
                    ? "bg-blue-500 text-white"
                    : "bg-amber-300"
                } text-lg font-mono border border-black w-fit px-4 rounded-3xl py-2`}
              >
                {data.genderCategory?.gender ?? "Unknown"}
              </span>
              <p className="text-yellow-200 text-2xl mt-[4px]">
                {data.fullDescription}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

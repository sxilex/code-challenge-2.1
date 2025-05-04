import Image from "next/image";
import Link from "next/link";

interface ArticleType {
  characters: string;
  previewCharacters: string;
  imagePreview: string;
  fullDescription: Text;
  characterImage: string;
  objectId: string;
  created: number;
  updated: number;
  genderCategory: { gender: string };
}

export default async function FemaleCharacters() {
  const res = await fetch(
    "https://sensualdrop-us.backendless.app/api/data/Characters?where=genderCategory.gender%3D'Female'&loadRelations=genderCategory"
  );

  const data = await res.json();

  return (
    <main className="pt-12 pb-8 px-8 text-yellow-400 bg-black min-h-screen">
      <section className="grid grid-cols-2 lg:grid-cols-3 w-full mx-auto gap-x-4 gap-y-8">
        {data.map((article: ArticleType) => (
          <article
            key={article.objectId}
            className=" flex flex-col flex-grow h-full"
          >
            <div className="w-full overflow-hidden">
              <Image
                src={article.imagePreview}
                alt="Article image"
                width={5000}
                height={3000}
                layout="responsive"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col flex-grow p-4 bg-gray-800">
              <div className="flex justify-between">
                <h2 className="text-xl font-bold text-yellow-400 text-justify">
                  {article.characters}
                </h2>
                <span className="inline-block py-1 px-2 w-fit border border-black text-sm bg-slate-700 rounded">
                  {article.genderCategory?.gender ?? "Unknown"}
                </span>
              </div>
              <p className="text-yellow-300 mt-2 flex-grow">
                {article.previewCharacters}
              </p>
              <div className="mt-4 grid place-items-center text-center">
                <Link
                  href={`/blog/${article.objectId}`}
                  className="inline-block border border-black py-2 px-4 w-fit bg-slate-600 hover:bg-slate-400 rounded"
                >
                  Read more
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

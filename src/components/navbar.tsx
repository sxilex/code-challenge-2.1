import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <header className="fixed z-50 flex justify-between py-2 px-16 w-full bg-slate-800 text-yellow-200 items-center">
      <div>
        <Link href={`/#Hero-section`}>
          <div className="w-[75%]">
            <Image
              src="/rail-logo.png"
              height={100}
              width={100}
              alt="logo"
            ></Image>
          </div>
        </Link>
      </div>
      <div className="flex gap-12">
        <Link href={`/blog`}>Blog</Link>
        <Link href={`/category`}>Categories</Link>
        <Link href={`/#About-section`}>About</Link>
      </div>
    </header>
  );
}

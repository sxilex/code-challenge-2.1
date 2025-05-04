import { FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import Link from "next/link";

export default function About() {
  return (
    <section id="About-section">
      <div className="text-center">
        <div className="min-h-fit w-screen p-24 bg-slate-800 text-white text-4xl grid gap-8 place-items-center">
          <h1 className="bg-slate-900 p-12 rounded-4xl">History</h1>
          <div className="bg-gray-700 p-8 grid gap-12 rounded-4xl ">
            <p>The reason i want to make this blog page, is because</p>
            <p>I got an assignment to make a blog page</p>
            <p>
              I want to make a blog about a game that I play quite a lot in my
              free time
            </p>
          </div>
        </div>
        <div>
          <h1></h1>
          <p></p>
        </div>
        <div className="min-h-fit w-screen p-24 bg-slate-800 text-white text-4xl grid gap-8 place-items-center text-center">
          <h1 className="bg-slate-900 p-12 rounded-4xl">Mission and Vision</h1>
          <div className="bg-gray-700 p-8 grid gap-12 rounded-4xl">
            <p>
              My Mission to make this blog page is to Document Characters that
              Released during version 3.0 of the game, since I&apos;ve played
              the game since Release
            </p>
            <p>
              My vision for this blog is to Look back and compare the Old
              Characters and the Newer characters
            </p>
          </div>
        </div>

        <div className="w-screen min-h-screen lg:pt-[56px] pt-[144px] bg-slate-800  place-items-center lg:grid md:flex">
          <div className="bg-gray-700 text-white break-words lg:min-h-[70%] h-auto min-w-[80%] grid place-items-center mx-12 lg:py-8 lg:px-12 py-4 px-4 rounded-4xl align-bottom">
            {/* Top */}
            <div className="lg:flex md:grid font-extrabold text-xl text-center">
              <p>Interested in what I do? You can contact me using these!</p>
            </div>
            <div className="lg:grid-cols-[43%_14%_43%] grid grid-rows-[45%_10%_45%] pt-5 lg:pt-0 md:flex w-[90%] h-full text-2xl">
              {/* Left Column */}
              <div className="grid grid-rows-[50%_1fr] h-full place-items-center text-center">
                <p className="font-semibold">You can Contact Me via below</p>
                <div className="grid lg:gap-8 gap-2">
                  <div className="flex items-center gap-2">
                    <CgMail />
                    <span>dummyindend@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaPhoneAlt />
                    <span>+62 812-3456-7890</span>
                  </div>
                </div>
              </div>

              {/* Middle Column */}
              <div className="w-[25%] min-h-[48px]"> </div>

              {/* Right Column */}
              <div className="grid grid-rows-[50%_1fr] h-full place-items-center text-center ">
                <p className="font-medium ">
                  Like my works? You can view more of my works with these!
                </p>
                <div className="lg:grid flex gap-8">
                  <div className="flex items-center gap-2">
                    <FaLinkedin />
                    <Link href="https://www.linkedin.com/in/jordan-dev-8427b1a/">
                      LinkedIn
                    </Link>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaGithub />
                    <Link href="https://github.com/sxilex">GitHub</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

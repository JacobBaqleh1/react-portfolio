export default function About() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mb-6 pb-6">
        <section className="grid md:grid-cols-2 ">
          <div className="flex flex-col gap-4 items-center">
            <h1 className="flex flex-col items-center">
              <span className="text-4xl">Hi! I&apos;m Jacob</span>
              <br />{" "}
              <span className="text-xl italic">
                ~Fullstack Website Developer~
              </span>
            </h1>
            <img
              className=" md:hidden w-36 h-40 rounded-[50%] mx-auto"
              src="../src/assets/profilePic.jpg"
              alt="gfdsgs"
            ></img>
            <p className="text-center mx-10 leading-loose text-xl ">
              Love turning ideas into real-world web applications. When im not
              coding im outside in nature🌲 or skateboarding🛹
            </p>
          </div>
          <img
            className="hidden md:block w-40 h-40 rounded-[50%] mx-auto"
            src="../src/assets/profilePic.jpg"
            alt="gfdsgs"
          ></img>
        </section>
      </div>
    </>
  );
}

export default function About() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mb-6 pb-6">
        <section className="grid grid-cols-2">
          <div>
            <h1>Hi! I'm Jacob, Fullstack Website Developer</h1>

            <p>Love turning ideas into real-world web applications.</p>
            <p>When im not coding im outside in nature🌲 or skateboarding🛹</p>
          </div>
          <img
            className=" w-32 h-32 rounded-[50%] mx-auto"
            src="../src/assets/profilePic.jpg"
            alt="gfdsgs"
          ></img>
        </section>
      </div>
    </>
  );
}

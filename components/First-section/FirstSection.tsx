import Image from "next/image";
import Logo from "@/public/first-section/Support/Logo.svg";
import whatsapp from "@/public/whatsapp/Support/Vector.svg";
import background from "@/public/Hey-1/Support/4112338.png";
function FirstSection() {
  return (
    <section
      className="flex flex-col gap-[3em]  py-3 relative z-10 h-[90vh]"
      id="Home"
    >
      <div className="flex flex-col gap-[2em] z-10">
        <div className="flex flex-col items-center z-10 image">
          <Image
            src={Logo}
            // width={100}
            // height={60}
            alt="logo"
            className="palm"
          />
          <p className="font-bold text-[1.5em] text-[#000000B0]">"Saanu"</p>
        </div>
        <article className="text-center z-10">
          <h1 className="font-black text-[2em]">Hei. Just Ask.</h1>
          <p className="z-10 intro-text">
            Your AI-Powered companion for students -print, order, deliver, done.
          </p>
        </article>
      </div>
      <button
        type="button"
        className="bg-black flex gap-[1.5em] text-white  mx-auto px-[2em] py-2 rounded-md z-10"
      >
        <Image src={whatsapp} width={20} height={30} alt="whatsapp" />
        <p>Tryout on WhatsApp</p>
      </button>
      <div className="absolute right-0 bottom-[10px] z-0">
        <Image
          src={background}
          width={400}
          height={200}
          alt="background"
          className="background-one"
        />
      </div>
    </section>
  );
}

export default FirstSection;

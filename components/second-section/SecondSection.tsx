import Image from "next/image";
import Background from "@/public/background-2/Support/4112338.png";

function SecondSection() {
  return (
    <section className="flex flex-col gap-6 relative z-10 About">
      <section className="text-right flex flex-col items-end z-10 px-2 lg:px-6 lg:py-6 second">
        <h1 className="font-black text-[1.3em] z-10" id="About">
          About Us & Our Solutions
        </h1>
        <p className="max-w-[330px] z-10 about-text">
          Hei is a student companion that streamlines ordering, printing, and
          delivery tracking through messaging platforms. We simplify student
          life by making essential tasks effortless and ensuring real-time
          updates. Hei is more than a service—it’s a reliable partner in your
          academic journey.
        </p>
      </section>

      <section className="flex flex-col gap-4 text-center py-4 z-10 lg:px-6 xm">
        <div>
          <p className="font-bold text-[2.5em] z-10">300</p>
          <p className="font-semibold">Orders</p>
        </div>
        <div>
          <p className="font-bold text-[2.5em] z-10">297</p>
          <p className="font-semibold">Deliveries</p>
        </div>
        <div>
          <p className="font-bold text-[2.5em] z-10">49</p>
          <p className="font-semibold">Onboarded</p>
        </div>
      </section>

      <div className="absolute z-0 bg-image">
        <Image
          src={Background}
          width={300}
          height={300}
          className="bg-image"
          alt="background"
        />
      </div>
    </section>
  );
}

export default SecondSection;

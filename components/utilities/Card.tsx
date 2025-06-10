import Image from "next/image";

type Card = {
  image: string;
  header: string;
  body: string;
};

function Card(prop: Card) {
  return (
    <section className="bg-white flex flex-col items-center gap-2 p-4 w-full">
      <div className="bg-[#D9D9D9] p-4 rounded-full flex items-center justify-center">
        <Image src={prop.image} alt="image" width={50} height={50} />
      </div>
      <h3>{prop.header}</h3>
      <p className="text-[#00000080] max-w-[200px] text-[0.8em] text-center">
        {prop.body}
      </p>
    </section>
  );
}

export default Card;

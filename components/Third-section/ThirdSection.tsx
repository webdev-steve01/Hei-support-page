import React from "react";
import Card from "../utilities/Card";
import upload from "@/public/upload/Support/Vector.svg";
import location from "@/public/location/Support/Vector.svg";
import tick from "@/public/tick/Support/Vector.svg";
function ThirdSection() {
  return (
    <section className="bg-[#F3F3F3] py-4 px-[2em] pb-[2.5em]" id="Services">
      <h1 className="font-extrabold text-center py-2  text-[1.5em]">
        How it works
      </h1>
      <div className="flex flex-col gap-6 card">
        <Card
          body="Send your order/document via WhatsApp"
          header="Make Request"
          image={upload}
        />
        <Card
          body="Choose and confirm your loaction"
          header="Pick Campus"
          image={location}
        />
        <Card
          body="Receive your order at your chosen location"
          header="Get delivery"
          image={tick}
        />
      </div>
    </section>
  );
}

export default ThirdSection;

"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import gmail from "@/public/gmail/Support/Vector.svg";

function Footer() {
  const [isPrivacy, setIsPrivacy] = useState(false);
  const [isTerms, setIsTerms] = useState(false);

  useEffect(() => {
    if (isTerms) {
      setIsPrivacy(false);
    }
    if (isPrivacy) {
      setIsTerms(false);
    }
  }, [isPrivacy, isTerms]);

  return (
    <section className="">
      <div className="bg-white pt-[3em] pb-[0.5em] flex flex-col font-bold">
        <div className="flex flex-col text-right md:flex-row md:items-center md:justify-end md:gap-4">
          <Link href="https://www.instagram.com/heichatai/">Instagram</Link>
          <Link href="https://twitter.com/heichatai">
            X (formerly called twitter)
          </Link>
        </div>
        <div className="flex gap-2  items-center justify-center">
          <Image src={gmail} width={20} height={20} alt="gmail" />
          <Link href="mailto:devheiservices@gmail.com">
            ask@heiservicebot.com.ng
          </Link>
        </div>
      </div>
      <div className="bg-black text-white p-4 flex gap-4 justify-center m">
        <Link href="/PrivacyPolicy">Privacy Policy</Link>
        <Link href="/Ts&Cs">Terms & Conditions</Link>
      </div>
    </section>
  );
}

export default Footer;

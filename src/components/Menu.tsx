"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="">
      <Image
        src="/menu.png"
        alt=""
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="bg-black text-[rgb(105, 105, 105)] left-0 top-20 w-full absolute">
          <Link href="/">Home</Link>
          <Link href="/">Resources</Link>
          <Link href="/">FAQ</Link>
          <Link href="/">Contact</Link>
          <Link href="/" className="cursor-pointer">
            <Image src="/profile.png" alt="" width={32} height={32} />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
// absolute bg-black text-[rgb(105, 105, 105)] left-0 top-20 w-full h-[285px]

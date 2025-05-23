import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";

const NavBar = () => {
  return (
    <div className="h-20 px-7 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <div className=" h-full flex items-center  justify-between">
        {/* mobile */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Resource Hub Logo"
            width={60}
            height={60}
            priority
          />
        </Link>
        <Menu />
      </div>
    </div>
  );
};

export default NavBar;

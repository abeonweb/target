import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    // <div className="h-auto w-24">
      <Link href="/" title="Target Translation">
        <Image
          width={180}
          height={100}
          src={"/logo.png"}
          alt=""
          className="w-24 h-auto px-2 py-2 self-center"
        />
      </Link>
    // </div>
  );
};

export default Logo;

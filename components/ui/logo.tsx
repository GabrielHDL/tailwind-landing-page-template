import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex" aria-label="Cruip">
      <Image src={'/images/logo_hecsa_color.svg'} alt="Hecsa Logo" height={100} width={100} className="h-10 w-auto" />
    </Link>
  );
}

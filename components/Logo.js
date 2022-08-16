import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/home">
      <a>
        <h1 className="font-bold text-2xl leading-none py-4">
          Food
          <br />
          <span className="text-primary">delivery</span>
        </h1>
      </a>
    </Link>
  );
}

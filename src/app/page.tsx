import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-black">
      <div className="container p-5">
        <Link href="/product" className="btn btn-primary">
          See The Products
        </Link>
      </div>
    </main>
  );
}

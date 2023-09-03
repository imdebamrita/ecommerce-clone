import Image from "next/image";
import styles from "./page.module.css";
import Products from "./components/Products";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Products />
      </div>
    </main>
  );
}

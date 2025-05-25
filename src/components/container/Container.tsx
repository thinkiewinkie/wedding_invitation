import type { ReactNode } from "react";
import styles from "./Container.module.css";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <main className={styles.content}>
      <div className={styles.container}>{children}</div>
    </main>
  );
};

export default Container;

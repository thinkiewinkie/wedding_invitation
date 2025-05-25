import Container from "../container/Container";
import styles from "./Opening.module.css";
import { motion } from "framer-motion";

const Opening = () => {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className={styles.title}
      >
        WALIMATULURUS
      </motion.div>
      <div className={styles.nameGroup}>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className={[styles.jumbo, styles.left].join(" ")}
        >
          Rian
        </motion.div>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className={[styles.jumbo, styles.center].join(" ")}
        >
          &
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className={[styles.jumbo, styles.right].join(" ")}
        >
          Witi
        </motion.div>
      </div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className={styles.text}
      >
        <p>Rabu, 22 Juni 2025</p>
        <p>
          "Dan Kami menciptakan kamu
          <br />
          berpasang-pasangan"
        </p>
        <p>An Naba {`[78:8]`}</p>
      </motion.div>
    </Container>
  );
};

export default Opening;

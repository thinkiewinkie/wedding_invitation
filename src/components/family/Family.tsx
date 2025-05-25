import Container from "../container/Container";
import styles from "./Family.module.css";
import { motion } from "framer-motion";

const Family = () => {
  return (
    <Container>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        ASSALAMUALAIKUM WR WB
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Dengan penuh hormat, kami:
      </motion.p>
      <div className={styles.families}>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, delay: 1 }}
          className={styles.parentGroup}
        >
          <div className={styles.titleBox}>
            <p>PIHAK PENGANTIN LAKI-LAKI</p>
          </div>
          <div className={styles.parent}>
            <p>alm. Bapak Sarbani</p>
            <p>Ibu Jumiem</p>
          </div>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className={styles.conjunction}
        >
          &
        </motion.p>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5, delay: 1 }}
          className={styles.parentGroup}
        >
          <div className={styles.titleBox}>
            <p>PIHAK PENGANTIN PEREMPUAN</p>
          </div>
          <div className={styles.parent}>
            <p>Bapak Paino</p>
            <p>Ibu Suratmi</p>
          </div>
        </motion.div>
      </div>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className={styles.parentGroup}
      >
        dalam sukacita mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara
        pernikahan putra dan putri kami.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5, delay: 2 }}
        className={styles.name}
      >
        Rian Janari
      </motion.p>
      <motion.p
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.5, delay: 2 }}
        className={styles.conjunction}
      >
        &
      </motion.p>
      <motion.p
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5, delay: 2 }}
        className={styles.name}
      >
        Eko Jarwiti
      </motion.p>
    </Container>
  );
};

export default Family;

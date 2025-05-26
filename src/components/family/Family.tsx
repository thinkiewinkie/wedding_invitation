import Container from "../container/Container";
import styles from "./Family.module.css";
import { motion } from "framer-motion";

const Family = ({ name }: { name: string | null }) => {
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
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, delay: 1 }}
            className={styles.name}
          >
            Rian Janari
          </motion.p>
          <div className={styles.parent}>
            <p>Putra dari Bapak Sarbani {`(alm)`} dan Ibu Jumiem</p>
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
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5, delay: 1 }}
            className={styles.name}
          >
            Eko Jarwiti
          </motion.p>
          <div className={styles.parent}>
            <p>Putri dari Bapak Paino dan Ibu Suratmi</p>
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
        dalam sukacita mengundang Saudara/i{name ? ` ${name} ` : " "}untuk
        menghadiri acara pernikahan kami yang akan dilaksanakan pada:
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5, delay: 2 }}
        className={styles.date}
      >
        Minggu, 22 Juni 2025
      </motion.p>
    </Container>
  );
};

export default Family;

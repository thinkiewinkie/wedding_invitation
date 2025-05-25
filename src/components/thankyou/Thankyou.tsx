import { motion } from "framer-motion";
import Container from "../container/Container";
import styles from "./Thankyou.module.css";

const Thankyou = () => {
  return (
    <Container>
      <motion.p
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        transition={{ duration: 1 }}
        className={styles.text}
      >
        Dengan segala kerendahan hati, kami mengharapkan kehadiran
        Bapak/Ibu/Saudara/i untuk berbagi kebahagiaan dan memberikan doa restu
        di hari pernikahan kami
      </motion.p>
      <motion.p
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -100, opacity: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className={[styles.thanks, styles.left].join(" ")}
      >
        Terima
      </motion.p>
      <motion.p
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 100, opacity: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className={[styles.thanks, styles.right].join(" ")}
      >
        Kasih
      </motion.p>
      <motion.p
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 1, delay: 2 }}
        className={styles.text}
      >
        WASSALAMUALAIKUM WR WB
      </motion.p>
    </Container>
  );
};

export default Thankyou;

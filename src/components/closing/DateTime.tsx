import { motion } from "framer-motion";
import Container from "../container/Container";
import styles from "./DateTime.module.css";

const DateTime = () => {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className={styles.dateTimeContainer}
      >
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className={styles.date}
        >
          <p className={styles.day}>Rabu</p>
          <motion.p className={styles.calendar}>
            22
            <br />
            Juni
            <br />
            2025
          </motion.p>
          <motion.p>{`(29 Dzulhijah 1446 H)`}</motion.p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className={styles.dividerContainer}
        >
          <div className={styles.line}></div>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
          <div className={styles.line}></div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className={styles.time}
        >
          <p>Waktu:</p>
          <motion.p className={styles.clock}>
            10.00 WIB
            <br />
            s.d
            <br />
            Selesai
          </motion.p>
        </motion.div>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className={styles.text}
      >
        Bismillaahirrohmaanirrohiim
        <br />
        <br />
        Ya Allah, satukanlah hati kedua mempelai ini sebagaimana Engkau telah
        menyatukan hati Adam dan Hawa, Yusuf dan Zulaikha, serta sebagaimana
        Engkau telah menyatukan hati Baginda Muhammad Shallallahu Alaihi
        Wasallam dan Siti Khadijah.
        <br />
        <br />
        Kami memohon doa restu Bapak/Ibu/Saudara/i agar jalinan kasih antara
        kedua mempelai ini kekal abadi dalam keberkahan dan keridaan Allah
        Subhanahu Wa Ta'ala.
        <br />
        <br />
        Aamiin Yaa Rabbal 'Aalamiin.
      </motion.p>
    </Container>
  );
};

export default DateTime;

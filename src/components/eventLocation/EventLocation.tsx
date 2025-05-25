import { motion } from "framer-motion";
import Container from "../container/Container";
import denah from "../../assets/images/denah.png";
import styles from "./EventLocation.module.css";

const EventLocation = () => {
  return (
    <Container>
      <motion.p
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.titleBox}
      >
        Denah Lokasi
      </motion.p>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.mapContainer}
      >
        <img src={denah} alt="denah_resepsi" loading="lazy" />
      </motion.div>
      <motion.p
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Di Kediaman
      </motion.p>
      <motion.p
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className={styles.name}
      >
        Bapak Paino
      </motion.p>
      <motion.p
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        atau
      </motion.p>
      <motion.a
        href="https://www.google.com/maps/dir/?api=1&destination=-5.034009249058135,104.8842453623207"
        target="_blank"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className={styles.anchor}
      >
        Klik di sini untuk melihat peta
      </motion.a>
    </Container>
  );
};

export default EventLocation;

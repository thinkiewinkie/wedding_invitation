import { motion } from "framer-motion";
import styles from "./Envelope.module.css";
import { useAudio } from "../../hooks/ui/useAudio";
const Envelope = ({
  onStart,
  name,
}: {
  onStart: () => void;
  name: string | null;
}) => {
  const { togglePlayPause } = useAudio();
  return (
    <div className={styles.envelope}>
      <motion.div
        initial={{ scale: 1, opacity: 1 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 2, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.trigger}
      >
        <div className={styles.content}>
          <div>
            <h3>Undangan Pernikahan</h3>
          </div>
          <button
            onClick={() => {
              onStart();
              togglePlayPause();
            }}
          >
            Buka
          </button>
        </div>
      </motion.div>
      <div className={styles.top}></div>
      <motion.div
        initial={{ width: "100%", opacity: 1 }}
        animate={{ width: "100%", opacity: 1 }}
        exit={{ width: 0, opacity: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className={styles.line}
      ></motion.div>
      <div className={styles.bottom}>
        <div className={styles.label}>
          <p>
            <span className={styles.fieldLabel}>Title:</span> Undangan
            Pernikahan
          </p>
          <p>
            <span className={styles.fieldLabel}>From:</span> Rian & Witi
          </p>
          <p>
            <span className={styles.fieldLabel}>To:</span>{" "}
            {name ? name : "Unknown"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Envelope;

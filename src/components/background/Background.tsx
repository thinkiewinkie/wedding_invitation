import { motion } from "framer-motion";
import top_decorator from "../../assets/images/top_decorator.png";
import bottom_decorator from "../../assets/images/bottom_decorator.png";
import styles from "./Background.module.css";

const Background = () => {
  return (
    <div className={styles.background}>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className={styles.topDecorator}
      >
        <motion.div>
          <img
            src={top_decorator}
            alt="https://img.freepik.com/free-vector/pink-purple-floral-garden-background-with-watercolor_65186-3173.jpg?semt=ais_hybrid&w=740"
            loading="lazy"
          />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className={styles.bottomDecorator}
      >
        <img
          src={bottom_decorator}
          alt="https://img.freepik.com/free-vector/pink-purple-floral-garden-background-with-watercolor_65186-3173.jpg?semt=ais_hybrid&w=740"
          loading="lazy"
        />
      </motion.div>
      <div className={styles.container}>
        <motion.div
          className={styles.paper}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        ></motion.div>
      </div>
    </div>
  );
};

export default Background;

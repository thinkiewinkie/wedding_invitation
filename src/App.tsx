import { useEffect, useState } from "react";
import { FaArrowRotateLeft } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { FaPause, FaPlay, FaVolumeMute, FaVolumeUp } from "react-icons/fa";

import { useAudio } from "./hooks/ui/useAudio";

import Family from "./components/family/Family";
import Opening from "./components/opening/Opening";
import DateTime from "./components/closing/DateTime";
import Envelope from "./components/envelope/Envelope";
import Background from "./components/background/Background";
import EventLocation from "./components/eventLocation/EventLocation";

import styles from "./App.module.css";
import Thankyou from "./components/thankyou/Thankyou";

const sectionList: string[] = [
  "opening",
  "family",
  "event location",
  "closing",
  "thankyou",
];
const interval: number = 15000;

const App = () => {
  const { isMuted, toggleMute } = useAudio();
  const [currSection, setCurrSection] = useState<number>(0);
  const [start, setStart] = useState<boolean>(false);
  const [showSections, setShowSections] = useState<boolean>(false);
  const [intervalId, setIntervalId] = useState<any>(null);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const startInterval = () => {
    if (intervalId) clearInterval(intervalId);
    const id = setInterval(() => {
      setCurrSection((prev) => {
        if (prev + 1 >= sectionList.length) {
          clearInterval(id);
          return prev;
        }
        return prev + 1;
      });
    }, interval);
    setIntervalId(id);
  };

  const handleStart = () => {
    setStart(true);
    setTimeout(() => {
      setShowSections(true);
    }, 2000);
    startInterval();
  };

  const handlePause = () => {
    setIsPaused((prev) => {
      if (!prev) {
        if (intervalId) clearInterval(intervalId);
      } else {
        startInterval();
      }
      return !prev;
    });
  };

  const handleReset = () => {
    setCurrSection(0);
    // setStart(false);
    // setShowSections(false);
    setIsPaused(false);
    if (intervalId) clearInterval(intervalId);
    startInterval();
  };

  useEffect(() => {
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [intervalId]);

  const section: string = sectionList[currSection];

  return (
    <>
      <AnimatePresence>
        {!start && currSection === 0 && (
          <motion.div key={"envelope"}>
            <Envelope onStart={handleStart} />
          </motion.div>
        )}
      </AnimatePresence>
      {start && showSections && (
        <>
          <nav className={styles.nav}>
            <button
              title={isPaused ? "Lanjutkan" : "Jeda"}
              className={styles.transparentBtn}
              disabled={currSection > sectionList.length}
              onClick={handlePause}
            >
              {isPaused ? <FaPlay /> : <FaPause />}
            </button>
            <button
              title="Mulai ulang"
              className={styles.transparentBtn}
              onClick={handleReset}
            >
              <FaArrowRotateLeft />
            </button>
            <button
              title={isMuted ? "Suara dibisukan" : "Suara diaktifkan"}
              className={styles.transparentBtn}
              onClick={toggleMute}
            >
              {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
            </button>
          </nav>
          <Background />
          <AnimatePresence mode="wait">
            <motion.div key={section}>
              {section === "opening" && <Opening />}
              {section === "family" && <Family />}
              {section === "event location" && <EventLocation />}
              {section === "closing" && <DateTime />}
              {section === "thankyou" && <Thankyou />}
            </motion.div>
          </AnimatePresence>
        </>
      )}
    </>
  );
};

export default App;

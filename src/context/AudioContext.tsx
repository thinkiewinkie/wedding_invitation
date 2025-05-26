import { createContext, useState, useEffect, useRef } from "react";
import type { AudioContextType } from "../constant/interface";

export const AudioContext = createContext<AudioContextType | undefined>(
  undefined
);

export const AudioProvider = ({ children }: { children: React.ReactNode }) => {
  const soundUrl =
    "https://raw.githubusercontent.com/henhen02/wedding_invitation/main/Rizky Febian Feat. Mahalini - Bermuara [cut_60sec].mp3";
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [audioSrc, setAudioSrc] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const fetchAudio = async () => {
      try {
        const response = await fetch(soundUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const blob = await response.blob();
        const objectUrl = URL.createObjectURL(blob);
        setAudioSrc(objectUrl);
      } catch (error: any) {
        console.error("Gagal memuat audio:", error);
      }
    };

    fetchAudio();
  }, [soundUrl]);

  useEffect(() => {
    if (audioSrc && !audioRef.current) {
      audioRef.current = new Audio(audioSrc);
      audioRef.current.loop = true;
      audioRef.current.muted = isMuted;
    }

    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current
          .play()
          .catch((error) => console.error("Gagal memutar audio:", error));
      } else {
        audioRef.current.pause();
      }
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        if (audioSrc) URL.revokeObjectURL(audioSrc);
      }
    };
  }, [audioSrc, isPlaying]); // Tidak memantau perubahan isMuted agar tidak reset audio

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const toggleMute = () => {
    setIsMuted((prev) => {
      if (audioRef.current) {
        audioRef.current.muted = !prev; // Hanya ubah mute tanpa mereset audio
      }
      return !prev;
    });
  };

  return (
    <AudioContext.Provider
      value={{ isPlaying, togglePlayPause, isMuted, toggleMute }}
    >
      {children}
    </AudioContext.Provider>
  );
};

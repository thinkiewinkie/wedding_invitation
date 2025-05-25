export interface AudioContextType {
  isPlaying: boolean;
  togglePlayPause: () => void;
  isMuted: boolean;
  toggleMute: () => void;
}

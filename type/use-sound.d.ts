declare module 'use-sound' {
  type SoundOptions = {
    volume?: number
  }

  type SoundStatus = {
    stop: () => void
    stop: () => void
    pause: () => void
  }

  type UseSoundHook = (src: string | HTMLAudioElement, options?: SoundOptions) => [() => void, SoundStatus]

  const useSound: UseSoundHook

  export default useSound
}

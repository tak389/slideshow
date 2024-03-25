import { useState } from 'react'
import useSound from 'use-sound'
import styles from './index.module.css'

type Props = {
  path: string
}

const SoundButton = (props :Props): JSX.Element => {
  const [paused, setPaused] = useState<boolean>(false)
  const [volume, setVolume] = useState(0.3)
  const [play, { stop, pause }] = useSound(props.path, { volume });

  const playMusic = ():void => {
    if (paused) {
      setPaused(false)
      play()
    } else {
      stop()
      play()
    }
  }

  const setChangeVolume = (volume: string): void => {
    const newVolume: number = parseFloat(volume)
    setVolume(newVolume)
  }

  const pauseMusic = ():void => {
    setPaused(true)
    pause()
  }

  return (
    <div className={styles.Input_area}>
      <div className={styles.Button_area}>
        <button className={styles.play_button} onClick={() => playMusic()}>▷</button>
        <button className={styles.stop_button} onClick={() => stop()}>□</button>
        <button className={styles.pause_button} onClick={() => pauseMusic()}>||</button>
      </div>
      <div className={styles.volume_slider}>
          <input type="range" min="0" max="1" step="0.01" value={volume} onChange={(e) => {setChangeVolume(e.target.value)}} />
      </div>
    </div>
  )
}

export default SoundButton

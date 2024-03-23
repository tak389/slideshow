import styles from './index.module.css'

type Props = {
  path: string
}

const SoundButton = (props :Props): JSX.Element => {
  const audio = new Audio(props.path)

  const stop = ():void => {
    audio.pause()
    audio.currentTime = 0
  }

  return (
    <div className={styles.Button_area}>
      <button className={styles.play_button} onClick={() => audio.play()}>▷</button>
      <button className={styles.stop_button} onClick={stop}>□</button>
      <button className={styles.pause_button} onClick={() => audio.pause()}>||</button>
    </div>
  )
}

export default SoundButton

// @ts-ignore //TODO
import useSound from 'use-sound';

type Props = {
  sound: string
}

const SoundButton = (props :Props): JSX.Element => {
  const [play, { stop, pause }] = useSound(props.sound)

  return (
    <div className=''>
      <button onClick={() => play()}>▷</button>
      <button onClick={() => stop()}>□</button>
      <button onClick={() => pause()}>＝</button>
    </div>
  )
}

export default SoundButton

// @ts-ignore
import useSound from 'use-sound';
// import Sound from './決定、ボタン押下4.mp3';
// import './styles.css';

type Props = {
  sound: string
}

const SoundButton = (props :Props): JSX.Element => {
  const [play, { stop, pause }] = useSound(props.sound);

  return (
    <>
      <button onClick={() => play()}>▷</button>
      <button onClick={() => stop()}>□</button>
      <button onClick={() => pause()}>＝</button>
    </>
  );
};

export default SoundButton
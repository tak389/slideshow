import styles from './index.module.css'

type Props = {
    onClick: () => void
    children: string
}

const SlideButton = (props: Props): JSX.Element => {
    return (
        <button className={styles.Button} onClick={props.onClick}>{props.children}</button>
    )
}

export default SlideButton

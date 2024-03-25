import styles from './index.module.css'

type Props = {
    onClick: () => void
    children: string
}

const SlideButton = (props: Props): JSX.Element => {
    return (
        <button className={styles.SlideButton} onClick={props.onClick}>{props.children}</button>
    )
}

export default SlideButton

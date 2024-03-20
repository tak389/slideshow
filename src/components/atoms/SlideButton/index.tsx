import styles from './index.module.css'

type Props = {
    onClick: () => void
    children: string
}

const SlideButton = (props: Props): JSX.Element => {
    return (
        <button className={` ${styles.prev} ${styles.button}`} onClick={props.onClick}>{props.children}</button>
    )
}

export default SlideButton

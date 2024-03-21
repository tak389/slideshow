import styles from './index.module.css'

type Props = {
    image: string
}

const Image = (props: Props): JSX.Element => {
    return (
        <img className={styles.image} src={props.image} />
    )
}

export default Image

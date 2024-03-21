import Text from '@/components/atoms/Text'
import TextArea from '@/components/atoms/TextArea'
import Image from '@/components/atoms/Image'
import styles from './index.module.css'

type Props = {
    title: string
    text: string
    image: string
}

const Presentation = (props: Props): JSX.Element => {
    return (
        <div className={styles.presentation_area}>
            <div className={styles.presentation_text_area}>
                <Text>{props.title}</Text>
                <TextArea>{props.text}</TextArea>
            </div>
            <div className={styles.presentation_image_area}>
                <Image image={props.image} />
            </div>
        </div>
    )
}

export default Presentation

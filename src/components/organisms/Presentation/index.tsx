import Text from '@/components/atoms/Text'
import TextArea from '@/components/atoms/TextArea'
import styles from './index.module.css'

type Props = {
    title: string
    text: string
}

const Presentation = (props: Props): JSX.Element => {
    return (
        <div className={styles.presentation_area}>
            <Text>{props.title}</Text>
            <TextArea>{props.text}</TextArea>
        </div>
    )
}

export default Presentation

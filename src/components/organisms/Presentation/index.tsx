import Text from '../../../components/atoms/Text'
import TextArea from '../../../components/atoms/TextArea'
import styles from './index.module.css'

type Props = {
    children: string
    honbun: string
}

const Presentation = (props: Props): JSX.Element => {
    return (
        <div className={styles.presentation_area}>
            <Text>{props.children}</Text>
            <TextArea>{props.honbun}</TextArea>
        </div>
    )
}

export default Presentation

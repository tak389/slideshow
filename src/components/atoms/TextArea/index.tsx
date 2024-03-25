import { useEffect, useState } from 'react'
import styles from './index.module.css'

type Props = {
    children: string
}

const TextArea = (props: Props): JSX.Element => {

    const [textValue, setTextValue] = useState<string>(props.children)

    const setChangeTextValue = (text: string) => {
        setTextValue(text)
    }

    useEffect(() => {
        setTextValue(props.children)
    }, [props.children]) 

    return (
        <textarea className={styles.Textarea} value={textValue} onChange={(e) => setChangeTextValue(e.target.value)} />
    )
}

export default TextArea

import { useEffect, useState } from 'react'
import styles from './index.module.css'

type Props = {
    children: string
}

const TextArea = (props: Props): JSX.Element => {

    const [textValue, setTextValue] = useState<string>(props.children)

    const setTextValue1 = (aaa: string) => {
        setTextValue(aaa)
    }

    useEffect(() => {
        setTextValue(props.children)
    }, [props.children]) 

    return (
        <textarea className={styles.textarea} value={textValue} onChange={(e) => setTextValue1(e.target.value) } />
    )
}

export default TextArea

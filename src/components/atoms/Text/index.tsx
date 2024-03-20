import {useState, useEffect} from 'react'
import styles from './index.module.css'

type Props = {
    children: string
}

const Text = (props: Props): JSX.Element => {

    const [textValue, setTextValue] = useState<string>(props.children)

    const setChangeTextValue = (text: string) => {
        setTextValue(text)
    }

    useEffect(() => {
        setTextValue(props.children)
    }, [props.children]) 

    return (
        <input type="text" className={styles.text} value={textValue} onChange={(e) => setChangeTextValue(e.target.value) } />
    )
}

export default Text

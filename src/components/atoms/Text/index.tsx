import {useState, useEffect} from 'react'
import styles from './index.module.css'

type Props = {
    children: string
}

const Text = (props: Props): JSX.Element => {

    const [textValue, setTextValue] = useState<string>(props.children)

    const setTextValue1 = (aaa: string) => {
        setTextValue(aaa)
    }

    useEffect(() => {
        setTextValue(props.children)
    }, [props.children]) 

    return (
        <input type="text" className={styles.text} value={textValue} onChange={(e) => setTextValue1(e.target.value) } />
    )
}

export default Text

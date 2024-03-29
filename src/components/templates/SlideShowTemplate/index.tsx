import { useState, useEffect } from 'react' 
import SlideButton from '@/components/atoms/SlideButton'
import SoundButton from '@/components/atoms/SoundButton'
import Presentation from '@/components/organisms/Presentation'
import useSound from 'use-sound'
import styles from './index.module.css'

type Props = {
    data: {
        pages: {
            id: number
            title: string
            text: string
            image: string
        }[],
        sounds: {
            id: number
            path: string
        }[]
    }
}

const SlideShowTemplate = (props: Props): JSX.Element => {
    const [pageIndex, setPageIndex] = useState<number>(0)
    const [data, setData] = useState<Props>(props)
    const pageMax: number = props.data.pages.length - 1
    const scrollArea = Math.floor((100 / props.data.pages.length * 10)) / 10
    const [play, { stop }] = useSound(props.data.sounds[0].path)

    useEffect(() => {
        setData(props)
    }, [props])

    const slidePrevPage = (): void => {
        const index = pageIndex - 1
        setPageIndex(index)
        playSound()
    }

    const slideNextPage = (): void => {
        const index = pageIndex + 1
        setPageIndex(index)
        playSound()
    }

    const scrollStyle = {
        transform: `translateX(-${pageIndex * scrollArea}%)`,
        transition: 'transform 0.5s ease'
    }

    const playSound = (): void => {
        stop()
        play()
    }

    return (
        <div className={styles.Template}>
            <div className={styles.template_area}>
                <span className={styles.outside}>
                    {pageIndex !== 0 && <SlideButton onClick={slidePrevPage}>＜</SlideButton> }
                </span>
                <div className={styles.slide_wrapper}>
                    <div className={styles.slide_area} style={scrollStyle}>
                        {data.data.pages.map((page) => {
                            return <Presentation title={page.title} text={page.text} image={page.image} key={page.id} />
                        })}
                    </div>
                </div>
                <span className={styles.outside}>
                    {pageIndex !== pageMax && <SlideButton onClick={slideNextPage}>＞</SlideButton> }
                </span>
            </div>
            <div className={styles.Sound_bar_area}>
                <SoundButton path={props.data.sounds[1].path}></SoundButton>
            </div>
        </div>
    )
}

export default SlideShowTemplate

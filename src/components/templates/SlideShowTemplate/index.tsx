import { useState, useEffect } from 'react' 
import SlideButton from '@/components/atoms/SlideButton'
import SoundButton from '@/components/atoms/SoundButton'
import Presentation from '@/components/organisms/Presentation'
import styles from './index.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

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

    useEffect(() => {
        setData(props)
    }, [pageIndex])

    const slidePrevPage = (): void => {
        if (pageIndex <= 0) return // TODO alert等追加する
        const index = pageIndex - 1
        setPageIndex(index)
        playSound()
    }

    const slideNextPage = (): void => {
        if (pageIndex >= props.data.pages.length - 1) return // TODO alert等追加する
        const index = pageIndex + 1
        setPageIndex(index)
        playSound()
    }

    const scrollStyle = {
        transform: `translateX(-${pageIndex * 14.2}%)`,
        transition: 'transform 0.5s ease'
    }

    const playSound = (): void => {
        const sound = new Audio(props.data.sounds[0].path)
        sound.play()
    }

    return (
        <div className={styles.template}>
            <span className={styles.outside}>
                <SlideButton onClick={slidePrevPage}>＜</SlideButton>
            </span>
            <div className={styles.slide_wrapper}>
                <Swiper>
                    <SwiperSlide>
                        <div className={styles.slide_area} style={scrollStyle}>
                            {data.data.pages.map((page) => {
                                return <Presentation title={page.title} text={page.text} image={page.image} key={page.id} />
                            })}
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <span className={styles.outside}>
                <SlideButton onClick={slideNextPage}>＞</SlideButton>
            </span>
            <div>
                <SoundButton sound={props.data.sounds[1].path}></SoundButton>
            </div>
        </div>
    )
}

export default SlideShowTemplate

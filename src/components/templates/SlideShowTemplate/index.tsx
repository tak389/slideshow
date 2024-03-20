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
        }[],
        media: {
            id: number
            type: string
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
    console.log(props)
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
        transform: `translateX(-${pageIndex * 16.66}%)`,
        transition: 'transform 0.5s ease'
    }

    const playSound = (): void => {
        const sound = new Audio(props.data.media[1].path)
        sound.play()
    }

    return (
        <div className=''>
            <div className={styles.slide_wrapper}>
                <Swiper>
                    <SwiperSlide>
                        <div className={styles.slide_area} style={scrollStyle}>
                            {data.data.pages.map((d) => {
                                return <Presentation title={d.title} text={d.text} key={d.id} />
                            })}
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className=''>
                    <SlideButton onClick={slidePrevPage}>戻る</SlideButton>
                    <SlideButton onClick={slideNextPage}>次へ</SlideButton>
                    <SoundButton sound={props.data.media[2].path}></SoundButton>
                </div>
            </div>
        </div>
    )
}

export default SlideShowTemplate

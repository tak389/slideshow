import { useState, useEffect } from 'react' 
import SlideButton from '../../../components/atoms/SlideButton'
import Presentation from '../../../components/organisms/Presentation'
import styles from './index.module.css'
import SoundButton from '../../../components/atoms/SoundButton'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

type Props = {
    data: {
        pages: {
            id: number
            title: string
            text: string
        }[]
    },
    mediaData: {
        id: number
        type: string
        path: string
    }[]
}

const SlideShowTemplate = (props: Props): JSX.Element => {
    const [pageIndex, setPageIndex] = useState<number>(0)
    const [data, setData] = useState<Props>(props)
    console.log(props)
    useEffect(() => {
        console.log('読み込み')
        setData(props)
    }, [pageIndex])

    const slidePrevPage = (): void => {
        if (pageIndex <= 0) return
        const index = pageIndex - 1
        setPageIndex(index)
        playAudio()
    }

    const slideNextPage = (): void => {
        if (pageIndex >= props.data.pages.length - 1) return
        const index = pageIndex + 1
        setPageIndex(index)
        playAudio()
    }

    const scrollStyle = {
        transform: `translateX(-${pageIndex * 16.66}%)`,
        transition: 'transform 0.5s ease'
    }

  // 音声再生の関数
  const playAudio = () => {
    console.log(333)
    const audio = new Audio(props.mediaData[1].path)
    console.log(props.mediaData[1].path)
    audio.play()
  }
  console.log(props.mediaData[1].path, 8888)
    return (
        <div>
            <div className={styles.slide_wrapper}>
                <Swiper>
                    <SwiperSlide>
                        <div className={styles.slide_area} style={scrollStyle}>
                            {data.data.pages.map((a) => {
                                return <Presentation children={a.title} honbun={a.text} key={a.id} />
                            })}
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div>
                    <SlideButton onClick={slidePrevPage}>戻る</SlideButton>
                    <SlideButton onClick={slideNextPage}>次へ</SlideButton>
                    <SoundButton sound={props.mediaData[2].path}></SoundButton>
                </div>
            </div>
        </div>
    )
}

export default SlideShowTemplate

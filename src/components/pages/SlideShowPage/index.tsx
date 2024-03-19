import { useState, useEffect } from 'react';
import SlideShowTemplate from '../../../components/templates/SlideShowTemplate'
import Data from '../../../../public/json/data.json'

type File = {
 id: number
 type: string
 path: string
}

const SlideShowPage = (): JSX.Element => {

  const [mediaData, setMediaData] = useState<File[]>([]);

  useEffect(() => {
    // alert(123)
    // console.log(123)
    // JSONファイルからデータを非同期で読み込む処理
    // fetchMediaData();
    const jjj = async() => {
      try {
        // データを取得する処理
        const response = await fetch('/json/media.json');
        const data = await response.json();
        setMediaData(data);
      } catch (error) {
        console.error('Error fetching media data:', error);
      }
    }
    jjj()
  }, [])

  // フェッチ処理の関数
  // const fetchMediaData = async() => {
    // try {
    //   // データを取得する処理
    //   const response = await fetch('/json/media.json');
    //   const data = await response.json();
    //   setMediaData(data);
    // } catch (error) {
    //   console.error('Error fetching media data:', error);
    // }
  console.log(mediaData)
  return (
      <>
        {mediaData.length ?
          <SlideShowTemplate data={Data.data} mediaData={mediaData} /> :
          <></>
        }
      </>
  )
}

export default SlideShowPage

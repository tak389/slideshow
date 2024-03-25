import { useState, useEffect } from 'react'
import SlideShowTemplate from '@/components/templates/SlideShowTemplate'
import Data from '~/json/data.json'

type Data = {
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

const initData: Data = {
  data: {
    pages: [],
    sounds: []
  }
}

const SlideShowPage = (): JSX.Element => {
  const [jsonData, setJsonData] = useState<Data>(initData)

  useEffect(() => {
    const fetchData = async(): Promise<void> => {
      try {
        const response = await fetch('/json/data.json')
        const data = await response.json()
        setJsonData(data)
      } catch (e) {
        console.error('fetchが失敗しました', e)
      }
    }

    fetchData()
  }, [])

  return (
      <>
        {jsonData.data.pages.length && <SlideShowTemplate data={jsonData.data} /> }
      </>
  )
}

export default SlideShowPage

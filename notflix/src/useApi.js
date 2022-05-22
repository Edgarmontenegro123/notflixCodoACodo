import React, {useState, useEffect} from 'react'
import {apiBuilder, apiLanguage, apiEntity} from './apiConfig'


const useApi = (entity, lang = apiLanguage.spanish, pagination = 1) => {

  const [values, setValues] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [page, setPage] = useState(pagination)

  const getData = async () => {

    setLoading(true)
    setError(null)

    const res = await apiBuilder.tryGet(entity, lang, page)
    const data = res.data.results
    console.log(res.data.results)

    if(res.status === 200) {
      setValues(data)
    }
    else {
      setError(res.message)
      console.log(res)
    }
    setLoading(false)
  }

  useEffect(() => {
    getData()
  }, [page])

  const handleNext = () => {
    setPage(page + 1)
  }

  return [values, loading, error, handleNext]
}

export default useApi

  
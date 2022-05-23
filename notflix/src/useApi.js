import {useState, useEffect} from 'react';
import {apiBuilder, apiLanguage} from './apiConfig';


const useApi = (entity, lang = apiLanguage.spanish, pagination = 1) => {

  const [values, setValues] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [page, setPage] = useState(pagination)

  const getData = async () => {

    setLoading(true)
    setError(null)

    const res = await apiBuilder.tryGet(entity, lang, page);

    if(res.status === 200) {
      setValues(res.data.results);
    }
    else {
      setError(res.message);
    }
    setLoading(false);
  }

  useEffect(() => {
    getData()
  }, [page]);

  const handleNext = () => {
    setPage(page + 1)
  };

  return [values, loading, error, handleNext];
}

export default useApi;

import { useCallback, useEffect, useState } from 'react';
import { IQuote, IQuoteAPI } from '../../types';
import axiosAPI from '../../axiosAPI.tsx';
import Grid from '@mui/material/Grid2';
import QuoteItem from '../../components/QuoteItem/QuoteItem.tsx';

const Home = () => {
  const [quotes,setQuotes] = useState<IQuote[]>([]);

  const fetchQuotes = useCallback(async () => {
    try {
      const response : {data: IQuoteAPI} = await axiosAPI<IQuoteAPI>("quotes.json");
      if (response.data) {
          const quoteFromAPI = Object.keys(response.data).map((quoteKey) => {
            return {
              ...response.data[quoteKey],
              id: quoteKey,
            };
          });
        setQuotes(quoteFromAPI);
      }

    } catch (e) {
      console.error(e);
    }
  },[]);

  useEffect(() => {
    void fetchQuotes();
  }, [fetchQuotes]);

  return (
    <>
      <>
        {quotes.length === 0 ? (
          <h2>No quotes</h2>
        ) : (
          <>
            <Grid container spacing={2}>
              {quotes.map((quote) => (
                <QuoteItem key={quote.id} quote={quote} />
              ))}
            </Grid>
          </>
        )}
      </>
    </>
  );
};

export default Home;
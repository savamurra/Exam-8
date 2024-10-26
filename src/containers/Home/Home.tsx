import { useCallback, useEffect, useState } from "react";
import { IQuote, IQuoteAPI } from "../../types";
import axiosAPI from "../../axiosAPI.tsx";
import Grid from "@mui/material/Grid2";
import QuoteItem from "../../components/QuoteItem/QuoteItem.tsx";
import { useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar.tsx";
import Spinner from "../../components/UI/Spinner/Spinner.tsx";

const Home = () => {
  const [quotes, setQuotes] = useState<IQuote[]>([]);
  const { category } = useParams<{ category: string }>();
  const [loading, setLoading] = useState<boolean>(false);

  const fetchQuotes = useCallback(async () => {
    try {
      setLoading(true);
      const url = category
        ? `quotes.json?orderBy="category"&equalTo="${category}"`
        : "quotes.json";

      const response: { data: IQuoteAPI } = await axiosAPI<IQuoteAPI>(url);
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
    } finally {
      setLoading(false);
    }
  }, [category]);

  const deleteQuote = async (id: string) => {
    try {
      setLoading(true);
      await axiosAPI.delete(`quotes/${id}.json`);
      setQuotes((prevState) => prevState.filter((quote) => quote.id !== id));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void fetchQuotes();
  }, [fetchQuotes]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div style={{ display: "flex", gap: "30px", marginBottom: "30px" }}>
          <div style={{ width: "170px" }}>
            <Sidebar />
          </div>
          {quotes.length === 0 ? (
            <h2 style={{ margin: "0" }}>No quotes</h2>
          ) : (
            <div style={{ width: "100%" }}>
              <h2 style={{ margin: "0 0 20px 0" }}>
                {category
                  ? category.charAt(0).toUpperCase() + category.slice(1)
                  : "All"}
              </h2>
              <Grid container spacing={2}>
                {quotes.map((quote) => (
                  <QuoteItem
                    key={quote.id}
                    quote={quote}
                    deleteQuote={() => deleteQuote(quote.id)}
                  />
                ))}
              </Grid>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Home;

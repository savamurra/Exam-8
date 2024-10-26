import { useCallback, useEffect, useState } from "react";
import { IQuote, IQuoteForm } from "../../types";
import { useNavigate, useParams } from "react-router-dom";
import axiosAPI from "../../axiosAPI.tsx";
import QuotesForm from "../../components/QuotesForm/QuotesForm.tsx";
import Spinner from "../../components/UI/Spinner/Spinner.tsx";

const EditQuote = () => {
  const [quote, setQuote] = useState<IQuote>();
  const params = useParams<{ idQuote: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const fetchEditQuote = useCallback(async (id: string) => {
    try {
      setLoading(true);
      const response: { data: IQuote } = await axiosAPI<IQuote>(
        `quotes/${id}.json`,
      );
      if (response.data) {
        setQuote(response.data);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (params.idQuote) void fetchEditQuote(params.idQuote);
  }, [params.idQuote, fetchEditQuote]);

  const submitForm = async (quote: IQuoteForm) => {
    try {
      if (params.idQuote) {
        await axiosAPI.put(`quotes/${params.idQuote}.json`, { ...quote });
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {quote ? (
            <QuotesForm submitForm={submitForm} quoteToEdit={quote} />
          ) : null}
        </>
      )}
    </>
  );
};

export default EditQuote;

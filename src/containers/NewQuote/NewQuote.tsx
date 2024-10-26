import QuotesForm from "../../components/QuotesForm/QuotesForm.tsx";
import { IQuoteForm } from "../../types";
import axiosAPI from "../../axiosAPI.tsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Spinner from "../../components/UI/Spinner/Spinner.tsx";

const NewQuote = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const submitForm = async (quote: IQuoteForm) => {
    try {
      await axiosAPI.post("quotes.json", {
        ...quote,
      });
      navigate("/");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return <>{loading ? <Spinner /> : <QuotesForm submitForm={submitForm} />}</>;
};

export default NewQuote;

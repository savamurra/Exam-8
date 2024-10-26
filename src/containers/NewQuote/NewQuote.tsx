import QuotesForm from '../../components/QuotesForm/QuotesForm.tsx';
import { IQuoteForm } from '../../types';
import axiosAPI from '../../axiosAPI.tsx';

const NewQuote = () => {

  const submitForm = async (quote: IQuoteForm) => {
    await axiosAPI.post("quotes.json", {
      ...quote,
    });
  };

  return (
    <>
     <QuotesForm submitForm={submitForm} />
    </>
  );
};

export default NewQuote;
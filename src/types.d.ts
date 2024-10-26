export interface IQuoteForm {
  author: string;
  content: string;
  category: string;
}

export interface IQuote {
  author: string;
  content: string;
  category: string;
  id: string;
}

export interface IQuoteAPI {
  [id: string]: IQuote;
}

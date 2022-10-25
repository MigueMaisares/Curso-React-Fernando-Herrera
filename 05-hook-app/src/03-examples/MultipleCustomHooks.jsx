import { useCounter, useFetch } from "../hooks";
import { LoadingQuote } from "./LoadingQuote";
import { Quote } from "./Quote";

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);
  const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;

  const { data, isLoading, hasError } = useFetch(url);
  // console.log({ data, isLoading, hasError });

  const { author, quote } = Boolean(data) && data[0]; //!!data && data[0]

  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr />

      {isLoading ? <LoadingQuote /> : <Quote author={author} quote={quote} />}

      <button
        className="btn btn-primary"
        onClick={increment}
        disabled={isLoading}
      >
        Next quote
      </button>
    </>
  );
};

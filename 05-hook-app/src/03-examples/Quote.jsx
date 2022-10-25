import { useLayoutEffect, useRef, useState } from "react";

export const Quote = ({ author, quote }) => {
  const pRef = useRef();

  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  // React renderiza el Comp --> React empieza a cambiar el DOM --> Se ejecuta el
  // useLayoutEffect --> Se pinta el browser --> Se ejecuta el useState

  //En este caso tmb se puede usar el useEffect
  useLayoutEffect(() => {
    const { width, height } = pRef.current.getBoundingClientRect();
    setBoxSize({ width, height });
  }, [quote]);

  return (
    <>
      <blockquote className="blockquote text-end" style={{ display: "flex" }}>
        <p ref={pRef} className="mb-1">
          {quote}
        </p>
        <footer className="blockquote-footer">{author}</footer>
      </blockquote>

      <code>{JSON.stringify(boxSize)}</code>
    </>
  );
};

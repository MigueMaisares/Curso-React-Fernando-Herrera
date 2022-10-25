import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);
  const onAddcategory = (newCategory) => {
    //En React el estado no muta (categories.push), sino que cambia el estado a uno nuevo
    /* setCategories((cat) => [...categories, "Valorant"]); otra formaa de hacer lo mismo*/
    /* setCategories(["Valorant", ...categories]); */
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>Gif Expert App</h1>

      <AddCategory onNewCategory={onAddcategory} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};

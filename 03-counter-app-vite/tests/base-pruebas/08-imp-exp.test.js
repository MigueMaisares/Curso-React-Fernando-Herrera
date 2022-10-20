import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe("Pruebas en 08-imp-exp", () => {
  test("getHeroeById debe retornar un heroe por id", () => {
    const id = 1;
    const heroeTest = getHeroeById(id);
    console.log(heroeTest);

    expect(heroeTest).toEqual({ id: 1, name: "Batman", owner: "DC" });
  });

  test("getHeroeById debe retornar undefined", () => {
    const id = 100;
    const heroeTest = getHeroeById(id);

    expect(heroeTest).toBeFalsy();
  });

  test("getHeroesByOwner debe retornar heroes de DC", () => {
    const owner = "DC";
    const testHeroesDC = getHeroesByOwner(owner);

    console.log(testHeroesDC);
    expect(testHeroesDC).toEqual([
      { id: 1, name: "Batman", owner: "DC" },
      { id: 3, name: "Superman", owner: "DC" },
      { id: 4, name: "Flash", owner: "DC" },
    ]);
  });

  test("getHeroesByOwner debe retornar heroes de Marvel", () => {
    const owner = "Marvel";
    const testHeroesMarvel = getHeroesByOwner(owner);
    console.log(testHeroesMarvel);

    expect(testHeroesMarvel.length).toBe(2);
    expect(testHeroesMarvel).toEqual([
      { id: 2, name: "Spiderman", owner: "Marvel" },
      { id: 5, name: "Wolverine", owner: "Marvel" },
    ]);
    expect(testHeroesMarvel).toEqual(
      heroes.filter((heroe) => heroe.owner === owner)
    );
  });
});

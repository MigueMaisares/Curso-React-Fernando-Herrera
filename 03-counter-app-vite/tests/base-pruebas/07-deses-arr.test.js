import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe("Prueba en 07-deses-arr", () => {
  test("Debe retornar un array de letras y numeros", () => {
    const [letras, numeros] = retornaArreglo();

    expect(typeof letras).toBe("string");
    expect(typeof numeros).toBe("number");

    expect(letras).toEqual(expect.any(String));
  });
});

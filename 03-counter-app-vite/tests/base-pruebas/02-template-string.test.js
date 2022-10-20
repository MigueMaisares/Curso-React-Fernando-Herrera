import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe("Prueba 02-template-string.js", () => {
  test('getSaludo debe devolver "Hola Miguel"', () => {
    const name = "Miguel";
    const mensaje = getSaludo(name);

    expect(mensaje).toBe(`Hola ${name}`);
  });
});

/* describe("Prueba componenteX", () => {
  test("Esta prueba puede fallar", () => {
    //1. Inicializacion
    //2. Estimulo
    //3. Observar el comportamiento.. esperado
  });
});
 */

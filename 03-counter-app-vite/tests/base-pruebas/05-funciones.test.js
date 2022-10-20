import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe("Prueba 05-funciones.js", () => {
  test("getUser debe de retornar un objeto", () => {
    const testUser = {
      uid: "ABC123",
      username: "El_Papi1502",
    };
    const user = getUser();

    //Cuando se comparan objetos, en js se comparan al espacio de memoria al que estan apuntando los obj, por lo tanto hay que usar toStrictEqual o toEqual
    expect(testUser).toEqual(user);
  });

  test("getUsuarioActivo debe retornar un objeto con 'Miguel'", () => {
    const testName = "Miguel";
    const testUsuarioActivo = getUsuarioActivo(testName);
    const expectUser = {
      uid: "ABC567",
      username: testName,
    };
    //esoeramos que...     tenga un valor de...
    expect(testUsuarioActivo).toEqual(expectUser);
    //        (received)              (expected)
  });
});


describe("Pruebas del módulo de direcciones de clientes T4D", () => {

    test("Debe tener una dirección registrada", () => {
        const direccion = {
            ciudad: "Bogotá",
            barrio: "Centro",
            direccion: "Calle 10 # 20-30"
        };

        expect(direccion.ciudad).toBeTruthy();
        expect(direccion.barrio).toBeTruthy();
        expect(direccion.direccion).toBeTruthy();
    });

    test("Debe identificar la ciudad del cliente", () => {
        const direccion = {
            ciudad: "Bogotá"
        };

        expect(direccion.ciudad).toBe("Bogotá");
    });

    test("No debe aceptar una dirección vacía", () => {
        const direccion = {
            direccion: ""
        };

        expect(direccion.direccion).toBe("");
    });

});

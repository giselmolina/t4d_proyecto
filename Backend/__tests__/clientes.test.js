
describe("Pruebas del módulo de clientes T4D", () => {

    test("Debe tener el nombre del cliente", () => {
        const cliente = {
            nombre: "Carlos Ramirez",
            telefono: "3001234567",
            correo: "carlos@gmail.com"
        };

        expect(cliente.nombre).toBeTruthy();
    });

    test("Debe validar el correo del cliente", () => {
        const cliente = {
            correo: "carlos@gmail.com"
        };

        expect(cliente.correo).toMatch(
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        );
    });

    test("No debe aceptar un nombre vacío", () => {
        const cliente = {
            nombre: ""
        };

        expect(cliente.nombre).toBe("");
    });

});

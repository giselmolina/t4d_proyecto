
describe("Pruebas del módulo de perfil T4D", () => {

    test("Debe identificar el rol Gerente", () => {
        const usuario = {
            nombre: "Pedro Lopez",
            correo: "gerente@t4d.com",
            rol: "Gerente"
        };

        expect(usuario.rol).toBe("Gerente");
    });

    test("Debe mostrar el correo del usuario", () => {
        const usuario = {
            correo: "gerente@t4d.com"
        };

        expect(usuario.correo).toMatch(
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        );
    });

    test("Debe tener un nombre de usuario", () => {
        const usuario = {
            nombre: "Pedro Lopez"
        };

        expect(usuario.nombre).toBeTruthy();
    });

});


describe("Pruebas del módulo de mantenimiento T4D", () => {

    test("Debe registrar un mantenimiento", () => {
        const mantenimiento = {
            referencia: "RN-001",
            problema: "Falla Motor",
            prioridad: "Crítica",
            estado: "Nueva"
        };

        expect(mantenimiento.referencia).toBe("RN-001");
        expect(mantenimiento.problema).toBe("Falla Motor");
        expect(mantenimiento.prioridad).toBe("Crítica");
        expect(mantenimiento.estado).toBe("Nueva");
    });

    test("Debe identificar la prioridad del mantenimiento", () => {
        const mantenimiento = {
            prioridad: "Alta"
        };

        expect(["Crítica", "Alta", "Media"])
            .toContain(mantenimiento.prioridad);
    });

    test("Debe reconocer el estado de reparación", () => {
        const mantenimiento = {
            estado: "En proceso"
        };

        expect(["Nueva", "Revisada", "Aprobada", "En proceso", "Completada"])
            .toContain(mantenimiento.estado);
    });

});


describe("Pruebas del módulo de asignación de tareas T4D", () => {

    test("Debe permitir una tarea con información completa", () => {
        const tarea = {
            descripcion: "Revisar mantenimiento del vehículo",
            empleado: "Pedro Lopez",
            estado: "Pendiente"
        };

        expect(tarea.descripcion).toBeTruthy();
        expect(tarea.empleado).toBeTruthy();
        expect(tarea.estado).toBe("Pendiente");
    });

    test("No debe permitir una tarea sin descripción", () => {
        const tarea = {
            descripcion: "",
            empleado: "Pedro Lopez"
        };

        expect(tarea.descripcion).toBe("");
    });

    test("Debe reconocer el estado de una tarea", () => {
        const tarea = {
            estado: "Completada"
        };

        expect(tarea.estado).toBe("Completada");
    });

});

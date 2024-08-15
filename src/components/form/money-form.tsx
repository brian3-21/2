import { useState } from "react";
import { MoneyClass } from "../../utils/class";

export default function MoneyForm() {
    // Estado para almacenar los datos del formulario
    const [formData, setFormData] = useState<MoneyClass | null>();

    // Función para manejar el cambio en los inputs
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        console.log("el name", name ),
        console.log("el value",value )// Actualiza el estado con el nuevo valor
    };

    // Función para manejar el envío del formulario
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Evita que la página se recargue
        // Aquí puedes usar formData para lo que necesites
        console.log('Datos enviados:', formData);
        // Por ejemplo, puedes actualizar el estado userData aquí
        // setUserData(formData);
    };

    return (
        <div className="container">
            <h2>Introduce tus cantidades.</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="short">Corto plazo: </label>
                <input
                    type="number"
                    name="short"
                    value={formData?.short_term}
                    onChange={handleChange} // Llama a handleChange al cambiar
                />

                <label htmlFor="medium">Medio plazo: </label>
                <input
                    type="number"
                    name="medium"
                    value={formData?.medium_term}
                    onChange={handleChange} // Llama a handleChange al cambiar
                />

                <label htmlFor="long">Largo plazo: </label>
                <input
                    type="number"
                    name="long" // Corrige el nombre a 'long'
                    value={formData?.long_term}
                    onChange={handleChange} // Llama a handleChange al cambiar
                />

                <input type="submit" />
            </form>
        </div>
    );
}
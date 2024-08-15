import './form.css'
import { useState } from "react";
import { MoneyClass } from "../../utils/class";
import { supabase } from '../../services/supabase/create-client-supabase';


export default function MoneyForm() {
    // Estado para almacenar los datos del formulario
    const [formData, setFormData] = useState<MoneyClass | null>(null);

    // Función para manejar el cambio en los inputs
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        console.log("el name", name);
        console.log("el value", value);

        // Actualiza el estado con el nuevo valor
        setFormData((e) => {
            if (e === null) {
                return { short_term: 0, medium_term: 0, long_term: 0, [name]: Number(value) };
            }
            return { ...e, [name]: Number(value) };
        });
    };

    // Función para manejar el envío del formulario
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Evita que la página se recargue
        // Aquí puedes usar formData para lo que necesites
        console.log('Datos enviados:', formData);
        // Por ejemplo, puedes actualizar el estado userData aquí
        // setUserData(formData);
        if (formData) {
            const { data, error } = await supabase.from('money_table').insert([formData]);
            if (error) {
                console.error('Error al enviar datos:', error);
            } else {
                console.log('Datos enviados correctamente:', data);
            }
        }

    };

    return (
        <div className="container">
            <h2>Introduce tus cantidades.</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="short">Corto plazo: </label>
                <input
                    type="number"
                    name="short_term"
                    value={formData?.short_term}
                    onChange={handleChange} // Llama a handleChange al cambiar
                />

                <label htmlFor="medium">Medio plazo: </label>
                <input
                    type="number"
                    name="medium_term"
                    value={formData?.medium_term}
                    onChange={handleChange} // Llama a handleChange al cambiar
                />

                <label htmlFor="long">Largo plazo: </label>
                <input
                    type="number"
                    name="long_term"
                    value={formData?.long_term}
                    onChange={handleChange} // Llama a handleChange al cambiar
                />

                <input type="submit" title='submit' />
            </form>
        </div>
    );
}
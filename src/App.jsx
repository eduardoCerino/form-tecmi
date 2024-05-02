import React, { useState } from "react";
import clsx from "clsx";
import toast, { Toaster } from "react-hot-toast";

const generateRandomAccountNumber = () => {
  const randomNumber = Math.floor(1000000000 + Math.random() * 9000000000);
  return randomNumber.toString();
};

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const randomAccountNumber = generateRandomAccountNumber();
  const isOpen = true;

  const [formData, setFormData] = useState({
    cuenta: randomAccountNumber,
    nombre: "",
    apellidos: "",
    edad: "",
    pais: "",
    ciudad: "",
    direccion: "",
    balance: "",
  });

  const [errors, setErrors] = useState({
    cuenta: false,
    nombre: false,
    apellidos: false,
    edad: false,
    pais: false,
    ciudad: false,
    direccion: false,
    balance: false,
    limitBalance: false,
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSelectChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("holaa");
    let hasErrors = false;
    const newErrors = { ...errors };

    for (const key in formData) {
      if (formData[key].trim() === "") {
        newErrors[key] = true;
        hasErrors = true;
      } else {
        newErrors[key] = false;
      }
    }

    if (parseFloat(formData.balance) > 500) {
      newErrors.balance = true;
      newErrors.limitBalance = true;
      hasErrors = true;
    } else {
      newErrors.balance = false;
    }
    if (formData.pais === "Selecciona tu país...") {
      newErrors.pais = true;
      hasErrors = true;
    } else {
      newErrors.balance = false;
    }

    if (formData.pais === "Selecciona tu país...") {
      newErrors.pais = true;
      hasErrors = true;
    } else {
      newErrors.balance = false;
    }

    setErrors(newErrors);

    console.log(newErrors);
    console.log(errors);
    console.log(formData);

    if (!hasErrors) {
      console.log("holaa2");
      console.log(formData);
      setIsLoading(true); // Activar el estado de carga

      // Simular una solicitud de red o procesamiento
      setTimeout(() => {
        // Lógica de envío del formulario aquí
        console.log("Formulario enviado exitosamente!");
        setIsLoading(false); // Desactivar el estado de carga
        toast.success("Datos enviados correctamente");

        setFormData({
          cuenta: "",
          nombre: "",
          apellidos: "",
          edad: "",
          pais: "",
          ciudad: "",
          direccion: "",
          balance: "",
        });
      }, 2000);
    }
  };

  const handleCancel = () => {
    setFormData({
      cuenta: randomAccountNumber,
      nombre: "",
      apellidos: "",
      edad: "",
      pais: "",
      ciudad: "",
      direccion: "",
      balance: "",
    });

    setErrors({
      cuenta: false,
      nombre: false,
      apellidos: false,
      edad: false,
      pais: false,
      ciudad: false,
      direccion: false,
      balance: false,
      limitBalance: false,
    });
  };

  return (
    <div className="flex flex-col gap-2 p-8 ">
      <form>
        <div className="mt-4 mx-4 space-x-">
          <div className="flex items-center gap-8">
            <label htmlFor="cuenta">Número de cuenta:</label>
            <input
              id="cuenta"
              type="text"
              disabled={true}
              placeholder="Ingresa número de cuenta..."
              className={`input input-bordered w-[50%] max-w-xs ${
                errors.cuenta ? "input-error" : ""
              }`}
              value={formData.cuenta}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mt-4 mx-4 space-x-">
          <div className="flex items-center gap-8">
            <label htmlFor="nombre">Nombre:</label>
            <input
              id="nombre"
              type="text"
              placeholder="Ingresa tu nombre..."
              className={`input input-bordered w-full max-w-xs ${
                errors.nombre ? "input-error" : ""
              }`}
              value={formData.nombre}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mt-2 mx-4 space-x-2">
          <div className="flex items-center gap-8">
            <label htmlFor="apellidos">Apellidos:</label>
            <input
              id="apellidos"
              type="text"
              placeholder="Ingresa tus apellidos..."
              className={`input input-bordered w-full max-w-xs ${
                errors.apellidos ? "input-error" : ""
              }`}
              value={formData.apellidos}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mt-2 mx-4 space-x-2">
          <div className="flex items-center gap-8">
            <label htmlFor="edad">Edad:</label>
            <input
              id="edad"
              type="number"
              placeholder="Edad..."
              className={`input input-bordered w-full max-w-xs ${
                errors.edad ? "input-error" : ""
              }`}
              value={formData.edad}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mt-2 mx-4 space-x-2 ">
          <div className="flex items-center gap-8 ">
            <label htmlFor="pais">País:</label>
            <select
              id="pais"
              className={`select select-bordered w-full max-w-xs ${
                errors.pais ? "input-error" : ""
              }`}
              value={formData.pais}
              onChange={handleSelectChange}
            >
              <option disabled value="">
                Selecciona tu país...
              </option>
              <option value="Argentina">Argentina</option>
              <option value="Mexico">Mexico</option>
            </select>
          </div>
        </div>

        <div className="mt-2 mx-4 space-x-2">
          <div className="flex items-center gap-8">
            <label htmlFor="ciudad">Ciudad:</label>
            <select
              id="ciudad"
              className={`select select-bordered w-full max-w-xs ${
                errors.ciudad ? "input-error" : ""
              }`}
              value={formData.ciudad}
              onChange={handleSelectChange}
            >
              <option disabled value="">
                Selecciona tu ciudad...
              </option>
              <option value="Buenos Aires">Buenos Aires</option>
              <option value="CDMX">CDMX</option>
            </select>
          </div>
        </div>

        <div className="mt-2 mx-4 space-x-2">
          <div className="flex items-center gap-8">
            <label htmlFor="direccion">Dirección:</label>
            <input
              id="direccion"
              type="text"
              placeholder="Ingresa tu dirección..."
              className={`input input-bordered w-full max-w-xs ${
                errors.direccion ? "input-error" : ""
              }`}
              value={formData.direccion}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mt-2 mx-4 space-x-2">
          <div className="flex items-center gap-8">
            <label htmlFor="balance">Balance:</label>
            <input
              id="balance"
              type="text"
              placeholder="$0.00"
              className={`input input-bordered w-[30%] max-w-xs ${
                errors.balance ? "input-error" : ""
              }`}
              value={formData.balance}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mt-2 mb-4 mx-4 space-x-2">
          {errors.limitBalance && (
            <span className="text-red-500 ">
              No se puede ingresar deuda mayor a $500 USD
            </span>
          )}
        </div>

        <div className="mt-2 mx-4 space-x-2">
          <label
            htmlFor="my_modal_6"
            className="btn btn-outline"
            onClick={handleSubmit}
          >
            {isLoading ? "CARGANDO... " : "CONFIRMAR"}
          </label>

          <button
            type="button"
            className="btn btn-outline"
            onClick={handleCancel}
          >
            Cancelar
          </button>

          <Toaster />

          {/* Put this part before </body> tag */}
        </div>
      </form>
    </div>
  );
}

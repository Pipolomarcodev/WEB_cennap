import React from "react";
import "./restaurantModal.css";
import { useState, useEffect } from "react";
import { useFormik, ErrorMessage } from "formik";
import imagesFormRest from "../../../constants/images-form-rest";
import * as yup from "yup";
import { images } from "../../../constants";
import BaseUrl from "../../../constants/BaseUrl";

const RestaurantModal = ({ closeModal, restid }) => {
  const [dynamicElements, setDynamicElements] = useState([{}]);
  const [scheduleError, setscheduleError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [cities, setCities] = useState([]);
  const [weekSchedule, setWeekSchedule] = useState({
    lunes: {
      habilitado: false,
      desde: "n/a",
      hasta: "n/a",
    },
    martes: {
      habilitado: false,
      desde: "n/a",
      hasta: "n/a",
    },
    miércoles: {
      habilitado: false,
      desde: "n/a",
      hasta: "n/a",
    },
    jueves: {
      habilitado: false,
      desde: "n/a",
      hasta: "n/a",
    },
    viernes: {
      habilitado: false,
      desde: "n/a",
      hasta: "n/a",
    },
    sábado: {
      habilitado: false,
      desde: "n/a",
      hasta: "n/a",
    },
    domingo: {
      habilitado: false,
      desde: "n/a",
      hasta: "n/a",
    },
  });
  useEffect(() => {
    let country_id = 1;
    /*
          countries.map((country) => {
            if(country.name == formik.values.pais){
              country_id = country.id_country;
            }
          })
    */


    fetch(`${BaseUrl}/v1/api/countries/${country_id}/cities`)
      .then((response) => response.json())
      .then((data) => {
        setLoading(true)
        setCities(data)
      })
      .catch((error) => {
        console.error(error)
      })



    // Llamada a la API para obtener la información del restaurante
    fetch(`/v1/api/restaurants/${restid}`)
      .then((response) => response.json())
      .then((info) => {
        // Actualizar el estado y los valores iniciales del formulario
        const weekScheduleData = {
          lunes: {
            habilitado: info.data.day_disponibility[0].open,
            desde: info.data.day_disponibility[0].open_hour || "Desde",
            hasta: info.data.day_disponibility[0].close_hour || "Hasta",
          },
          martes: {
            habilitado: info.data.day_disponibility[1].open,
            desde: info.data.day_disponibility[1].open_hour || "Desde",
            hasta: info.data.day_disponibility[1].close_hour || "Hasta",
          },
          miércoles: {
            habilitado: info.data.day_disponibility[2].open,
            desde: info.data.day_disponibility[2].open_hour || "Desde",
            hasta: info.data.day_disponibility[2].close_hour || "Hasta",
          },
          jueves: {
            habilitado: info.data.day_disponibility[3].open,
            desde: info.data.day_disponibility[3].open_hour || "Desde",
            hasta: info.data.day_disponibility[3].close_hour || "Hasta",
          },
          viernes: {
            habilitado: info.data.day_disponibility[4].open,
            desde: info.data.day_disponibility[4].open_hour || "Desde",
            hasta: info.data.day_disponibility[4].close_hour || "Hasta",
          },
          sábado: {
            habilitado: info.data.day_disponibility[5].open,
            desde: info.data.day_disponibility[5].open_hour || "Desde",
            hasta: info.data.day_disponibility[5].close_hour || "Hasta",
          },
          domingo: {
            habilitado: info.data.day_disponibility[6].open,
            desde: info.data.day_disponibility[6].open_hour || "Desde",
            hasta: info.data.day_disponibility[6].close_hour || "Hasta",
          },
        };
        setWeekSchedule(weekScheduleData);

        const updateCategories = () => {
          let catList = [];
          info.data.category_restaurant.parking
            ? catList.push("Estacionamiento")
            : "";
          info.data.category_restaurant.live_music
            ? catList.push("Musica en vivo")
            : "";
          info.data.category_restaurant.terrace ? catList.push("Terraza") : "";
          info.data.category_restaurant.events ? catList.push("Eventos") : "";
          info.data.category_restaurant.wifi ? catList.push("Wifi") : "";
          return catList;
        };
        const restaurantTables = info.data.restaurant_tables || [];
        const mappedTables = restaurantTables.map((table) => {
          // Extrae el tipo de mesa y la capacidad de la descripción
          const match = table.table_type.trim().match(/(\D+)\s*(\d*)/);
          const tableType = match ? match[1].trim() : ""; // Modificado para eliminar espacios adicionales
          const tableCapacity = match ? parseInt(match[2], 10) : 0;

          return {
            quantity: table.cuantity_table || 0,
            type: tableType || "",
            capacity: tableCapacity || 0,
          };
        });

        setTables(mappedTables);

        setTables(mappedTables);
        formikRest.setValues({
          ...formikRest.values,
          restName: info.data.name,
          address: info.data.address,
          zone: info.data.zone_street,
          city: info.data.city_id,
          description: info.data.description,
          priceAvg: info.data.average_score,
          terms: info.data.active,
          foodStyles: [],
          categories: updateCategories(),
          tables: mappedTables,
          images: [],
        });
      })
      .catch((error) => console.error("Error fetching restaurant data:", error))
      .finally(() => {
        console.log(weekSchedule);
        setLoading(false)
      });


  }, []); // El array vacío asegura que se ejecute solo una vez

  const onSubmitRest = () => { };

  const food_styles = [
    "Colombiana",
    "Peruana",
    "Comida de mar",
    "Argentina",
    "Vegetariana",
    "Asiatica",
    "Carnes",
    "Italiana",
    "Mejicana",
    "Mariscos",
    "Cafe",
    "Turca",
    "Española",
  ];

  const categories = [
    "Wifi",
    "Musica en vivo",
    "Terraza",
    "Estacionamiento",
    "Eventos",
  ];

  const horas = [
    "00:00",
    "01:00",
    "02:00",
    "03:00",
    "04:00",
    "05:00",
    "06:00",
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
  ];

  const tableSchema = yup.object().shape({
    quantity: yup
      .string()
      .required("Campo obligatorio")
      .test(
        "valid-quantity",
        "La cantidad debe ser un número mayor que cero y no empezar con 0",
        (value) => {
          const parsedValue = parseInt(value, 10);
          if (isNaN(parsedValue)) {
            return false;
          }
          return parsedValue > 0 && !/^0/.test(value);
        }
      ),
    type: yup
      .string()
      .required("Campo obligatorio")
      .test(
        "not-default",
        "Seleccione un tipo de mesa",
        (value) => value !== "Tipo de mesa"
      ),
  });

  const [tables, setTables] = useState([
    {
      quantity: 0,
      type: "",
    },
  ]);

  const restSchema = yup.object().shape({
    restName: yup
      .string("Ingrese un nombre válido")
      .required("Campo obligatorio"),
    address: yup
      .string("Ingrese un nombre válido")
      .required("Campo obligatorio"),
    zone: yup
      .string("Por favor ingrese una zona o barrio válido.")
      .required("Campo obligatorio"),
    city: yup
      .string("Por favor ingrese una ciudad válida.")
      .required("Campo obligatorio"),
    description: yup
      .string("Por favor ingrese una descripción válida.")
      .required("Campo obligatorio")
      .max(500, "La descripción no puede tener más de 500 caracteres"),
    priceAvg: yup
      .number(":(")
      .required("Campo obligatorio")
      .notOneOf([0], "Campo obligatorio"),
    foodStyles: yup
      .array()
      .min(1, "Seleccione al menos un tipo")
      .required("Seleccione al menos un tipo de comida"),
    categories: yup
      .array()
      .min(1, "Seleccione al menos una cat.")
      .required("Seleccione al menos una categoría"),
    tables: yup.array().of(tableSchema),
    images: yup
      .array()
      .min(5, "Seleccione al menos 5 imágenes")
      .test("fileType", "Solo se permiten archivos png o jpg", (value) =>
        value.every((file) => file && /\.(png|jpg|jpeg)$/.test(file.name))
      ),
    terms: yup
      .boolean()
      .oneOf([true], "Debes aceptar los términos y condiciones para continuar")
      .required("Debes aceptar los términos y condiciones para continuar"),
  });

  const formikRest = useFormik({
    initialValues: {
      restName: "",
      address: "",
      zone: "",
      city: "",
      description: "",
      priceAvg: "",
      terms: false,
      foodStyles: [],
      categories: [],
      tables: [],
      images: [],
    },
    validationSchema: restSchema,
    onSubmit: onSubmitRest,
  });

  useEffect(() => {
    formikRest.setValues({
      ...formikRest.values,
      tables: tables,
    });
  }, [tables]);

  const handleTableQuantityChange = (index, value) => {
    setTables((prevTables) => {
      const newTables = [...prevTables];
      newTables[index].quantity = value;
      return newTables;
    });
  };

  const handleTableTypeChange = (index, value) => {
    setTables((prevTables) => {
      const newTables = [...prevTables];
      newTables[index].type = value;
      return newTables;
    });
  };

  const addDynamicElement = () => {
    if (dynamicElements.length < 5) {
      setDynamicElements([...dynamicElements, {}]);

      // Agrega una nueva mesa con valores predeterminados
      setTables((prevTables) => [
        ...prevTables,
        { quantity: 0, type: "", capacity: 0 }, // Agrega el campo capacity
      ]);
    }
  };

  const removeDynamicElement = (index) => {
    if (dynamicElements.length > 1) {
      const updatedElements = [...dynamicElements];
      updatedElements.splice(index, 1);
      setDynamicElements(updatedElements);

      setTables((prevTables) => {
        const newTables = [...prevTables];
        newTables.splice(index, 1);
        return newTables;
      });
    }
  };

  const handleItemClick = (item, type) => {
    if (type === "food") {
      const selectedFoodStyles = formikRest.values.foodStyles;
      if (selectedFoodStyles.includes(item)) {
        const updatedFoodStyles = selectedFoodStyles.filter(
          (style) => style !== item
        );
        formikRest.setFieldValue("foodStyles", updatedFoodStyles);
      } else {
        const updatedFoodStyles = [...selectedFoodStyles, item];
        formikRest.setFieldValue("foodStyles", updatedFoodStyles);
      }
    } else if (type === "category") {
      const selectedCategories = formikRest.values.categories;
      if (selectedCategories.includes(item)) {
        const updatedCategories = selectedCategories.filter(
          (category) => category !== item
        );
        formikRest.setFieldValue("categories", updatedCategories);
      } else {
        const updatedCategories = [...selectedCategories, item];
        formikRest.setFieldValue("categories", updatedCategories);
      }
    }
  };

  const toggleDay = (day) => {
    setWeekSchedule((prevSchedule) => ({
      ...prevSchedule,
      [day]: {
        ...prevSchedule[day],
        habilitado: !prevSchedule[day].habilitado,
      },
    }));
  };

  const handleFromChange = (day, value) => {
    console.log(weekSchedule);
    setWeekSchedule((prevSchedule) => ({
      ...prevSchedule,
      [day]: {
        ...prevSchedule[day],
        desde: value,
      },
    }));
  };

  const handleToChange = (day, value) => {
    setWeekSchedule((prevSchedule) => ({
      ...prevSchedule,
      [day]: {
        ...prevSchedule[day],
        hasta: value,
      },
    }));
  };

  const validateSchedule = (weekSchedule) => {
    const enabledDays = Object.entries(weekSchedule).filter(
      ([day, data]) => data.habilitado
    );

    if (enabledDays.length === 0) {
      return "Seleccione al menos un día habilitado";
    }

    const invalidDays = enabledDays.filter(
      ([day, data]) =>
        !data.desde ||
        data.desde === "Desde" ||
        !data.hasta ||
        data.hasta === "Hasta"
    );

    return invalidDays.length > 0
      ? "Seleccione el horario para todos los días habilitados"
      : null;
  };

  if (loading) {
    return (
      <>
        <div className="modal-overlay-r">
          <div className="loader-cont">
            <img src={images.logoInsolate} alt="" className="loader-r" />
          </div>
        </div>

      </>
    );
  }

  return (
    <>
      <div className="modal-overlay-r">
        <div className="modal-content-r" onClick={(e) => e.stopPropagation()}>
          <div className="flex-container-a">
            <div className="card-form">
              <div className="second-line flex-line">
                <div className="div-input">
                  <input
                    className={`input input-style second-line-input ${formikRest.errors.restName && formikRest.touched.restName
                        ? "is-danger"
                        : ""
                      }`}
                    type="text"
                    placeholder="Nombre del Restaurante*"
                    id="restName"
                    value={formikRest.values.restName}
                    onChange={formikRest.handleChange}
                    onBlur={formikRest.handleBlur}
                  />
                  <span
                    id="error-b"
                    className={`error-message-b ${formikRest.errors.restName && formikRest.touched.restName
                        ? "visible-b"
                        : "invisible-b"
                      }`}
                  >
                    {formikRest.errors.restName && formikRest.touched.restName
                      ? formikRest.errors.restName
                      : "none"}
                  </span>
                </div>

                <div className="div-button">
                  <div className="dropdown is-hoverable">
                    <div className="dropdown-trigger">
                      <button
                        id="foodStyles"
                        className={`button input-style drop-hover second-line-button ${formikRest.errors.foodStyles &&
                            formikRest.touched.foodStyles
                            ? "drop-error"
                            : ""
                          }`}
                        aria-haspopup="true"
                        aria-controls="dropdown-menu"
                      >
                        <span className="button-place">Tipos de cocina</span>
                        <img src={imagesFormRest.expandMore} alt="" />
                      </button>
                    </div>
                    <div
                      className="dropdown-menu ml-3"
                      id="dropdown-menu"
                      role="menu"
                    >
                      <div className="dropdown-content item">
                        {food_styles.map((style, index) => (
                          <a
                            href="#"
                            className={`dropdown-item ${formikRest.values.foodStyles.includes(style)
                                ? "is-active"
                                : ""
                              }`}
                            key={index}
                            onClick={() => handleItemClick(style, "food")}
                          >
                            {style}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  <span
                    className={`error-message-b${formikRest.errors.foodStyles &&
                        formikRest.touched.foodStyles
                        ? " visible-b"
                        : " invisible-b"
                      }`}
                  >
                    {formikRest.errors.foodStyles &&
                      formikRest.touched.foodStyles
                      ? formikRest.errors.foodStyles
                      : "none"}
                  </span>
                </div>

                <div className="div-button">
                  <div className="dropdown is-hoverable">
                    <div className="dropdown-trigger">
                      <button
                        className={`button input-style drop-hover second-line-button ${formikRest.errors.categories &&
                            formikRest.touched.categories
                            ? "drop-error"
                            : ""
                          }`}
                        aria-haspopup="true"
                        aria-controls="dropdown-menu5"
                      >
                        <span className="button-place2">Categorias</span>
                        <img src={imagesFormRest.expandMore} alt="" />
                      </button>
                    </div>
                    <div
                      className="dropdown-menu ml-3"
                      id="dropdown-menu5"
                      role="menu"
                    >
                      <div className="dropdown-content item">
                        {categories.map((category, index) => (
                          <a
                            href="#"
                            className={`dropdown-item ${formikRest.values.categories.includes(category)
                                ? "is-active"
                                : ""
                              }`}
                            key={index}
                            onClick={() =>
                              handleItemClick(category, "category")
                            }
                          >
                            {category}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <span
                    className={`error-message-b${formikRest.errors.categories &&
                        formikRest.touched.categories
                        ? " visible-b"
                        : " invisible-b"
                      }`}
                  >
                    {formikRest.errors.categories &&
                      formikRest.touched.categories
                      ? formikRest.errors.categories
                      : "none"}
                  </span>
                </div>
              </div>
              <div className="third-line flex-line">
                <div className="div-input">
                  <input
                    className={`input input-style input-t ${formikRest.errors.address && formikRest.touched.address
                        ? "is-danger"
                        : ""
                      }`}
                    type="text"
                    placeholder="Dirección*"
                    id="address"
                    value={formikRest.values.address}
                    onChange={formikRest.handleChange}
                    onBlur={formikRest.handleBlur}
                  />
                  <span
                    id="error-b"
                    className={`error-message-b ${formikRest.errors.address && formikRest.touched.address
                        ? "visible-b"
                        : "invisible-b"
                      }`}
                  >
                    {formikRest.errors.address && formikRest.touched.address
                      ? formikRest.errors.address
                      : "none"}
                  </span>
                </div>

                <div className="">
                  <input
                    className={`input input-style input-t-two ${formikRest.errors.zone && formikRest.touched.zone
                        ? "is-danger"
                        : ""
                      }`}
                    type="text"
                    placeholder="Zona/Barrio"
                    id="zone"
                    value={formikRest.values.zone}
                    onChange={formikRest.handleChange}
                    onBlur={formikRest.handleBlur}
                  />
                  <span
                    id="error-b"
                    className={`error-message-b ${formikRest.errors.zone && formikRest.touched.zone
                        ? "visible-b"
                        : "invisible-b"
                      }`}
                  >
                    {formikRest.errors.zone && formikRest.touched.zone
                      ? formikRest.errors.zone
                      : "none"}
                  </span>
                </div>

                <div>
                  <div
                    className={`select input-t-two input-style city ${formikRest.errors.city && formikRest.touched.city
                        ? " is-dark"
                        : "is-dark"
                      }`}
                    id="ciudad-div"
                  >
                    <select
                      className={` select-A city ${formikRest.errors.city && formikRest.touched.city
                          ? "is-danger country-error"
                          : ""
                        }`}
                      onChange={formikRest.handleChange}
                      id="city"
                    >
                      <option>Ciudad*</option>
                      {cities.map((city, index) => (
                        <option key={index}>{city.name}</option>
                      ))}
                    </select>
                  </div>
                  <span
                    id="error-a"
                    className={`error-message p ${formikRest.errors.city && formikRest.touched.city
                        ? "visible"
                        : ""
                      }`}
                  >
                    {formikRest.errors.city && formikRest.touched.city
                      ? formikRest.errors.city
                      : ""}
                  </span>
                </div>
              </div>

              <div className="fourth-line flex-line">
                <div className="text-area-div">
                  <textarea
                    id="description"
                    value={formikRest.values.description}
                    onChange={formikRest.handleChange}
                    onBlur={formikRest.handleBlur}
                    className={`text-area input-style ${formikRest.errors.description &&
                        formikRest.touched.description
                        ? "is-danger-text"
                        : ""
                      }`}
                    placeholder="Descripción (Máx. 500 caracteres.)"
                  ></textarea>
                  <span
                    id="error-b"
                    className={`error-message-b  area-error ${formikRest.errors.description &&
                        formikRest.touched.description
                        ? "visible-b"
                        : "invisible-b"
                      }`}
                  >
                    {formikRest.errors.description &&
                      formikRest.touched.description
                      ? formikRest.errors.description
                      : "none"}
                  </span>
                </div>

                <div className="price-div">
                  <input
                    className={`input input-style ${formikRest.errors.priceAvg && formikRest.touched.priceAvg
                        ? "is-danger"
                        : ""
                      }`}
                    type="number"
                    placeholder="Precio promedio*"
                    id="priceAvg"
                    value={formikRest.values.priceAvg}
                    onChange={formikRest.handleChange}
                    onBlur={formikRest.handleBlur}
                  />
                  <span
                    id="error-b"
                    className={`error-message-b ${formikRest.errors.priceAvg && formikRest.touched.priceAvg
                        ? "visible-b"
                        : "invisible-b"
                      }`}
                  >
                    {formikRest.errors.priceAvg && formikRest.touched.priceAvg
                      ? formikRest.errors.priceAvg
                      : "none"}
                  </span>
                </div>
              </div>

              <div className="flex-line ">
                {dynamicElements.length < 5 && (
                  <img
                    src={imagesFormRest.further}
                    alt=""
                    onClick={addDynamicElement}
                    className="hover-effect-add"
                  />
                )}
                <div className="dynamic-line">
                  {tables.map((table, index) => (
                    <div key={index} className="dynamic-inputs mt-2">
                      <input
                        className="input input-style quantity"
                        type="number"
                        placeholder="Can. de mesas*"
                        min="0"
                        max="30"
                        value={table.quantity}
                        onChange={(e) =>
                          handleTableQuantityChange(index, e.target.value)
                        }
                      />
                      <div className="select is-dark select-container">
                        <select
                          className="select-table"
                          value={table.type}
                          onChange={(e) =>
                            handleTableTypeChange(index, e.target.value)
                          }
                        >
                          <option>Tipo de mesa</option>
                          <option>Interior 2p</option>
                          <option>Interior 4p</option>
                          <option>Interior 6p</option>
                          <option>Exterior 2p</option>
                          <option>Exterior 4p</option>
                          <option>Exterior 6p</option>
                          <option>Familiar 6p</option>
                          <option>Interior Fiesta 12p</option>
                          <option>Exterior Fiesta 12p</option>
                        </select>
                      </div>
                      {dynamicElements.length > 1 && (
                        <img
                          className="hover-effect-remove"
                          src={imagesFormRest.less}
                          alt=""
                          onClick={() => removeDynamicElement(index)}
                        />
                      )}
                    </div>
                  ))}
                </div>
                <div className="file-div">
                  <input
                    type="file"
                    id="actual-btn"
                    hidden
                    onChange={(e) => {
                      formikRest.setFieldValue(
                        "images",
                        Array.from(e.target.files)
                      );
                    }}
                    multiple
                    accept=".png, .jpg, .jpeg"
                  />
                  <label htmlFor="actual-btn" className="actual-btn">
                    <img src={imagesFormRest.action} alt="" />
                    Galería
                  </label>
                  <span id="files-container">
                    {formikRest.values.images.length > 0 &&
                      formikRest.values.images.map((file) => (
                        <p className="files-name" key={file.name}>
                          {file.name} /
                        </p>
                      ))}
                  </span>
                  {formikRest.touched.images && formikRest.errors.images && (
                    <p className="error-message files-error">
                      {formikRest.errors.images}
                    </p>
                  )}
                </div>
              </div>
              {formikRest.touched.tables && formikRest.errors.tables && (
                <p className="error-message-b pi">
                  Por favor, verifique los datos ingresados.
                </p>
              )}
              <div className="flex-line sub">
                <p>Días y horarios disponibles</p>
              </div>
              <div className="date-line">
                {Object.keys(weekSchedule).map((day, index) => (
                  <div className="day" key={index}>
                    <p>{day.charAt(0).toUpperCase() + day.slice(1, 3) + "."}</p>
                    <img
                      src={
                        weekSchedule[day].habilitado
                          ? imagesFormRest.circledCheck
                          : imagesFormRest.circledPlus
                      }
                      alt=""
                      onClick={() => toggleDay(day)}
                    />
                    <div
                      className={`select is-dark select-container day-select ${weekSchedule[day].habilitado
                          ? ""
                          : "is-disabled disabled"
                        }`}
                    >
                      <select
                        className="select-table"
                        disabled={!weekSchedule[day].habilitado}
                        defaultValue={weekSchedule[day].desde} // Ajusta esta línea
                        onChange={(e) => handleFromChange(day, e.target.value)}
                      >
                        <option value="Desde" disabled>
                          Desde
                        </option>
                        {horas.map((hora, i) => (
                          <option key={i} value={hora}>
                            {hora}
                          </option>
                        ))}
                      </select>
                    </div>
                    <br />
                    <div
                      className={`select is-dark select-container day-select ${weekSchedule[day].habilitado
                          ? ""
                          : "is-disabled disabled"
                        }`}
                    >
                      <select
                        className="select-table"
                        disabled={!weekSchedule[day].habilitado}
                        defaultValue={weekSchedule[day].hasta} // Ajusta esta línea
                        onChange={(e) => handleToChange(day, e.target.value)}
                      >
                        <option value="Hasta" disabled>
                          Hasta
                        </option>
                        {horas.map((hora, i) => (
                          <option key={i} value={hora}>
                            {hora}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                ))}
              </div>
              <p className="error-message-b week-error">
                {scheduleError
                  ? "Por favor verifique los dias y horarios ingresados (minimo 1)"
                  : ""}
              </p>
              <div className="flex-line last-line" id="last-line">
                <button
                  className="custom-button"
                  type="submit"
                  onClick={formikRest.handleSubmit}


                >
                  Actualizar Restaurante
                </button>
              </div>
              <div className="close-button-r" onClick={closeModal()}>
                X
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantModal;

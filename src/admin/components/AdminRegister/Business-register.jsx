import { useState, useEffect } from "react";
import { useFormik, ErrorMessage } from "formik";
import imagesFormRest from "../../../constants/images-form-rest";
import * as yup from "yup";
import "./Business-register.css";
import "../../../assets/bulma.css";
import "./Admin.css";
import { useNavigate } from "react-router-dom";

const BusinessRegister = () => {
  const [isSectionAVisible, setIsSectionAVisible] = useState(true);
  const [isSectionBVisible, setIsSectionBVisible] = useState(false);
  const [isBodyStyled, setIsBodyStyled] = useState(false);
  const [dynamicElements, setDynamicElements] = useState([{}]);
  const [countries, setCountries] = useState([]);
  const navigate = useNavigate();
  const [modalVisible, setModalVisible] = useState(false);



  const openModal = () => {
    console.log(formikRest.errors.weekSchedule);
    console.log(weekSchedule);
    setModalVisible(true);
  };

  const closeModal = () => {

    setModalVisible(false);
  };

  const irAdmin = () => {
    navigate("/admin/admin-panel");
  }; // la redirecion a a admin
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const showSectionA = () => {
    setIsSectionAVisible(true);
    setIsSectionBVisible(false);
    setIsBodyStyled(false);
  };

  const showSectionB = () => {



  };

  const goBack = () => {
    setIsSectionAVisible(true);
    setIsSectionBVisible(false);
    setIsBodyStyled(false);
  };

  const terms =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis esse reprehenderit modi quos reiciendis dolorem culpa, excepturi facere eos sed! Quia, commodi. Quae accusantium quas iure dolor iste veniam dignissimos. -Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis esse reprehenderit modi quos reiciendis dolorem culpa, excepturi facere eos sed! Quia, commodi. Quae accusantium quas iure dolor iste veniam dignissimos. -Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis esse reprehenderit modi quos reiciendis dolorem culpa, excepturi facere eos sed! Quia, commodi. Quae accusantium quas iure dolor iste veniam dignissimos. -Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis esse reprehenderit modi quos reiciendis dolorem culpa, excepturi facere eos sed! Quia, commodi. Quae accusantium quas iure dolor iste veniam dignissimos. -Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis esse reprehenderit modi quos reiciendis dolorem culpa, excepturi facere eos sed! Quia, commodi. Quae accusantium quas iure dolor iste veniam dignissimos.";

  const food_styles = [
    "China",
    "Carnes",
    "Italiana",
    "Mejicana",
    "Mariscos",
    "Cafe",
    "Turca",
    "Peruana",
  ];
  const categories = ["Wifi", "Musica en vivo", "Terraza", "Estacionamiento"];

  const horas = [
    "04:00 am",
    "05:00 am",
    "06:00 am",
    "08:00 am",
    "09:00 am",
    "10:00 am",
    "11:00 am",
    "12:00 pm",
    "01:00 pm",
    "02:00 pm",
    "03:00 pm",
    "04:00 pm",
    "05:00 pm",
    "06:00 pm",
    "07:00 pm",
    "08:00 pm",
    "09:00 pm",
    "10:00 pm",
    "11:00 pm",
    "12:00 pm",
  ];


  const validateSchedule = (weekSchedule) => {
    const hasEnabledDay = Object.values(weekSchedule).some((day) => day.habilitado);
  
    if (!hasEnabledDay) {
      return "Seleccione al menos un día habilitado";
    }
  
    const invalidDays = Object.entries(weekSchedule).filter(
      ([day, data]) => data.habilitado && (data.desde === "Desde" || data.hasta === "Hasta")
    );
  
    return invalidDays.length > 0
      ? "Seleccione el horario para todos los días habilitados"
      : null;
  };
  

  const isEmailAvailable = async (email) => {
    // Simulación de la función fetch
    const response = await fetch(`URL_DE_TU_API/email-disponible/${email}`);
    const data = await response.json();
    return data.available; // Supongamos que el servidor devuelve si el email está disponible o no
  };

  const adminSchema = yup.object().shape({
    correElectronico: yup
      .string()
      .email("Por favor ingrese un email válido.")
      .required("Este campo es obligatorio"),
    nombreTitular: yup
      .string("Por favor ingrese un nombre válido.")
      .required("Este campo es obligatorio"),
    provincia: yup
      .string("Por favor ingrese una provincia válida.")
      .required("Este campo es obligatorio"),
    colaborador: yup
      .string("Por favor ingrese un nombre válido.")
      .required("Este campo es obligatorio"),
    pais: yup
      .string()
      .required("Por favor seleccione un pais.")
      .notOneOf(["Pais*"], "Este campo es obligatorio."),
    fileSelect: yup.mixed().required("Por favor seleccione un logo."),
    password: yup.string()
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .required('La contraseña es requerida'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Las contraseñas deben coincidir')
    .required('La confirmación de la contraseña es requerida'),
  });

  const onSubmit = async () => {
    setIsSectionAVisible(false);
    setIsSectionBVisible(true);
    setIsBodyStyled(true);
  };

  const onSubmitRest = async (values, actions) => {
    // Realiza la validación del horario
    const scheduleError = validateSchedule(weekSchedule);
  
    // Si el horario no es válido, detén la ejecución
    if (scheduleError) {
      console.log(weekSchedule);
      console.log("Invalido");
      actions.setSubmitting(false); // Esto es importante para desbloquear el formulario
      // Puedes manejar la lógica adicional, por ejemplo, setScheduleError(scheduleError);
      return;
    }
  
    const postData = {
      "name": formik.values.nombreTitular,
      "lastname": formik.values.nombreTitular,
      "email": formik.values.correElectronico,
      "password": "123admin",
      "roles": "ROLE_ADMIN"
    };

    const adminData = {
      "username": formik.values.nombreTitular,
      "password": "123admin"
    }

    const restData = {
      "name": formikRest.values.restName,
      "description": formikRest.values.description,
      "short_description": formikRest.values.description,
      "address": formikRest.values.address,
      "phone": "+549323321234",
      "zone_street": formikRest.values.zone,
      "rating": 4.5,
      "dayDisponibility": [
        {
          "dayOfWeek": "MONDAY",
          "open": weekSchedule.lunes.habilitado,
          "openHour": weekSchedule.lunes.desde,
          "closeHour": weekSchedule.lunes.hasta
        },
        {
          "dayOfWeek": "TUESDAY",
          "open": weekSchedule.martes.habilitado,
          "openHour": weekSchedule.martes.desde,
          "closeHour": weekSchedule.martes.hasta
        },
        {
          "dayOfWeek": "WEDNESDAY",
          "open": weekSchedule.miércoles.habilitado,
          "openHour": weekSchedule.miércoles.desde,
          "closeHour": weekSchedule.miércoles.hasta
        },
        {
          "dayOfWeek": "THURSDAY",
          "open": weekSchedule.jueves.habilitado,
          "openHour": weekSchedule.jueves.desde,
          "closeHour":weekSchedule.jueves.hasta
        },
        {
          "dayOfWeek": "FRIDAY",
          "open": weekSchedule.viernes.habilitado,
          "openHour": weekSchedule.viernes.desde,
          "closeHour": weekSchedule.viernes.hasta
        },
        {
          "dayOfWeek": "SATURDAY",
          "open": weekSchedule.sábado.habilitado,
          "openHour": weekSchedule.sábado.desde,
          "closeHour": weekSchedule.sábado.hasta
        },
        {
          "dayOfWeek": "SUNDAY",
          "open": weekSchedule.domingo.habilitado,
          "openHour": weekSchedule.domingo.desde,
          "closeHour": weekSchedule.domingo.hasta
        }
      ],
      "parking": true,
      "live_music": true,
      "events": true,
      "terrace": false,
      "active": true,
      "area": "10 m2",
      "average_score": 4.5,
      "latitude": "prueba1",
      "longitude": "Prueba2",
      "cancellation_policy": "soy una prueba de políticas de cancelación",
      "hse_policy": "hse_policies prueba",
      "site_policy": "site_policies prueba",
      "email": formik.values.correElectronico,
      "category": {
        "category": 1,
        "name": "Comida de Mar",
        "description": "soy una categoria",
        "short_description": "aksjdaksljd",
        "food_type": "Mesa 1",
        "image": null
      },
      "city_id": 1,
      "image": "imagenescrucks"
    };
    
    try {
      // Step 1: Create admin
      const adminResponse = await fetch("http://localhost:8080/auth/addNewUser", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });
  
      if (!adminResponse.ok) {
        throw new Error("Network response was not ok on admin");
      }
      
      // Step 2: Generate token
      const tokenResponse = await fetch("http://localhost:8080/auth/generateToken", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(adminData),
      });
  
      if (!tokenResponse.ok) {
        throw new Error(`Network response was not ok on token: ${tokenResponse.statusText}`);
      }
  
      const tokenDataResponse = await tokenResponse.text();
  
      console.log('Token Response:', tokenDataResponse);
  
      // Step 3: Create restaurant
      const restaurantResponse = await fetch("http://localhost:8080/v1/api/restaurants/create", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${tokenDataResponse}`,
        },
        body: JSON.stringify(restData),
      });
  
      if (!restaurantResponse.ok) {
        throw new Error(`Network response was not ok on create rest: ${restaurantResponse.statusText}`);
      }
  
      console.log('Success restaurant:', await restaurantResponse.json());
      irAdmin();
    } catch (error) {
      console.error('Error:', error);
    }
  };




  

  const formik = useFormik({
    initialValues: {
      nombreTitular: "",
      correElectronico: "",
      provincia: "",
      colaborador: "",
      pais: "",
      fileSelect: null,
      password: "",
      confirmPassword:""
    },
    validationSchema: adminSchema,
    onSubmit: onSubmit,
  });

  //BUSINESS

  const [selectedFile, setSelectedFile] = useState(null);

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

  const daySchema = yup.object().shape({
    habilitado: yup.boolean(),
    desde: yup.string().when('habilitado', {
      is: true,
      then: yup.string().required('Por favor seleccione una hora de inicio para el día habilitado'),
    }),
    hasta: yup.string().when('habilitado', {
      is: true,
      then: yup.string().required('Por favor seleccione una hora de finalización para el día habilitado'),
    }),
  });
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
  // -------------------------------------------------------------------------------------
  //--------------------------------------------------------------------------------------

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

  const horarios = Object.keys(weekSchedule).map((dia) => ({
    habilitado: weekSchedule[dia].habilitado,
    desde: weekSchedule[dia].desde,
    hasta: weekSchedule[dia].hasta,
  }));

  const mensaje = `Días y horarios disponibles:\n${Object.keys(weekSchedule)
    .map((day, index) => {
      const data = weekSchedule[day];
      return `${day.charAt(0).toUpperCase() + day.slice(1, 3)}: ${
        data.habilitado ? "Habilitado" : "No habilitado"
      }, Desde: ${data.desde || "No especificado"}, Hasta: ${
        data.hasta || "No especificado"
      }`;
    })
    .join("\n")}\n\nMesas:\n${tables
    .map((table, index) => {
      return `Mesa ${index + 1}: Cantidad: ${table.quantity}, Tipo: ${
        table.type || "No especificado"
      }`;
    })
    .join("\n ")}`;

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const addDynamicElement = () => {
    if (dynamicElements.length < 5) {
      setDynamicElements([...dynamicElements, {}]);
      setTables((prevTables) => [...prevTables, { quantity: 0, type: "" }]);
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

  return (
    <>
      <section
        className={`background-image-A ${isSectionAVisible ? "" : "invisible"}`}
      >
        <div className="flex-container-A">
          <div className="card-form-A">
            <div className="card-form-container-A">
              <div className="first-line-A">
                <img src={imagesFormRest.logo} alt="" />
                <p>Registrar Administrador</p>
              </div>
              <div className="inputs-container">
                <div className="first-column-inputs">
                  <div>
                    <input
                      className={`input ${
                        formik.errors.nombreTitular &&
                        formik.touched.nombreTitular
                          ? "is-danger"
                          : ""
                      }`}
                      type="text"
                      id="nombreTitular"
                      placeholder="Nombre del titular*"
                      value={formik.values.nombreTitular}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    ></input>
                    <span
                      id="error-a"
                      className={`error-message ${
                        formik.errors.nombreTitular &&
                        formik.touched.nombreTitular
                          ? "visible"
                          : ""
                      }`}
                    >
                      {formik.errors.nombreTitular &&
                      formik.touched.nombreTitular
                        ? formik.errors.nombreTitular
                        : ""}
                    </span>
                  </div>
                  <div>
                    <input
                      id="correElectronico"
                      class={`input ${
                        formik.errors.correElectronico &&
                        formik.touched.correElectronico
                          ? "is-danger"
                          : ""
                      }`}
                      type="text"
                      placeholder="Correo electrónico*"
                      value={formik.values.correElectronico}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    ></input>
                    <span
                      id="error-a"
                      className={`error-message ${
                        formik.errors.correElectronico &&
                        formik.touched.correElectronico
                          ? "visible"
                          : ""
                      }`}
                    >
                      {formik.errors.correElectronico &&
                      formik.touched.correElectronico
                        ? formik.errors.correElectronico
                        : ""}
                    </span>
                  </div>
                  <div>
                    <input
                      id="provincia"
                      class={`input ${
                        formik.errors.provincia && formik.touched.provincia
                          ? "is-danger"
                          : ""
                      }`}
                      type="text"
                      placeholder="Departamento/Provincia*"
                      value={formik.values.provincia}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    ></input>
                    <span
                      id="error-a"
                      className={`error-message ${
                        formik.errors.provincia && formik.touched.provincia
                          ? "visible"
                          : ""
                      }`}
                    >
                      {formik.errors.provincia && formik.touched.provincia
                        ? formik.errors.provincia
                        : ""}
                    </span>
                  </div>
                  
                  <div>
                    <input
                      id="password"
                      className={`input ${
                        formik.errors.password && formik.touched.password
                          ? "is-danger"
                          : ""
                      }`}
                      type="password"
                      placeholder="Contraseña"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    ></input>
                    <span
                      id="error-a"
                      className={`error-message ${
                        formik.errors.password && formik.touched.password
                          ? "visible"
                          : ""
                      }`}
                    >
                      {formik.errors.password && formik.touched.password
                        ? formik.errors.password
                        : ""}
                    </span>
                  </div>




                </div>

                <div className="second-column-inputs">
                  <div>
                    <input
                      id="colaborador"
                      className={`input ${
                        formik.errors.colaborador && formik.touched.colaborador
                          ? "is-danger"
                          : ""
                      }`}
                      type="text"
                      placeholder="Nombre del colaborador*"
                      value={formik.values.colaborador}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    ></input>
                    <span
                      id="error-a"
                      className={`error-message ${
                        formik.errors.colaborador && formik.touched.colaborador
                          ? "visible"
                          : ""
                      }`}
                    >
                      {formik.errors.colaborador && formik.touched.colaborador
                        ? formik.errors.colaborador
                        : ""}
                    </span>
                  </div>

                  <div>
                    <div
                      className={`select select-div-A  is-rounded ${
                        formik.errors.pais && formik.touched.pais
                          ? "is-danger "
                          : "is-dark"
                      }`}
                    >
                      <select
                        className={`country-select select-A  ${
                          formik.errors.pais && formik.touched.pais
                            ? "is-danger country-error"
                            : ""
                        }`}
                        onChange={formik.handleChange}
                        id="pais"
                      >
                        <option>Pais*</option>
                        {countries.map((country, index) => (
                          <option key={index}>{country.name.common}</option>
                        ))}
                      </select>
                    </div>
                    <span
                      id="error-a"
                      className={`error-message p ${
                        formik.errors.pais && formik.touched.pais
                          ? "visible"
                          : ""
                      }`}
                    >
                      {formik.errors.pais && formik.touched.pais
                        ? formik.errors.pais
                        : ""}
                    </span>
                  </div>

                  <div className="file-div-A">
                    <input
                      type="file"
                      id="fileSelect"
                      hidden
                      multiple
                      onChange={(e) => {
                        formik.setFieldValue(
                          "fileSelect",
                          e.currentTarget.files[0]
                        );
                      }}
                    />
                    <label htmlFor="fileSelect"  className="fileSelect" >
                      <img src={imagesFormRest.action} alt="" />
                      Logo Restaurante
                    </label>
                    <span id="file-chosen-A">
                      {formik.values.fileSelect
                        ? formik.values.fileSelect.name
                        : ""}
                    </span>

                    <span
                      id="error-a"
                      className={`error-message f ${
                        formik.errors.fileSelect && formik.touched.fileSelect
                          ? "visible"
                          : ""
                      }`}
                    >
                      {formik.errors.fileSelect && formik.touched.fileSelect
                        ? formik.errors.fileSelect
                        : ""}
                    </span>
                  </div>

                  <div>
                    <input
                      id="confirmPassword"
                      className={`input ${
                        formik.errors.confirmPassword && formik.touched.confirmPassword
                          ? "is-danger"
                          : ""
                      }`}
                      type="password"
                      placeholder="Repetir contraseña"
                      value={formik.values.confirmPassword}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    ></input>
                    <span
                      id="error-a"
                      className={`error-message ${
                        formik.errors.confirmPassword && formik.touched.confirmPassword
                          ? "visible"
                          : ""
                      }`}
                    >
                      {formik.errors.confirmPassword && formik.touched.confirmPassword
                        ? formik.errors.confirmPassword
                        : ""}
                    </span>
                  </div>








                </div>
              </div>
              <div className="last-line-A">
                <div className="next" onClick={formik.handleSubmit}>
                  <h4 className="next-text hover">siguiente</h4>
                  <img
                    src={imagesFormRest.ChevronLeftLigth}
                    alt=""
                    className="hover next-button"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*--------------------------------------------------------------------------------------------------------*/}

      <section
        className={`background-image-B ${isSectionBVisible ? "" : "invisible"}`}
      >
        <div className="background-image">
          <div className="flex-container">
            <div className="card-form">
              <div className="first-line flex-line logo-line">
                <img src={imagesFormRest.logo} alt="" />
                <p>Datos del Restaurante</p>
              </div>
              <div className="second-line flex-line">
                <div className="div-input">
                  <input
                    className={`input input-style second-line-input ${
                      formikRest.errors.restName && formikRest.touched.restName
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
                    className={`error-message-b ${
                      formikRest.errors.restName && formikRest.touched.restName
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
                        className={`button input-style drop-hover second-line-button ${
                          formikRest.errors.foodStyles &&
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
                            className={`dropdown-item ${
                              formikRest.values.foodStyles.includes(style)
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
                    className={`error-message-b${
                      formikRest.errors.foodStyles &&
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
                        className={`button input-style drop-hover second-line-button ${
                          formikRest.errors.categories &&
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
                            className={`dropdown-item ${
                              formikRest.values.categories.includes(category)
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
                    className={`error-message-b${
                      formikRest.errors.categories &&
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
                    className={`input input-style input-t ${
                      formikRest.errors.address && formikRest.touched.address
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
                    className={`error-message-b ${
                      formikRest.errors.address && formikRest.touched.address
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
                    className={`input input-style input-t-two ${
                      formikRest.errors.zone && formikRest.touched.zone
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
                    className={`error-message-b ${
                      formikRest.errors.zone && formikRest.touched.zone
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
                  <input
                    className={`input input-style input-t-two ${
                      formikRest.errors.city && formikRest.touched.city
                        ? "is-danger"
                        : ""
                    }`}
                    type="text"
                    placeholder="Ciudad*"
                    id="city"
                    value={formikRest.values.city}
                    onChange={formikRest.handleChange}
                    onBlur={formikRest.handleBlur}
                  />
                  <span
                    id="error-b"
                    className={`error-message-b ${
                      formikRest.errors.city && formikRest.touched.city
                        ? "visible-b"
                        : "invisible-b"
                    }`}
                  >
                    {formikRest.errors.city && formikRest.touched.city
                      ? formikRest.errors.city
                      : "none"}
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
                    className={`text-area input-style ${
                      formikRest.errors.description &&
                      formikRest.touched.description
                        ? "is-danger-text"
                        : ""
                    }`}
                    placeholder="Descripción (Máx. 500 caracteres.)"
                  ></textarea>
                  <span
                    id="error-b"
                    className={`error-message-b  area-error ${
                      formikRest.errors.description &&
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
                    className={`input input-style ${
                      formikRest.errors.priceAvg && formikRest.touched.priceAvg
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
                    className={`error-message-b ${
                      formikRest.errors.priceAvg && formikRest.touched.priceAvg
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
                  {dynamicElements.map((element, index) => (
                    <div key={index} className="dynamic-inputs">
                      <input
                        className="input input-style quantity"
                        type="number"
                        placeholder="Can. de mesas*"
                        min="0"
                        max="30"
                        value={tables[index].quantity}
                        onChange={(e) =>
                          handleTableQuantityChange(index, e.target.value)
                        }
                      />
                      <div className="select is-dark select-container">
                        <select
                          className="select-table"
                          value={tables[index].type}
                          onChange={(e) =>
                            handleTableTypeChange(index, e.target.value)
                          }
                        >
                          <option>Tipo de mesa</option>
                          <option>Interior 2p</option>
                          <option>Interior 4p</option>
                          <option>Interior 6p</option>
                          <option>Interior +6p</option>
                          <option>Exterior 2p</option>
                          <option>Exterior 4p</option>
                          <option>Exterior 6p</option>
                          <option>Exterior +6p</option>
                          <option>Familiar 6p</option>
                          <option>Familiar +6p</option>
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
                    onChange={handleFileChange}
                  />
                  <label htmlFor="actual-btn" className="actual-btn">
                    <img src={imagesFormRest.action} alt="" />
                    Galería
                  </label>
                  <span id="file-chosen">
                    {selectedFile ? selectedFile.name : ""}
                  </span>
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
                      className={`select is-dark select-container day-select ${
                        weekSchedule[day].habilitado
                          ? ""
                          : "is-disabled disabled"
                      }`}
                    >
                      <select
                        className="select-table"
                        disabled={!weekSchedule[day].habilitado}
                        onChange={(e) => handleFromChange(day, e.target.value)}
                      >
                        <option>Desde</option>
                        {horas.map((hora, i) => (
                          <option key={i}>{hora}</option>
                        ))}
                      </select>
                    </div>
                    <br />
                    <div
                      className={`select is-dark select-container day-select ${
                        weekSchedule[day].habilitado
                          ? ""
                          : "is-disabled disabled"
                      }`}
                    >
                      <select
                        className="select-table"
                        disabled={!weekSchedule[day].habilitado}
                        onChange={(e) => handleToChange(day, e.target.value)}
                      >
                        <option>Hasta</option>
                        {horas.map((hora, i) => (
                          <option key={i}>{hora}</option>
                        ))}
                      </select>
                    </div>
                  
                  </div>
                ))}
 {formikRest.touched.weekSchedule && formikRest.errors.weekSchedule && (
  <p className="error-message-b pi">
    {formikRest.errors.weekSchedule}
  </p>
)}
              </div>
              <div className="flex-line last-line">
                <div className="next-B" onClick={goBack}>
                  <img
                    src={imagesFormRest.ChevronLeftLigth}
                    alt=""
                    className="hover next-button-B"
                  />
                  <h4 className="next-text hover">volver</h4>
                </div>
                <button
                  className={`custom-button ${
                    formikRest.values.terms ? "" : "disabled"
                  }`}
                  type="submit"
                  onClick={formikRest.handleSubmit}
                  // el cambio echo para redirecionar a admin
                  disabled={!formikRest.values.terms}
                >
                  Registrar Restaurante
                </button>
                <div>
                  <label className="terms checkbox">
                    <input
                      checked={formikRest.values.terms}
                      onChange={formikRest.handleChange}
                      type="checkbox"
                      id="terms"
                      className={`ckeck-box${
                        formikRest.errors.terms && formikRest.touched.terms
                          ? "red"
                          : ""
                      }`}
                    />
                  </label>
                        
                  <p className="terms" onClick={openModal}>
                    Politica de privacidad
                  </p>
                </div>
                {modalVisible && (
                  <div className="modal-overlay" onClick={closeModal}>
                    <div
                      className="modal-content"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="politics-title">
                        <h3 className="politic">Politica de privacidad</h3>
                      </div>
                      <div className="textsContainer">
                        <div className="">
                          <p>Pol. de cancelamiento</p>
                          <textarea
                            class="textarea has-fixed-size "
                            readOnly
                            placeholder={terms}
                          ></textarea>
                        </div>
                        <div>
                          <p>Pol. de reserva</p>
                          <textarea
                            class="textarea has-fixed-size "
                            readOnly
                            placeholder={terms}
                          ></textarea>
                        </div>
                        <div>
                          <p>Pol. de intereses</p>
                          <textarea
                            class="textarea has-fixed-size "
                            readOnly
                            placeholder={terms}
                          ></textarea>
                        </div>
                        <div>
                          <p>Pol. de colaborador</p>
                          <textarea
                            class="textarea has-fixed-size "
                            readOnly
                            placeholder={terms}
                          ></textarea>
                        </div>
                      </div>

                      <div className="close-button" onClick={closeModal}>
                        X
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BusinessRegister;

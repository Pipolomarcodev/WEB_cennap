import { useState, useEffect } from "react";
import { useFormik, ErrorMessage } from "formik";
import imagesFormRest from "../../../constants/images-form-rest";
import "../../../assets/bulma.css"
import * as yup from "yup";
import "./Business-register.css";
import "../../../assets/bulma.css";
import "./Admin.css";
import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const BusinessRegister = () => {
  const [isSectionAVisible, setIsSectionAVisible] = useState(true);
  const [isSectionBVisible, setIsSectionBVisible] = useState(false);
  const [isBodyStyled, setIsBodyStyled] = useState(false);
  const [dynamicElements, setDynamicElements] = useState([{}]);
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([])
  const navigate = useNavigate();
  const [modalVisible, setModalVisible] = useState(false);
  const [scheduleError, setscheduleError] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const { login,user } = useAuth();
const [loading, setLoading] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const irAdmin = () => {
   
    navigate("/home/:page");
  }; // la redirecion a a admin

  useEffect(() => {
    fetch("http://ec2-18-224-68-91.us-east-2.compute.amazonaws.com:8080/v1/api/countries")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);







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
  ]

  const showSectionA = () => {
    setIsSectionAVisible(true);
    setIsSectionBVisible(false);
    setIsBodyStyled(false);
  };

  const showSectionB = () => {};

  const goBack = () => {
    setIsSectionAVisible(true);
    setIsSectionBVisible(false);
    setIsBodyStyled(false);
  };

const userTerms = `TÉRMINOS Y CONDICIONES DE USUARUIOS CENAPP

Fecha de vigencia: [29/11/2023]

Introducción y Aceptación de Términos:

1.1 Al acceder y utilizar esta aplicación de reserva de restaurantes, usted acepta y se compromete a cumplir con los términos y condiciones establecidos en este documento.
1.2 Si no está de acuerdo con alguno de estos términos, le instamos a que por favor no utilice nuestra aplicación.
Reservas y Uso del Servicio:

2.1 Este servicio le permite realizar reservas en restaurantes afiliados a través de la aplicación.
2.2 Usted es responsable de proporcionar información precisa y actualizada al realizar una reserva.
2.3 En caso de que no haya disponibilidad en el horario solicitado, la aplicación le ofrecerá opciones alternativas o le notificará sobre la falta de disponibilidad. No nos hacemos responsables de la falta de reservas en el momento deseado.
Condiciones de Cancelación:

2.4 La aplicación no se responsabiliza si la reserva se cancela cuando queda menos de una hora para el horario reservado.
Privacidad y Seguridad:

3.1 La privacidad de sus datos es importante para nosotros. Consulte nuestra Política de Privacidad para obtener información detallada sobre cómo recopilamos, utilizamos y protegemos sus datos.
3.2 Al registrarse en la aplicación, usted otorga su consentimiento para que la empresa analice su comportamiento de consumo en cuanto a las reservas y los tipos de comida. Esta información no nominada puede ser utilizada para establecer estrategias comerciales internas y con intereses de terceros.
Responsabilidad y Limitación de Responsabilidad:

4.1 La aplicación no se hace responsable de la calidad de los servicios proporcionados por los restaurantes afiliados.
4.2 Usted comprende y acepta que la aplicación no será responsable por daños directos, indirectos, incidentales, especiales, emergentes o ejemplares.
`

const adminTerms = `TÉRMINOS Y CONDICIONES PARA DUEÑOS DE RESTAURANTES EN CENAPP

Fecha de vigencia: [29/11/2023]

Introducción y Aceptación de Términos:

1.1 Al registrar su restaurante en la aplicación de reserva de restaurantes CENAPP, usted acepta y se compromete a cumplir con los términos y condiciones establecidos en este documento.
1.2 Si no está de acuerdo con alguno de estos términos, le instamos a que no publique su restaurante ni ofrezca mesas a través de nuestra aplicación.

Publicación y Gestión de Reservas:

2.1 Al utilizar nuestros servicios, usted acepta permitir que los usuarios realicen reservas en su restaurante a través de la aplicación.
2.2 Usted es responsable de proporcionar información precisa y actualizada sobre la disponibilidad de mesas en su restaurante.
2.3 En caso de que no haya disponibilidad en el horario solicitado, se espera que usted informe a la aplicación en tiempo hábil y ofrezca soluciones alternativas siempre que sea posible.

Condiciones de Cancelación:

2.4 Usted comprende que la aplicación no se hace responsable si un usuario cancela una reserva cuando queda menos de una hora para el horario reservado.

Privacidad y Seguridad:

3.1 La privacidad y seguridad de los datos relacionados con su restaurante son fundamentales. Consulte nuestra Política de Privacidad para obtener información detallada sobre cómo recopilamos, utilizamos y protegemos esos datos.
3.2 Al participar en la aplicación, usted otorga su consentimiento para que la empresa analice las tendencias de reserva en su restaurante. La información no nominada puede ser utilizada para mejorar la eficiencia operativa y ayudar en estrategias de marketing.

Responsabilidad y Limitación de Responsabilidad:

4.1 Usted reconoce que la aplicación no es responsable de la calidad de los servicios proporcionados por su restaurante.
4.2 Usted comprende y acepta que la aplicación no será responsable por daños directos, indirectos, incidentales, especiales, emergentes o ejemplares relacionados con la participación de su restaurante en la plataforma.
`


    
  const categories = ["Wifi", "Musica en vivo", "Terraza", "Estacionamiento", "Eventos"];

  /*"category_restaurant": {
        "parking": true,
        "live_music": true,
        "events": true,
        "terrace": false,
        "wifi": true
    },*/

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

  const isEmailAvailable = async (email) => {
    try {
      const response = await fetch(
        `http://ec2-18-224-68-91.us-east-2.compute.amazonaws.com:8080/auth/check-email/${email}`
      );

      if (response.status === 200) {
        // El correo electrónico está disponible
        return true;
      } else if (response.status === 409) {
        // El correo electrónico no está disponible
        return false;
      } else {
        // Manejar otros códigos de estado según sea necesario
        console.error(`Error en la respuesta del servidor: ${response.status}`);
        return false;
      }
    } catch (error) {
      console.error(
        "Error al verificar la disponibilidad del correo electrónico:",
        error
      );
      return false;
    }
  };


  const isCategorySelected = (category) => {
    const selectedItems = formikRest.values.categories;
    return selectedItems.some((cat) => cat === category);
  };

  const prepareFoodTypes = () => {
    const foodStyles = formikRest.values.foodStyles;
    const foodTypesArray = foodStyles.map((foodStyle) => ({
      name: foodStyle,
      image: `imagen_${foodStyle}.jpg`, 
    }));
    return foodTypesArray;
  };



  function obtenerNumeroEnteroEntre1y5() {
    return Math.floor(Math.random() * 5) + 1;
  }

  const tableTypeMapping = [
    'Interior 2p',
    'Interior 4p',
    'Interior 6p',
    'Exterior 2p',
    'Exterior 4p',
    'Exterior 6p',
    'Familiar 6p',
    'Interior Fiesta 12p',
    'Exterior Fiesta 12p'
  ];
  
const mapTablesToSend = (tables) => {
  tables = formikRest.values.tables;
  return tables.map(({ quantity, type }) => {
    const match = type.match(/(\D+)(\d*)p/); 
    const tableType = match ? match[1] : '';
    const tableCapacity = match ? parseInt(match[2], 10) : 0;

    return {
      cuantity_table: parseInt(quantity, 10),
      table_capacity: tableCapacity,
      table_type: tableType,
    };
  });
};



  const getId = (wich) => {
    let id;
      if(wich == "country"){
        countries.map((country)=>{
            if(formik.values.pais == country.name){
              id = country.id_country
            }
        })
      }else{
        cities.map((city)=> {
            if(formikRest.values.city == city.name){
              id = city.id_city
            }
        })
      }
      return id;
  }




  const adminSchema = yup.object().shape({
    correElectronico: yup
      .string()
      .email("Por favor ingrese un email válido.")
      .required("Este campo es obligatorio")
      .test(
        "is-email-available",
        "Este correo electrónico ya está en uso.",
        async function (value) {
          if (this.parent) {
            // Llamar a la función isEmailAvailable solo al enviar el formulario
            const isAvailable = await isEmailAvailable(value);
            return isAvailable;
          }
          return true;
        }
      ),
    nombreTitular: yup
      .string("Por favor, ingrese un nombre válido.")
      .matches(/^[a-zA-Z]+$/, 'Por favor, ingrese un nombre válido.')
      .required("Este campo es obligatorio"),
    apellidoTitular: yup
      .string("Por favor, ingrese un apellido válido.")
      .matches(/^[a-zA-Z]+$/, 'Por favor, ingrese un apellido válido.')
      .required("Este campo es obligatorio"),
    tel: yup
      .string("Por favor, ingrese un numero válido.")
      .required("Este campo es obligatorio"),
    pais: yup
      .string()
      .required("Por favor, seleccione un país.")
      .notOneOf(["Pais*"], "Este campo es obligatorio."),
    fileSelect: yup.mixed().required("Por favor seleccione un logo."),
    password: yup
      .string()
      .min(6, "La contraseña debe tener al menos 6 caracteres")
      .required("La contraseña es requerida"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Las contraseñas deben coincidir")
      .required("La confirmación de la contraseña es requerida"),
  });
  

  const onSubmit = async (values) => {
    try {
      // Realiza la validación del formulario usando formik.validateForm
      await adminSchema.validate(values, { abortEarly: false });

      // Verificar disponibilidad de correo electrónico solo cuando se presiona "siguiente"
      const isAvailable = await isEmailAvailable(values.correElectronico);
      if (!isAvailable) {
        // Manejar el caso donde el correo electrónico no está disponible
        console.log("Este correo electrónico ya está en uso.");
        return;
      }


      let country_id;

        countries.map((country) => {
          if(country.name == formik.values.pais){
            country_id = country.id_country;
          }
        })

        console.log(country_id);

      fetch(`http://ec2-18-224-68-91.us-east-2.compute.amazonaws.com:8080/v1/api/countries/${country_id}/cities`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCities(data)
      })
      .catch((error) => {
        console.error(error)
      })


      setIsSectionAVisible(false);
      setIsSectionBVisible(true);
      setIsBodyStyled(true);
    } catch (validationErrors) {
      // Manejar errores de validación de Yup
      const formattedErrors = {};
      validationErrors.inner.forEach((error) => {
        formattedErrors[error.path] = error.message;
      });
      console.log("Hay errores en el formulario:", formattedErrors);
    }
  };




  const onSubmitRest2 = async (values) => {

    const postData = {
      name: formik.values.nombreTitular,
      lastname: formik.values.apellidoTitular,
      email: formik.values.correElectronico,
      password: formik.values.password,
      roles: "ROLE_ADMIN",
      id_city:1,
      id_country: getId("country")
    };

    const adminData = {
      username: formik.values.correElectronico,
      password: formik.values.password,
    };

    const restData = {
      name: formikRest.values.restName,
      description: formikRest.values.description,
      short_description: formikRest.values.description,
      address: formikRest.values.address,
      phone: formik.values.tel,
      zone_street: formikRest.values.zone,
      rating: obtenerNumeroEnteroEntre1y5(),
      dayDisponibility: [
        {
          dayOfWeek: "MONDAY",
          open: weekSchedule.lunes.habilitado,
          openHour: weekSchedule.lunes.desde,
          closeHour: weekSchedule.lunes.hasta,
        },
        {
          dayOfWeek: "TUESDAY",
          open: weekSchedule.martes.habilitado,
          openHour: weekSchedule.martes.desde,
          closeHour: weekSchedule.martes.hasta,
        },
        {
          dayOfWeek: "WEDNESDAY",
          open: weekSchedule.miércoles.habilitado,
          openHour: weekSchedule.miércoles.desde,
          closeHour: weekSchedule.miércoles.hasta,
        },
        {
          dayOfWeek: "THURSDAY",
          open: weekSchedule.jueves.habilitado,
          openHour: weekSchedule.jueves.desde,
          closeHour: weekSchedule.jueves.hasta,
        },
        {
          dayOfWeek: "FRIDAY",
          open: weekSchedule.viernes.habilitado,
          openHour: weekSchedule.viernes.desde,
          closeHour: weekSchedule.viernes.hasta,
        },
        {
          dayOfWeek: "SATURDAY",
          open: weekSchedule.sábado.habilitado,
          openHour: weekSchedule.sábado.desde,
          closeHour: weekSchedule.sábado.hasta,
        },
        {
          dayOfWeek: "SUNDAY",
          open: weekSchedule.domingo.habilitado,
          openHour: weekSchedule.domingo.desde,
          closeHour: weekSchedule.domingo.hasta,
        },
      ],
      category_restaurant: {
        parking: isCategorySelected("Estacionamiento"),
        live_music: isCategorySelected("Musica en vivo"),
        terrace: isCategorySelected("Terraza"),
        events: isCategorySelected("Eventos"),
        wifi: isCategorySelected("Wifi"),
    },
      active: true,
      area: "10 m2",
      average_score: obtenerNumeroEnteroEntre1y5(),
      latitude: "prueba1",
      longitude: "Prueba2",
      cancellation_policy: "soy una prueba de políticas de cancelación",
      hse_policy: "hse_policies prueba",
      site_policy: "site_policies prueba",
      email: formik.values.correElectronico,
      foodTypes: prepareFoodTypes(),
      city_id: getId("city"),
      restaurant_tables: mapTablesToSend(),
      logo: formik.values.fileSelect,
      images:formikRest.values.images
  }
    console.log(formikRest.values.tables);
    console.log(adminData);
    console.log(restData);
    console.log(postData);
  }

  const onSubmitRest = async (values, actions) => {


    setLoading(true)

    const scheduleError = validateSchedule(weekSchedule);
    setscheduleError(scheduleError);
    if (scheduleError) {
      console.log(weekSchedule);
      console.log("Invalido");
      actions.setSubmitting(false); 
      return;
    }

    const postData = {
      name: formik.values.nombreTitular,
      last_name: formik.values.apellidoTitular,
      email: formik.values.correElectronico,
      password: formik.values.password,
      roles: "ROLE_ADMIN",
      id_city:1,
      id_country: getId("country")
    };

    const adminData = {
      email: formik.values.correElectronico,
      password: formik.values.password,
    };

    const restData = {
      name: formikRest.values.restName,
      description: formikRest.values.description,
      short_description: formikRest.values.description,
      address: formikRest.values.address,
      phone: formik.values.tel,
      zone_street: formikRest.values.zone,
      rating: obtenerNumeroEnteroEntre1y5(),
      day_disponibility: [
        {
          day_of_week: "MONDAY",
          open: weekSchedule.lunes.habilitado,
          open_hour: weekSchedule.lunes.desde,
          close_hour: weekSchedule.lunes.hasta,
        },
        {
          day_of_week: "TUESDAY",
          open: weekSchedule.martes.habilitado,
          open_hour: weekSchedule.martes.desde,
          close_hour: weekSchedule.martes.hasta,
        },
        {
          day_of_week: "WEDNESDAY",
          open: weekSchedule.miércoles.habilitado,
          open_hour: weekSchedule.miércoles.desde,
          close_hour: weekSchedule.miércoles.hasta,
        },
        {
          day_of_week: "THURSDAY",
          open: weekSchedule.jueves.habilitado,
          open_hour: weekSchedule.jueves.desde,
          close_hour: weekSchedule.jueves.hasta,
        },
        {
          day_of_week: "FRIDAY",
          open: weekSchedule.viernes.habilitado,
          open_hour: weekSchedule.viernes.desde,
          close_hour: weekSchedule.viernes.hasta,
        },
        {
          day_of_week: "SATURDAY",
          open: weekSchedule.sábado.habilitado,
          open_hour: weekSchedule.sábado.desde,
          close_hour: weekSchedule.sábado.hasta,
        },
        {
          day_of_week: "SUNDAY",
          open: weekSchedule.domingo.habilitado,
          open_hour: weekSchedule.domingo.desde,
          close_hour: weekSchedule.domingo.hasta,
        },
      ],
      category_restaurant: {
        parking: isCategorySelected("Estacionamiento"),
        live_music: isCategorySelected("Musica en vivo"),
        terrace: isCategorySelected("Terraza"),
        events: isCategorySelected("Eventos"),
        wifi: isCategorySelected("Wifi"),
    },
      active: true,
      area: "10 m2",
      average_score: obtenerNumeroEnteroEntre1y5(),
      latitude: "prueba1",
      longitude: "Prueba2",
      cancellation_policy: "soy una prueba de políticas de cancelación",
      hse_policy: "hse_policies prueba",
      site_policy: "site_policies prueba",
      email: formik.values.correElectronico,
      foodTypes: prepareFoodTypes(),
      city_id: getId("city"),
      restaurant_tables: mapTablesToSend(),

  }

    try {
      const adminResponse = await fetch(
        "http://ec2-18-224-68-91.us-east-2.compute.amazonaws.com:8080/auth/addNewUser",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(postData),
        }
      );

      if (!adminResponse.ok) {
        throw new Error("Network response was not ok on admin");
      }

      console.log(adminData);

      // Step 2: Generate token
      const tokenResponse = await fetch(
        "http://ec2-18-224-68-91.us-east-2.compute.amazonaws.com:8080/auth/generateToken",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(adminData),
        }
      );

      if (!tokenResponse.ok) {
        throw new Error(
          `Network response was not ok on token: ${tokenResponse.statusText}`
        );
      }
      const tokenDataResponse = await tokenResponse.json();

      const token = tokenDataResponse.token;

      console.log("Token Response:", token);

      // Step 3: Create restaurant
      
      const restaurantResponse = await fetch(
        "http://ec2-18-224-68-91.us-east-2.compute.amazonaws.com:8080/v1/api/restaurants/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`, 
          },
          body: JSON.stringify(restData),
        }
      );

      if (!restaurantResponse.ok) {
        throw new Error(
          `Network response was not ok on create rest: ${restaurantResponse.statusText}`
        );
      }
    
      
    login(token);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const formik = useFormik({
    initialValues: {
      nombreTitular: "",
      apellidoTitular:"",
      correElectronico: "",
      tel: "",
      pais: "",
      fileSelect: null,
      password: "",
      confirmPassword: "",
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
      .string()
      .required("Campo obligatorio")
      .notOneOf(["Ciudad*"], "Campo obligatorio."),
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

  const handleFileChange = (e) => {
    const files = e.target.files;
    setSelectedFiles(Array.from(files));
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
                      id="tel"
                      class={`input ${
                        formik.errors.tel && formik.touched.tel
                          ? "is-danger"
                          : ""
                      }`}
                      type="number"
                      placeholder="Numero de telefono*"
                      value={formik.values.tel}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    ></input>
                    <span
                      id="error-a"
                      className={`error-message ${
                        formik.errors.tel && formik.touched.tel
                          ? "visible"
                          : ""
                      }`}
                    >
                      {formik.errors.tel && formik.touched.tel
                        ? formik.errors.tel
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
                      id="apellidoTitular"
                      className={`input  ${
                        formik.errors.apellidoTitular && formik.touched.apellidoTitular
                          ? "is-danger"
                          : ""
                      }`}
                      type="text"
                      placeholder="Apellido del titular*"
                      value={formik.values.apellidoTitular}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    ></input>
                    <span
                      id="error-a"
                      className={`error-message ${
                        formik.errors.apellidoTitular && formik.touched.apellidoTitular
                          ? "visible"
                          : ""
                      }`}
                    >
                      {formik.errors.apellidoTitular && formik.touched.apellidoTitular
                        ? formik.errors.apellidoTitular
                        : ""}
                    </span>
                  </div>

                  <div>
                    <div
                      className={`select select-div-A  is-rounded ${
                        formik.errors.pais && formik.touched.pais
                          ? " is-dark"
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
                          <option key={index}>{country.name}</option>
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
                    <label htmlFor="fileSelect" className="fileSelect">
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
                        formik.errors.confirmPassword &&
                        formik.touched.confirmPassword
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
                        formik.errors.confirmPassword &&
                        formik.touched.confirmPassword
                          ? "visible"
                          : ""
                      }`}
                    >
                      {formik.errors.confirmPassword &&
                      formik.touched.confirmPassword
                        ? formik.errors.confirmPassword
                        : ""}
                    </span>
                  </div>
                </div>
              </div>
              <div className="last-line-A">
                <div className="next" onClick={formik.handleSubmit}>
                  {formik.isSubmitting ? (
                    <span className="loader"></span>
                  ) : (
                    <>
                      <h4 className="next-text hover">siguiente</h4>
                      <img
                        src={imagesFormRest.ChevronLeftLigth}
                        alt=""
                        className="hover next-button"
                      />
                    </>
                  )}
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
                    placeholder="Ciudad"
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
                    <div
                      className={`select input-t-two input-style city ${
                        formikRest.errors.city && formikRest.touched.city
                          ? " is-dark"
                          : "is-dark"
                      }`}
                      id="ciudad-div"
                    >
                      <select
                        className={` select-A city ${
                          formikRest.errors.city && formikRest.touched.city
                            ? "is-danger country-error"
                            : ""
                        }`}
                        onChange={formikRest.handleChange}
                        id="city"
                      >
                        <option>Provincia/Depart.*</option>
                        {cities.map((city, index) => (
                          <option key={index}>{city.name}</option>
                        ))}
                      </select>
                    </div>
                    <span
                      id="error-a"
                      className={`error-message p ${
                        formikRest.errors.city && formikRest.touched.city
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
              </div>
              <p className="error-message-b week-error">
                {scheduleError
                  ? "Por favor verifique los dias y horarios ingresados (minimo 1)"
                  : ""}
              </p>
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
  className={`custom-button${
    formikRest.values.terms ? "" : " disabled"
  }${formikRest.isSubmitting ? " is-loading" : ""}`}
  type="submit"
  onClick={formikRest.handleSubmit}
  // Cambio hecho para redirigir a admin
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
                        <h3 className="politic">Términos y condiciones</h3>
                      </div>
                      <div className="textsContainer">
                        <div className="">
                          <p>Pol. de usuario.</p>
                          <textarea
                            class="textarea has-fixed-size "
                            readOnly
                            placeholder={userTerms}
                          ></textarea>
                        </div>
                        <div>
                          <p>Pol. de dueños de rest.</p>
                          <textarea
                            class="textarea has-fixed-size "
                            readOnly
                            placeholder={adminTerms}
                          ></textarea>
                        </div>
                        <div>
                          <p>Pol. de intereses</p>
                          <textarea
                            class="textarea has-fixed-size "
                            readOnly
                            placeholder={userTerms}
                          ></textarea>
                        </div>
                        <div>
                          <p>Pol. de colaborador</p>
                          <textarea
                            class="textarea has-fixed-size "
                            readOnly
                            placeholder={adminTerms}
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

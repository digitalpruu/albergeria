const title = "Alberjería";
const email = "florentinoverduras@gmail.com";
const mensajeWhatsApp = encodeURIComponent(
    "¡Hola! Estoy interesado en conocer más sobre los productos de " + title + " y me gustaría obtener más información. ¡Gracias!"
);
const numeroWhatsApp = "+573213056787";

const textos = {
    index: {
        title: title,
    },
    homeContent: {
        title: title,
    },
    about: {
        description1: "En Alberjería, nos dedicamos a ofrecer una variedad de productos frescos como lichigo, tomate, frijol, arveja, entre otros. Nuestro compromiso es brindar la mejor calidad y frescura en cada producto que ofrecemos.",
        description2: "Conocidos como 'El Viejito Alverjero', trabajamos con dedicación para que cada cliente reciba un servicio excepcional y productos de primera calidad. Ven y descubre nuestra oferta única de verduras."
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email,
    },
    footer: {
        slogan: {
            p1: "El Viejito Alverjero.",
            p2: ""
        },
        address: "", // Información no proporcionada
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/profile.php?id=61566424412042",
        instagram: "www.instagram.com", // Instagram no proporcionado
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
    },
};

export default textos;

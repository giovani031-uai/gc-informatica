export const storeConfig = {
  name: "GC Informática",
  tagline: "Tecnologia com curadoria de verdade",
  whatsapp: {
    number: "5531991020519", // formato: código do país + DDD + número, sem espaços ou símbolos
    defaultMessage: (productName?: string) =>
      productName
        ? `Olá! Tenho interesse no produto ${productName}.`
        : "Olá! Vim pelo site e gostaria de tirar uma dúvida.",
  },
  social: {
    instagram: "https://instagram.com/",
  },
  contactEmail: "contato@gcinformatica.com.br",
};

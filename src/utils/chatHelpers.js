// Función para decidir qué agentes deben responder según el mensaje
export const getAgentsForMessage = (message) => {
  // Por simplicidad, por ahora todos los agentes siempre responden
  return ["RelacionesPublicas", "Ventas", "Tecnico", "SEO"];
  
  // Más adelante puedes personalizar:
  // if(message.includes("SEO")) return ["SEO"];
  // if(message.includes("problema")) return ["Tecnico"];
};

import BotWhatsapp from '@bot-whatsapp/bot';

/**
 * Un flujo conversacion que responder a las palabras claves "hola", "buenas", ...
 */
export default BotWhatsapp.addKeyword(['hola', 'buenas', 'holi', 'hey', 'hi', 'hey' ])
    .addAnswer('Hola, este es el bot de qpase.com 😀')
    .addAnswer('Me puedes consultar por los espectáculos, bandas y fechas que tenemos disponibles.')
    .addAnswer('Cuando elijas tu banda preferida y una fecha, podrás comprar tu entrada usando tu medio de pago favorito')


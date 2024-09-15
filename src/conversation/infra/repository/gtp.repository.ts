import { Configuration, OpenAIApi } from "openai";
import { ChatInterface } from "../../domain/chat.interface";
import { ConversationRepository } from "../../domain/conversation.repository";

require("dotenv").config();
const configCharacter: any = {
  extraterrestre: {
    content: `
    Eres un zombie que viene a converser a los vivos 
    que vayan a tu evento de rap que se realizara el 05 de octubre del 2024,
    debes reponder como si fueras un zombie un poco torpe y envidoso de los vivos,
    intenta hacer lo posible para comerte el cerebro del que esta conversando contigo,
    las respuestas no deben superar los 400 caracteres,
    el idioma es español neutro no español de españa,
    esta es la informacion que tienes que saber:
   
    evento de rap el 05 de octubre en la cerveceria san martin 
direccion regidor lozano 353 

host o animador : soteka
DJ: BILOBA

artistas invitados : La organizacion, Malta record, Satrone, Lanzaralla, Nefas, Mochila cervecera, Pablunt, Negrolo,
Anonymos klan, Lautaro , Yiyo y Vincitore.

Entrada preventa: 2000 pesos
Entrada en puerta: 3000 pesos
Entrada promocion: 2 x 5000 pesos
horario: desde las 19:00.

restricciones: se prohibe el ingreso de alcohol.

la entrada o preventa se compra online en el siguiente link : https://www.flow.cl/btn.php?token=y40cbf8a7b9236f02dfdd7bdea6a9053878c8df0
cupos disponibles: 50

instagram oficial : https://www.instagram.com/rapducciozombieinvasion



    `,
    promp: "",
  },
};

export class GTPRepository implements ConversationRepository {
  configuration = new Configuration({
    organization: process.env.ORGANIZATION,
    apiKey: process.env.OPENAI_API_KEY,
  });
  openai = new OpenAIApi(this.configuration);
  async GenerateConversation(chat: ChatInterface): Promise<any> {
    const characterSelected: any = configCharacter['extraterrestre'];
    console.log(characterSelected)
    const initialChat = [{"role": "assistant", "content": characterSelected.content}]
    const chats: any = initialChat.concat(chat)
    console.log("chat user",chat)
    console.log("chats",chats)
    const response = await this.openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: chats
    });
    return response.data.choices[0];
  }
}

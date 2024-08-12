import { Configuration, OpenAIApi } from "openai";
import { ChatInterface } from "../../domain/chat.interface";
import { ConversationRepository } from "../../domain/conversation.repository";

require("dotenv").config();
const configCharacter: any = {
  extraterrestre: {
    content: `
    Eres un extraterrestre que viene a converser a los humanos que vayan a tu evento de rap que se realizara el 24 de agosto del 2024, debes reponder como si fueras un extraterrestre
    con un tono de superioridad y un lenguaje de tono burlesco, las respuestas no deben superar los 400 caracteres,
    esta es la informacion que tienes que saber:
   
    evento de rap el 24 de agosto en la cerveceria san martin 
direccion regidor lozano 353 

host o animador : soteka
DJ: BILOBA

artistas invitados : bonnesarte y keko, ATS, ALL done y angie, General Blopas, pablunt,
N.D.A, mc bilo , nefas, perrobestial, hache doble ele, negrolo, mcstavez, jota dari

entrada: 2000 (pesos chilenos)
horario: desde las 17:00 hasta las 12:00

restricciones: se prohibe el ingreso de alcohol.

la entrada se compra online en el siguiente link : https://www.flow.cl/btn.php?token=oidwcpd
cupos disponibles: 50

instagram oficial : rapduccionisback



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

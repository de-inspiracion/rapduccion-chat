import { Request, Response } from "express";
import { ConversationUseCase } from "../../application/conversationUseCase";
import { Character } from "../../domain/character.enum";

export class ConversationController {
  constructor(private conversationUseCase: ConversationUseCase) {}

  getController = async (request: Request, response: Response) => {
    const { chat }  = request.body;
    try {
      console.log(chat)
      const result = await this.conversationUseCase.generateConversation(
        chat
      );
      response.send({
        payload: result,
      });
    } catch (error) {
      console.log(error);
      return response.status(500).send({
        error: "Error al generar conversacion",
      });
    }
  };
}

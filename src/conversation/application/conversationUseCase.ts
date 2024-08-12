import { Character } from "../domain/character.enum";
import { ConversationRepository } from "../domain/conversation.repository";

export class ConversationUseCase {
  constructor(private readonly conversationRepository: ConversationRepository) {

  }
  public async generateConversation(text: any) {
    return await this.conversationRepository.GenerateConversation(text)
  }
}
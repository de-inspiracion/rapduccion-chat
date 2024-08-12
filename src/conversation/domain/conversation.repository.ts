import { Character } from "./character.enum";
import { ChatInterface } from "./chat.interface";

export interface ConversationRepository {
  GenerateConversation(chat: ChatInterface): Promise<any>
}
import { Router } from 'express';
import { ConversationUseCase } from '../../application/conversationUseCase';
import { ConversationController } from '../controllers/conversation.controller';
import { GTPRepository } from '../repository/gtp.repository';

const router = Router();
const conversationRepository = new GTPRepository()
const conversationUseCase = new ConversationUseCase(conversationRepository)
const controllerConversation = new ConversationController(conversationUseCase)
router.post("/conversation", controllerConversation.getController)
export default router;
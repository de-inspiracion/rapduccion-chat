export interface ChatInterface {
  role: roles,
  content: string
}


enum roles {
  system = "system",
  user = "user",
  assistant = "assistant"
}
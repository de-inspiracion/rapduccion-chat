import express from 'express';
import cors from 'cors'
import conversationRouter from './conversation/infra/routes/conversation.route'
import path from 'path';
const app = express();

app.use(express.json());
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')));
const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => {
  console.log(path.join(__dirname, 'public', 'index.html'))
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
})
app.use("/",conversationRouter)

app.listen(PORT, () => {
    console.log(`server running port ${PORT}`)
})
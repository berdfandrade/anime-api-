import mongoose from 'mongoose';

const pass = "IKM54lWAP0Yzk1BB";
const mongoURL = `mongodb+srv://berdfandrade:${pass}@cluster0.s9u9jhg.mongodb.net/?retryWrites=true&w=majority`;

const dbConnect = async (): Promise<void> => {
  try {
    await mongoose.connect(mongoURL, {
      // @ts-ignore
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conectado ao MongoDB com sucesso');
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error);
  }
};

export default dbConnect;

  

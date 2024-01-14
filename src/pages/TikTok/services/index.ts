import axios from 'axios';
import { userTypeResponse } from './types';

export class UserTypeServices {
  static async get(): Promise<userTypeResponse[]> {
    try {
      const { data } = await axios.get('http://localhost:8800/'); // Certifique-se de que este é o caminho correto para a sua API.
      return data;
    } catch (error) {
      // Adicione um tratamento de erro adequado aqui
      console.error('Erro na solicitação:', error);
      throw new Error('Falha ao obter os dados do usuário'); // Customize a mensagem de erro conforme necessário
    }
  }
}

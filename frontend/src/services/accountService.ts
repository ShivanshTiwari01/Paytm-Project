import api from '../config/api';

export interface TransferData {
  amount: number;
  to: string;
}

export const accountService = {
  getBalance: async () => {
    const response = await api.get('/account/balance');
    return response.data;
  },

  transfer: async (data: TransferData) => {
    const response = await api.patch('/account/transfer', data);
    return response.data;
  },
};

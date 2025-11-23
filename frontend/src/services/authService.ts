import api from '../config/api';

export interface SignupData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface SigninData {
  email: string;
  password: string;
}

export interface UpdateUserData {
  firstName?: string;
  lastName?: string;
  password?: string;
}

export const authService = {
  signup: async (data: SignupData) => {
    const response = await api.post('/user/signup', data);
    return response.data;
  },

  signin: async (data: SigninData) => {
    const response = await api.post('/user/signin', data);
    return response.data;
  },

  updateUser: async (data: UpdateUserData) => {
    const response = await api.put('/user/update', data);
    return response.data;
  },

  filterUsers: async (filter: string = '') => {
    const response = await api.get(`/user/bulk?filter=${filter}`);
    return response.data;
  },
};

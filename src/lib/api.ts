import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_URL,
});

// Only add the interceptor on the client side
if (typeof window !== 'undefined') {
  api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });
}

export const getTalents = () => api.get('/talents/');
export const getTalent = (id: number) => api.get(`/talents/${id}/`);
export const createTalent = (data: any) => api.post('/talents/', data);
export const getCategories = () => api.get('/categories/');
export const register = (userData: { username: string; email: string; password: string; password2: string }) => 
    api.post('/users/register/', userData);
  export const login = (credentials: { username: string; password: string }) => 
    api.post('/token/', credentials);
  export const getUserProfile = () => api.get('/users/profile/');
  export const getUserTalents = (userId: string) => api.get(`/users/${userId}/talents/`);
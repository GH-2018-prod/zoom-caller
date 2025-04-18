import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// URL base del backend
const API_URL = 'http://localhost:5000/api/auth';

// 🔹 Acción para iniciar sesión
export const loginUser = createAsyncThunk('auth/login', async (userData, thunkAPI) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    localStorage.setItem('token', response.data.token); // Guardar token en localStorage
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

// 🔹 Acción para obtener usuario autenticado
export const getUser = createAsyncThunk('auth/getUser', async (_, thunkAPI) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${API_URL}/me`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

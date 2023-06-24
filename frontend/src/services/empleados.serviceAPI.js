import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3001',
});

export const obtenerEmpleadoPorLegajo = async (legajo) => {
  try {
    const response = await API.get(`/empleados/${legajo}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const obtenerEmpleados = async () => {
  try {
    const response = await API.get('/empleados');
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const agregarEmpleado = async (empleado) => {
  try {
    const response = await API.post('/empleados', empleado);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const editarEmpleado = async (legajo, empleado) => {
  try {
    const response = await API.put(`/empleados/${legajo}`, empleado);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const eliminarEmpleado = async (legajo) => {
  try {
    await API.delete(`/empleados/${legajo}`);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
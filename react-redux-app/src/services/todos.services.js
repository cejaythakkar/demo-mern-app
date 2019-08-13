import axios from 'axios';

export const fetchTodos = async () => await axios.get('/todos')
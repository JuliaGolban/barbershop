import axios from 'axios';
import PropTypes from 'prop-types';

const BASE_URL = 'https://drab-pear-gazelle-belt.cyclic.app/api';
// const BASE_URL = 'http://localhost:3030/api';

async function fetchData(pathParams) {
  const axiosInstance = axios.create({
    baseURL: `${BASE_URL}${pathParams}`,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
      'Access-Control-Expose-Headers': 'Content-Range',
    },
  });

  return await axiosInstance.get();
}

async function updateUserData(pathParams, body, file) {
  const formData = new FormData();
  file && formData.set('avatar', file);
  formData.append('email', body.email);
  formData.append('birthday', body.birthday);
  formData.append('location', body.location);
  formData.append('password', body.password);
  formData.append('phone', body.phone);
  formData.append('role', body.role);
  formData.append('userName', body.userName);

  return await axios.patch(`${BASE_URL}${pathParams}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
    },
  });
}

async function updateServiceData(pathParams, body) {
  const formData = new FormData();
  formData.append('subject', body.subject);
  formData.append('time', body.time);
  formData.append('location', body.location);
  formData.append('price', body.price);
  formData.append('owner', body.owner);

  return await axios.patch(`${BASE_URL}${pathParams}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
    },
  });
}

async function deleteData(pathParams) {
  const formData = new FormData();
  return axios.delete(`${BASE_URL}${pathParams}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
    },
  });
}

fetchData.propTypes = {
  pathParams: PropTypes.string.isRequired,
};

deleteData.propTypes = {
  pathParams: PropTypes.string.isRequired,
};

updateUserData.propTypes = {
  pathParams: PropTypes.string.isRequired,
  formData: PropTypes.string.isRequired,
  file: PropTypes.string,
};

updateServiceData.propTypes = {
  pathParams: PropTypes.string.isRequired,
  formData: PropTypes.string.isRequired,
};

export { fetchData, updateUserData, updateServiceData, deleteData };
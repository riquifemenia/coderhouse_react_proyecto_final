// apiHelper.js

export const fetchDataFromAPI = async (url, method = 'GET', params = {}) => {
  try {
    let finalUrl = url;

    if (method === 'GET') {
      if (Object.keys(params).length > 0) {
        // Construir parámetros de consulta si se proporcionan
        const queryString = Object.keys(params)
          .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
          .join('&');

        finalUrl = `${url}?${queryString}`;
      } else {
        // Concatenar parámetros a la URL si se proporcionan en la forma /param1/param2
        const paramValues = Object.values(params).map(encodeURIComponent).join('/');
        if (paramValues) {
          finalUrl = `${url}/${paramValues}`;
        }
      }
    }

    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: method !== 'GET' ? JSON.stringify(params) : null,
    };

    const response = await fetch(finalUrl, options);
    if (!response.ok) {
      throw new Error(`Error al obtener los datos: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error en la solicitud: ${error.message}`);
  }
};

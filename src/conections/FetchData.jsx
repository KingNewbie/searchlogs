import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FetchData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://10.59.12.212:8000/audit/user/admin');
        console.log('API Response:', response.data); // Verificar la estructura de la respuesta
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Data from API</h1>
      {Array.isArray(data) ? (
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.username}</li>
          ))}
        </ul>
      ) : (
        <pre>{JSON.stringify(data, null, 2)}</pre> // Mostrar la estructura de los datos recibidos
      )}
    </div>
  );
};

export default FetchData;



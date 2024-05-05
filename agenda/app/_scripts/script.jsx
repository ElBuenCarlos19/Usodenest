export const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:3000/user`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error en la petición fetch:', error);
    }
  };
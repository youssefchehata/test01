import React from 'react';
import axios from 'axios';
import './App.css';

import Table from './Table';

const client = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/users',
});

const App = () => {
  const [data, setData] = React.useState([]);
  console.log(data);
  React.useEffect(() => {
    async function getData() {
      const response = await client?.get();
      let newArr = response?.data.map((el) => {
        return { ...el, city: el?.address.city };
      });
      setData(newArr);
    }
    getData();
  }, []);

  return (
    <div className='App'>
      <Table data={data} />
    </div>
  );
};

export default App;

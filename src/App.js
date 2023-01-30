import React from 'react';
import './App.css';

import Table from './Table';
import { getUsers } from './userService';

const App = () => {
  const [data, setData] = React.useState([]);
  console.log(data);
  React.useEffect(() => {
    async function getData() {
      const data = await getUsers();

      setData(data);
    }
    getData();
  }, []);

  const sortTable = async (key = 'username', order = 'desc') => {
    const data = await getUsers(key, order);
    setData(data);
  };

  https: return (
    <div className='App'>
      <Table data={data} sortTable={sortTable} />
    </div>
  );
};

export default App;

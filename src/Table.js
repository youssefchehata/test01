import React from 'react';

const Table = ({ data, sortTable }) => {
  const [sortConfig, setSortConfig] = React.useState({
    key: '',
    direction: '',
  });

  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };



  const handleSortTable = (name) => {
    const newSortConfig = {
      key: name,
      direction: '',
    };
    if (sortConfig.direction === '' || sortConfig.direction === 'asc') {
      newSortConfig.direction = 'desc';
    } else {
      newSortConfig.direction = 'asc';
    }

    setSortConfig(newSortConfig);
    sortTable(name, newSortConfig.direction);
  };

  return (
    <table>
      <caption>Users</caption>
      <thead>
        <tr>
          <th>
            <div>Id</div>
          </th>
          <th>
            <button
              type='button'
              onClick={() => handleSortTable('username')}
              className={getClassNamesFor('username')}
            >
              Username
            </button>
          </th>
          <th>
            <div>Email</div>
          </th>
          <th>
            <div>Phone</div>
          </th>
          <th>
            <button
              type='button'
              onClick={() => handleSortTable('address.city')}
              className={getClassNamesFor('address.city')}
            >
              City
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.username}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>{item?.address.city}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

import { client } from './client';

export const getUsers = async (sortKey = '', sortOrder = '') => {
  let url = 'users';
  if (sortKey != '' && sortOrder != '') {
    url += `?_sort=${sortKey}&_order=${sortOrder}`;
  }

  try {
    const { data } = await client.get(url);

    return data;
  } catch (error) {
    console.log('Error handling getUsers', error);
    alert('Erreur getUsers', error.response.status);
  }
};

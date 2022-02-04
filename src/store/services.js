import axios from 'axios';

axios.defaults.baseURL = 'https://61fbf9393f1e34001792c75a.mockapi.io'; 

export async function fetchContacts() {
  const { data } = await axios.get('/contacts');
  return data;
}

export async function addContacts(contact) {
  const { data } = await axios.post('/contacts', contact);
  return data;
}

export async function deleteContacts(contactId) {
  const {
    data: { id },
  } = await axios.delete(`/contacts/${contactId}`);
  return id;
}
import {showAlert} from 'react-native-customisable-alert';
export const versions = [
  {
    id: '0c2ff0a5c8b9069c',
    name: 'select',
    abbreviation: 'Select',
  },
  {
    id: '0c2ff0a5c8b9069c-01',
    name: 'King James Version',
    abbreviation: 'KJV',
  },
  {
    id: '0c2ff0a5c8b9069c-02',
    name: 'King James Version',
    abbreviation: 'NIV',
  },
  {
    author: 'Me',
    contributor: 'BigBee',
    createdAt: '2021-05-24T12:52:44.870Z',
    genre: 'gospel',
    title: 'Brown Skin',
  },
];

export const showError = () => {
  showAlert = {
    title: 'Are you sure?',
    message: 'This action will be irreversible!',
    alertType: 'warning',
  };
};

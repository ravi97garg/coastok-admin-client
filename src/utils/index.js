export const getToken = () => {
  localStorage.getItem('token');
};

export const setToken = () => {
  localStorage.setItem('token');
};

import axios from "axios";

export const formatDate = (date: string) => {
  const dateString = new Date(date);
  return dateString.toLocaleString();
};

export const addCommas = (n: number) => {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const fetchDataDetails = async (url: string) => {
  const dataDetails = await axios(url);
  return {
    data: dataDetails.data.data,
  };
};

export const getDataAPI = async (names: any) => {
  const requests = names.map(async (name: string) => {
    const url = `${name}`;
    return fetchDataDetails(url).then((data) => {
      return data;
    });
  });
  return Promise.all(requests);
};

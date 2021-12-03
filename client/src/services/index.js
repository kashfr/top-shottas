import axios from "axios";

export const BASE_URL_PLAYERS = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/players`;

export const BASE_URL_COMMENTS = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/comments`;

export const config = {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
  },
};

export const getLogos = async () => {
  const response = await axios.get(BASE_URL_PLAYERS, config);
  return response.data.records.players.teamLogo;
};

export const getPlayers = async () => {
  const response = await axios.get(BASE_URL_PLAYERS, config);
  return response.data.records;
};

export const getComments = async () => {
  const response = await axios.get(BASE_URL_COMMENTS, config);
  return response.data.records;
};

export const postComment = async (body) => {
  const response = await axios.post(
    BASE_URL_COMMENTS,
    { fields: body },
    config
  );
  return response.data;
};

export const putComment = async (body, id) => {
  const response = await axios.put(
    `${BASE_URL_COMMENTS}/${id}`,
    { fields: body },
    config
  );
  return response.data;
};

export const deleteComment = async (id) => {
  const response = await axios.delete(`${BASE_URL_COMMENTS}/${id}`, config);
  return response.data;
};

import axios from "axios";

export const requestPhotosByQuery = async (queryImg, page) => {
  const { data } = await axios.get(
    `https://api.unsplash.com/search/collections?page=${page}&query=${queryImg}&client_id=OZ5BK-hec_J2CWVr_VVb6tSz2_fonX4WtGVNsk-iLCg`
  );
  return data;
};

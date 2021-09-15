import axios from "axios";

const nasaAPIUrl = "https://api.nasa.gov/planetary/apod?api_key=";

const key = "8U7lR1229cckuvUJctlko01tdiWJRFaniySSyh3x";

// return the formatted promise of number of photo  randomly selcted
export const getRandomAPOD = (numberofPhotos) => {
  return axios
    .get(`${nasaAPIUrl}${key}&count=${numberofPhotos}`)
    .then((res) => {
      console.log(res.data);
      return res.data;
    });
};

export const getPhotoByDate = (date) => {
  return axios.get(`${nasaAPIUrl}${key}&date=${date}`).then((res) => res.data);
};

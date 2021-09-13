import axios from "axios";

const nasaAPIUrl = "https://api.nasa.gov/planetary/apod?api_key=";

const key = "8U7lR1229cckuvUJctlko01tdiWJRFaniySSyh3x";

// return the formatted promise of number of photo  randomly selcted
export const getRandomAPOD = (numberofPhotos) => {
  const promiseList = [...Array(numberofPhotos)].map((item, index) => {
    return axios.get(`${nasaAPIUrl}${key}&count=${index + 1}`);
  });

  return Promise.all(promiseList)
    .then((res) => res.map((item) => item.data))
    .then((result) => result[numberofPhotos - 1]);
};

export const getPhotoByDate = (date) => {
  return axios.get(`${nasaAPIUrl}${key}&date=${date}`)
  .then(res=>res.data)
};

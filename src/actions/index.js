import giphyAPI from "../APIs/giphyAPI";

const startRequet = () => {
  return {
    type: "START_REQUEST"
  };
};

const receiveData = (data) => {
  return {
    type: "RECEIVE_DATA",
    payload: data
  };
};

export const getUrls = (word) => {
  return (dispatch) => {
    dispatch(startRequet());
    giphyAPI(word).then((res) => {
      const data = res.data.data;
      const imgUrlList = data.map((item) => {
        return item.images.downsized.url;
      });
      dispatch(receiveData(imgUrlList));
    });
  };
};

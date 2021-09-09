import axios from "axios";

const callGiphyApi = (keyword) => {
  const search = keyword;
  const apiKey = "WqzhthBhPNKsZXphlkTpudHFx96T5zRh";
  const limit = 20;

  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${search}&limit=${limit}`;

  return axios.get(url);
  //   axios.get(url).then((res) => {
  //   console.log(res.data);
  //   const data = res.data.data;
  //   const imgDataList = data.map((gif) => {
  //     return gif.images.downsized.url;
  //   });
  //   this.setState({ gifUrlList: imgDataList });
  //   // console.log(this.state);
  // });
};

export default callGiphyApi;

var url;
var img;
var data = {
  baseURL: "https://www.googleapis.com/youtube/v3/", //search?part=snippet&q=",
  types: "search?part=snippet&q=",
  typel: "channels?part=statistics&id=",
  APIkey:
    "&type=channel&key=<API-key>&maxResults=1"
};
function future(term, id) {
  return {
    url1: data.baseURL + data.types + term + data.APIkey,
    url2: data.baseURL + data.typel + id + data.APIkey
  };
}
export default future;

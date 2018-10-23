import axios from "axios";

export default {
  getArticles: function() {
    return axios.get("/api/articles/");
  },
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  saveArticle: function(articleData) {
    console.log("inside the save article in API js");
    return axios.post("/api/articles", articleData);
  }
};

import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "bearer vvw6cKEq-jW9R0d0yEEW1oB6t2RbbaeVmLRyD_qSIVmaLVe52LiNO6sh3XVKzBDWqnsM5O58Y6I5UPtI3xX4Nkn3zgd2gmEhasWFPtWFfeNJd_qrKkLFM90huzx5YnYx",
  },
});

yelp.get("/search");

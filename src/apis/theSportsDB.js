import axios from "axios";

export default axios.create({
    baseURL: `https://www.thesportsdb.com/api/v1/json/${process.env.REACT_APP_API_KEY}/`
});

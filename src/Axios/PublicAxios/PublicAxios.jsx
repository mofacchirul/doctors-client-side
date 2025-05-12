import axios from 'axios';

const axiossecure= axios.create({
    baseURL:'https://hospiter-server-side.vercel.app'
})
const Publicaxios = () => {
    return axiossecure
};

export default Publicaxios
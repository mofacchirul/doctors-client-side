import axios from 'axios';

const axiossecure= axios.create({
    baseURL:'http://localhost:5000'
})
const Publicaxios = () => {
    return axiossecure
};

export default Publicaxios
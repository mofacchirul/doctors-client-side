import axios from 'axios';

const axiossecure= axios.create({
    baseURL:'http://localhost:5000'
})
const Securecaxios = () => {
    return axiossecure
};

export default Securecaxios
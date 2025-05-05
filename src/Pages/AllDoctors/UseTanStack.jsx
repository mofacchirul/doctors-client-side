import { useQuery } from "@tanstack/react-query";
import Publicaxios from "../../Axios/PublicAxios/PublicAxios";

const Coursestan = () => {
    const axios = Publicaxios();
    const { data: doctors,isLoading:loding } = useQuery({
        queryKey: ['alldoctor'],
        queryFn: async () => {
            const res = await axios.get('/alldoctor');
         
            return res.data; 
        }
    });

    return [doctors,loding]; 
};

export default Coursestan;
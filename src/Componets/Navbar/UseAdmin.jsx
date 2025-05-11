import { useContext } from "react";
import { AuthContext } from "../Provider/Auth";
import Securecaxios from "../../Axios/SecureAxios/SecureAxios";
import { useQuery } from "@tanstack/react-query";


const UseAdmin = () => {
    const { user,loading } = useContext(AuthContext);
    const axios = Securecaxios();
    const { data: isadmin } = useQuery({
        queryKey: [user?.email, 'isadmin'], 
        enabled:!loading,
        queryFn: async () => {
            const res = await axios.get(`/user/${user.email}`);
            console.log(res);
            
            return res.data?.admin;
        },
    });

    return [isadmin]; 
};

export default UseAdmin;
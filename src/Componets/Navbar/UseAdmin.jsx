import { useContext } from "react";
import { AuthContext } from "../Provider/Auth";
import { useQuery } from "@tanstack/react-query";
import Securecaxios from "../../Axios/SecureAxios/SecureAxios";

const UseAdmin = () => {
    const { user } = useContext(AuthContext);
    const axios = Securecaxios();
    const { data: isadmin } = useQuery({
        queryKey: [user?.email, 'isadmin'],
        enabled: !!user?.email, // Prevents query from running if user is null
        queryFn: async () => {
            const res = await axios.get(`/user/${user.email}`);
            return res.data?.admin;
        },
    });

    return [isadmin ]; // Ensures a valid return value
};

export default UseAdmin;
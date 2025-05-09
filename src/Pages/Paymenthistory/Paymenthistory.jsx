import { useContext } from "react";
import { AuthContext } from "../../Componets/Provider/Auth";
import Securecaxios from "../../Axios/SecureAxios/SecureAxios";
import { useQuery } from "@tanstack/react-query";


const Paymenthistory = () => {
        const {user}=useContext(AuthContext);
        const axios= Securecaxios()
     const {data:payment,}=useQuery({
        queryKey:['appointment',user?.email],
        queryFn: async () => {
         
              const res = await axios.get(`/payment?email=${user?.email}`);
          
              return res.data;

          
            
          }
     })
     

    console.log(payment);
    

    return (
        <div className="max-w-2xl  mx-auto ">
        
              <h1 className="text-center text-4xl font-bold lg:text-5xl">
                Payment Histroy
              </h1>
            <div className=" pt-5">
                {
                    payment?.map(item=>
                        <div key={item._id} className="flex justify-between shadow-lg bg-white p-3 mb-2 rounded-2xl  border items-center">
                        <div className="flex items-center gap-2">
                           <img src="https://i.ibb.co.com/nZNTSwb/Payment-img.png" className="w-40" alt="" />
                           <div>
                           <p><span className="font-bold ">Email:</span> {item.email} </p>
                            <p><span className="font-bold ">Date:</span> {item.date} </p>
                            <p><span className="font-bold ">Treansection Id:</span> {item.treansectionIds} </p>
                           </div>
                        </div>
<div className="flex flex-col justify-center space-y-1 items-center">
<p className="px-2 py-1 bg-blue-500  btn-block text-white rounded hover:bg-blue-600"><span className="font-bold ">Price: </span> {item.price} </p>
<p    className=" px-2 py-1 font-bold border border-red-500 text-red-500 rounded hover:bg-red-100"><span className="font-bold "></span> {item.status} </p>
</div>
                    </div>
                    )
                   
                }
            </div>
        </div>
    );
};

export default Paymenthistory;
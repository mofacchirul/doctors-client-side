import { useContext } from "react";
import { AuthContext } from "../../../Componets/Provider/Auth";
import { useQuery } from "@tanstack/react-query";
import Securecaxios from "../../../Axios/SecureAxios/SecureAxios";
import {
  FaUser,
  FaBlog,
  FaMoneyBillAlt,
  FaStethoscope,
  FaCalendarAlt,
} from "react-icons/fa";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const AdminHome = () => {
  const axios = Securecaxios();
  const { user } = useContext(AuthContext);

  const { data: adminstats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axios.get("/admin-stats");
      return res.data;
    },
  });

  const data = [
    { date: "May 1", appointments: 5 },
    { date: "May 2", appointments: 8 },
    { date: "May 3", appointments: 3 },
  ];

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        Hi, Welcome {user?.displayName || "back"}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <StatCard
          title="Revenue"
          value={adminstats.revenue}
          icon={<FaMoneyBillAlt className="text-white text-3xl" />}
          bgColor="from-purple-500 to-pink-300"
        />
        <StatCard
          title="Users"
          value={adminstats.user}
          icon={<FaUser className="text-white text-3xl" />}
          bgColor="from-yellow-500 to-yellow-200"
        />
        <StatCard
          title="Doctors"
          value={adminstats.doctors}
          icon={<FaStethoscope className="text-white text-3xl" />}
          bgColor="from-red-500 to-pink-300"
        />
        <StatCard
          title="Appointments"
          value={adminstats.appointment}
          icon={<FaCalendarAlt className="text-white text-3xl" />}
          bgColor="from-blue-400 to-blue-200"
        />
        <StatCard
          title="Blogs"
          value={adminstats.blog}
          icon={<FaBlog className="text-white text-3xl" />}
          bgColor="from-indigo-500 to-purple-300"
        />
      </div>

      <div className="mt-10 bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Appointment Trends</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="appointments" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, icon, bgColor }) => (
  <div
    className={`bg-gradient-to-r ${bgColor} text-white p-4 rounded-lg shadow-md flex items-center justify-between`}
  >
    <div>
      <p className="text-3xl font-bold">{value}</p>
      <p className="text-lg">{title}</p>
    </div>
    {icon}
  </div>
);

export default AdminHome;

import { useEffect, useState } from "react"
import { dummyAdminDashboardData, dummyEmployeeDashboardData } from "../assets/assets";
import Loading from "../components/Loading";
import EmployeesDashboard from "../components/EmployeesDashboard";
import AdminDashboard from "../components/AdminDashboard";

const Dashboard = () => {

  const [data,setData]=useState(null);
  const [loading,setLoading]=useState(true);

useEffect(()=>{
  setData(dummyAdminDashboardData)
  setTimeout(() => {
    setLoading(false)
  }, (1000));
},[])
if(loading) return <Loading />
if(!data) return <p className="text-center text-slate-500 py-12"> Failed to load dashboard</p>
 
 if (data.role === "ADMIN") {
  return <AdminDashboard data={data}/>
 }
 else{
  return <EmployeesDashboard data={data}/>
 }
 
return (
    <div>
      Dashboard
    </div>
  )
}

export default Dashboard

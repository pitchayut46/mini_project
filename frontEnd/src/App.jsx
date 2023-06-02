import Home from "./pages/Home";
import Notice from "./pages/Notice";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Member01 from "./pages/member/Member01";
import Member02 from "./pages/member/Member02";
import Member03 from "./pages/member/Member03";
import Member04 from "./pages/member/Member04";
import Member05 from "./pages/member/Member05";
import Member06 from "./pages/member/Member06";
import Member07 from "./pages/member/Member07";
import {
  Router,
  Routes,
  Route,
  Switch,
  NavLink,
  useNavigate,
  Navigate,
} from "react-router-dom";
import Discography from "./pages/Discography";
import Heaven from "./pages/Heaven";
import { useEffect, useState } from "react";
import Axios from "./AxiosInstance";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    Axios.get("/check")
      .then((res) => {
        setIsLogin(res.data.success);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  if (isLoading) {
    return <></>;
  }
  return (
    <>
      {isLogin ? (
        <Routes>
          <Route exaxt path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Discography" element={<Discography />} />
          <Route path="/Notice" element={<Notice />} />
          <Route path="/Schedule" element={<Heaven />} />
          <Route path="/Contact" element={<Heaven />} />
          <Route path="/About" element={<Member01 />} />
          <Route path="/Member01" element={<Member01 />} />
          <Route path="/Member02" element={<Member02 />} />
          <Route path="/Member03" element={<Member03 />} />
          <Route path="/Member04" element={<Member04 />} />
          <Route path="/Member05" element={<Member05 />} />
          <Route path="/Member06" element={<Member06 />} />
          <Route path="/Member07" element={<Member07 />} />
        </Routes>
      ) : (
        <Routes>
          <Route exaxt path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/*" element={<Navigate to={"/Login"} replace />} />
        </Routes>
      )}
    </>
  );
}

export default App;

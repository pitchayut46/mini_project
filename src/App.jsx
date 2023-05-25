import Home from './pages/Home';
// import Navbar from './pages/Navbar';
import Notice from "./pages/Notice";
import Login from './pages/Login';
import SignUp from './pages/SignUp';
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
} from "react-router-dom";
import Discography from "./pages/Discography";
import Heaven from "./pages/Heaven";

function App() {
  return (      
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
  );
}

export default App;

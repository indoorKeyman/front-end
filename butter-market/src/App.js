import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Chat from "./routes/Chat";
import ChatList from "./routes/ChatList2";
import Detail from "./routes/Detail";
import JjimList from "./routes/JjimList";
import List from "./routes/List";
import Login from "./routes/Login";
import Main from "./routes/Main";
import MyPage from "./routes/MyPage";
import MyReviewPage from "./routes/MyReviewPage";
import Report from "./routes/Report";
import Search from "./routes/Search";
import SignUp from "./routes/SignUp";
import Trading from "./routes/Trading";
import Complete from "./routes/Complete";
import Enrollment from "./routes/Enrollment";
import EditProfile from "./routes/EditProfile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={process.env.PUBLIC_URL + "/"} element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/list" element={<List />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/chat/:id" element={<Chat />} />
        <Route path="/chatlist" element={<ChatList />} />
        <Route path="/jjimlist" element={<JjimList />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/:id/report" element={<Report />} />
        <Route path="/search" element={<Search />} />
        <Route path="/review" element={<MyReviewPage />} />
        <Route path="/trading" element={<Trading />} />
        <Route path="/complete" element={<Complete />} />
        <Route path="/enrollment" element={<Enrollment />} />
        <Route path="/editprofile" element={<EditProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
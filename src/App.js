import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import FindUsersContainer from "./components/FindUsers/FindUsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Route
            path="/profile/:userId?"
            render={() => <ProfileContainer />}
          />
          <Route
            path="/dialogs"
            render={() => <DialogsContainer />}
          />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/users" render={()=> <FindUsersContainer />}/>
          <Route path="/settings" render={() => <Settings />} />
          <Route path="/login" render={() => <Login />} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

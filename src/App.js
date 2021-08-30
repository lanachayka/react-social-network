import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar friends={props.state.navbar.friends} />
        <div className="app-wrapper-content">
          <Route
            path="/profile"
            render={() => <Profile postsData={props.state.profile.postsData} />}
          />
          <Route
            path="/dialogs"
            render={() => (
              <Dialogs
                dialogsData={props.state.messages.dialogsData}
                messagesData={props.state.messages.messagesData}
              />
            )}
          />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

import Styles from "./styles/global.module.css";
import Title from "./Components/title/title.jsx";
import Launchingsoon from "./Components/launchingsoon/launchingsoon.jsx";
import InputButton from "./Components/inputandbutton/inputandbutton.jsx";
import Mainimage from "./Components/mainimage/mainimage.jsx";
import Socialicons from "./Components/socialicons/socialicons.jsx";
import Copyright from "./Components/Copyright/Copyright.jsx";

function App() {
  return (
    <div className={Styles.everything}>
      <Title />
      <Launchingsoon />
      <InputButton />
      <Mainimage />
      <Socialicons />
      <Copyright />
    </div>
  );
}

export default App;

import "./App.css";
import { ChatEngine,  } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed.jsx";

function App() {
  return (
    <div className="App">
      <ChatEngine
        height="100vh"
        projectID="25bb0f9d-acc9-49fe-8de7-4a58f5151c4f"
        userName="Dagne"
        userSecret="qwerty"
        renderChatFeed={(chatAppProps)=><ChatFeed{...chatAppProps}/>}
        onNewMessage= {()=>new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
      />
    </div>
  );
}

export default App;

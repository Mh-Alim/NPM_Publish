import axios from "axios";
import "./App.css";

function App() {
  const reqBody = {
    username: "alimKhan",
    password: 123456,
  };
  const handleApiCall = async () => {
    const { data } = await axios.post("http://localhost:5000/signIn", reqBody);
    console.log("Data: ", data);
  };

  return (
    <>
      <div>
        <button onClick={handleApiCall}>backend</button>
      </div>
    </>
  );
}

export default App;

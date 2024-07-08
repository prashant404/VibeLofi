import Navbar from "./Components/Navbar/Navbar";
import Library from "./Components/Library/Library";
import Player from "./Components/Player/Player";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <> 
      <Library/>
      <main>
          <Navbar/>
          <Player/>
      </main>
      <Footer/>
    </>
  );
}

export default App;


import './App.css';

function App() {
  return (
    <div className="App">
      <h2>Welcome to our streaming video application</h2>
      <video width="700px" height="400px" controls>
        <source src="https://xxxxx,cloudfront.net/sample-video.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;

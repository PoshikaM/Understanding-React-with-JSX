import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}

function App() {
  // code here

  const imgData = imageData();

  return <div>
  <h1 className='title'>Kalvium gallary</h1>
  <div className='content'>
    {
      imgData.map((element, index) => {
        return <div>
          <img src={element.img}/>
          </div>
      })
    }
  </div>
  </div>

}

export default App;

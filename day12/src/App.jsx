import './App.css'
import topimg from './assets/images/bg-pattern-top.svg'
import bottomimg from './assets/images/bg-pattern-bottom.svg'
import Card from './componants/Card/Card'


function App() {

  return (
    <>
     <main>
     <Card></Card>
      <div id='cardimg'>
        <img  id='topimg' src={topimg}/>
        <img id='bottomimg' src={bottomimg}/>
      </div>
     </main>
    </>
  )
}

export default App

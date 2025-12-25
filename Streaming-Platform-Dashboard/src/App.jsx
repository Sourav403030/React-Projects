import Movieoftheday from "./components/Movieoftheday"
import Navbar from "./components/Navbar"
import SideBar from "./components/SideBar"
import Youmightlike from "./components/Youmightlike"

const App = () => {
  return (
    <>
    <div className="flex h-screen overflow-hidden">
      <div className="left">
        <SideBar/>
      </div>
      <div className="right w-full overflow-y-auto">
        <Navbar/>
        <Movieoftheday/>
        <h1 className="text-2xl text-white font-poppins m-5 mt-10">You Might Like</h1>
        <div className="flex mr-5">
          <Youmightlike/>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { AppKitProvider } from './wagmiConfig';
import ConnectButton from './components/ConnectButton';
import { FaHeart } from "react-icons/fa";

function App() {
  return (
    <AppKitProvider>
      <div className="min-h-screen flex flex-col items-center justify-center">

        <h1 className=' text-4xl  font-bold mb-4 text-white'>Welcome !</h1>
        <div className="nft border-[#757575] border shadow-lg rounded-lg p-12 ">
          <h1 className="text-2xl font-bold mb-4 text-white text-center ">Connect Your Wallet</h1>
      <div className=' flex justify-center'>
      <ConnectButton />
      </div>
        </div>

        <div className=" flex justify-center gap-6 items-center my-6">

          <a href="/" className=" text-4xl text-white">
          <FaGithub />
          </a>

          <a href="/" className=" text-4xl text-white">
          <FaLinkedin />
          </a>

          <a href="/" className=" text-4xl text-white">
          <FaSquareTwitter />
          </a>

        </div>

        <div className=" text-center text-[#acacac] text-base flex justify-center items-center gap-2">

          Made by <a href="/ " className="flex justify-center items-center gap-2">NOORSHANU <FaHeart  className=" text-red-700 "/>
          </a>
        </div>
      </div>
    </AppKitProvider>
  );
}

export default App;

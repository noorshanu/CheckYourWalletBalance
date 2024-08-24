// src/App.jsx

import { AppKitProvider } from './wagmiConfig';
import ConnectButton from './components/ConnectButton';

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
      </div>
    </AppKitProvider>
  );
}

export default App;

// src/wagmiConfig.js
import { createWeb3Modal } from '@web3modal/wagmi/react'
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'
import { WagmiProvider } from 'wagmi'
import { mainnet, arbitrum } from 'wagmi/chains'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// 0. Setup queryClient
const queryClient = new QueryClient()

// 1. Get projectId from WalletConnect Cloud
const projectId = '7e8f9b762779f61fc2ba85221cf1dec5'

// 2. Metadata for WalletConnect
const metadata = {
  name: 'Crypto Wallet Connect',
  description: 'Example using Wagmi and WalletConnect',
  url: 'https://yourdomain.com', // Must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

// 3. Configure chains
const chains = [mainnet, arbitrum] ;

// 4. Create Wagmi config
const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
})

// 5. Create Web3Modal
createWeb3Modal({
  metadata,
  wagmiConfig: config,
  projectId,
  enableAnalytics: true // Optional - defaults to your Cloud configuration
})

// 6. Create AppKitProvider
export function AppKitProvider({ children }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}

import { chain, configureChains, createClient, defaultChains } from 'vagmi'
import { alchemyProvider } from 'vagmi/providers/alchemy'
import { publicProvider } from 'vagmi/providers/public'
import { InjectedConnector } from 'vagmi/connectors/injected'

const alchemyId = import.meta.env.VITE_ALCHEMY_KEY

const { chains, provider } = configureChains(defaultChains, [
  alchemyProvider({ alchemyId }),
  publicProvider(),
])

export const connector = new InjectedConnector({
  chains: [chain.mainnet],
})

export const client = createClient({
  autoConnect: true,
  connectors: [connector],
  provider,
})

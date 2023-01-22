<template>
  <button v-if="! isConnected" @click="connect">
    <span v-if="isConnecting">Connecting...</span>
    <span v-else>Connect</span>
  </button>
  <button v-else >
    {{  name  }}
  </button>
</template>

<script setup>
import { computed } from 'vue'
import { useAccount, useConnect, useEnsName } from 'vagmi'
import { connector } from '../helpers/ethereum'

const {
  activeConnector,
  connect,
  connectors,
  error,
  isConnecting,
  pendingConnector,
} = useConnect({ connector })

const {
  address,
  isConnected,
} = useAccount()

const { data: ens } = useEnsName({ address })

const name = computed(() => {
  if (ens.value) return ens.value

  return `${address.value.slice(0, 5)}...${address.value.slice(37)}`
})
</script>

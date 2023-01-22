<template>
  <section class="action fit">
    <h1>3. Batch Transfer NFTs</h1>
    <button @click="execute">Execute</button>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { Contract } from 'ethers'
import { fetchSigner } from '@wagmi/core'
import BatchTransferABI from './../helpers/abis/BatchTransfer.json'

const props = defineProps({
  collection: String,
  tokens: Array,
})

const batchTranferAddress = import.meta.env.VITE_BATCH_TRANSFER_CONTRACT

const loading = ref(false)
const tx = ref(null)

const execute = async () => {
  const signer = await fetchSigner()
  const contract = new Contract(batchTranferAddress, BatchTransferABI, signer)

  loading.value = true
  tx.value = await contract.safeBatchTransferToMultipleWallets(
    props.collection,
    props.tokens.map(t => t[1]),
    props.tokens.map(t => t[0])
  )
  console.log(tx.value)

  loading.value = false
}
</script>

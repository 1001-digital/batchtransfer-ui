<template>
  <section class="action fit">
    <h1>1. Approve Collection</h1>

    <button @click="approve">Approve</button>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { Contract } from 'ethers'
import { fetchSigner } from '@wagmi/core'
import ERC721ABI from './../helpers/abis/ERC721.json'

const batchTranferAddress = import.meta.env.VITE_BATCH_TRANSFER_CONTRACT

const props = defineProps({
  collection: String,
})

const loading = ref(false)
const tx = ref(null)

const approve = async () => {
  const signer = await fetchSigner()
  const contract = new Contract(props.collection, ERC721ABI, signer)

  loading.value = true
  tx.value = await contract.setApprovalForAll(batchTranferAddress, true)
  console.log(tx.value)

  loading.value = false
}
</script>

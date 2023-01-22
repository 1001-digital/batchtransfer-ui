<template>

  <div class="batch-add">
    <div class="actions">
      <button v-if="show" @click="bulkImport" class="sm">Import</button>

      <button @click="show = !show" class="sm">
        <span v-if="show">Cancel</span>
        <span v-else>Batch Import</span>
      </button>
    </div>
    <Transition name="expand">
      <textarea
        v-if="show"
        v-model="bulkAddresses"
        cols="30"
        rows="10"
      ></textarea>
    </Transition>
  </div>

</template>

<script setup>
import { ref } from 'vue'
import { fetchEnsAddress } from '@wagmi/core'
import { extractEnsDomains, extractAddresses } from './../helpers/addresses'

const emit = defineEmits(['parsed'])

const show = ref(false)
const bulkAddresses = ref('')

const bulkImport = async () => {
  const ensDomains = extractEnsDomains(bulkAddresses.value) || []

  const resolvedAddresses = (await Promise.all(
    ensDomains.map(name => fetchEnsAddress({ name }))
  ))
    .filter(address => !!address)
    .map(address => address.toLowerCase())

  const addresses = (extractAddresses(bulkAddresses.value) || [])
    .map(address => address.toLowerCase())

  // Make addresses unique
  const allAddresses = Array.from(new Set([...resolvedAddresses, ...addresses]))

  emit('parsed', allAddresses)

  show.value = false
}
</script>

<style lang="postcss" scoped>
.batch-add {
  margin: var(--size-4) 0;
  position: relative;

  .actions {
    position: absolute;
    top: -2.8rem;
    right: 0;

    display: flex;
    gap: var(--size-3);
  }
}

.expand-enter-active,
.expand-leave-active {
  transition: all var(--speed-fast) ease;
  height: 15rem;
}

.expand-enter-from,
.expand-leave-to {
  opacity: 0;
  height: 0;
}
</style>

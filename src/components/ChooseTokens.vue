<template>
  <section>
    <h1>2. Choose Tokens</h1>

    <BulkAddressImport @parsed="onImport" />

    <div class="tokens">
      <div
        v-for="(row, index) in props.tokens"
        :key="index"
        class="row"
      >
        <input type="number" v-model="row[0]" :placeholder="`Token ID (#${index + 1})`">
        <input type="text" v-model="row[1]" placeholder="Recipient (0x123...)">
        <button
          @click="removeRow(index)"
          class="simple"
          title="Remove"
          :disabled="props.tokens.length <= 1"
        ><X /></button>
      </div>

      <button @click="addRow">Add</button>
    </div>
  </section>
</template>

<script setup>
import BulkAddressImport from './BulkAddressImport.vue'
import X from './icons/X.vue'

const props = defineProps({
  tokens: Array,
})

const emit = defineEmits(['update'])

const onImport = addresses => {
  // TODO: improve this later...
  emit('update', [...addresses.map(a => [undefined, a])])
}
const addRow = () => emit('update', [...props.tokens, []])
const removeRow = index => {
  if (props.tokens.length === 1) return
  const tokens = [...props.tokens]
  tokens.splice(index, 1)

  emit('update', tokens)
}
</script>

<style lang="postcss" scoped>
  .row {
    margin: var(--size-4) 0;
    display: grid;
    grid-template-columns: repeat(2, minmax(0px, 1fr)) 2rem;
    gap: var(--size-4);
  }
</style>

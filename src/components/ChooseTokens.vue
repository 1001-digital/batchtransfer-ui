<template>
  <section>
    <h1>2. Choose Tokens</h1>

    <div class="tokens">
      <div
        v-for="(row, index) in pairs"
        :key="index"
        class="row"
      >
        <input type="number" v-model="row[0]" placeholder="Token ID (#123)">
        <input type="text" v-model="row[1]" placeholder="Recipient (0x123...)">
        <button
          @click="removeRow(index)"
          class="simple"
          title="Remove"
          :disabled="pairs.length <= 1"
        ><X /></button>
      </div>

      <button @click="addRow">Add</button>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import X from './icons/X.vue'

const pairs = ref([[], [], [], [], []])

const addRow = () => pairs.value.push([])
const removeRow = index => {
  if (pairs.value.length === 1) return
  pairs.value.splice(index, 1)
}
</script>

<style lang="postcss" scoped>
  .tokens {
  }

  .row {
    margin: var(--size-4) 0;
    display: grid;
    grid-template-columns: repeat(2, minmax(0px, 1fr)) 2rem;
    gap: var(--size-4);
  }
</style>

<template>
  <main>
    <header class="action fit">
      <h1>NFT Bulk Transfer</h1>

      <Connect />
    </header>

    <section class="fit">
      <input
        v-model="collectionAddress"
        type="text"
        placeholder="Collection Contract (e.g. 0xc6f24005e2be8077...)"
      />
    </section>

    <ApproveCollection :collection="collectionAddress" />

    <ChooseTokens
      :tokens="tokenPairs"
      @update="$event => tokenPairs = $event"
    />

    <ExecuteTransfer
      :collection="collectionAddress"
      :tokens="tokenPairs"
    />

    <footer>
      <a
        href="https://etherscan.io/address/0x055c942A5396460f0d36295bEd65436cd970Aa11#code"
        target="_blank"
      >BatchTransfer Contract</a>
    </footer>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import ApproveCollection from './components/ApproveCollection.vue'
import Connect from './components/Connect.vue'
import ChooseTokens from './components/ChooseTokens.vue'
import ExecuteTransfer from './components/ExecuteTransfer.vue'

const tokenPairs = ref([[], [], [], [], []])
const collectionAddress = ref('')
</script>

<style lang="postcss">
main {
  max-width: var(--content-width);
  margin: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  header {
    h1 {
      text-transform: uppercase;
      font-weight: bold;
    }
  }

  header,
  section,
  footer {
    border-bottom: var(--border-dark);

    &:not(.fit) {
      padding: var(--size-4);
    }
  }

  .action {
    display: flex;
    justify-content: space-between;

    h1 {
      padding: var(--size-4);
    }
  }

  footer {
    border-top: var(--border-dark);
    border-bottom: none;
    margin-top: auto;
    font-size: var(--font-size-sm);
  }

  @media (--content) {
    border-left: var(--border-dark);
    border-right: var(--border-dark);
  }
}
</style>

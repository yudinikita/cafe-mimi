<script lang="ts">
  import Container from '$lib/components/container.svelte';
  import Merch from '$lib/components/merch/merch.svelte';
</script>

<section class="block-merch">
  <Container>
    <p class="heading">Мерч</p>
    <Merch />
  </Container>
</section>

<style>
  .block-merch {
    margin-bottom: var(--space-xl);
  }
</style>

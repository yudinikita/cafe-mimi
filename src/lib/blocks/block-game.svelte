<script lang="ts">
  import Game from '$lib/components/game/game.svelte';
</script>

<section class="block-game-wrapper">
  <p class="heading">Поиграем?</p>
  <Game />
</section>

<style>
  .block-game-wrapper {
    padding-bottom: var(--space-2xl);
  }
</style>

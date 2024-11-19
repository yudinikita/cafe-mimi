<script lang="ts">
  import type { Picture } from '$lib/types';

  export let img: string | Picture;
</script>

<div class="merch-item">
  <enhanced:img src={img} alt="" class="merch-image" />
</div>

<style>
  .merch-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-base);
    max-width: 362px;
  }
  .merch-image {
    display: block;
    margin: 0 auto;
    width: 100%;
    height: auto;
    max-height: 576px;
  }
</style>

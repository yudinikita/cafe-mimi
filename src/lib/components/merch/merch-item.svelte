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
  }
  .merch-image {
    display: block;
    margin: 0 auto;
    width: 100%;
    max-width: 576px;
  }
</style>

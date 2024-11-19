<script lang="ts">
  import type { Picture } from '$lib/types';

  export let img: string | Picture;
</script>

<div class="colours-item">
  <enhanced:img src={img} alt="" class="colours-image" />
</div>

<style>
  .colours-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-sm);
  }
  .colours-image {
    display: block;
    margin: 0 auto;
    border-radius: 40px;
    width: 100%;
    height: auto;
  }
</style>

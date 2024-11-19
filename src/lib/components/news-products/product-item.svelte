<script lang="ts">
  import type { Picture } from '$lib/types';
  import Button from '../button.svelte';

  export let title: string;
  export let img: string | Picture;
</script>

<div class="product-item">
  <h3 class="title">{title}</h3>
  <enhanced:img src={img} alt="" class="product-image" />
  <Button type="primary">Посмотреть</Button>
</div>

<style>
  .product-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-base);
  }
  .title {
    margin-bottom: var(--space-sm);
    font-size: 2rem;
  }
  .product-image {
    display: block;
    margin: 0 auto;
    width: 100%;
    max-width: 400px;
    height: auto;
    max-height: 600px;
  }
</style>

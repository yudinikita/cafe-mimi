<script lang="ts">
  import Seo from '$lib/components/seo.svelte';
  import BlockGame from '$lib/blocks/block-game.svelte';
  import BlockHero from '$lib/blocks/block-hero.svelte';
  import BlockNewsProducts from '$lib/blocks/block-news-products.svelte';
  import BlockProducts from '$lib/blocks/block-products.svelte';
  import BlockMerch from '$lib/blocks/block-merch.svelte';
  import BlockImages from '$lib/blocks/block-images.svelte';
  import Background from '$lib/components/background.svelte';
</script>

<Seo
  seo={{
    title: 'Cafe Mimi - Промо сайт',
    meta_description: 'Cafe Mimi - Инновационные формулы на основе трендовых и функциональных ингредиентов.',
  }}
/>

<Background />

<BlockHero />
<BlockProducts />
<BlockImages />
<BlockNewsProducts />
<BlockMerch />
<BlockGame />

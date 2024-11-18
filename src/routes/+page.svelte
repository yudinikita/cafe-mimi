<script lang="ts">
  import Seo from '$lib/components/seo.svelte';
  import BlockGame from '$lib/blocks/block-game.svelte';
  import BlockHero from '$lib/blocks/block-hero.svelte';
  import BlockNewsProducts from '$lib/blocks/block-news-products.svelte';
  import BlockPresent from '$lib/blocks/block-present.svelte';
  import BlockProducts from '$lib/blocks/block-products.svelte';
</script>

<Seo
  seo={{
    title: 'Cafe Mimi - Промо сайт',
    meta_description: 'Cafe Mimi - Инновационные формулы на основе трендовых и функциональных ингредиентов.',
  }}
/>

<BlockHero />
<BlockPresent />
<BlockProducts />
<BlockNewsProducts />
<BlockGame />

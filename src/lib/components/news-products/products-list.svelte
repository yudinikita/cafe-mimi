<script>
  import ProductItem from './product-item.svelte';

  import ProductImg1 from '$lib/assets/images/news-product-1.png?enhanced';
  import ProductImg2 from '$lib/assets/images/news-product-2.png?enhanced';
  import ProductImg3 from '$lib/assets/images/news-product-3.png?enhanced';
</script>

<div class="products-list">
  <ul class="list">
    <li><ProductItem title="Well that's" img={ProductImg1} /></li>
    <li><ProductItem title="Well that's" img={ProductImg2} /></li>
    <li><ProductItem title="Well that's" img={ProductImg3} /></li>
  </ul>
</div>

<style>
  .list {
    display: flex;
    justify-content: space-between;
    list-style: none;
  }
</style>

<script lang="ts">
  import Container from '../container.svelte';
  import ProductsList from './products-list.svelte';
  import ServicesList from './services-list.svelte';
</script>

<Container>
  <div class="products-wrapper">
    <p class="heading">Must Have</p>
    <p class="desc">
      Инновационные формулы на основе <br /> трендовых и функциональных <br /> ингредиентов, натуральных экстрактов
    </p>
    <div class="images">
      <enhanced:img src="$lib/assets/images/star.png" alt="" class="star" />
      <enhanced:img src="$lib/assets/images/news-preview.png" alt="" class="preview" />
    </div>
    <ProductsList />
    <div class="divider"></div>
    <ServicesList />
  </div>
</Container>

<style>
  .images {
    margin-bottom: var(--space-xl);
  }
  .products-wrapper {
    position: relative;
  }
  .products-wrapper .desc {
    font-size: 2rem;
  }
  .star {
    position: absolute;
    top: 300px;
    left: 0;
    transform: rotate(-70deg);
  }
  .preview {
    display: block;
    margin-top: var(--space-lg);
    margin-right: 0;
    margin-left: auto;
  }
  .divider {
    height: 1px;
    margin: var(--space-2xl) 0;
  }
</style>

<script>
  import MerchItem from './merch-item.svelte';

  import MerchImg1 from '$lib/assets/images/merch-1.png?enhanced';
  import MerchImg2 from '$lib/assets/images/merch-2.png?enhanced';
  import MerchImg3 from '$lib/assets/images/merch-3.png?enhanced';
  import Button from '../button.svelte';
</script>

<div class="merch-list">
  <ul class="list">
    <li><MerchItem img={MerchImg1} /></li>
    <li><MerchItem img={MerchImg2} /></li>
    <li><MerchItem img={MerchImg3} /></li>
  </ul>
  <div class="merch-controls">
    <Button type="primary" class="merch-button">Посмотреть</Button>
  </div>
</div>

<style>
  .list {
    display: flex;
    justify-content: space-around;
    list-style: none;
  }
  .merch-controls {
    display: flex;
    justify-content: center;
    margin-top: var(--space-lg);
  }
</style>

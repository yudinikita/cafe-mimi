<script>
  import ColoursItem from './colours-item.svelte';

  import ColoursImg1 from '$lib/assets/images/product-1.png?enhanced';
  import ColoursImg2 from '$lib/assets/images/product-2.png?enhanced';
  import ColoursImg3 from '$lib/assets/images/product-3.png?enhanced';
</script>

<div class="colours-list">
  <ul class="list">
    <li><ColoursItem img={ColoursImg1} /></li>
    <li><ColoursItem img={ColoursImg2} /></li>
    <li><ColoursItem img={ColoursImg3} /></li>
  </ul>
</div>

<style>
  .list {
    display: flex;
    justify-content: space-evenly;
    list-style: none;
  }
  .list li:first-child {
    transform: rotate(-30deg);
    margin-top: var(--space-xl);
  }
  .list li:last-child {
    transform: rotate(30deg);
    margin-top: var(--space-xl);
  }
</style>

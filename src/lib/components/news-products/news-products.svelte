<script lang="ts">
  import IntersectionObserver from 'svelte-intersection-observer';
  import Typewriter from 'svelte-typewriter';
  import Container from '../container.svelte';
  import ProductsList from './products-list.svelte';
  import ServicesList from './services-list.svelte';
  import AnimText from '../anim-text.svelte';

  let starEl: HTMLElement, previewEl: HTMLElement, descEl: HTMLElement;
</script>

<div class="products-wrapper">
  <Container>
    <AnimText text="Must Have" class="heading"></AnimText>
    <IntersectionObserver element={descEl} let:intersecting>
      <div bind:this={descEl}>
        {#if intersecting}
          <Typewriter>
            <p class="desc">
              Инновационные формулы на основе трендовых и функциональных ингредиентов, натуральных экстрактов
            </p>
          </Typewriter>
        {/if}
      </div>
    </IntersectionObserver>
  </Container>
  <div class="images">
    <IntersectionObserver element={starEl} let:intersecting>
      <enhanced:img
        bind:this={starEl}
        src="$lib/assets/images/star.png"
        alt=""
        width="390"
        height="390"
        class={`star star-in ${intersecting ? 'star-in-place' : ''} `}
      /></IntersectionObserver
    >
    <IntersectionObserver element={previewEl} let:intersecting>
      <enhanced:img
        bind:this={previewEl}
        src="$lib/assets/images/news-preview.png"
        alt=""
        class={`preview preview-in ${intersecting ? 'preview-in-place' : ''} `}
        width="760"
        height="382"
      />
    </IntersectionObserver>
  </div>
  <Container>
    <ProductsList />
  </Container>
  <div class="divider"></div>
  <Container>
    <ServicesList />
  </Container>
</div>

<style>
  .images {
    margin-bottom: var(--space-xl);
  }
  .products-wrapper {
    position: relative;
  }
  .products-wrapper .desc {
    max-width: 800px;
  }
  .star {
    position: absolute;
    top: 5%;
    left: 0;
    transform: rotate(0);
    z-index: 1;
    pointer-events: none;
  }
  .star-in {
    transform: scale(0.01) translateX(50%) rotate(0);
    opacity: 0.01;
    transition: all 3s cubic-bezier(0.16, 1, 0.3, 1);
    transition-delay: 0s;
    transition-duration: 4s;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1), cubic-bezier(0.16, 1, 0.3, 1);
  }
  .star-in-place {
    transform: scale(1) translateX(0) rotate(-70deg);
    opacity: 1;
  }
  .preview {
    display: block;
    margin-top: var(--space-lg);
    margin-right: 0;
    margin-left: auto;
    width: 100%;
    max-width: 760px;
    height: auto;
    object-fit: cover;
  }
  .preview-in {
    transform: scale(0.8) translateX(10%);
    opacity: 0.01;
    transition: all 3s cubic-bezier(0.16, 1, 0.3, 1);
    transition-delay: 0s;
    transition-duration: 4s;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1), cubic-bezier(0.16, 1, 0.3, 1);
  }
  .preview-in-place {
    transform: scale(1) translateX(0);
    opacity: 1;
  }
  .divider {
    margin: var(--space-2xl) 0;
    height: 1px;
  }
</style>

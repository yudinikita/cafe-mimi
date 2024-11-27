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
    <div class="circles">
      <enhanced:img src="$lib/assets/images/game-item-4.png" alt="" class="circle circle-1" width="82" height="82" />
      <enhanced:img src="$lib/assets/images/game-item-3.png" alt="" class="circle circle-2" width="55" height="55" />
      <enhanced:img src="$lib/assets/images/game-item-1.png" alt="" class="circle circle-3" width="123" height="123" />
    </div>
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
  .circle {
    position: absolute;
    z-index: 1;
  }
  .circle-1 {
    top: 15%;
    right: 35%;
    transform: rotate(-32deg);
    animation: circle-1-anim 8s ease-in-out infinite;
  }
  @keyframes circle-1-anim {
    0% {
      transform: translate(0, 0) rotate(-16deg) scale(1);
    }
    50% {
      transform: translate(12px, -16px) rotate(-32deg) scale(0.9);
    }
    100% {
      transform: translate(0, 0) rotate(-16deg) scale(1);
    }
  }
  .circle-2 {
    top: 10%;
    right: 10%;
    transform: rotate(20deg);
    animation: circle-2-anim 5s ease-in-out infinite;
  }
  @keyframes circle-2-anim {
    0% {
      transform: translate(0, 0) rotate(10deg) scale(1);
    }
    50% {
      transform: translate(12px, 24px) rotate(20deg) scale(1.2);
    }
    100% {
      transform: translate(0, 0) rotate(10deg) scale(1);
    }
  }
  .circle-3 {
    bottom: 7%;
    right: 21%;
    transform: rotate(12deg);
    animation: circle-3-anim 12s ease-in-out infinite;
  }
  @keyframes circle-3-anim {
    0% {
      transform: translate(0, 0) rotate(6deg) scale(1);
    }
    50% {
      transform: translate(18px, -8px) rotate(12deg) scale(1.05);
    }
    100% {
      transform: translate(0, 0) rotate(6deg) scale(1);
    }
  }
  .images {
    position: relative;
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

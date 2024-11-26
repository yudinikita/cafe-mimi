<script lang="ts">
  import Container from '../container.svelte';
  import IntersectionObserver from 'svelte-intersection-observer';
  import { _springScrollPos, scrollPos } from '../scrollPos';
  import { onMount } from 'svelte';
  import Colours from '../colours/colours.svelte';
  import Typewriter from 'svelte-typewriter';
  import { fade } from 'svelte/transition';
  import MiniStar from '$lib/assets/icons/star.svg?component';
  import AnimText from '../anim-text.svelte';
  import { getRand } from '$lib/utils';

  const COUNT_STARS = 24;

  const onScroll = () => {
    // get normalized scroll position in document. 0 should equal top of page, 1
    // should equal 1 page height from top, 2 should equal 2 page heights from
    // top, etc. This allows easier addition of content to the bottom as opposed
    // to a normalized scroll position where 1 is the bottom of the page.
    const newScrollPos = Math.max(window.scrollY / window.innerHeight, 0);
    scrollPos.set(newScrollPos);
    _springScrollPos.set(newScrollPos);
  };

  onMount(() => {
    const newScrollPos = Math.max(window.scrollY / window.innerHeight, 0);
    scrollPos.set(newScrollPos);
    _springScrollPos.set(newScrollPos, {
      hard: true,
    });
  });

  let innerWidth: number;

  let starEl: HTMLElement, descEl: HTMLElement, girlEl: HTMLElement, miniStarEl: HTMLElement;
</script>

<svelte:window on:scroll={onScroll} bind:innerWidth />

<Container>
  <div class="products-wrapper">
    <div class="layer-1">
      <p class="heading">Будь собой</p>
      <IntersectionObserver element={starEl} let:intersecting>
        <enhanced:img
          bind:this={starEl}
          src="$lib/assets/images/star.png"
          alt=""
          width="410"
          height="410"
          class={`star star-in ${intersecting ? 'star-in-place' : ''} `}
        /></IntersectionObserver
      >
    </div>
    <div class="girl-wrapper">
      <IntersectionObserver element={girlEl} let:intersecting>
        <div bind:this={girlEl} style="width: 35vw">
          {#if intersecting}
            <div class="girl-container" transition:fade>
              <enhanced:img src="$lib/assets/images/girl.png" alt="" width="627" height="580" class="girl" />
            </div>
          {/if}
        </div>
      </IntersectionObserver>
    </div>
    <div class="layer layer-2">
      <p class="heading">Создавай свои правила</p>
    </div>
    <div class="layer layer-3">
      <p class="heading">Colours</p>
      <Colours />
    </div>
    <div class="layer layer-4">
      <IntersectionObserver element={descEl} let:intersecting>
        <div bind:this={descEl}>
          {#if intersecting}
            <Typewriter>
              <p class="colours-desc">
                Инновационные формулы на основе трендовых и функциональных ингредиентов, натуральных экстрактов
              </p>
            </Typewriter>
          {/if}
        </div>
      </IntersectionObserver>
    </div>
    <div class="layer layer-5">
      <div class="mini-stars-wrapper">
        <AnimText text="Мы делаем людей счастливыми!" class="heading" />
        <IntersectionObserver element={miniStarEl} let:intersecting>
          <div bind:this={miniStarEl}>
            {#if intersecting}
              <div class="mini-stars" transition:fade={{ delay: 700 }}>
                {#each Array(COUNT_STARS) as _, i}
                  <MiniStar
                    class={`mini-star ${intersecting ? 'mini-star-in-place' : ''} `}
                    style={`
                      transform:
                        translate(-50%, -50%)
                        translate(${getRand(25, innerWidth - 25)}px, ${getRand(25, 225)}px)
                        scale(${Math.random().toFixed(3)});
                    `}
                  />
                {/each}
              </div>
            {/if}
          </div>
        </IntersectionObserver>
      </div>
    </div>
  </div>
</Container>

<style>
  .products-wrapper {
    position: relative;
    margin-top: var(--space-2xl);
  }
  .girl-wrapper {
    display: flex;
    position: sticky;
    top: 55%;
    left: 0;
    justify-content: center;
    z-index: 10;
    width: 100%;
    pointer-events: none;
  }
  .girl-container {
    animation: girl-anim 1.2s ease-in-out;
    width: 100%;
    pointer-events: none;
  }
  .girl {
    display: block;
    margin: 0 auto;
    width: 100%;
    height: auto;
  }
  @keyframes girl-anim {
    0% {
      transform: translateY(80%) scale(0.5);
      opacity: 0;
    }
    100% {
      transform: translateY(0) scale(1);
      opacity: 1;
    }
  }
  .layer {
    background: var(--color-bg);
    width: 100%;
    min-height: 100vh;
  }
  .layer-2 {
    animation-timeline: view(block 50% 10%);
    display: flex;
    align-items: center;
    animation-duration: 1ms;
    animation-timing-function: linear;
    animation-fill-mode: both;
    animation-name: layer-animation;
    min-height: 200vh;
  }
  .layer-3 {
    position: sticky;
    top: var(--space-base);
    z-index: 1;
    padding-top: var(--space-base);
    min-height: 300vh;
    overflow: hidden;
  }
  .layer-4 {
    display: flex;
    position: sticky;
    top: var(--space-base);
    justify-content: center;
    align-items: center;
    z-index: 2;
    min-height: 100vh;
  }
  .layer-5 {
    display: flex;
    position: sticky;
    top: var(--space-base);
    align-items: center;
    z-index: 3;
    min-height: 200vh;
  }
  .colours-desc {
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
    font-size: 2rem;
    line-height: 160%;
    text-align: center;
    text-transform: uppercase;
  }
  @keyframes layer-animation {
    0% {
      transform: scaleX(0.5);
      opacity: 0.5;
    }
    100% {
      transform: scaleX(1);
      opacity: 1;
    }
  }
  .star {
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
    pointer-events: none;
  }
  .star-in {
    transform: scale(0.01) translateX(50%);
    opacity: 0.01;
    transition: all 3s cubic-bezier(0.16, 1, 0.3, 1);
    transition-delay: 0s;
    transition-duration: 4s;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1), cubic-bezier(0.16, 1, 0.3, 1);
  }
  .star-in-place {
    transform: scale(1) translateX(0);
    opacity: 1;
  }
  .mini-stars {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
  .mini-stars-wrapper {
    position: relative;
  }
  .mini-stars :global(.mini-star) {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    width: 2.5vw;
    min-width: 20px;
    max-width: 50px;
    height: auto;
  }
  .mini-stars :global(.mini-star-in-place) {
    opacity: 1;
  }
</style>

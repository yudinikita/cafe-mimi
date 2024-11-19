<script lang="ts">
  import { Canvas } from '@threlte/core';
  import Container from '../container.svelte';
  import { NoToneMapping } from 'three';
  import App from './app.svelte';
  import { _springScrollPos, scrollPos } from '../scrollPos';
  import { onMount } from 'svelte';
  import Colours from '../colours/colours.svelte';
  import Button from '../button.svelte';

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

  let headRotation: [number, number, number];
  let headPosition: [number, number, number];

  $: headRotation = [0, $scrollPos - 1, 0];
  $: headPosition = [0, $scrollPos * -0.15, 0];
</script>

<svelte:window on:scroll={onScroll} />

<Container>
  <div class="products-wrapper">
    <div class="layer-1">
      <p class="heading">Будь собой</p>
      <enhanced:img src="$lib/assets/images/star.png" alt="" class="star" />
    </div>
    <div class="canvas-wrapper">
      <Canvas
        toneMapping={NoToneMapping}
        rendererParameters={{
          powerPreference: 'high-performance',
          antialias: false,
          stencil: false,
          premultipliedAlpha: false,
        }}
      >
        <App rotation={headRotation} position={headPosition} />
      </Canvas>
    </div>
    <div class="layer layer-2">
      <p class="heading">Создавай свои правила</p>
    </div>
    <div class="layer layer-3">
      <p class="heading">Colours</p>
      <Colours />
      <Button type="primary" class="colours-button">Посмотреть</Button>
    </div>
    <div class="layer layer-4">
      <p class="colours-desc">
        Инновационные формулы на основе трендовых и функциональных ингредиентов, натуральных экстрактов
      </p>
    </div>
    <div class="layer layer-5">
      <p class="heading">Мы делаем людей счастливыми!</p>
    </div>
  </div>
</Container>

<style>
  .products-wrapper {
    position: relative;
    margin-top: var(--space-2xl);
  }
  .canvas-wrapper {
    position: sticky;
    top: 20%;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 100vh;
    pointer-events: none;
  }
  .layer {
    min-height: 100vh;
  }
  .layer :global(.colours-button) {
    display: block;
    margin: 0 auto;
    width: 100%;
    max-width: 260px;
    margin-bottom: var(--space-lg);
  }
  .layer-2 {
    animation-timeline: view(block 50% 10%);
    animation-duration: 1ms;
    animation-timing-function: linear;
    animation-fill-mode: both;
    animation-name: layer-animation;
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
      opacity: 0;
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
  }
</style>

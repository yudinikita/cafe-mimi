<script lang="ts">
  import Logo from '$lib/assets/icons/cafe-mimi-logo.svg?component';
  import { onMount } from 'svelte';
  import Container from '../container.svelte';
  import { _springScrollPos, mouseCoords, mouseCoordsSpring, scrollPos, springScrollPos } from '../scrollPos';

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

  const onMouseMove = (e: MouseEvent) => {
    // get normalized mouse coords
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    mouseCoords.set({ x, y });
    mouseCoordsSpring.set({ x, y });
  };
</script>

<svelte:window on:scroll={onScroll} on:mousemove={onMouseMove} />

<Container>
  <div class="hero-wrapper">
    <div class="logo-wrapper">
      <Logo />
    </div>
    <div class="desc-wrapper">
      <p class="desc">Инновационные формулы на основе трендовых <br /> и функциональных ингредиентов</p>
    </div>
    <div class="blob-wrapper">
      <enhanced:img
        src="$lib/assets/images/blob-1.png"
        alt=""
        class="blob blob-1"
        style={`
        transform:
          translateX(${$mouseCoordsSpring.x * 2 + $scrollPos * -20}%)
          translateY(${$mouseCoordsSpring.y * -2 + $scrollPos * 20}%)
          scale(${$springScrollPos * -0.1 + 1});
          `}
      />
      <enhanced:img
        src="$lib/assets/images/blob-2.png"
        alt=""
        class="blob blob-2"
        style={`
        transform:
          translateX(${$mouseCoordsSpring.x * 2 + $scrollPos * 30}%)
          translateY(${$mouseCoordsSpring.y * -2 + $scrollPos * -100}%)
          scale(${$springScrollPos * -0.1 + 1});
        `}
      />
      <enhanced:img
        src="$lib/assets/images/blob-3.png"
        alt=""
        class="blob blob-3"
        style={`
        transform:
          translateX(${$mouseCoordsSpring.x * 2 + $scrollPos * 20}%)
          translateY(${$mouseCoordsSpring.y * -2 + $scrollPos * -20}%)
          scale(${$springScrollPos * -0.1 + 1});
        `}
      />
    </div>
    <enhanced:img
      src="$lib/assets/images/hero-product.png"
      alt=""
      class="hero-product"
      style={`
      transform:
        translateX(${$scrollPos * 5}%)
        translateY(${$scrollPos * -20}%)
        scale(${$springScrollPos * -0.1 + 1})
        rotate(${$springScrollPos * 10 + $mouseCoordsSpring.x * 10}deg);
    `}
    />
  </div>
</Container>

<style>
  .hero-wrapper {
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    pointer-events: none;
  }
  .logo-wrapper {
    animation: logo-animation 2.3s ease-in-out forwards;
    margin-top: var(--space-lg);
  }
  @keyframes logo-animation {
    0% {
      transform: translateY(-80%) scale(0.5);
      opacity: 0;
    }
    100% {
      transform: translateY(0) scale(1);
      opacity: 1;
    }
  }
  .logo-wrapper :global(svg) {
    display: block;
    margin: 0 auto;
    width: 100%;
    max-width: 800px;
    height: auto;
  }
  .desc-wrapper {
    margin-bottom: var(--space-base);
  }
  .hero-product {
    animation: hero-product-animation 2.3s ease-in-out;
  }
  @keyframes hero-product-animation {
    0% {
      transform: translateY(100%) scale(1.5);
      opacity: 0;
    }
    100% {
      transform: translateY(0) scale(1);
      opacity: 1;
    }
  }
  .desc {
    animation: desc-animation 2.3s ease-in-out;
  }
  @keyframes desc-animation {
    0% {
      transform: translateY(100%) scale(0.5);
      opacity: 0;
    }
    100% {
      transform: translateY(0) scale(1);
      opacity: 1;
    }
  }
  .blob {
    position: absolute;
    z-index: -1;
    height: auto;
    pointer-events: none;
    user-select: none;
  }
  .blob-1 {
    top: 10%;
    left: 0;
    animation: blob-1-animation 1.7s ease-in-out;
  }
  .blob-2 {
    top: 60%;
    left: 50%;
    transform: translateY(-50%);
    animation: blob-2-animation 1.3s ease-in-out;
  }
  .blob-3 {
    top: 5%;
    right: 0;
    animation: blob-3-animation 2.3s ease-in-out;
  }
  @keyframes blob-1-animation {
    0% {
      transform: translateX(-20%) translateY(-20%) scale(0.5);
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes blob-2-animation {
    0% {
      transform: translateX(-100%) scale(0.5);
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes blob-3-animation {
    0% {
      transform: translateX(40%) scale(0.3);
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>

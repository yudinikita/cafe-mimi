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
      <Logo width="520px" height="100px" />
    </div>
    <div class="desc-wrapper">
      <p class="desc">Инновационные формулы на основе <br /> трендовых и функциональных ингредиентов</p>
    </div>
    <div class="blob-wrapper">
      <enhanced:img
        src="$lib/assets/images/blob-1.png"
        alt=""
        width="436"
        height="560"
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
        width="212"
        height="166"
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
        width="367"
        height="440"
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
      width="363"
      height="448"
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
    justify-content: flex-start;
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
    height: auto;
  }
  .desc-wrapper {
    margin: var(--space-lg) auto;
  }
  .hero-product {
    animation:
      product-show 1.7s ease-in-out,
      product-anim 4s ease-in-out infinite;
    width: 32vw;
    height: auto;
  }
  @keyframes product-show {
    0% {
      transform: translateY(100%) scale(1.5);
      opacity: 0;
    }
    100% {
      transform: translateY(0) scale(1);
      opacity: 1;
    }
  }
  @keyframes product-anim {
    0% {
      transform: translate(0) rotate(0);
    }
    50% {
      transform: translate(2%) rotate(-10deg);
    }
    100% {
      transform: translate(0) rotate(0);
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
    bottom: 10%;
    left: 0;
    animation:
      blob-1-show 1.7s ease-in-out,
      blob-1-anim 8s ease-in-out infinite;
    width: 32vw;
  }
  @keyframes blob-1-show {
    from {
      transform: translate(-20%, -20%) scale(0.5);
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes blob-1-anim {
    0% {
      transform: translate(0, 0) rotate(0) scale(1);
    }
    50% {
      transform: translate(0, -5%) rotate(-5deg) scale(0.925);
    }
    100% {
      transform: translate(0, 0) rotate(0) scale(1);
    }
  }
  .blob-2 {
    top: 50%;
    left: 50%;
    transform: translateY(-50%);
    animation:
      blob-2-show 2.3s ease-in-out,
      blob-2-anim 7s ease-in-out infinite;
    width: 16vw;
  }
  @keyframes blob-2-show {
    from {
      transform: translate(20%, -20%) scale(0.5);
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes blob-2-anim {
    0% {
      transform: translate(0, 0) rotate(0) scale(1);
    }
    50% {
      transform: translate(10%, 2%) rotate(-10deg) scale(0.9);
    }
    100% {
      transform: translate(0, 0) rotate(0) scale(1);
    }
  }
  .blob-3 {
    top: 10%;
    right: 0;
    animation:
      blob-3-show 2.3s ease-in-out,
      blob-3-anim 7s ease-in-out infinite;
    width: 24vw;
  }
  @keyframes blob-3-show {
    from {
      transform: translate(20%, -20%) scale(0.3);
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes blob-3-anim {
    0% {
      transform: translate(0, 0) rotate(0);
    }
    50% {
      transform: translate(0, 5%) rotate(-5deg);
    }
    100% {
      transform: translate(0, 0) rotate(0);
    }
  }
</style>

<script lang="ts">
  import { onDestroy } from 'svelte';
  import IntersectionObserver from 'svelte-intersection-observer';
  import { fade } from 'svelte/transition';

  export let text = '';
  let animate = true;

  let element: HTMLElement;
  let intersecting: boolean;

  let interval: ReturnType<typeof setTimeout> | undefined;

  interval = setTimeout(() => {
    animate = false;
  }, 3000);

  function getRandomColor() {
    const colors = ['#FFD372', '#88C1F8', '#F6B1CF', '#E72F63', '#2B3D73', '#F15B40'];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  function reset() {
    animate = true;
    interval = setTimeout(() => {
      animate = false;
    }, 3000);
  }

  onDestroy(() => {
    if (interval) {
      clearTimeout(interval);
      interval = undefined;
    }
  });

  $: if (intersecting) {
    reset();
  }
</script>

<IntersectionObserver {element} bind:intersecting>
  <div bind:this={element}>
    {#if intersecting}
      <div class="anim-text" transition:fade {...$$restProps}>
        {#each text.split('') as letter, i}
          <span
            style={`--first-color: ${getRandomColor()}; --second-color: ${getRandomColor()}; --animation-duration: ${Math.random() * 2 + 0.5}s`}
            class={animate ? 'animate' : ''}>{letter}</span
          >
        {/each}
      </div>
    {/if}
  </div>
</IntersectionObserver>

<style>
  .animate {
    animation: animate-letter var(--animation-duration) ease infinite;
  }

  @keyframes animate-letter {
    0% {
      color: var(--first-color);
    }
    50% {
      color: var(--second-color);
    }
    100% {
      color: var(--first-color);
    }
  }

  span:not(.animate) {
    color: black;
  }
</style>

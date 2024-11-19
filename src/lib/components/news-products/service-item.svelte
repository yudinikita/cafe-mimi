<script lang="ts">
  import type { Picture, SvgComponentType } from '$lib/types';

  export let title: string;
  export let text: string;
  export let img: string | Picture;
  export let icon: SvgComponentType;

  let isOpen = false;

  const handleClick = () => {
    isOpen = !isOpen;
  };
</script>

<div class="service-item">
  <enhanced:img src={img} alt="" class="service-image" />
  <h3 class="title">{title}</h3>
  <p class={`text ${!isOpen ? 'text-close' : ''}`}>{text}</p>
  <button class={`button-icon ${isOpen ? 'button-open' : ''}`} on:click={handleClick}>
    <svelte:component this={icon} />
  </button>
</div>

<style>
  .service-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-sm);
    max-width: 362px;
  }
  .title {
    margin-top: var(--space-sm);
    margin-bottom: var(--space-sm);
    font-size: 1rem;
  }
  .text {
    display: -webkit-box;
    line-height: 160%;
    text-align: center;
    text-wrap: balance;
    -webkit-box-orient: vertical;
    transition: all var(--anim-delay) ease-in-out;
    width: 100%;
    overflow: hidden;
  }
  .text-close {
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    max-height: 120px;
  }
  .service-image {
    display: block;
    margin: 0 auto;
    border-radius: 40px;
    height: auto;
    max-height: 543px;
  }
  .button-icon {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    gap: var(--space-sm);
    transition: all var(--anim-delay) ease-in-out;
    cursor: pointer;
    margin-top: var(--space-sm);
    border: none;
    background-color: transparent;
    color: var(--color-black);
  }
  .button-open {
    transform: rotate(-90deg);
  }
</style>

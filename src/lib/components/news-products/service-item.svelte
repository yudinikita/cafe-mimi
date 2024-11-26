<script lang="ts">
  import type { Picture, SvgComponentType } from '$lib/types';

  export let title: string;
  export let text: string;
  export let img: string | Picture;
  export let icon: SvgComponentType;
  export let typeBg: 'first' | 'second' | 'third' = 'first';

  let isOpen = false;

  const handleClick = () => {
    isOpen = !isOpen;
  };
</script>

<div class="service-item">
  <div class={`image-wrapper ${typeBg}`}>
    <enhanced:img src={img} alt="" class="service-image" width="267" height="400" />
  </div>
  <h3 class="title">{title}</h3>
  <p class={`text ${!isOpen ? 'text-close' : ''}`}>{text}</p>
  <button class={`button-icon ${isOpen ? 'button-open' : ''}`} on:click={handleClick}>
    <svelte:component this={icon} />
  </button>
</div>

<style>
  .service-item {
    display: flex;
    position: relative;
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
  .image-wrapper {
    position: relative;
  }
  .first::after {
    position: absolute;
    top: 10%;
    left: 30%;
    opacity: 1;
    z-index: -1;
    border-radius: 40px;
    background: linear-gradient(0deg, rgba(187, 164, 208, 0), rgba(187, 164, 208, 0.4));
    width: 100%;
    height: 100%;
    pointer-events: none;
    content: '';
  }
  .second::after {
    position: absolute;
    top: 5%;
    right: 10%;
    opacity: 1;
    z-index: -1;
    border-radius: 40px;
    background: linear-gradient(0deg, rgba(250, 242, 177, 0), rgba(250, 242, 177, 0.4));
    width: 100%;
    height: 100%;
    pointer-events: none;
    content: '';
  }
  .third::after {
    position: absolute;
    top: 10%;
    right: 30%;
    opacity: 1;
    z-index: -1;
    border-radius: 40px;
    background: linear-gradient(0deg, rgba(255, 192, 171, 0), rgba(255, 192, 171, 0.4));
    width: 100%;
    height: 100%;
    pointer-events: none;
    content: '';
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

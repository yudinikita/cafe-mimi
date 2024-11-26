<script lang="ts">
  import ColoursItem from './colours-item.svelte';
  import ColoursImg1 from '$lib/assets/images/product-1.png?enhanced';
  import ColoursImg2 from '$lib/assets/images/product-2.png?enhanced';
  import ColoursImg3 from '$lib/assets/images/product-3.png?enhanced';
  import Button from '../button.svelte';
  import { onMount } from 'svelte';
  import { register, type SwiperContainer } from 'swiper/element/bundle';
  import type { SwiperOptions } from 'swiper/types';
  import IntersectionObserver from 'svelte-intersection-observer';
  import { fly } from 'svelte/transition';

  let swiperEl: SwiperContainer | undefined;
  let activeSlide = 0;
  let intersecting: boolean;
  let node: HTMLElement;

  onMount(() => {
    if (swiperEl !== undefined) {
      register();
      const swiperParams: SwiperOptions = {
        effect: 'creative',
        grabCursor: true,
        navigation: false,
        pagination: false,
        slidesPerView: 3,
        slidesPerGroup: 1,
        centeredSlides: true,
        loop: true,
        followFinger: true,
        initialSlide: 1,
        speed: 800,
        autoHeight: true,
        injectStyles: [`.swiper { overflow: visible !important; }`],
        creativeEffect: {
          limitProgress: 2,
          prev: {
            rotate: [0, 0, -45],
            translate: ['-120%', 200, 0],
          },
          next: {
            rotate: [0, 0, 45],
            translate: ['120%', 200, 0],
          },
        },
        on: {
          slideChange: (swiper) => {
            activeSlide = swiper.realIndex;
          },
        },
      };
      Object.assign(swiperEl, swiperParams);
      swiperEl.initialize();
    }
  });

  const handleScroll = () => {
    if (swiperEl && swiperEl.swiper && intersecting) {
      swiperEl.swiper.slideNext();
    }
  };
</script>

<svelte:window on:scroll={handleScroll} />

<IntersectionObserver element={node} bind:intersecting>
  <div class="colours-list" bind:this={node}>
    <swiper-container init="false" bind:this={swiperEl} transition:fly>
      <swiper-slide>
        <ColoursItem img={ColoursImg1} />
        <Button type="primary" class="colours-button">Посмотреть</Button>
      </swiper-slide>
      <swiper-slide>
        <ColoursItem img={ColoursImg2} />
        <Button type="primary" class="colours-button">Посмотреть</Button>
      </swiper-slide>
      <swiper-slide>
        <ColoursItem img={ColoursImg3} />
        <Button type="primary" class="colours-button">Посмотреть</Button>
      </swiper-slide>
      <swiper-slide>
        <ColoursItem img={ColoursImg1} />
        <Button type="primary" class="colours-button">Посмотреть</Button>
      </swiper-slide>
      <swiper-slide>
        <ColoursItem img={ColoursImg2} />
        <Button type="primary" class="colours-button">Посмотреть</Button>
      </swiper-slide>
      <swiper-slide>
        <ColoursItem img={ColoursImg3} />
        <Button type="primary" class="colours-button">Посмотреть</Button>
      </swiper-slide>
    </swiper-container>
  </div>
</IntersectionObserver>

<style>
  .colours-list {
    width: 100%;
    height: 100%;
  }
  .colours-list :global(.swiper-slide-active) {
    transform: rotate(0);
    transition: all 1.2s ease-in-out;
  }
  .colours-list :global(.colours-button) {
    display: none;
    margin: 0 auto;
    margin-top: var(--space-sm);
  }
  .colours-list :global(.swiper-slide-active .colours-button) {
    display: block;
  }
</style>

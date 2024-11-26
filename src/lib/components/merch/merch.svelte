<script lang="ts">
  import { onMount } from 'svelte';
  import { register, type SwiperContainer } from 'swiper/element/bundle';
  import type { SwiperOptions } from 'swiper/types';
  import IntersectionObserver from 'svelte-intersection-observer';
  import { fly } from 'svelte/transition';
  import MerchItem from './merch-item.svelte';
  import MerchImg1 from '$lib/assets/images/merch-1.png?enhanced';
  import MerchImg2 from '$lib/assets/images/merch-2.png?enhanced';
  import MerchImg3 from '$lib/assets/images/merch-3.png?enhanced';
  import Button from '../button.svelte';

  let swiperEl: SwiperContainer | undefined;
  let intersecting: boolean;
  let node: HTMLElement;
  let starEl: HTMLElement;

  onMount(() => {
    if (swiperEl !== undefined) {
      register();
      const swiperParams: SwiperOptions = {
        effect: 'coverflow',
        grabCursor: true,
        navigation: false,
        pagination: false,
        slidesPerView: 1,
        slidesPerGroup: 1,
        centeredSlides: false,
        loop: true,
        followFinger: true,
        speed: 800,
        rewind: true,
        spaceBetween: 20,
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          scale: 0.75,
          slideShadows: false,
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            centeredSlides: true,
          },
          1024: {
            slidesPerView: 3,
          },
        },
      };
      Object.assign(swiperEl, swiperParams);
      swiperEl.initialize();
    }
  });
</script>

<IntersectionObserver element={node} bind:intersecting>
  <div class="star-wrapper">
    <IntersectionObserver element={starEl} bind:intersecting>
      <enhanced:img
        bind:this={starEl}
        src="$lib/assets/images/star.png"
        alt=""
        width="250"
        height="250"
        class={`star star-in ${intersecting ? 'star-in-place' : ''} `}
      />
    </IntersectionObserver>
  </div>
  <div class="merch-list" bind:this={node}>
    <swiper-container init="false" bind:this={swiperEl} transition:fly>
      <swiper-slide>
        <MerchItem img={MerchImg1} />
      </swiper-slide>
      <swiper-slide>
        <MerchItem img={MerchImg2} />
      </swiper-slide>
      <swiper-slide>
        <MerchItem img={MerchImg3} />
      </swiper-slide>
      <swiper-slide>
        <MerchItem img={MerchImg1} />
      </swiper-slide>
      <swiper-slide>
        <MerchItem img={MerchImg2} />
      </swiper-slide>
      <swiper-slide>
        <MerchItem img={MerchImg3} />
      </swiper-slide>
    </swiper-container>
    <div class="merch-navigation">
      <Button class="merch-prev" type="icon" on:click={() => swiperEl?.swiper.slidePrev()}>
        <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0.497311 7.52922C0.106786 7.91975 0.106786 8.55291 0.497311 8.94343L6.86127 15.3074C7.2518 15.6979 7.88496 15.6979 8.27549 15.3074C8.66601 14.9169 8.66601 14.2837 8.27549 13.8932L2.61863 8.23633L8.27549 2.57947C8.66601 2.18895 8.66601 1.55578 8.27549 1.16526C7.88496 0.774736 7.2518 0.774736 6.86127 1.16526L0.497311 7.52922ZM14.6152 7.23633L1.20442 7.23633V9.23633L14.6152 9.23633V7.23633Z"
            fill="black"
          />
        </svg>
      </Button>
      <Button type="primary">Посмотреть</Button>
      <Button class="merch-next" type="icon" on:click={() => swiperEl?.swiper.slideNext()}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14.7683 8.94344C15.1588 8.55291 15.1588 7.91975 14.7683 7.52922L8.40435 1.16526C8.01383 0.774737 7.38067 0.774737 6.99014 1.16526C6.59962 1.55579 6.59962 2.18895 6.99014 2.57947L12.647 8.23633L6.99014 13.8932C6.59962 14.2837 6.59961 14.9169 6.99014 15.3074C7.38066 15.6979 8.01383 15.6979 8.40435 15.3074L14.7683 8.94344ZM0.650391 9.23633L14.0612 9.23633L14.0612 7.23633L0.650391 7.23633L0.650391 9.23633Z"
            fill="black"
          />
        </svg>
      </Button>
    </div>
  </div>
</IntersectionObserver>

<style>
  .merch-list {
    width: 100%;
    height: 100%;
  }
  .merch-navigation {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: var(--space-base);
  }
  .star-wrapper {
    position: relative;
  }
  .star {
    position: absolute;
    top: 5%;
    right: 0;
    z-index: 1;
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
    transform: scale(1) translateX(0) rotate(20deg);
    opacity: 1;
  }
</style>

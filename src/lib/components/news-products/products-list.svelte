<script lang="ts">
  import { onMount } from 'svelte';
  import { register, type SwiperContainer } from 'swiper/element/bundle';
  import type { SwiperOptions } from 'swiper/types';
  import IntersectionObserver from 'svelte-intersection-observer';
  import { fly } from 'svelte/transition';
  import ProductItem from './product-item.svelte';

  import ProductImg1 from '$lib/assets/images/news-product-1.png?enhanced';
  import ProductImg2 from '$lib/assets/images/news-product-2.png?enhanced';
  import ProductImg3 from '$lib/assets/images/news-product-3.png?enhanced';
  import ProductImg4 from '$lib/assets/images/news-product-4.png?enhanced';
  import ProductImg5 from '$lib/assets/images/news-product-5.png?enhanced';
  import Button from '../button.svelte';

  let swiperEl: SwiperContainer | undefined;
  let intersecting: boolean;
  let node: HTMLElement;

  onMount(() => {
    if (swiperEl !== undefined) {
      register();
      const swiperParams: SwiperOptions = {
        grabCursor: true,
        navigation: false,
        pagination: false,
        slidesPerView: 1,
        slidesPerGroup: 1,
        centeredSlides: false,
        loop: false,
        followFinger: true,
        speed: 800,
        rewind: true,
        spaceBetween: 20,
        breakpoints: {
          640: {
            slidesPerView: 2,
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
  <div class="products-list" bind:this={node}>
    <swiper-container init="false" bind:this={swiperEl} transition:fly>
      <swiper-slide>
        <ProductItem title="Well that's" img={ProductImg1} />
      </swiper-slide>
      <swiper-slide>
        <ProductItem title="Well that's" img={ProductImg2} />
      </swiper-slide>
      <swiper-slide>
        <ProductItem title="Well that's" img={ProductImg3} />
      </swiper-slide>
      <swiper-slide>
        <ProductItem title="Well that's" img={ProductImg4} />
      </swiper-slide>
      <swiper-slide>
        <ProductItem title="Well that's" img={ProductImg5} />
      </swiper-slide>
    </swiper-container>
    <div class="products-navigation">
      <Button class="products-prev" type="icon" on:click={() => swiperEl?.swiper.slidePrev()}>
        <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0.497311 7.52922C0.106786 7.91975 0.106786 8.55291 0.497311 8.94343L6.86127 15.3074C7.2518 15.6979 7.88496 15.6979 8.27549 15.3074C8.66601 14.9169 8.66601 14.2837 8.27549 13.8932L2.61863 8.23633L8.27549 2.57947C8.66601 2.18895 8.66601 1.55578 8.27549 1.16526C7.88496 0.774736 7.2518 0.774736 6.86127 1.16526L0.497311 7.52922ZM14.6152 7.23633L1.20442 7.23633V9.23633L14.6152 9.23633V7.23633Z"
            fill="black"
          />
        </svg>
      </Button>
      <Button class="products-next" type="icon" on:click={() => swiperEl?.swiper.slideNext()}>
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
  .products-list {
    width: 100%;
    height: 100%;
  }
  .products-navigation {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: var(--space-base);
  }
</style>

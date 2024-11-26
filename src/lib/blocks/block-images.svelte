<script lang="ts">
  import IntersectionObserver from 'svelte-intersection-observer';
  import Img1 from '$lib/assets/images/full-img-1.png?enhanced';
  import Img2 from '$lib/assets/images/full-img-2.png?enhanced';
  import Img3 from '$lib/assets/images/full-img-3.png?enhanced';
  import { fade } from 'svelte/transition';

  let imgEl1: HTMLElement;
  let imgEl2: HTMLElement;
  let imgEl3: HTMLElement;
</script>

<section class="block-images">
  <IntersectionObserver element={imgEl1} let:intersecting>
    <div bind:this={imgEl1}>
      <enhanced:img src={Img1} alt="" class={`img ${intersecting ? 'img-in-place' : ''}`} width="1192" height="1098" />
    </div>
  </IntersectionObserver>
  <IntersectionObserver element={imgEl2} let:intersecting>
    <div bind:this={imgEl2}>
      <enhanced:img src={Img2} alt="" class={`img ${intersecting ? 'img-in-place' : ''}`} width="1192" height="1098" />
    </div>
  </IntersectionObserver>
  <IntersectionObserver element={imgEl3} let:intersecting>
    <div bind:this={imgEl3}>
      <enhanced:img src={Img3} alt="" class={`img ${intersecting ? 'img-in-place' : ''}`} width="1192" height="1098" />
    </div>
  </IntersectionObserver>
</section>

<style>
  .block-images {
    position: relative;
  }
  .img {
    display: block;
    opacity: 0.01;
    transition:
      opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
      transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    transition-delay: 0s, 0s;
    transition-duration: 0.8s, 0.8s;
    transition-property: opacity, transform;
    transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1), cubic-bezier(0.16, 1, 0.3, 1);
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  .img-in-place {
    transform: scale(1) translateY(0px);
    opacity: 1;
  }
</style>

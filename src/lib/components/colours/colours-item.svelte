<script lang="ts">
  import type { Picture } from '$lib/types';

  export let img: string | Picture;
</script>

<div class="colours-item">
  <enhanced:img src={img} alt="" class="colours-image" width="195" height="285" />
</div>

<style>
  .colours-item {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .colours-image {
    display: block;
    width: 12vw;
    height: 100%;
    object-fit: cover;
  }
</style>

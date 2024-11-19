<script>
  import ServiceItem from './service-item.svelte';

  import ServiceImg1 from '$lib/assets/images/service-1.png?enhanced';
  import ServiceImg2 from '$lib/assets/images/service-2.png?enhanced';
  import ServiceImg3 from '$lib/assets/images/service-3.png?enhanced';
  import ServiceIcon1 from '$lib/assets/icons/icon-service-1.svg?component';
  import ServiceIcon2 from '$lib/assets/icons/icon-service-2.svg?component';
  import ServiceIcon3 from '$lib/assets/icons/icon-service-3.svg?component';

  const text =
    'Chair witn minimal style old modern Wooden and plastic motrial Chair witn minimal style old modern Wooden and plastic motrial Chair witn minimal style old modern mWooden and plastic motrial';
</script>

<div class="services-list">
  <ul class="list">
    <li>
      <ServiceItem title="Stylish Chair" img={ServiceImg1} {text} icon={ServiceIcon1} />
    </li>
    <li class="center-item">
      <ServiceItem title="Lightings" img={ServiceImg2} {text} icon={ServiceIcon2} />
    </li>
    <li>
      <ServiceItem title="Round shape couch" img={ServiceImg3} {text} icon={ServiceIcon3} />
    </li>
  </ul>
</div>

<style>
  .list {
    display: flex;
    justify-content: space-evenly;
    list-style: none;
  }
  .center-item {
    margin-top: -100px;
  }
</style>

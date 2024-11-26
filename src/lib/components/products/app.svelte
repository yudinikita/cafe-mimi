<script lang="ts">
  import { transitions } from '@threlte/extras';
  import Girl from '$lib/components/girl.svelte';
  import { T } from '@threlte/core';

  export let rotation: [number, number, number] = [0, 0, 0];
  export let position: [number, number, number] = [0, 0, 0];

  transitions();
</script>

<T.PerspectiveCamera
  makeDefault
  position={[0.5, 1, 4]}
  fov={50}
  on:create={({ ref }) => {
    ref.lookAt(0, 1, 0);
  }}
  on:resize={({ ref }) => {
    ref.aspect = window.innerWidth / window.innerHeight;
    ref.updateProjectionMatrix();
  }}
/>

<T.DirectionalLight position={[10, 10, 100]} />

<T.AmbientLight intensity={0.5} />

<Girl {position} {rotation} />

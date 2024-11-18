<script context="module" lang="ts">
  export type SeoMetaData = {
    title: string;
    meta_description: string;
  };
</script>

<script lang="ts">
  export let seo: SeoMetaData | null | undefined;
</script>

<svelte:head>
  {#if seo}
    <title>{seo.title}</title>
    <meta name="description" content={seo.meta_description} />
    <meta property="og:title" content={seo.title} />
    <meta property="og:description" content={seo.meta_description} />
  {/if}
</svelte:head>

<script lang="ts">
  import { exclude } from '$lib/utils';

  export let type: 'primary' | undefined | null = 'primary';
  export let href: string | undefined | null = undefined;
  export let htmlType: 'button' | 'submit' | 'reset' = 'button';
  export let disabled: false | true = false;
  export let external: false | true = false;
  export let loading: false | true = false;

  let buttonClass: string;
  $: buttonClass = [
    'button',
    type ? `button-${type}` : null,
    disabled ? 'button-disabled' : null,
    loading ? `button-loading` : null,
    $$props.class,
  ]
    .filter(Boolean)
    .join(' ');
</script>

<svelte:element
  this={href ? 'a' : 'button'}
  type={href ? null : htmlType}
  disabled={href ? null : disabled || loading}
  class={buttonClass}
  role="button"
  rel={href ? 'noreferrer noopener' : null}
  target={external ? '_blank' : ''}
  href={href ?? null}
  tabindex="0"
  {...exclude($$restProps, ['class', 'type', 'htmlType'])}
  on:click
  on:change
  on:keydown
  on:keyup
  on:touchstart|passive
  on:touchend
  on:touchcancel
  on:mouseenter
  on:mouseleave
>
  <slot />
</svelte:element>

<style>
  .button {
    display: inline-flex;
    position: relative;
    justify-content: center;
    align-items: center;
    gap: 2px;
    transition: all var(--anim-delay) ease-in-out;
    cursor: pointer;
    border: none;
    background-color: transparent;
    color: var(--color-text);
    font-size: 20px;
    line-height: 140%;
    font-family: var(--font-button);
  }
  .button-disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  .button-primary {
    border: 1px solid var(--color-black);
    border-radius: 100px;
    padding: var(--space-sm) var(--space-lg);
    text-transform: uppercase;
  }
  .button-primary:hover {
    background-color: var(--color-black);
    color: var(--color-white);
  }
  .button-primary:active {
    transform: scale(0.95);
  }
</style>

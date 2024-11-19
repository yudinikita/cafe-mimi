import type { ComponentType, SvelteComponent } from 'svelte';
import type { SVGAttributes } from 'svelte/elements';

/**
 * The picture output format.
 */
export interface Picture {
  /**
   * Key is format. Value is srcset.
   */
  sources: Record<string, string>;
  img: {
    src: string;
    w: number;
    h: number;
  };
}

export type SvgComponentType = ComponentType<
  SvelteComponent<SVGAttributes<SVGSVGElement>, Record<string, unknown>, Record<string, unknown>>
>;

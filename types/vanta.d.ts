declare module "vanta/dist/vanta.fog.min" {
  type VantaFogOptions = {
    el: HTMLElement;
    THREE?: unknown;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    highlightColor?: number;
    midtoneColor?: number;
    lowlightColor?: number;
    baseColor?: number;
    blurFactor?: number;
    zoom?: number;
    speed?: number;
  };

  type VantaEffect = {
    destroy: () => void;
  };

  const FOG: (options: VantaFogOptions) => VantaEffect;
  export default FOG;
}

<div class="bg"></div>

<style>
  .bg {
    position: fixed;
    top: 0;
    left: 0;
    opacity: 0.4;
    z-index: -2;
    animation: bg-animation 20s infinite linear;
    background-color: var(--color-bg);
    background:
      radial-gradient(circle, transparent 20%, #ffffff 20%, #ffffff 80%, transparent 80%, transparent),
      radial-gradient(circle, transparent 20%, #ffffff 20%, #ffffff 80%, transparent 80%, transparent) 45px 45px,
      linear-gradient(#ebebeb 3.6px, transparent 3.6px) 0 -1.8px,
      linear-gradient(90deg, #ebebeb 3.6px, #ffffff 3.6px) -1.8px 0;
    background-size:
      90px 90px,
      90px 90px,
      45px 45px,
      45px 45px;
    width: 100%;
    height: 100%;
  }
  @keyframes bg-animation {
    from {
      background-position:
        90px 90px,
        90px 90px,
        45px 45px,
        45px 45px;
    }
    to {
      background-position:
        190px 190px,
        190px 190px,
        145px 145px,
        145px 145px;
    }
  }
</style>

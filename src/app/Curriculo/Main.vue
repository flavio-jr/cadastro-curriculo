<style>
  .fadeLeft-enter-active,
  .fadeInLeft,
  .fadeLeft-leave-active,
  .fadeOutLeft {
    animation-duration: 0.4s;
  }

  .clickable {
    cursor: pointer;
  }
</style>

<template>
  <div class="container-fluid">
    <transition
      name="custom-classes-transition"
      mode="out-in"
      enter-active-class="animated fadeInRight"
      leave-active-class="animated fadeOutLeft"
    >
      <router-view></router-view>
    </transition>
  </div>
</template>

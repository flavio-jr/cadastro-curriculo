<style>
  .fadeLeft-enter-active,
  .fadeInLeft,
  .fadeLeft-leave-active,
  .fadeOutLeft {
    animation-duration: 0.4s;
  }
</style>

<template>
  <div>
    <transition name="fadeLeft" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<template>
  <div class="dialog" v-if="show" @click="hideDialog">
    <div @click.stop class="dialog__content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import toggleMixin from '@/mixins/toggleMixin';

export default {
  name: 'my-dialog',
  mixins: [toggleMixin]
}
</script>
<style scoped>
.dialog {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
}

.dialog__content {
  position: absolute;
  background: var(--main-background-color);
  border-radius: 20px 20px;
  min-width: 750px;
  padding: 10px;
}
@media screen and (max-width: 785px) {
  .dialog__content {
    min-width: 100%;
  }
}
</style>
<template>
  <component class="w-full max-w-full max-h-10 flex items-center justify-center px-4 py-2 text-center uppercase tracking-widest"
             :is="type" :href="href">
    <slot/>
  </component>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: null
    },
    to: {
      type: String,
      default: null
    }
  },
  computed: {
    type() {
      if (this.href) {
        return 'a'
      } else {
        return 'button'
      }
    }
  }
}
</script>

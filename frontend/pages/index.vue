<template>
  <div>Page: foo</div>
</template>
<script lang="ts" setup>
const { find } = useStrapi4();

const response = find('products');

console.log(response);



</script>
<style scoped></style>

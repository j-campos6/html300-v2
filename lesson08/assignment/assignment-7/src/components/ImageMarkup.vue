<template>
<div class="d-flex flex-wrap justify-content-center ">
  <img @click="borderToggle()" :style = "style" v-for="(item , index) in images" v-bind:key="index" :src="item.url" :alt="item.alt" :title="item.title" class="img-fluid img-thumbnail">
</div>
</template>

<script>
import bordertoggleMixin from '../mixins/border-toggle-mixin'

export default {
  name: 'ImageMarkup',

  //mixin for border toggle on and off on pictures
  mixins: [bordertoggleMixin],

  //receiving props data from parent
  props: {
    //validating that the prop received (images) is an array.
    //Changed type to string to see the error in console to verify validation was working
    images: {
      type: Array
    }

  },

}
</script>

<style scoped>
img {
  width: 300px;
  height: 300px;
  /* object-fit: fill; */
}
</style>

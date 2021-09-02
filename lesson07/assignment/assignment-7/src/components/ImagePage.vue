<template>
<!-- Main -->
<div class="d-flex h-50 justify-content-center align-items-center">
  <div class="d-flex col-xl-12 col-lg-12 col-sm-12 col-12 bg-warning justify-content-center align-items-center">
    <!-- Using v-for on my image page, looping through array of images-->
    <img v-for = "image in images"  :src = "image" v-bind:key="image" alt="vacation-pictures" class="img-fluid img-thumbnail" >
  </div>
</div>
</template>

<script>
export default {
  name: 'ImagePage',
  props: {
    msg: String
  },

//Passing repeated content (Images in this case)
  data() {
    return {
      images : [
        require('../assets/thumbs/a.jpg'),
        require('../assets/thumbs/b.jpg'),
        require('../assets/thumbs/c.jpg'),
        require('../assets/thumbs/d.jpg')
      ],
    }
  }
}
</script>


<style scoped>

img{
  width: 200px;
  height: 200px;
  object-fit: fill;
}
</style>

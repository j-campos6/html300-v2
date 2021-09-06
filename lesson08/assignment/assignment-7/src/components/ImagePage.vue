<template>
<!-- Main -->
<div class="row min-vh-100 align-items-center bg-warning">

    <!-- nested image markup from component using props-->
    <imarkup v-bind:images = "images"></imarkup>

</div>
</template>

<script>

//importing image markup component
import ImageMarkup from '../components/ImageMarkup.vue'

export default {
  name: 'ImagePage',

  //prop data to send to child. Includes required src, title, alt
  data() {
      return {
        images: [{
            url: require('../assets/thumbs/a.jpg'),
            title: 'Yellowstone',
            alt: 'clear-lake'
          },

          {
            url: require('../assets/thumbs/b.jpg'),
            title: 'Dominican Republic',
            alt: 'mountain'
          },
          {
            url: require('../assets/thumbs/c.jpg'),
            title: 'Dominican Republic',
            alt: 'caribbean-beach'
          },
          {
            url: require('../assets/thumbs/d.jpg'),
            title: 'Paris',
            alt: 'hot-air-ballon'
          }
        ],
      }
    },
//exporting image markup component for use in html
  components: {
    // HomePage,
    // AccordionPage,
    // GridPage,
    // ImagePage
    'imarkup' : ImageMarkup
  }

  // ,

// //Passing repeated content (Images in this case)
//   data() {
//     return {
//       images : [
//         require('../assets/thumbs/a.jpg'),
//         require('../assets/thumbs/b.jpg'),
//         require('../assets/thumbs/c.jpg'),
//         require('../assets/thumbs/d.jpg')
//       ],
//     }
//   }
}
</script>


<style scoped>
/* //Transferred style to image markup */
/* img{
  width: 200px;
  height: 200px;
  object-fit: fill;
} */
</style>

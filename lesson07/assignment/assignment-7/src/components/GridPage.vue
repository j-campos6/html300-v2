<template>
<!-- Grid start: Sidebar and Main -->
<!-- Responsive to screen sizes -->
<div class="row h-75">
  <!-- sidebar with varying sizes -->
  <div class="col-xl-2 col-lg-4 col-sm-6 col-12 bg-danger">
  </div>
  <!-- Main with varying sizes -->
  <div class="d-flex col-xl-10 col-lg-8 col-sm-6 col-12 bg-warning">
    <!-- //using v-for to pass repeated content (cards) -->
      <b-card-group deck class="d-flex justify-content-center align-items-center">
        <b-card v-bind:key ="index" v-for = "(item, index) in cards" :title="item.title" :img-src="item.url" img-alt="Image" img-top>
          <b-card-text class="text-truncate" id="vacay"> {{ item.content }} </b-card-text>
          <template #footer>
            <small class="text-muted">{{timestamp}}</small>
          </template>
        </b-card>
      </b-card-group>


  </div>
</div>

<!-- Grid end -->
</template>


<script>
export default {
  name: 'GridPage',
  props: {
    msg: String
  },
  //repeated content below to be shown in html using v-for (see above card in the html)
    data() {
      return{
        timestamp: 'Last updated 5 minutes ago',
        cards: [{
            url: require('../assets/thumbs/b.jpg'),
            title: 'Yellowstone',
            content: 'Yellowstone National Park is a nearly 3,500-sq.-mile wilderness recreation area atop a volcanic hot spot. Mostly in Wyoming, the park spreads into parts of Montana and Idaho too. Yellowstone features dramatic canyons, alpine rivers, lush forests, hot springs and gushing geysers.'
          },

          {
            url: require('../assets/thumbs/d.jpg'),
            title: 'Dominican Republic',
            content: 'The Dominican Republic is a Caribbean nation that shares the island of Hispaniola with Haiti to the west. It is known for its beaches, resorts and golfing. Its terrain comprises rainforest, savannah and highlands, including Pico Duarte, the Caribbean’s tallest mountain. '
          }
        ]
      }
    }
  }
</script>

<style scoped>
/*****turning off app default css*****/
#vacay{
  -webkit-line-clamp: 4;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden !important;
  overflow-wrap: break-word !important;
  white-space: normal !important;
}

img{
  width:  auto;
  height: 200px;
  object-fit: fill;
}

</style>

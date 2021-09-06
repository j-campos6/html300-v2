<template>
<!-- Main -->
<div class="d-flex flex-column min-vh-100 justify-content-center align-items-center">
  <!-- <img class="img-fluid w-70 h-100" src="../assets/1.png" alt="Responsive image" id="beach"> -->

  <div>
    <b-card v-bind:key = "index" v-for = "(item,index) in cards" no-body class="overflow-hidden" style="max-width: 540px;">
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img :src="item.url" alt="Image" class="rounded-0"></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body :title = "item.title">
            <b-card-text class="text-truncate" id="vacay">{{ item.content }}</b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>

</div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: String
  },
//repeated content below to be shown in html using v-for (see above card in the html)
  data() {
    return {
      cards: [{
          url: require('../assets/1.png'),
          title: 'Tulum',
          content: 'Tulum is a town on the Caribbean coastline of Mexico’s Yucatán Peninsula. It’s known for its beaches and well-preserved ruins of an ancient Mayan port city. The main building is a large stone structure called El Castillo (castle), perched on a rocky cliff above the white sand beach and turquoise sea. Near the ruins is the Parque Nacional Tulum, a coastal area with mangroves and cenotes (natural limestone sinkholes). '
        },

        {
          url: require('../assets/2.png'),
          title: 'Deer Valley',
          content: 'Deer Valley Resort, located in Park City, Utah, is just 38 miles east of the Salt Lake International Airport. Deer Valley offers luxurious amenities such as ski valets, groomed-to-perfection slopes, on-site child care and gourmet dining in three elegant day lodges. '
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
</style>

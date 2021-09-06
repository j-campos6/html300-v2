
<template>
<div id="app" class="container-fluid">
  <main class="main" style="height: 100vh ;">

  <!-- Header -->
  <div class="row h-25">
    <div class="col-xl-12 col-lg-12 col-sm-12 col-12 bg-success">
    </div>
  </div>

<!-- Fixed navbar toggle on Boostrap-vue. Changed from boostrap only to boostrap vue classes. -->
  <div class="row">
    <div class="col-xl-12 col-lg-12 col-sm-12 col-12 bg-dark">
      <b-navbar toggleable type="dark" variant="dark" class="navbar-expand-lg">
        <router-link  class="navbar-brand" to = '/'>TravelJunkie</router-link>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav class="justify-content-center">
        <b-navbar-nav>
            <b-nav-item><router-link to = '/' class="nav-link">Home</router-link></b-nav-item>
            <b-nav-item><router-link to = '/images' class="nav-link">Images</router-link></b-nav-item>
            <b-nav-item><router-link to = '/grid'  class="nav-link">Bootstrap Grid</router-link></b-nav-item>
            <b-nav-item><router-link to = '/accordion' class="nav-link">Accordion</router-link></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
      </b-navbar>
    </div>
  </div>
<!-- /////Page components go here///// -->
  <router-view></router-view>
  <!-- <HomePage /> -->
  <!-- <ImagePage /> -->
  <!-- <GridPage /> -->
  <!-- <AccordionPage /> -->
<!--//////////////////////-->


  <!-- Footer -->
  <div class="row mt-a min-vw-100 py-3 bg-primary">
    <div class="col-xl-12 col-lg-12 col-sm-12 col-12">
      <!-- Using v-if and v-else statements to change content -->
      <button v-on:click="sunny = !sunny">It's Sunny</button>
      <button v-on:click="cloudy = !cloudy">It's Cloudy</button>
      <p v-if="sunny">Sun! Yaay!</p>
      <p v-else-if="cloudy">Oh no, it's cloudy!</p>
    </div>
  </div>

</main>
</div>
</template>

<script>

//////////Imported pages go here//////////
// import HomePage from './components/HomePage.vue'
// import AccordionPage from './components/AccordionPage.vue'
// import GridPage from './components/GridPage.vue'
// import ImagePage from './components/ImagePage.vue'

//////////Imported Pages End //////////

export default {
  name: 'App',
  components: {
    // HomePage,
    // AccordionPage,
    // GridPage,
    // ImagePage
  },

  data() {
    return {
      sunny: false,
      cloudy: false
    }
  }

}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>


<template>
<div id="app" class="container-fluid">
  <main class="main" style="height: 100vh ;">

  <!-- Header -->
  <div class="row h-25">
    <div class="col-xl-12 col-lg-12 col-sm-12 col-12 bg-success">
    </div>
  </div>

  <!-- Nav Bar -->
  <div class="row">
    <div class="col-xl-12 col-lg-12 col-sm-12 col-12 bg-dark">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <router-link  class="navbar-brand" to = '/'>TravelJunkie</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item"><router-link to = '/' class="nav-link">Home</router-link></li>
            <li class="nav-item"><router-link to = '/images' class="nav-link">Images</router-link></li>
            <li class="nav-item"><router-link to = '/grid'  class="nav-link">Bootstrap Grid</router-link></li>
            <li class="nav-item"><router-link to = '/accordion' class="nav-link">Accordion</router-link></li>
          </ul>
        </div>
      </nav>
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
  <div class="row h-25">
    <div class=" col-xl-12 col-lg-12 col-sm-12 col-12 bg-primary">
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

/*css from assignment6 */
.navbar .navbar-nav .nav-item:not(:last-child) .nav-link {
  border-right: 2px solid #000000;
}

</style>

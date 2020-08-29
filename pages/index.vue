<template>
  <div class="app">
    <Nav />
    <div class="about-cont">
      <div class="parallax-container">
        <v-parallax src="https://d2fbv9aul2xr54.cloudfront.net/nyc.jpg" class="background" />
      </div>
      <Landing v-bind="aboutLanding" />
      <div id="inner-wrapper">
        <InfoBlock v-bind="personalDesc" />
        <h2 class="port-header">
          My Journey
        </h2>
        <Carousel width="100%" height="50%">
          <ExperienceBlock
            v-for="item in journey"
            :key="item.title"
            v-bind="item"
          />
        </Carousel>
      </div>
    </div>
  </div>
</template>

<script>
import { journey, aboutLanding, personalDesc } from '../assets/content.js'
import Landing from '../components/Landing.vue'
import InfoBlock from '../components/InfoBlock.vue'
import ExperienceBlock from '../components/ExperienceBlock.vue'
import Carousel from '../components/Carousel.vue'
import Nav from '../components/Nav.vue'

export default {
  name: 'App',
  components: {
    Landing,
    InfoBlock,
    ExperienceBlock,
    Carousel,
    Nav
  },
  data () {
    return {
      journey,
      aboutLanding,
      personalDesc
    }
  }
}
</script>

<style>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-flow: column;
  height: 275vh;
  width: 100%;
  background-color: #555B6E;
  color: #E8EBE4;
  z-index: -1;
}
#inner-wrapper {
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 90%;
  text-align: left;
  z-index: 1;
  align-self: center;
}
.header {
  height: 10%;
  width: 100%;
  text-align: left;
  padding: 1%;
  color: #C4D3E7;
}
.background {
  height: 100%;
  width: 100%;
  background-color: rgba(149, 144, 168, 0.6);
}
.parallax-container {
  position: relative;
  z-index: 1;
  width: 100%;
}
.about-cont {
  height: 100%;
  width: 100%;
  z-index: 0;
  display: flex;
  flex-flow: column;
  align-items: center;
  overflow: hidden;
}
@media (max-width: 850px) {
  #inner-wrapper {
    width: 100%;
  }
  .app {
    height: 340vh;
  }
}
</style>

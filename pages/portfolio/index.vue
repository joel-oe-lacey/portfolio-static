<template>
  <div class="app">
    <Nav />
    <div class="port-wrapper">
      <div class="parallax-container">
        <parallax>
          <img src="https://d2fbv9aul2xr54.cloudfront.net/street.jpg" class="background">
        </parallax>
      </div>
      <Landing v-bind="portLanding" />
      <Carousel width="90%" height="40%" :style="{ 'margin-top': '5%' }">
        <PortfolioBlock
          v-for="(item, index) in projects"
          :key="index"
          v-bind="item"
        />
      </Carousel>
      <footer class="about-site">
        <h2 class="port-header">
          About This Site
        </h2>
        <p>This website was created as an exploration into Vue. It is hosted statically on AWS, images and other assets are served dynamically via Cloudfront. About Page background by Colton Duke on Unsplash. Portfolio Page background by Yassine Khalfalli on Unsplash. Icons made by Freepik from www.flaticon.com.</p>
        <p><strong>Update Sept. 2nd 2020:</strong> The site has been converted from Vue's default Client Side Rendering, to an entirely static approach using Nuxt. Some responsiveness and styling improvements have been made. Vuetify components are occasionally referenced to reduce bloat. HTML5 videos included for portfolio items.</p>
        <p><strong>Pending Changes:</strong> Closer alignment to the Vue style guide, improved transitions and interactivity, and a section for personal contacts and blog posts.</p>
        <v-btn id="resume" href="https://joel-oe-lacey-resources.s3.amazonaws.com/resume-joellacey.pdf" rounded class="btn">
          View My Resume
        </v-btn>
      </footer>
    </div>
  </div>
</template>

<script>
import Parallax from 'vue-parallaxy'
import { projects, portLanding } from '../../assets/content.js'
import PortfolioBlock from '../../components/PortfolioBlock.vue'
import Carousel from '../../components/Carousel.vue'
import Landing from '../../components/Landing.vue'
import Nav from '../../components/Nav.vue'

export default {
  name: 'Portfolio',
  components: {
    PortfolioBlock,
    Carousel,
    Parallax,
    Landing,
    Nav
  },
  data () {
    return {
      projects,
      portLanding
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
.port-wrapper {
  display: flex;
  flex-flow: column;
  align-items: center;
  height: 100%;
  width: 100%;
}
.port-header {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 5%;
  width: 90%;
  color: #C4D3E7;
  font-size: 1.8rem;
}
.about-site {
  width: 90%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
#resume {
  height: 15%;
  width: 75%;
  align-self: center;
}
@media (max-width: 850px) {
  .app {
    height: 340vh;
  }
}
</style>

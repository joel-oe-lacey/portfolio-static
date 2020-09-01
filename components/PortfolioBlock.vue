
<template>
  <section class="portfolio-item">
    <section class="portfolio-body">
      <h1 class="proj-header">
        {{ title }}
      </h1>
      <section class="project-img-cont">
        <img class="project-img" :src="img">
      </section>
      <section class="portfolio-desc">
        <p v-for="(paragraph, index) in desc" :key="index">
          {{ paragraph }}
        </p>
      </section>
      <section class="stack">
        <p
          v-for="item in stack"
          :key="item"
        >
          {{ item }}
        </p>
      </section>
      <section v-if="live" class="btn-cont-live">
        <v-btn :href="live" class="btn">
          Live Site
        </v-btn>
      </section>
      <section class="btn-cont-github">
        <v-btn :href="github" class="btn">
          Github
        </v-btn>
      </section>
    </section>
  </section>
</template>

<script>
export default {
  name: 'PortfolioBlock',
  components: {
  },
  props: ['title', 'github', 'live', 'desc', 'stack', 'img']
}
</script>

<style>
.portfolio-body {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 10% 70% 5% 15%;
  grid-gap: 2%;
  grid-template-areas:
  "header header"
  "about img"
  "stack stack"
  "live github";
  height: 96%;
  width: 98%;
  padding: 3%;
  border-bottom-right-radius: 4% 9%;
  border-top-right-radius: 4% 9%;
  border-bottom-left-radius: 4% 9%;
  border-top-left-radius: 4% 9%;
  background-color: #9590A8;
}
.portfolio-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: #C4D3E7;
  border-bottom-right-radius: 5% 10%;
  border-top-right-radius: 5% 10%;
  border-bottom-left-radius: 5% 10%;
  border-top-left-radius: 5% 10%;
  transition: 800ms;
}
.proj-header {
  font-size: 2em;
  grid-area: header;
  color: #82455D;
}
.portfolio-desc {
  grid-area: about;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.stack {
  grid-area: stack;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  font-weight: bold;
  font-size: 1.3rem;
  color: #82455D;
}
.project-img {
  height: 90%;
  width: 90%;
  object-fit: scale-down;
  background: #C4D3E7;
}
.project-img-cont {
  height: 100%;
  width: 100%;
  grid-area: img;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.btn-cont-github {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  text-decoration: none;
  grid-area: github;
}
.btn-cont-live {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  grid-area: live;
}
.btn {
  height: 60%;
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background-color: #C4D3E7;
  color: #82455D;
  font-size: 1.8rem;
  font-weight: bold;
  border-bottom-right-radius: 5% 30%;
  border-top-right-radius: 5% 30%;
  border-bottom-left-radius: 5% 30%;
  border-top-left-radius: 5% 30%;
}
.btn:hover {
  cursor: pointer;
  box-shadow: 0.1rem 0.3rem 0.6rem #CEA1B3;
  transition: 300ms;
}
@media (max-width: 850px) {
  .portfolio-body {
    height: 98%;
    display: flex;
    flex-direction: column;
    padding: 1%;
    border-bottom-right-radius: 11% 6%;
    border-top-right-radius: 11% 6%;
    border-bottom-left-radius: 11% 6%;
    border-top-left-radius: 11% 6%;
  }
  .portfolio-body > * {
    margin: 2%;
  }
  .portfolio-desc > * {
    padding: 2%;
  }
  .portfolio-item {
    padding: 1%;
    border-bottom-right-radius: 11% 6%;
    border-top-right-radius: 11% 6%;
    border-bottom-left-radius: 11% 6%;
    border-top-left-radius: 11% 6%;
  }
  .proj-header {
    font-size: 1.6rem;
    text-align: center;
  }
  .project-img-cont {
    border-bottom-right-radius: 11% 6%;
    border-top-right-radius: 11% 6%;
    border-bottom-left-radius: 11% 6%;
    border-top-left-radius: 11% 6%;
  }
  .btn {
    height: 60%;
    width: 80%;
  }
  .btn-cont-github,
  .btn-cont-live {
    height: 15%;
  }
  .project-img-cont {
    height: 30%;
  }
}
</style>

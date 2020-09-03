<template>
  <section class="landing">
    <section class="inner-landing">
      <h1 class="landing-text">
        {{ header }}
      </h1>
      <section v-if="body" class="working-skills">
        <p
          v-for="(item, index) in body"
          :key="index"
        >
          {{ item }}
        </p>
      </section>
    </section>
  </section>
</template>

<script>
export default {
  name: 'Landing',
  props: ['header', 'body']
}
</script>

<style>
.landing {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80%;
  width: 100%;
  z-index: 2;
  position: absolute;
}
.inner-landing {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 3%;
  height: 40%;
  width: 60%;
  background-color: rgba(149, 144, 168, 0.6);
  border-bottom-right-radius: 5% 10%;
  border-top-right-radius: 5% 10%;
  border-bottom-left-radius: 5% 10%;
  border-top-left-radius: 5% 10%;
}
.landing-text {
  font-size: 1.6rem;
}
.working-skills {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  font-weight: bold;
  font-size: 1.2rem;
  height: 50%;
  width: 80%;
}
.working-skills > p {
  margin: 2%;
}
@media (max-width: 850px) {
  .inner-landing {
    height: 45%;
    width: 80%;
  }
  .landing-text {
    font-size: 1.4rem;
  }
}
</style>

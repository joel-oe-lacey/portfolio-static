<template>
  <section id="nav">
    <nuxt-link to="/" class="link">
      About Me
    </nuxt-link>
    <nuxt-link to="/portfolio" class="link">
      Porfolio
    </nuxt-link>
    <!-- <router-link to="/content" class="link">Content</router-link> -->
  </section>
</template>

<script>
export default {
  name: 'Nav',
  components: {
  }
}
</script>

<style>
#nav {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  margin-top: auto;
  height: 100px;
  width: 40%;
  min-width: 30%;
  font-size: 2rem;
  z-index: 9999;
  align-self: flex-end;
}
.link {
  text-decoration: none;
  color: #E8EBE4;
  padding: 1%;
  border-bottom-right-radius: 15% 30%;
  border-top-right-radius: 15% 30%;
  border-bottom-left-radius: 15% 30%;
  border-top-left-radius: 15% 30%;
  height: 80%;
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.link:hover {
  color: #C4D3E7;
  transition: .5s;
}
@media (max-width: 850px) {
  #nav {
    width: 100%;
  }
  .link {
    width: 50%;
  }
}
</style>

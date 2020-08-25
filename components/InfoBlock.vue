
<template>
  <section class="about">
    <section class="portrait-cont">
      <img class="portrait" src="https://d2fbv9aul2xr54.cloudfront.net/profile.jpg">
    </section>
    <article class="info">
      <h2 class="name-header">
        {{ header }}
      </h2>
      <p
        v-for="(item, index) in body"
        :key="index"
      >
        {{ item }}
      </p>
      <section class="contacts">
        <a href="https://www.linkedin.com/in/joellacey/" class="contact-link">
          <img class="icon" src="../assets/linkedin.svg">
        </a>
        <a href="https://github.com/joel-oe-lacey" class="contact-link">
          <img class="icon" src="../assets/github.svg">
        </a>
        <a href="https://twitter.com/LaceyJoel" class="contact-link">
          <img class="icon" src="../assets/twitter.svg">
        </a>
        <a href="mailto:joellaceybusiness@gmail.com" class="contact-link">
          <img class="icon" src="../assets/email.svg">
        </a>
      </section>
    </article>
  </section>
</template>

<script>
export default {
  name: 'InfoBlock',
  components: {
  },
  props: ['header', 'body']
}
</script>

<style>
.about {
  height: 40%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.portrait-cont {
  height: 100%;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.portrait {
  height: 80%;
  width: 80%;
  object-fit: contain;
  background: #C4D3E7;
  box-shadow: 0 4px 8px rgba(22, 15, 15, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19);
}
.info {
  height: 100%;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
}
.name-header {
  font-size: 1.8rem;
  color: #CEA1B3;
}
.contacts {
  height: 15%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.contact-link {
  height: 80%;
  width: 20%;
}
.icon {
  height: 100%;
  width: 100%;
  object-fit: contain;
}
@media (max-width: 850px) {
  .about {
    height: 60%;
    flex-direction: column;
  }
  .portrait-cont,
  .info {
    width: 90%;
  }
  .info > * {
    margin: 2%;
  }
  .name-header {
    font-size: 1.5rem;
    align-self: center;
  }
  .contacts {
    width: 100%;
    align-self: center;
  }
}
</style>

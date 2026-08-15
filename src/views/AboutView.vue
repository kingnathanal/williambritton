<template>
  <div class="about">
    <p class="about-block">
      <span class="h3">~ ABOUT</span><br /><br />
      I specialize in creating functional software solutions. <br /><br />
      Currently I am Senior Software Engineer with General Motors. My work experience extends
      anywhere from development of web to desktop based applications. I play a role in architecting
      backend systems, while also diving into everything from database designing, Big Data
      reporting, triaging, deployment planning, security administration and on-premise or cloud
      based hosting. Grab a copy of my resume for more details... I am currently looking for
      contributing opportunities in the open source community... When Im not coding, I enjoy taking
      photos:
      <br /><br />
      <img
        alt="picture of a genius"
        src="https://hyyercodesa.blob.core.windows.net/xpublic/me.jpg"
        class="me-logo"
      />
    </p>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

.h3 {
  font-size: 1.6rem;
  font-weight: 600;
  color: #ffffff;
}

.about-block {
  font-size: 1rem;
  color: #ffffff;
  line-height: 1.5;
  padding-left: 1rem;
  border-left: 0.4px dashed #ffffff;
}

img {
  width: 50%;
  height: auto;
}
</style>

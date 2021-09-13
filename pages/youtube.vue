<template>
  <div id="thumbnaillab" class="youtube">
    <div id="hero">
      <div id="background">
        <div class="row">
          <div class="thumbnail-container">
            <div class="thumbnail"></div>
          </div>
          <div class="thumbnail-container">
            <div class="thumbnail"></div>
          </div>
          <div class="thumbnail-container">
            <div class="thumbnail"></div>
          </div>
          <div class="thumbnail-container">
            <div class="thumbnail"></div>
          </div>
        </div>
        <div class="row">
          <div class="thumbnail-container">
            <div class="thumbnail"><span style="transform: scaleX(0.9);">YouTube</span></div>
          </div>
          <div class="thumbnail-container">
            <div class="thumbnail below-phone"></div>
          </div>
          <div class="thumbnail-container">
            <div class="thumbnail"></div>
          </div>
          <div class="thumbnail-container">
            <div class="thumbnail"></div>
          </div>
        </div>
        <div class="row">
          <div class="thumbnail-container">
            <div class="thumbnail empty"></div>
          </div>
          <div class="thumbnail-container">
            <div class="thumbnail empty"></div>
          </div>
          <div class="thumbnail-container">
            <div class="thumbnail"></div>
          </div>
          <div class="thumbnail-container">
            <div class="thumbnail"></div>
          </div>
        </div>
      </div>
      <router-link to="/" id="icon"><img src="/icon-placeholder.png" width="100%" /></router-link>
      <div id="phone">
        <div id="phone-aspect-ratio">
          <div id="screenshots">

          </div>
        </div>
      </div>
    </div>
    <main>
      <h1>Thumbnail Lab</h1>
      <p>Thinking about how to make beautiful thumbnails that attract viewers?</p>
      <div id="download-from" class="buttons-container">
        <a href="javascript: void(0);">
          <img src="/Download_on_the_App_Store_Badge.svg" width="100%" />
        </a>
        <a class="android-button" href="javascript: void(0);" style="border-radius: 7px;">
          <img src="/google-play-badge.png" width="100%" />
        </a>
      </div>
      <h2>Other Use Cases:</h2>
      <div id="use-cases" class="buttons-container">
        <a href="javascript: void(0);"><h2>Instagram</h2></a>
      </div>
    </main>
    <footer>
      <p>Google Play and the Google Play logo are trademarks of Google LLC.</p>
      <p>App Store® and iPhone® are trademarks of Apple Inc.</p>
    </footer>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">

</style>
<template>
  <div id="thumbnaillab">
    <div id="hero">
      <div id="background">
        <div class="row">
          <div class="thumbnail-container">
            <div class="thumbnail"></div>
          </div>
          <div class="thumbnail-container">
            <div class="thumbnail youtube"></div>
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
            <div class="thumbnail lab"></div>
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
            <div class="thumbnail youtube"><span style="transform: scaleX(0.9);">YouTube</span></div>
          </div>
          <div class="thumbnail-container">
            <div class="thumbnail"></div>
          </div>
        </div>
      </div>
      <header>
        <router-link to="#main">
          <div id="icon-image"><img id="icon-image" src="/icon.png" width="100%" /></div>
        </router-link>
      </header>
      <div id="phone">
        <div id="phone-aspect-ratio">
          <div id="screenshots">
            <img src="/screenshots/screenshot 2.png" width="100%" />
          </div>
        </div>
      </div>
    </div>
    <main id="main">
      <router-link to="#main">
        <div id="icon-image"><img id="icon-image" src="/icon.png" width="100%" /></div>
      </router-link>
      <h1>Thumbnail Lab</h1>
      <p>Thinking about how to make beautiful thumbnails to attract viewers?</p>
      <div id="download-from" class="buttons-container">
        <a href="javascript: void(0);" @click="$ga.event({eventCategory: 'downloads',eventAction: 'click',eventLabel: 'iOS'})">
          <img src="/Download_on_the_App_Store_Badge.svg" width="100%" />
        </a>
        <a class="android-button" href="javascript: void(0);" @click="$ga.event({eventCategory: 'downloads',eventAction: 'click',eventLabel: 'Android'})" style="border-radius: 7px;">
          <img src="/google-play-badge.png" width="100%" />
        </a>
      </div>
      <h2>Other Use Cases:</h2>
      <div id="use-cases" class="buttons-container">
        <router-link to="/instagram"><h2>Instagram</h2></router-link>
      </div>
    </main>
    <footer>
      <p style="font-size: 14px;color: black;margin-bottom: 50px;">Made with &#x2764;&#xfe0f;by <a style="font-weight: bold;" href="https://devjeff.info" target="_blank">DevJeff</a></p>
      <p>Google Play and the Google Play logo are trademarks of Google LLC.</p>
      <p>App Store® and iPhone® are trademarks of Apple Inc.</p>
    </footer>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Thumbnail Lab - make your own stunning YouTube thumbnails'
  }
}
</script>

<style lang="scss">

</style>
<template>
  <section class="section-team" id="team">
    <div class="container">
      <div class="row">
        <div class="col-lg-9 order-2 order-lg-1">
          <div class="row no-gutters">
            <div class="col-auto">
              <LTeam
                name="Dev Patel"
                imdb="https://www.imdb.com/name/nm2353862/"
                poster="team-1@2x.png"
                posterhd="team-1@2x.png"
                photo="photo-1@2x.png"
                photohd="photo-1@2x.png"
              />
            </div>
            <div class="col-auto">
              <LTeam
                name="Tilda <br>Cobham-Hervey"
                imdb="https://www.imdb.com/name/nm5315479/?ref_=fn_al_nm_1"
                poster="team-2@2x.png"
                posterhd="team-2@2x.png"
                photo="photo-2@2x.png"
                photohd="photo-2@2x.png"
              />
            </div>
            <div class="col-auto">
              <LTeam
                name="Natalya <br>Pavchinskaya"
                imdb="https://www.imdb.com/name/nm8847254/?ref_=nv_sr_srsg_0"
                instagram="https://www.instagram.com/qualitylight/"
                poster="team-3@2x.png"
                posterhd="team-3@2x.png"
                photo="photo-3@2x.png"
                photohd="photo-3@2x.png"
              />
            </div>
            <div class="col-auto">
              <LTeam
                name="Jomon <br class='d-lg-none'>Thomas"
                imdb="https://www.imdb.com/name/nm3289797/"
                poster="team-4@2x.png"
                posterhd="team-4@2x.png"
                photo="photo-5@2x.png"
                photohd="photo-5@2x.png"
              />
            </div>
            <div class="col-auto">
              <LTeam
                name="Aleksandr <br>Shlemin"
                telegram="https://t.me/xttzer"
                poster="team-5@2x.png"
                posterhd="team-5@2x.png"
                photo="photo-4@2x.png"
                photohd="photo-4@2x.png"
              />
            </div>
            <div class="col-auto">
              <LTeam
                name="Konstantin <br>Vinogradov"
                linkedin="https://www.linkedin.com/in/vinocosta/"
                telegram="https://t.me/vino_costa"
                poster="team-6.png"
                posterhd="team-6@2x.png"
                photo="photo-6@2x.png"
                photohd="photo-6@2x.png"
              />
            </div>
            <div class="col-auto">
              <LTeam
                name="Chris Lie"
                instagram="https://www.instagram.com/chrisliecaravan/"
                twitter="https://mobile.twitter.com/chrisliecaravan"
                poster="team-7@2x.png"
                posterhd="team-7@2x.png"
                photo="photo-7@2x.png"
                photohd="photo-7@2x.png"
                horizontal="1"
              />
            </div>
            <div class="col-lg" v-show="$screen.width > 991">
              <p class="desc">We are a collaborative of creators committed to gripping the world with gorgeous visuals and impactful stories.</p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 order-1 order-lg-2">
          <div class="pre-title"><span>team</span></div>
          <h2 class="title"><span>Nothing</span> falls short of our ambitions</h2>
          <p class="desc" v-show="$screen.width <= 991">We are a collaborative of creators committed to gripping the world with gorgeous visuals and impactful stories.</p>
          <div v-show="$screen.width > 991" class="partners">
            <div class="partner__img partner__img--1">
              <a href="https://www.spectrestudios.com.au/" target="_blank">
                <img v-lazy="'src/assets/images/partner/spectre-studios-logo.png'" data-srcset="src/assets/images/partner/spectre-studios-logo@2x.png 2x" class="img-responsive" width="200" height="100">
              </a>
            </div>
            <div class="partner__img partner__img--2">
              <a href="https://www.syaconcept.com/" target="_blank">
              <img v-lazy="'src/assets/images/partner/sya-concept-logo.png'" data-srcset="src/assets/images/partner/sya-concept-logo@2x.png 2x" class="img-responsive" width="200" height="100">
              </a>
            </div>
            <div class="partner__img partner__img--3">
              <a href="http://caravanstudio.com/" target="_blank">
              <img v-lazy="'src/assets/images/partner/caravan-logo.png'" data-srcset="src/assets/images/partner/caravan-logo@2x.png 2x" class="img-responsive" width="200" height="100">
              </a>
            </div>
          </div>
        </div>
      </div>
      <div v-show="$screen.width <= 991" class="partners">
        <div  class="partner__img partner__img--1">
          <a href="https://www.spectrestudios.com.au/" target="_blank">
          <img v-lazy="'src/assets/images/partner/spectre-studios-logo.png'" data-srcset="src/assets/images/partner/spectre-studios-logo@2x.png 2x" class="img-responsive" width="200" height="100">
          </a>
        </div>
        <div class="partner__img partner__img--2">
          <a href="https://www.syaconcept.com/" target="_blank">
          <img v-lazy="'src/assets/images/partner/sya-concept-logo.png'" data-srcset="src/assets/images/partner/sya-concept-logo@2x.png 2x" class="img-responsive" width="200" height="100">
          </a>
        </div>
        <div class="partner__img partner__img--3">
          <a href="http://caravanstudio.com/" target="_blank">
          <img v-lazy="'src/assets/images/partner/caravan-logo.png'" data-srcset="src/assets/images/partner/caravan-logo@2x.png 2x" class="img-responsive" width="200" height="100">
          </a>
        </div>
      </div>
      <div class="join-btn" @mouseover="hoverOver" @mouseout="hoverOut" :class="classes">
        <span>Join the Roborovski Revolution! </span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'screenTeam',
  data () {
    return {
      classes: []
    }
  },
  methods: {
  	hoverOver: function() {
    	console.log('over');
    	this.classes = ['animate__animated', 'animate__headShake']
    },
    hoverOut: function() {
    	console.log('out');
    	this.classes = []
    },
    hoverOutTimeout: function() {
    	setTimeout(() => { 
      	console.log('out');
    		this.classes = []
      }, 1000);
    },
  }
}
</script>

<style lang="sass">
  @import "../assets/sass/mixins/_mixins"
  .section-team
    padding: 7.2rem 0
    background-image: linear-gradient(to bottom, #11151b, $socket-d)
    overflow: hidden

    +lg
      padding: 3.2rem 0 
    .desc
      padding: 4.8rem
      margin: 0
      +media-i(992, 1400)
        max-width: 19rem
        padding: .8rem
      +lg
        padding: 0
        margin: 0 0 3.2rem
    .container
      position: relative
    .row
      position: relative
      z-index: 10
    .team
      +media-i(992, 1400)
        max-width: 19rem

  .join-btn
    margin-top: 14.4rem
    border-radius: 1.2rem
    padding: 1.2rem
    display: block
    cursor: pointer
    display: flex
    justify-content: center
    background-color: #66312d

    font-family: Karantina
    @include font(4.8rem, 1em, bold)
    color: #fe7a70
    text-transform: uppercase
    +lg
      margin-top: 3.2rem
      @include font(3rem, 1em, bold)
      justify-content: center
      text-align: center
  .partner__img
    margin-bottom: 1.6rem
    img
</style>
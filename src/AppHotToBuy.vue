<template>
  <div>
    <section class="section-privacy">
      <div class="container" data-aos="fade-in" data-delay="200">
        <div class="pre-title">
          <router-link to="/" class="pre-title-back">&larr; Go to homepage</router-link>
        </div>
        <div class="row">
          <div class="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
            <h1 class="title">How to buy</h1>
            <div class="textpage">
              <p>Follow these instructions</p>
              <h2 class="title">SETUP WALLET</h2>
              <p>You will need <a href="https://metamask.io/" target="_blank" rel="external nofollow">MetaMask</a> to mint one of our Roborovski NFTs. Install the chrome extension or download the mobile app to get started. Please reference <a href="https://www.one37pm.com/nft/tech/how-to-set-up-metamask-wallet" target="_blank" rel="external nofollow">this article</a> to learn how to set up MetaMask. If you are curious, other wallet options <a href="https://ethereum.org/en/wallets/" target="_blank" rel="external nofollow">can be found here.</a></p>
              <h2 class="title">BUY ETH</h2>
              <p>Our Roborovski NFT price is TBA, but you will need to pay extra transaction fee (referred to as “gas”) to the Ethereum network to mint the NFT. You can directly deposit to your MetaMask wallet or use a popular exchange like <a href="https://www.coinbase.com/" target="_blank" rel="external nofollow">Coinbase</a>, <a href="https://www.gemini.com/" target="_blank" rel="external nofollow">Gemini</a>, or a service like <a href="https://www.gemini.com/" target="_blank" rel="external nofollow">MoonPay</a> to acquire a small amount of ETH. Typically 0.1 ETH will be more than sufficient for gas, but <a href="https://etherscan.io/gastracker" target="_blank" rel="external nofollow">gas can vary</a> depending on how busy the network is.</p>
              <h2 class="title">TRANSFER ETH</h2>
              <p>You may need to transfer ETH from Coinbase or Gemini to your MetaMask wallet. Please follow their guides for sending ETH to your wallet address (starts with “0x”). Once transferred, you will be ready to  mint your ROBO!</p>

            </div>
          </div>
        </div>
      </div>
    </section>

    <LFooter />
  </div>
</template>

<script>

export default {
  name: 'AppHotToBuy',
  metaInfo: {
    title: 'How to buy',
    titleTemplate: '%s'
  },
}
</script>


<style lang="sass">
  @import "./assets/sass/mixins/_mixins"
  .section-privacy
    background-image: linear-gradient(to bottom, #11151b, $socket-d)
    padding: 7.2rem 0
    position: relative
    z-index: 1
    display: block
    width: 100%
    min-height: calc(100vh - 22rem)
    +lg
      padding: 3.2rem 0
</style>
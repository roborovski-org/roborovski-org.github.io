<template>
  <div>
    
    <CoolLightBox 
      :items="items" 
      :index="index"
      @close="index = null">
    </CoolLightBox>

  <main class="main-screen" data-aos="fade-up">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-xl-4">
          <div class="main" data-aos="fade-right">
            <div class="main__logo">
              <img v-lazy="'src/assets/images/roborovski-sign.png'" width="424" height="80" alt="" title="" class="lazy" @mouseover="hoverOver" @mouseout="hoverOut" :class="classes">
            </div>
            
            <p class="desc">Take a part of the origin story and the ultimate master plan of a little hamster named Roborovski. Discover this superb 10,000 piece collection of NFT artwork</p>
     
            <div class="main__countdown">
              <div class="main__countdown-item">
                <flipCountdown deadline="2022-01-24 00:00:00"></flipCountdown>
              </div>
              <div class="main__mint" @click = "showPopup()">
                <div class="main__mint-i">
                  <div class="main__mint-row">
                    <span>Mint</span> <img v-lazy="'src/assets/images/mint/emoji-1.png'" alt="" title="">

                  </div>
                  <div class="main__mint-row">
                    <img v-lazy="'src/assets/images/mint/emoji-2.png'" alt="" title=""><span>your</span>
                  </div>
                  <div class="main__mint-row">
                    <span>Robo</span><img v-lazy="'src/assets/images/mint/emoji-3.png'" alt="" title="">
                  </div>
                </div>
              </div>
            </div>

            <div class="main__roborovski">
              
              <img v-lazy="'src/assets/images/roborovski.png'" data-srcset="src/assets/images/roborovski@2x.png 2x" width="240" height="240" alt="" title="" class="lazy" @mouseover="hoverOverRo" @mouseout="hoverOut" :class="classesRo">

            </div>
          </div>

        </div>
        <div class="col-lg-6 col-xl-3 offset-xl-5">
          <div class="main__lead" data-aos="fade-left">
            <div class="main__lead-actions">

              <div class="video__box-btn" v-show="$screen.width <= 991" @click="index = 0">
                <button class="btn-round">
                  <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fill-rule="evenodd">
                      <path d="M0 0h32v32H0z"/>
                      <path d="M11.29 23.573c.395 0 .737-.123 1.186-.386l10.467-6.065c.783-.457 1.143-.844 1.143-1.459 0-.615-.36-1.002-1.143-1.459L12.476 8.14c-.449-.255-.791-.387-1.187-.387-.773 0-1.362.589-1.362 1.556v12.717c0 .958.589 1.547 1.362 1.547z" fill="#FFF" fill-rule="nonzero"/>
                    </g>
                  </svg>
                </button>
              </div>

              <img v-show="$screen.width <= 991" v-lazy="'src/assets/images/badge/badge-award.svg'" class="lazy">

              <div class="howtobuy">
                <router-link to="/howtobuy"><span><i>How to Buy?</i></span></router-link>
              </div>
            </div>
            <div class="fcards">
              <LCard 
                poster="src/assets/images/nft/nft-0.png"
                posterhd="src/assets/images/nft/nft-0@2x.png 2x"
                name="Roborovski #3832"
                summ="1.76"
                icon1="1"
                icon2="4"
                :key="1"
                class="fcard-1"
              />
              <LCard 
                poster="src/assets/images/nft/nft-2.png"
                posterhd="src/assets/images/nft/nft-2@2x.png 2x"
                name="Roborovski #24"
                summ="16.28"
                icon1="2"
                icon2="5"
                :key="2"
                class="fcard-2"
              />
              <LCard 
                poster="src/assets/images/nft/nft-3.png"
                posterhd="src/assets/images/nft/nft-3@2x.png 2x"
                name="Roborovski #24"
                summ="16.28"
                icon1="3"
                icon2="6"
                :key="3"
                class="fcard-3"
              />
            </div>
          </div>
          <div class="main__video" v-show="$screen.width > 991" data-aos="fade-down" data-delay="200">
            <div class="video__box" @click="index = 0">
              <div class="video__box-btn">
                <button class="btn-round">
                  <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fill-rule="evenodd">
                      <path d="M0 0h32v32H0z"/>
                      <path d="M11.29 23.573c.395 0 .737-.123 1.186-.386l10.467-6.065c.783-.457 1.143-.844 1.143-1.459 0-.615-.36-1.002-1.143-1.459L12.476 8.14c-.449-.255-.791-.387-1.187-.387-.773 0-1.362.589-1.362 1.556v12.717c0 .958.589 1.547 1.362 1.547z" fill="#FFF" fill-rule="nonzero"/>
                    </g>
                  </svg>
                </button>
              </div>
              <div class="video__box-item rotateAnimate">
                <div class="video__box-color"></div>
                <div class="video__box-round">
                  <svg width="312" height="312" viewBox="0 0 312 312" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                      <defs>
                          <linearGradient x1=".026%" y1="0%" x2="99.639%" y2="99.664%" id="b">
                              <stop stop-color="#FBBD74" offset="0%"/>
                              <stop stop-color="#FE5C50" offset="100%"/>
                          </linearGradient>
                          <path d="M156 0c86.156 0 156 69.844 156 156s-69.844 156-156 156S0 242.156 0 156 69.844 0 156 0z" id="a"/>
                      </defs>
                      <g fill="none" fill-rule="evenodd">
                          <mask id="c" fill="#fff">
                              <use xlink:href="#a"/>
                          </mask>
                          <path d="M165.713 307.695a154.374 154.374 0 0 1-15.599.193 4 4 0 0 0-4.147 3.795c2.765.175 5.548.278 8.35.308L156 312h-10.037a4 4 0 0 0 3.847 3.882 162.883 162.883 0 0 0 16.406-.203 4 4 0 0 0 3.736-3.678L156 312c4.702 0 9.356-.208 13.953-.615l.003.05a4 4 0 0 0-4.243-3.74zM120.3 312c4.337.99 8.724 1.797 13.15 2.422 1.843.26 3.569-.78 4.252-2.422H120.3zm58.191 0a4.001 4.001 0 0 0 4.041 1.809 159.224 159.224 0 0 0 9.164-1.808h-13.205zM114.43 306.4a155.295 155.295 0 0 0 23.546 4.57l-.006.05a4 4 0 0 0-3.402-4.519 151.267 151.267 0 0 1-15.305-2.97 4 4 0 0 0-4.791 2.72l-.042.149zm82.007-3.836c-5 1.376-10.08 2.497-15.22 3.355a3.998 3.998 0 0 0-3.294 4.553 155.084 155.084 0 0 0 23.418-5.163l.014.05a4 4 0 0 0-4.918-2.795zM84.682 294.78a155.045 155.045 0 0 0 22.11 9.3l-.016.05a4 4 0 0 0-2.404-5.121A151.034 151.034 0 0 1 90 292.963a4 4 0 0 0-5.247 1.68l-.071.137zm140.686-3.495a151.167 151.167 0 0 1-14.214 6.4 3.999 3.999 0 0 0-2.292 5.13 155.176 155.176 0 0 0 21.868-9.846l.024.046a4 4 0 0 0-5.386-1.73zM57.89 277.293a156.36 156.36 0 0 0 19.739 13.622l-.025.044a4 4 0 0 0-1.304-5.504 152.367 152.367 0 0 1-12.834-8.857 4 4 0 0 0-5.475.57l-.101.125zm193.607-3.031a152.51 152.51 0 0 1-12.609 9.17 3.998 3.998 0 0 0-1.193 5.492 156.503 156.503 0 0 0 19.394-14.105l.034.038a4 4 0 0 0-5.626-.595zm-216.24-19.476a156.95 156.95 0 0 0 16.569 17.335l-.035.038a4 4 0 0 0-.16-5.655 152.96 152.96 0 0 1-10.771-11.27 4 4 0 0 0-5.472-.554l-.13.106zm238.348-2.481a152.926 152.926 0 0 1-10.488 11.537 4 4 0 0 0-.054 5.62 156.915 156.915 0 0 0 16.131-17.746l.04.031a4 4 0 0 0-5.63.558zM17.623 228.096a156.067 156.067 0 0 0 12.7 20.34l-.042.03a4 4 0 0 0 .99-5.57 152.07 152.07 0 0 1-8.255-13.221 4 4 0 0 0-5.25-1.654l-.143.075zm273.152-1.745a151.898 151.898 0 0 1-7.924 13.423 3.999 3.999 0 0 0 1.086 5.514 155.897 155.897 0 0 0 12.19-20.649l.047.022a4 4 0 0 0-5.399 1.69zM5.814 198.34a154.865 154.865 0 0 0 8.263 22.512l-.047.021a4 4 0 0 0 2.108-5.249 150.85 150.85 0 0 1-5.37-14.632 4 4 0 0 0-4.806-2.695l-.148.043zm296.474-.915a150.795 150.795 0 0 1-5.006 14.756 4 4 0 0 0 2.19 5.175 154.812 154.812 0 0 0 7.703-22.704l.05.011a4 4 0 0 0-4.937 2.762zM.38 166.96a155.849 155.849 0 0 0 3.492 23.728l-.05.01a4 4 0 0 0 3.137-4.707 151.818 151.818 0 0 1-2.27-15.424 4 4 0 0 0-4.16-3.617l-.149.01zm-.38.049a4 4 0 0 0-3.274 4.315 159.818 159.818 0 0 0 2.388 16.237c.14.698.453 1.317.886 1.82V167.01zm311.846-3.982.05.001a4 4 0 0 0-4.268 3.712 152.23 152.23 0 0 1-1.878 15.472 3.999 3.999 0 0 0 3.205 4.615 156.262 156.262 0 0 0 2.89-23.8zm.156 23.135a3.987 3.987 0 0 0 1.63-2.58 160.23 160.23 0 0 0 1.976-16.285 4 4 0 0 0-3.606-4.26v23.125zm-310.687-50.5a157.347 157.347 0 0 0-1.307 18.862L0 156v-20.93a4.002 4.002 0 0 0-3.057 3.462 161.644 161.644 0 0 0-.94 16.377l.004.2a4 4 0 0 0 3.764 3.82l.229.006V156c0 .98.009 1.959.027 2.935l-.05.001a4 4 0 0 0 4.026-3.973c.035-5.228.334-10.421.893-15.567a4 4 0 0 0-3.49-4.402l-.092.67zm310.665 17.757a156.93 156.93 0 0 0-1.955-22.319l.05-.008a4 4 0 0 0-3.432 4.496 153.018 153.018 0 0 1 1.281 15.54 4 4 0 0 0 4.07 3.873l-.014-1.582zm.022-22.113v23.695l.046-.001a4 4 0 0 0 3.872-4.124 161.018 161.018 0 0 0-1.348-16.352 4 4 0 0 0-2.57-3.218zM8.745 104.375a154.859 154.859 0 0 0-6.072 22.717l-.05-.009a4 4 0 0 0 4.748-3.073 150.833 150.833 0 0 1 4.047-15.05 4 4 0 0 0-2.516-5.023l-.157.438zM-.002 120.3c-.154.677-.304 1.355-.45 2.034a3.985 3.985 0 0 0 .453 2.846l-.003-4.88zm308.578 3.04a154.804 154.804 0 0 0-6.798-22.998l.049-.019a4 4 0 0 0-2.442 5.103 150.784 150.784 0 0 1 4.418 14.947 4 4 0 0 0 4.622 2.998l.15-.031zM22.118 75.882a155.439 155.439 0 0 0-10.352 20.574l-.047-.02a4 4 0 0 0 5.278-2.033 151.455 151.455 0 0 1 7.05-13.906 4 4 0 0 0-1.43-5.432l-.5.817zM298.71 92.9a155.627 155.627 0 0 0-11.373-21.115l.044-.027a4 4 0 0 0-1.344 5.495 151.624 151.624 0 0 1 7.393 13.725 4 4 0 0 0 5.14 1.984l.14-.062zM40.728 50.888A156.702 156.702 0 0 0 26.97 68.296l-.042-.029a4 4 0 0 0 5.582-.912 152.732 152.732 0 0 1 9.737-12.176 4 4 0 0 0-.298-5.61l-1.221 1.319zm242.085 14.237a156.815 156.815 0 0 0-15.435-18.354l.037-.035a4 4 0 0 0-.199 5.653 152.825 152.825 0 0 1 10.035 11.933 4 4 0 0 0 5.43.897l.132-.094zM65.816 28.695a156.795 156.795 0 0 0-18.29 15.192l-.036-.037a4 4 0 0 0 5.652.237 152.802 152.802 0 0 1 12-9.954 4 4 0 0 0 .842-5.556l-.168.117zM261.65 41.22a156.695 156.695 0 0 0-18.833-14.85l.028-.043a4 4 0 0 0 .95 5.577c4.243 3.007 8.33 6.23 12.245 9.655a4 4 0 0 0 5.496-.215l.114-.124zM93.047 13.223a155.6 155.6 0 0 0-20.37 10.87l-.026-.044a4 4 0 0 0 5.485 1.381 151.577 151.577 0 0 1 13.777-7.3 4 4 0 0 0 1.96-5.264l-.826.357zm142.98 8.84a155.415 155.415 0 0 0-21.458-10.695l.02-.048a4 4 0 0 0 2.07 5.265 151.41 151.41 0 0 1 13.945 6.952 4 4 0 0 0 5.34-1.335l.084-.138zM123.345 3.424a154.805 154.805 0 0 0-22.012 6.424l-.017-.049a4 4 0 0 0 5.086 2.477 150.792 150.792 0 0 1 14.978-4.316 4 4 0 0 0 3.001-4.748l-1.036.212zm83.718 5.126a154.878 154.878 0 0 0-23.2-6.068l.01-.05a4 4 0 0 0 3.106 4.727 150.855 150.855 0 0 1 15.077 3.943 4 4 0 0 0 4.956-2.407l.051-.145zM152 .05c-6.732.17-13.359.766-19.853 1.762l-.007-.05a4 4 0 0 0 4.473 3.462 153.178 153.178 0 0 1 15.549-1.177l.199-.01a3.977 3.977 0 0 0 1.644-.49l.069-.042-.093-.051A4 4 0 0 1 152.007.23L152 .05zm4.062-.05a3.998 3.998 0 0 1-1.896 3.452l-.092.053.071.04c.555.29 1.186.455 1.855.455 5.227 0 10.42.264 15.568.787a4 4 0 0 0 4.379-3.524 157.38 157.38 0 0 0-18.5-1.256L156.062 0zm-.262-3.995a3.977 3.977 0 0 0-1.655.45l-.156.088a4 4 0 0 1 2.06 3.176l.013.281h19.83a4.002 4.002 0 0 0-3.514-3.172A161.83 161.83 0 0 0 156-4l-.2.005zM191.706 0a159.06 159.06 0 0 0-3.106-.676 3.99 3.99 0 0 0-3.155.676h6.26zm-39.743-3.95c-5.496.136-10.954.55-16.36 1.238A4 4 0 0 0 132.31 0H152c0-1.473.796-2.76 1.989-3.457l-.16-.084a3.983 3.983 0 0 0-1.866-.409z" fill="url(#b)" fill-rule="nonzero" mask="url(#c)"/>
                          <path d="M156 56c55.228 0 100 44.772 100 100s-44.772 100-100 100S56 211.228 56 156 100.772 56 156 56z" mask="url(#c)"/>
                          <path d="M138.117 101.116c-2.458.5-4.742 1.286-7.083 1.984-1.506.45-3.037.865-4.658 1.14l-.662-.008.29-.437c.226-.234.454-.467.688-.695 2.338-2.295 4.989-4.274 7.435-6.498.767-.896 2.45-1.58 1.905-3.21-.498-.26-1.847.284-2.491.57-4.756 2.457-9.134 5.216-13.155 9.053l-.353.337c-2.281 1.725-2.702 5.717-6.119 5.486-2.167-.2-2.48-.18-3.313-.473 3.486-2.69 10.191-11.586 10.789-13.712 0 0 .602-1.925-.229-1.86-3.195 1.164-6.21 3.869-8.7 6.06.231-1.08 1.982-3.142 1.13-4.384-5.532 1.165-13.334 8.568-13.372 8.593-1.482.983-2.03 4.145-4.337 3.675-1.443-.2-3.182-.217-4.032-.705a43.61 43.61 0 0 0 4.281-2.932c3.195-2.453 6.163-5.273 9.186-7.988.173-.396 1.17-.791.603-1.391-.964-.771-2.094.367-3.142.55-4.791 2.1-8.028 4.927-11.19 8.829-.591.729-1.472 1.67-1.999 2.51-2.258-.266-3.463-.146-4.568-.861.675-.558 1.359-1.104 2.046-1.648 3.686-2.92 7.445-5.8 10.258-10.13-.283-1.47-1.762-.292-2.473-.011-5.03 2.483-9.164 5.546-12.331 10.397a17.53 17.53 0 0 0-.567.925c-2.215-.06-4.129-.492-6.042-.93a2.665 2.665 0 0 0-.122-.027l.017-.205c4.822-2.465 9.119-6.698 12.443-11.7 0 0 2.759-4.841-3.294-.84-4.517 2.905-8.632 6.739-11.516 12.192 0 0-3.038.115-3.038-.217 2.926-3.592 6.32-8.227 8.04-12.957.163-.737.613-2.283-.473-2.447-4.067 1.707-6.755 6.49-8.935 10.974-.666 1.316-1.029 2.978-1.62 4.232-2.723-.134-4.603.104-7.215-.675 3.274-2.875 6.852-5.243 9.834-8.695.505-.94 3.857-3.236 3.773-6.2-1.044-.64-2.094.116-2.731.586l-9.188 7.322-.482.025c1.465-2.62 4.662-6.455 5.975-9.163.441-.908.988-1.733.947-2.838l-.811-.263c-6.643 2.855-12.367 9.367-14.614 17.763-.55.777-.817 2.266-1.948 1.822-.142-2.28-.852-4.404-1.633-6.467-2.848-5.955-6.935-10.3-12.16-13.438-.852-.486-1.344.434-1.063 1.145.733 4.189 3.322 6.82 5.105 10.002 2.12 3.279 4.997 6.244 7.42 9.205-.827.283-19.721 4.78-23.08 7.502-1.764.97-4.586 3.227-4.543 8.168.149 1.456 1.167 2.888 2.459 3.32 1.222.176 2.084.283 2.888-.267 3.482-4.437 7.519-8.497 12.018-11.197 3.087-1.616 5.354-3.2 8.899-3.646 1.461 1.363 2.408 3.157 4.403 4.809 3.931 3.578 7.381 6.008 12.802 6.895l.54-.18-.198-.498c-2.865-4.17-7.249-6.801-11.732-8.98-.768-.58-2.626-1.561-2.729-2.74 2.763-.926 6.44-1.193 9.761-.396 3.965 6.889 8.338 14.449 14.696 18.786.474.11.805-.55.567-.98-4.408-10.733-7.225-11.701-11.743-16.632-.243-.365-.581-1.221.063-1.506l4.221.066c1.358.188 3.217-.2 3.548.398.204 7.098 4.774 12.523 7.533 17.922 0 0 .886.51.838-.417l.029-.06c-1.129-12.5-5.811-15.377-6.519-17.501.721-.05 1.512-.005 2.102.32 2.972 6.047 7.006 10.612 12.32 14.036.116.075.778.157.348-.807-1.545-5.193-6.317-7.854-9.413-11.768l-.542-1.011.626-.083c1.326.264 3.119.563 4.093 1.197 1.766 3.387 4.149 6 6.689 8.422 2.102 1.902 3.899 4.123 7.076 4.744l.336-.05.101-.272-.098-.403c-1.966-5.142-7.266-7.306-11.006-10.931-.254-.23-.723-1.164-.022-1.31l6.025.875c9.063 12.1 12.569 11.618 12.569 11.618s2.719.63 1.475-1.361c-2.955-3.07-5.531-4.48-9.063-7.28-.635-.606-2.223-1.676-2.059-2.762 1.294.2 1.511.183 4.149.48.831.12 1.953.265 2.59.55 4.732 2.11 5.146 8.732 16.633 10.124.409.036.497-.514.213-.874-3.281-2.555-11.838-8.293-12.363-8.951 1.095.099 5.696.756 6.422 1.095 5.778 3.118 9.313 5.444 17.579 4.35.71-1.038-.442-1.458-1.419-1.843l-4.655-1.811c-.603-.19-3.188-.696-4.116-.995 4.947-1.56 11.473-3.362 15.828-6.005.69-.541 1.507-.955 2.182-1.551a3.72 3.72 0 0 0 1.084-1.566c.232-.733-.911-.415-.911-.415zm-83.172.864c-.521-.32-.107-.955.053-1.217.155-.192 1.93-3.385 3.499-2.564.278.79-2.441 3.958-3.552 3.78zm54.502 1.13c-.871 1.43-.246 3.473-1.386 4.807l-7.719-.994c4.481-1.596 8.122-4.656 10.274-5.902l-1.169 2.089zm8.327 5.948c-.064-.832.895-1.571 1.493-2.137 2.596-2.125 2.986-.06 2.986-.06-1.181.93-2.854 2.027-4.479 2.197z" fill="#FFF" fill-rule="nonzero" mask="url(#c)" transform="rotate(-47 80.03 103.038)"/>
                      </g>
                  </svg>
                </div>
                <div class="video__box-text">
                  <img v-lazy="'src/assets/images/badge/badge-sign.png'" data-srcset="src/assets/images/badge/badge-sign@2x.png 2x" width="312" height="312" alt="" title="" class="">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  </div>
</template>

<script>

export default {
  name: 'screenFirst',
  data () {
    return {
      classes: [],
      classesRo: [],
      
      items: [
        {
          src: 'https://www.youtube.com/watch?v=gAU7M1LnXow&autoplay=1',
        }
      ],
      index: null

    }
  },
  methods: {
    showPopup(){
      this.$emit('toggle', true);
    },
    // openFancy (e) {
    //   fancyBox(e.target, this.youtubeLink);
    // },
    hoverOver: function() {
      // console.log('over');
      this.classes = ['animate__animated', 'animate__bounce']
    },
    hoverOverRo: function() {
      // console.log('over');
      this.classesRo = ['animate__animated', 'animate__rubberBand']
    },
    hoverOut: function() {
      console.log('out');
      this.classes = [];
      this.classesRo = [];
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
  .main-screen
    padding: 16.8rem 0 8.2rem
    box-sizing: border-box
    min-height: 97.2rem
    overflow: hidden
    background: url('../assets/images/bg/bg-main@2x.jpg') no-repeat 50% 0
    background-size: 1920px
    +lg
      // display: none
      padding: 11.2rem 0 3.2rem
      background: #090d14 url('../assets/images/bg/bg-main-mobile@2x.jpg') no-repeat 50% 52rem
      background-size: 360px
  .main
    &__roborovski
      img
        +lg
          width: 14rem
          height: 14rem
        // opacity: 0
        // +transition
        // &[lazy=loaded]
        //   opacity: 1

    &__logo
      margin-bottom: 4.8rem
      +lg
        margin-bottom: 3.2rem
      img
        +lg
          width: 20rem
          height: 4rem
    &__countdown
      height: 104px
      margin-bottom: 2.4rem
      position: relative
      width: 42.4rem
      +lg
        width: 100%
        max-width: 100%
        margin-bottom: 1.6rem
      &-item
        padding: 1.6rem
        border-radius: 12px
        -webkit-backdrop-filter: blur(40px)
        backdrop-filter: blur(40px)
        box-shadow: 8px 8px 24px 0 rgba(9, 13, 20, 0.4), -4px -4px 8px 0 $text-d-text-d-4, 0 1px 1px 0 rgba(9, 13, 20, 0.4)
        border: solid 1px $bg-l-6
        background-image: linear-gradient(104deg, $bg-l-12, $bg-l-6 52%, rgba(245, 247, 250, 0) 100%)
        width: 100%
        +lg
          width: auto
          display: inline-flex
          justify-content: flex-start
    .desc
      margin-bottom: 3.2rem
      @include font(2rem, 1.8em, 500)
      color: $white
      +lg
        @include font(1.4rem, 1.71em, 500)
        margin-bottom: 2.4rem
    &-lead
      margin-bottom: 4.8rem
  .main
    &__lead
      display: flex
      justify-content: flex-end
      +lg
        margin-top: 29.6rem
        justify-content: space-between
      .card-item__info-row
        +lg
          flex-direction: row
          justify-content: space-between
      .card-item__info-col1
        +lg
          flex-grow: 1
      .card-item__info-col2
        +lg
          flex-direction: column
          margin-top: 0
          justify-content: center
          align-items: center
          width: auto
          .card-item__icon
            margin: 0
            &:not(:last-child)
              margin: 0 0 .4rem
      &-actions
        +lg
          order: 2
          display: flex
          flex-direction: column
          justify-content: space-between
        .video__box-btn
          +lg
            top: auto
            left: auto
            position: relative
      .howtobuy
        margin-right: 1.6rem
        width: 9.6rem
        min-width: 9.6rem
        height: 9.6rem
        padding: 1px
        display: flex
        background-image: linear-gradient(135deg, $secondary, $primary 100%)
        border-radius: 50%
        padding: 2px
        cursor: pointer
        +lg
          width: 7.2rem
          height: 7.2rem
          max-width: 7.2rem
          min-width: 7.2rem
          margin: 0 0 0
        a
          display: flex
          background-image: linear-gradient(to bottom, $card-d-2, $card-d-2), linear-gradient(135deg, $secondary, $primary 100%)
          border-radius: 50%
          text-align: center
          @include font(1.4rem, 1.43em, 600)
          color: $white
          align-items: center
          +lg
            @include font(1.3rem, 1.23em, 600)
          i
            font-style: normal

      .card
        min-width: 20rem
        +lg
          order: 1
        
    
    &__mint
      font-family: Karantina
      color: $white
      @include font(3.6rem, 1em, bold)
      text-transform: uppercase
      background-image: linear-gradient(135deg, $secondary, $primary 100%)
      right: 1.6rem
      top: 1.6rem
      z-index: 1
      padding: 2px
      display: flex
      flex-direction: column
      position: absolute
      border-radius: 4px 4px 12px 12px
      cursor: pointer
      +lg
        top: calc(10.4rem + 1.6rem)
        right: 0
      &-i
        display: flex
        flex-direction: column
        padding: 1.6rem 1.6rem 1.6rem 2rem
        background-color: $card-d-2
        border-radius: 4px 4px 12px 12px
      img
        width: 3.6rem
        height: 3.6rem
      &-row
        display: flex
        justify-content: flex-start
        align-items: center
    &__video
      margin-top: 5.6rem
      display: flex
      width: 100%
      justify-content: flex-end
  .video
    &__box
      width: 31.2rem
      max-width: 31.2rem
      min-width: 31.2rem
      height: 31.2rem
      border-radius: 50% 
      position: relative
      &-color 
        position: absolute
        left: 0
        right: 0
        top: 0
        bottom: 0
        border-radius: 50% 
        // background-color: rgba(255,255,255,.1)
        // background-color: rgba(#2d2f33, .4)
        z-index: 1
        
        -webkit-backdrop-filter: blur(40px)
        backdrop-filter: blur(40px)
        background-image: linear-gradient(143deg, rgba(245, 247, 250, 0.24), rgba(245, 247, 250, 0.12) 52%, rgba(245, 247, 250, 0.12) 100%)
      &-btn
        position: absolute
        left: calc(50% - 3.6rem)
        top: calc(50% - 3.6rem)
        z-index: 50
        .btn-round
          width: 7.2rem
          height: 7.2rem
      &-item
        position: relative
        position: absolute
        // width: 1px
        // height: 1px
        // top: 50% 
        // left: 50%
        width: 31.2rem
        height: 31.2rem
      &-round
        width: 31.2rem
        height: 31.2rem
        // top: calc(50% - 15.6rem)
        // left: calc(50% - 15.6rem)
        border-radius: 50% 
        position: absolute
        top: 0
        left: 0
      &-text
        width: 31.2rem
        height: 31.2rem
        border-radius: 50% 
        position: absolute
        top: 0
        left: 0

  .fcards
    min-width: 20rem
    position: relative
    height: 26rem
    .card
      position: absolute
      top: 0
      right: 0
    .fcard-1
      z-index: 100
    .fcard-2
      transform: scale(.95) translateY(1.5rem)
      z-index: 10
    .fcard-3
      z-index: 1
      transform: scale(.90) translateY(3.2rem)

</style>

<style>@-webkit-keyframes rotating {
    from {
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes rotating {
    from {
      -ms-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -ms-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  .rotateAnimate {
    -webkit-animation: rotating 12s linear infinite;
    -moz-animation: rotating 12s linear infinite;
    -ms-animation: rotating 12s linear infinite;
    -o-animation: rotating 12s linear infinite;
    animation: rotating 12s linear infinite;
  }
</style>
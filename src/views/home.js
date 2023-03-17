import React from 'react'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import BlogPostCard1 from '../components/blog-post-card1'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Ruby Smith Audio Website</title>
        <meta property="og:title" content="Ruby Smith Audio Website" />
      </Helmet>
      <section className="home-hero">
        <header data-role="Header" className="home-header navbar">
          <a href="#home" className="home-link">
            <span className="home-text">
              RUBY
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text001">SMITH </span>
            <span className="home-text002">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text003">   </span>
            <span className="home-text004"> AUDIO ENGINEER</span>
          </a>
          <div className="home-nav">
            <NavigationLinks rootClassName="rootClassName17"></NavigationLinks>
          </div>
          <div data-role="BurgerMenu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="home-mobile-menu">
            <div className="home-nav1">
              <div className="home-container01">
                <div
                  data-role="CloseMobileMenu"
                  className="home-close-mobile-menu"
                >
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <NavigationLinks rootClassName="rootClassName18"></NavigationLinks>
            </div>
            <div className="home-icon-group"></div>
          </div>
        </header>
        <div id="home" className="home-hero-content">
          <h1 className="home-heading">
            <span>RUBY SMITH</span>
            <br></br>
          </h1>
          <h1 className="home-text007">
            <span>
              RECORDING and
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>mix engineer</span>
          </h1>
          <img
            alt="image"
            src="https://freight.cargo.site/w/400/q/75/i/7c0670ae8d6010db1918d143eb7bc3ff6c656a62b8908f3c6b0d706797758e07/New-Project-1.png"
            className="home-image"
          />
        </div>
      </section>
      <section id="about" className="home-about">
        <div className="home-container02">
          <div className="home-container03">
            <div className="home-container04">
              <div className="home-container05">
                <svg viewBox="0 0 1024 1024" className="home-icon04">
                  <path d="M250 176l92-90 426 426-426 426-92-90 338-336z"></path>
                </svg>
              </div>
              <h1 className="home-heading1">
                <span className="home-text010">ABOUT</span>
                <br></br>
              </h1>
            </div>
            <p className="home-caption">
              <span>
                I’m an audio engineer with 5+ years of commercial studio
                experience with a flexible skillset both technically and
                personally. Engineering at Sony’s in house studios, Circle
                Studios.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <br></br>
              <span>
                Recording on SSL, high end microphones, recording live sessions,
                podcast recording &amp; mixing. While being technically
                proficient, Smith has a knack for communicating complex ideas
                u ercial studio experience with a flexible skillset both
                technically and personally. Engineering at Sony’s in house
                studios, Circle Studios.
              </span>
              <br></br>
            </p>
            <div className="home-container06">
              <a
                href="http://www.instagram.com/rubysmith.wav"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link1"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon06"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/ruby-smith-54b8221a4/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link2"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon08 GreenHead1"
                >
                  <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="home-container07">
            <div className="home-container08">
              <span className="home-text017">
                <br className="home-text018"></br>
                <br className="home-text019"></br>
                <br className="home-text020"></br>
                <br className="home-text021"></br>
                <br className="home-text022"></br>
                <br className="home-text023"></br>
                <br className="home-text024"></br>
                <br className="home-text025"></br>
                <br className="home-text026"></br>
                <br className="home-text027"></br>
                <br className="home-text028"></br>
                <br className="home-text029"></br>
                <br className="home-text030"></br>
                <br className="home-text031"></br>
                <br className="home-text032"></br>
                <br className="home-text033"></br>
                <br className="home-text034"></br>
                <br className="home-text035"></br>
                <br className="home-text036"></br>
                <br className="home-text037"></br>
                <br className="home-text038"></br>
                <br className="home-text039"></br>
                <br className="home-text040"></br>
                <br className="home-text041"></br>
                <br className="home-text042"></br>
                <br className="home-text043"></br>
                <br className="home-text044"></br>
                <br className="home-text045"></br>
                <span className="home-text046">Photographed by</span>
                <span className="home-text047"> Linh Nguyen</span>
                <br></br>
              </span>
            </div>
          </div>
        </div>
      </section>
      <div className="home-mobile-photo">
        <img
          alt="image"
          src="https://freight.cargo.site/w/1000/q/75/i/7b4657985ec23c398deb3e89e5b0824834f44d4c9fe305046822e083954f573d/linhnguyen_ruby_linhnguyen_010.jpg"
          className="home-image01"
        />
      </div>
      <section className="home-discography">
        <div className="home-slider slider blaze-slider">
          <div className="home-slider-container blaze-container">
            <div className="home-slider-track-container blaze-track-container">
              <div className="home-slider-track blaze-track">
                <div data-role="current-banner" className="home-slide banner">
                  <span className="home-text049">
                    <br className="home-text050"></br>
                    <span className="home-text051">Vivi Thill</span>
                    <br className="home-text052"></br>
                    <span className="home-text053">
                      &apos;don&apos;t break the heart
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br className="home-text054"></br>
                    <span className="home-text055">of a songwriter&apos;</span>
                    <br className="home-text056"></br>
                    <br className="home-text057"></br>
                    <span className="home-text058">Mix Engineer</span>
                    <br></br>
                    <br></br>
                  </span>
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/600/q/75/i/c27be1f3d6f7a6dd593ef7e44ca43a5b5d37df89bdcbcbc113c869bb1488bf6a/a1392942460_10.jpeg"
                    className="home-image02"
                  />
                </div>
                <div data-role="current-banner" className="home-slide01 banner">
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/600/q/75/i/365505ee7c320fca0cd64419a231a723720fb348bacd9a6de151f994ef3386fd/kotakotakota.png"
                    className="home-image03"
                  />
                  <span className="home-text061">
                    <br className="home-text062"></br>
                    <span className="home-text063">MEMA.</span>
                    <br className="home-text064"></br>
                    <span className="home-text065">&apos;Estou Bem&apos;</span>
                    <br className="home-text066"></br>
                    <br className="home-text067"></br>
                    <span className="home-text068">Mix Engineer</span>
                    <br></br>
                    <br></br>
                  </span>
                </div>
                <div data-role="current-banner" className="home-slide02 banner">
                  <span className="home-text071">
                    <br className="home-text072"></br>
                    <span className="home-text073">MEMA.</span>
                    <br className="home-text074"></br>
                    <span className="home-text075">&apos;Estou Bem&apos;</span>
                    <br className="home-text076"></br>
                    <br className="home-text077"></br>
                    <span className="home-text078">Mix Engineer</span>
                    <br></br>
                    <br></br>
                  </span>
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/600/q/75/i/7ffbe96d7bcadf082faee49e485b8ff6dbf69738fdc7b196ba26144b11ee15c9/mema-estou.jpeg"
                    className="home-image04"
                  />
                </div>
                <div data-role="current-banner" className="home-slide03 banner">
                  <span className="home-text081">
                    <br className="home-text082"></br>
                    <span className="home-text083">Jubilee ft. IQ</span>
                    <br className="home-text084"></br>
                    <span className="home-text085">
                      &apos;Fulla Curve&apos;
                    </span>
                    <br className="home-text086"></br>
                    <br className="home-text087"></br>
                    <span className="home-text088">Recording Engineer</span>
                    <br></br>
                    <br></br>
                  </span>
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/600/q/75/i/01d4d8ebb25c394ba53de81eef6ff759c150f1c801ebf8df5f677f7d1be4ae6a/fullacurve.jpg"
                    className="home-image05"
                  />
                </div>
                <div data-role="current-banner" className="home-slide04 banner">
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/700/q/75/i/6f37f44aa29fbd1a7b468669f0df830a3707302244c587c365abfddf80436a66/192969776_324854565870652_5770942409640115315_n.jpeg"
                    className="home-image06"
                  />
                  <span className="home-text091">
                    <br className="home-text092"></br>
                    <span className="home-text093">Sandunes</span>
                    <br className="home-text094"></br>
                    <span className="home-text095">
                      &apos;A Little While&apos;
                    </span>
                    <br className="home-text096"></br>
                    <br className="home-text097"></br>
                    <span className="home-text098">Recording Engineer</span>
                    <br></br>
                    <br></br>
                  </span>
                </div>
              </div>
            </div>
            <div className="home-controls">
              <button
                data-role="previous-banner-button"
                className="home-previous blaze-prev button"
              >
                <svg viewBox="0 0 1024 1024" className="home-icon10">
                  <path d="M498 166l-346 346 346 346-76 76-422-422 422-422z"></path>
                </svg>
              </button>
              <button
                data-role="next-banner-button"
                className="home-next blaze-next button"
              >
                <svg viewBox="0 0 1024 1024" className="home-icon12">
                  <path d="M250 176l92-90 426 426-426 426-92-90 338-336z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div>
          <DangerousHTML
            html={`<script>
const el = document.querySelector('.blaze-slider')

new BlazeSlider(el, {
  all: {
    slidesToShow: 3,
    slideGap: '20px',
    loop: true,
    enableAutoplay: true,
    autoplayinterval: 2000,
    transitionDuration: 300,
  },
})
</script>`}
          ></DangerousHTML>
        </div>
      </section>
      <section className="home-discography1">
        <div className="home-slider1 slider blaze-slider">
          <div className="home-slider-container1 blaze-container">
            <div className="home-slider-track-container1 blaze-track-container">
              <div className="home-slider-track1 blaze-track">
                <div data-role="current-banner" className="home-slide05 banner">
                  <span className="home-text101">
                    <br className="home-text102"></br>
                    <span className="home-text103">Vivi Thill</span>
                    <br className="home-text104"></br>
                    <span className="home-text105">
                      &apos;don&apos;t break theds heart
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br className="home-text106"></br>
                    <span className="home-text107">of a songwriter&apos;</span>
                    <br className="home-text108"></br>
                    <br className="home-text109"></br>
                    <span className="home-text110">Mix Engineer</span>
                    <br></br>
                    <br></br>
                  </span>
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/600/q/75/i/c27be1f3d6f7a6dd593ef7e44ca43a5b5d37df89bdcbcbc113c869bb1488bf6a/a1392942460_10.jpeg"
                    className="home-image07"
                  />
                </div>
                <div data-role="current-banner" className="home-slide06 banner">
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/600/q/75/i/365505ee7c320fca0cd64419a231a723720fb348bacd9a6de151f994ef3386fd/kotakotakota.png"
                    className="home-image08"
                  />
                  <span className="home-text113">
                    <br className="home-text114"></br>
                    <span className="home-text115">Kota Banks</span>
                    <br className="home-text116"></br>
                    <span className="home-text117">
                      &apos;20 Missed Calls&apos;
                    </span>
                    <br className="home-text118"></br>
                    <br className="home-text119"></br>
                    <span className="home-text120">Recording Engineer</span>
                    <br></br>
                    <br></br>
                  </span>
                </div>
                <div data-role="current-banner" className="home-slide07 banner">
                  <span className="home-text123">
                    <br className="home-text124"></br>
                    <span className="home-text125">MEMA.</span>
                    <br className="home-text126"></br>
                    <span className="home-text127">&apos;Estou Bem&apos;</span>
                    <br className="home-text128"></br>
                    <br className="home-text129"></br>
                    <span className="home-text130">Mix Engineer</span>
                    <br></br>
                    <br></br>
                  </span>
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/600/q/75/i/7ffbe96d7bcadf082faee49e485b8ff6dbf69738fdc7b196ba26144b11ee15c9/mema-estou.jpeg"
                    className="home-image09"
                  />
                </div>
                <div data-role="current-banner" className="home-slide08 banner">
                  <span className="home-text133">
                    <br className="home-text134"></br>
                    <span className="home-text135">Jubilee ft. IQ</span>
                    <br className="home-text136"></br>
                    <span className="home-text137">
                      &apos;Fulla Curve&apos;
                    </span>
                    <br className="home-text138"></br>
                    <br className="home-text139"></br>
                    <span className="home-text140">Recording Engineer</span>
                    <br></br>
                    <br></br>
                  </span>
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/600/q/75/i/01d4d8ebb25c394ba53de81eef6ff759c150f1c801ebf8df5f677f7d1be4ae6a/fullacurve.jpg"
                    className="home-image10"
                  />
                </div>
                <div data-role="current-banner" className="home-slide09 banner">
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/700/q/75/i/6f37f44aa29fbd1a7b468669f0df830a3707302244c587c365abfddf80436a66/192969776_324854565870652_5770942409640115315_n.jpeg"
                    className="home-image11"
                  />
                  <span className="home-text143">
                    <br className="home-text144"></br>
                    <span className="home-text145">Sandunes</span>
                    <br className="home-text146"></br>
                    <span className="home-text147">
                      &apos;A Little While&apos;
                    </span>
                    <br className="home-text148"></br>
                    <br className="home-text149"></br>
                    <span className="home-text150">Recording Engineer</span>
                    <br></br>
                    <br></br>
                  </span>
                </div>
              </div>
            </div>
            <div className="home-controls1">
              <button
                data-role="previous-banner-button"
                className="home-previous1 blaze-prev button"
              >
                <svg viewBox="0 0 1024 1024" className="home-icon14">
                  <path d="M498 166l-346 346 346 346-76 76-422-422 422-422z"></path>
                </svg>
              </button>
              <button
                data-role="next-banner-button"
                className="home-next1 blaze-next button"
              >
                <svg viewBox="0 0 1024 1024" className="home-icon16">
                  <path d="M250 176l92-90 426 426-426 426-92-90 338-336z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div>
          <DangerousHTML
            html={`<script>
const el = document.querySelector('.blaze-slider')

new BlazeSlider(el, {
  all: {
    slidesToShow: 3,
    slideGap: '20px',
    loop: true,
    enableAutoplay: true,
    autoplayinterval: 2000,
    transitionDuration: 300,
  },
})
</script>`}
          ></DangerousHTML>
        </div>
      </section>
      <div id="listen" className="home-spotify-player">
        <div className="home-container09">
          <div className="home-container10">
            <div className="home-container11">
              <svg viewBox="0 0 1024 1024" className="home-icon18">
                <path d="M250 176l92-90 426 426-426 426-92-90 338-336z"></path>
              </svg>
            </div>
            <h1 className="home-heading2">
              <span className="home-text153">LISTEN</span>
              <br></br>
            </h1>
          </div>
        </div>
        <div className="home-code-embed4">
          <DangerousHTML
            html={`<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/3t77EbWwWUgGWbzMkwqsqz?utm_source=generator&theme=0" width="100%" height="400px" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`}
          ></DangerousHTML>
        </div>
        <div className="home-live-sessions">
          <div className="home-container12">
            <div className="home-div">
              <DangerousHTML
                html={`<iframe width="420" height="280" src="https://www.youtube-nocookie.com/embed/nusuZ1bneQM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`}
              ></DangerousHTML>
            </div>
            <div className="home-div1">
              <DangerousHTML
                html={`<iframe width="420" height="280" src="https://www.youtube-nocookie.com/embed/4a-5UhhmJ2M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`}
              ></DangerousHTML>
            </div>
          </div>
          <div className="home-container13">
            <span className="home-text155">
              Live Sessions recorded and mixed by Ruby Smith for Circle Studios
              by Sony Music
            </span>
          </div>
        </div>
      </div>
      <div className="home-what-i-do-web">
        <div className="home-container14">
          <div id="whatido" className="home-container15">
            <div className="home-container16">
              <div className="home-container17">
                <svg viewBox="0 0 1024 1024" className="home-icon20">
                  <path d="M250 176l92-90 426 426-426 426-92-90 338-336z"></path>
                </svg>
              </div>
              <h1 className="home-heading3">
                <span className="home-text156">WHAT I DO</span>
                <br className="home-text157"></br>
              </h1>
            </div>
          </div>
          <div className="home-container18">
            <div className="home-container19">
              <span className="home-text158">
                <span className="home-text159">RECORDING</span>
                <br className="home-text160"></br>
                <span className="home-text161"> Vocal Tracking</span>
                <br className="home-text162"></br>
                <span className="home-text163"> Full band tracking</span>
                <br className="home-text164"></br>
                <span className="home-text165"> Live Sessions</span>
                <br className="home-text166"></br>
                <span className="home-text167">
                   Podcast, Voiceover &amp; Radio IDs
                </span>
                <br className="home-text168"></br>
                <span className="home-text169"> Broadcast for livestream</span>
                <br className="home-text170"></br>
                <br className="home-text171"></br>
                <span className="home-text172">SOFTWARE I USE</span>
                <br className="home-text173"></br>
                <span className="home-text174"> Pro Tools HD</span>
                <br className="home-text175"></br>
                <span className="home-text176"> Logic Pro X</span>
                <br className="home-text177"></br>
                <span className="home-text178"> Izotope RX</span>
                <br className="home-text179"></br>
                <span className="home-text180"> Fab Filter Pro</span>
                <br className="home-text181"></br>
                <span className="home-text182"> UAD Console</span>
                <br className="home-text183"></br>
                <span className="home-text184"> Soundtoys</span>
                <br className="home-text185"></br>
                <br className="home-text186"></br>
                <span className="home-text187">HARDWARE I USE</span>
                <br className="home-text188"></br>
                <span className="home-text189"> SSL4000G Series</span>
                <br className="home-text190"></br>
                <span className="home-text191"> SSL AWS</span>
                <br className="home-text192"></br>
                <span className="home-text193">
                   Dante Level 1 Certification
                </span>
                <br className="home-text194"></br>
                <span className="home-text195">
                   Universal Audio Apollo Systems
                </span>
                <br className="home-text196"></br>
                <span className="home-text197">
                   Wireless In Ear Monitoring Systems
                </span>
                <br className="home-text198"></br>
                <span className="home-text199">
                   Wireless Microphone Systems
                </span>
                <br className="home-text200"></br>
                <span className="home-text201"> Ferrofish Converters</span>
                <br className="home-text202"></br>
                <span className="home-text203"> Antelope Orion Converters</span>
                <br className="home-text204"></br>
              </span>
            </div>
            <span className="home-text205">
              <span className="home-text206">MIXING</span>
              <br className="home-text207"></br>
              <span className="home-text208">
                 Mixing for commercial music   releases
              </span>
              <br className="home-text209"></br>
              <span className="home-text210">
                 Audio mixing for live video   sessions
              </span>
              <br className="home-text211"></br>
              <span className="home-text212"> Pro Tools HD</span>
              <br className="home-text213"></br>
              <span className="home-text214"> Logic Pro X</span>
              <br className="home-text215"></br>
              <br className="home-text216"></br>
              <br className="home-text217"></br>
              <span className="home-text218">STUDIOS IVE WORKED FOR</span>
              <br className="home-text219"></br>
              <span className="home-text220">
                 Circle Studios by Sony Music
              </span>
              <br className="home-text221"></br>
              <span className="home-text222">
                 Red Bull Studios London &amp; Berlin
              </span>
              <br className="home-text223"></br>
              <span className="home-text224"> Strongroom Studios London</span>
              <br className="home-text225"></br>
              <span className="home-text226"> Noatune Studios London</span>
              <br className="home-text227"></br>
              <br className="home-text228"></br>
              <span className="home-text229">AWARDS</span>
              <br className="home-text230"></br>
              <span className="home-text231">
                 Awarded Scholarship for Mix With   The Masters, from We Are
                Moving   The Needle
              </span>
              <br className="home-text232"></br>
              <span className="home-text233">
                 Overall Winner of Shure x Red   Bull’s Soundscapes Competition
              </span>
              <br className="home-text234"></br>
              <span className="home-text235">
                 Madison Square Garden’s Up and   Coming Award
              </span>
              <br className="home-text236"></br>
              <br className="home-text237"></br>
              <span className="home-text238">MASTERCLASSES</span>
              <br className="home-text239"></br>
              <span className="home-text240"> P</span>
              <span className="home-text241">
                op Beuro x SAE Electronic   Barcamp
              </span>
              <br className="home-text242"></br>
            </span>
          </div>
        </div>
      </div>
      <div className="home-what-i-do-mobile">
        <div className="home-container20">
          <div className="home-container21">
            <div className="home-container22">
              <svg viewBox="0 0 1024 1024" className="home-icon22">
                <path d="M250 176l92-90 426 426-426 426-92-90 338-336z"></path>
              </svg>
            </div>
            <h1 className="home-heading4">
              <span className="home-text243">WHAT I DO</span>
              <br className="home-text244"></br>
            </h1>
          </div>
        </div>
        <div className="home-container23">
          <span className="home-text245">
            <span className="home-text246">RECORDING</span>
            <br className="home-text247"></br>
            <span className="home-text248">
              Vocal Tracking
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br className="home-text249"></br>
            <span className="home-text250">Full band tracking</span>
            <br className="home-text251"></br>
            <span className="home-text252">
              Live SessionsPodcast, Voiceover &amp; Radio IDs
            </span>
            <br className="home-text253"></br>
            <span className="home-text254">Broadcast for livestream</span>
            <br className="home-text255"></br>
            <br className="home-text256"></br>
            <span className="home-text257">SOFTWARE I USE</span>
            <br className="home-text258"></br>
            <span className="home-text259">Pro Tools HD</span>
            <br className="home-text260"></br>
            <span className="home-text261">Logic Pro XIzotope RX</span>
            <br className="home-text262"></br>
            <span className="home-text263">Fab Filter Pro</span>
            <br className="home-text264"></br>
            <span className="home-text265">UAD Console</span>
            <br className="home-text266"></br>
            <span className="home-text267">Soundtoys</span>
            <br className="home-text268"></br>
            <br className="home-text269"></br>
            <span className="home-text270">HARDWARE I USE</span>
            <br className="home-text271"></br>
            <span className="home-text272">SSL4000G Series</span>
            <br className="home-text273"></br>
            <span className="home-text274">SSL AWS</span>
            <br className="home-text275"></br>
            <span className="home-text276">Dante Level 1 Certification</span>
            <br className="home-text277"></br>
            <span className="home-text278">Universal Audio Apollo Systems</span>
            <br className="home-text279"></br>
            <span className="home-text280">
              Wireless In Ear Monitoring SystemsWireless Microphone Systems
            </span>
            <br className="home-text281"></br>
            <span className="home-text282">Ferrofish Converters</span>
            <br className="home-text283"></br>
            <span className="home-text284">Antelope Orion Converters</span>
            <br className="home-text285"></br>
            <br className="home-text286"></br>
            <span className="home-text287">MIXING</span>
            <br className="home-text288"></br>
            <span className="home-text289">
              Mixing for commercial music releases
            </span>
            <br className="home-text290"></br>
            <span className="home-text291">
              Audio mixing for live video sessions
            </span>
            <br className="home-text292"></br>
            <span className="home-text293">Pro Tools HDLogic Pro X</span>
            <br className="home-text294"></br>
            <br className="home-text295"></br>
            <span className="home-text296">STUDIOS IVE WORKED FOR</span>
            <br className="home-text297"></br>
            <span className="home-text298">Circle Studios by Sony Music</span>
            <br className="home-text299"></br>
            <span className="home-text300">
              Red Bull Studios London &amp; Berlin
            </span>
            <br className="home-text301"></br>
            <span className="home-text302">Noatune Studios London</span>
            <br className="home-text303"></br>
            <br className="home-text304"></br>
            <br className="home-text305"></br>
            <span className="home-text306">AWARDS</span>
            <br className="home-text307"></br>
            <span className="home-text308">
              Shure x Red Bull’s Soundscapes Competition
            </span>
            <br className="home-text309"></br>
            <span className="home-text310">
              Madison Square Garden’s Up and Coming Award
            </span>
            <br className="home-text311"></br>
            <br className="home-text312"></br>
            <span className="home-text313">MASTERCLASS</span>
            <br className="home-text314"></br>
            <span className="home-text315">
              Pop Beuro x SAE Elextronic Barcamp
            </span>
            <br></br>
            <br></br>
          </span>
        </div>
      </div>
      <div className="home-blog">
        <h1 id="blog" className="home-heading5">
          <span className="home-text318">
                   
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="home-text319">&gt;</span>
          <span className="home-text320">BLOG</span>
          <br></br>
        </h1>
      </div>
      <div className="home-blog1">
        <div className="home-container24">
          <BlogPostCard1
            label="ENGINEERING"
            title="Why I bounce and label stems the same way every time"
            author="Ruby"
            image_src="https://freight.cargo.site/w/700/q/75/i/cc96e14a645ddc6f1519f992742420d722b796593c13d23667012519958c551f/P1150624.jpg"
            profile_src="https://freight.cargo.site/w/1000/q/75/i/7b4657985ec23c398deb3e89e5b0824834f44d4c9fe305046822e083954f573d/linhnguyen_ruby_linhnguyen_010.jpg"
            rootClassName="rootClassName3"
          ></BlogPostCard1>
        </div>
        <div className="home-container25">
          <BlogPostCard1
            title="The Engineer's Swiss Army Knife: My Go-To Tools for Any Recording Situation"
            author="Ruby"
            image_src="https://freight.cargo.site/w/1500/q/75/i/e566bfd5e3749ff2e622b56c64d7efc96e849888ced3969a6dfd4cc226d47e7a/7__Moog_Sound_Studio_Screwdriver.jpg"
            profile_src="https://freight.cargo.site/w/1000/q/75/i/7b4657985ec23c398deb3e89e5b0824834f44d4c9fe305046822e083954f573d/linhnguyen_ruby_linhnguyen_010.jpg"
            rootClassName="rootClassName2"
          ></BlogPostCard1>
        </div>
        <div className="home-container26">
          <BlogPostCard1
            label="ENGINEERING"
            title="How I put the vocalists experience first in vocal recording sessions"
            author="Ruby"
            image_src="https://freight.cargo.site/w/600/q/94/i/017413563fde9f6ef826aa92132d22e23255927b3ca47e6cc8cceb4dd4c474b3/telefunken-u47-microphone.jpg"
            description="What do you listen for when you listen to music? For engineers and musicians alike, it's easy to catch yourself just listeni"
            profile_src="https://freight.cargo.site/w/1000/q/75/i/7b4657985ec23c398deb3e89e5b0824834f44d4c9fe305046822e083954f573d/linhnguyen_ruby_linhnguyen_010.jpg"
            rootClassName="rootClassName1"
          ></BlogPostCard1>
        </div>
      </div>
      <section className="home-contact">
        <div className="home-content">
          <div className="home-container27">
            <span className="home-text322">
              <span className="home-text323">  RUBY SMITH</span>
              <br></br>
              <span>AUDIO ENGINEER</span>
              <br></br>
            </span>
            <img
              alt="image"
              src="https://freight.cargo.site/w/400/q/75/i/7c0670ae8d6010db1918d143eb7bc3ff6c656a62b8908f3c6b0d706797758e07/New-Project-1.png"
              className="home-image12"
            />
            <span className="home-text327">
              <br></br>
              <span>Stay in touch</span>
              <br></br>
            </span>
            <span className="home-text331">
              <span className="home-text332">For all enquiries:</span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>ruby@rubysmith.xyz</span>
            </span>
            <svg viewBox="0 0 1024 1024" className="home-icon24">
              <path d="M250 176l92-90 426 426-426 426-92-90 338-336z"></path>
            </svg>
            <a
              href="http://www.instagram.com/rubysmith.wav"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link3"
            >
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon26">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/ruby-smith-54b8221a4/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link4"
            >
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="home-icon28 GreenHead1"
              >
                <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
      <div className="home-footer">
        <div className="home-content1">
          <div className="home-bottom">
            <span className="home-text336">
              © 2023 R. Smith - All rights reserved
            </span>
            <a
              href="#home"
              data-role="scroll-top"
              className="home-link5 button"
            >
              <img
                alt="image"
                src="/playground_assets/arrow.svg"
                className="home-image13"
              />
            </a>
          </div>
        </div>
      </div>
      <div>
        <DangerousHTML
          html={`<script>
document.addEventListener("DOMContentLoaded", function() {
  // get the element with the "scroll-top" data-role
  const scrollTopBtn = document.querySelector('[data-role="scroll-top"]');

  // when the element is clicked
  scrollTopBtn.addEventListener("click", function() {
    // smoothly scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
</script>
`}
        ></DangerousHTML>
      </div>
    </div>
  )
}

export default Home

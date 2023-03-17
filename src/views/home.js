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
          <span className="home-text">
            <span className="home-text001">
              RUBY
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text002">SMITH </span>
            <span className="home-text003">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text004">   </span>
            <span className="home-text005"> AUDIO ENGINEER</span>
          </span>
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
                <img
                  alt="image"
                  src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                  className="home-image"
                />
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
            <div>
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon04">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon06">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon08">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <div id="home" className="home-hero-content">
          <h1 className="home-heading">
            <span>RUBY SMITH</span>
            <br></br>
          </h1>
          <h1 className="home-text008">
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
            className="home-image01"
          />
        </div>
      </section>
      <section id="about" className="home-about">
        <div className="home-container02">
          <div className="home-container03">
            <div className="home-container04">
              <div className="home-container05">
                <svg viewBox="0 0 1024 1024" className="home-icon10">
                  <path d="M250 176l92-90 426 426-426 426-92-90 338-336z"></path>
                </svg>
              </div>
              <h1 className="home-heading1">
                <span className="home-text011">ABOUT</span>
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
                className="home-link"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon12"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/ruby-smith-54b8221a4/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link1"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon14 GreenHead1"
                >
                  <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="home-container07">
            <img
              alt="image"
              src="https://freight.cargo.site/w/1000/q/75/i/7b4657985ec23c398deb3e89e5b0824834f44d4c9fe305046822e083954f573d/linhnguyen_ruby_linhnguyen_010.jpg"
              className="home-image02"
            />
          </div>
        </div>
      </section>
      <div className="home-mobile-photo">
        <img
          alt="image"
          src="https://freight.cargo.site/w/1000/q/75/i/7b4657985ec23c398deb3e89e5b0824834f44d4c9fe305046822e083954f573d/linhnguyen_ruby_linhnguyen_010.jpg"
          className="home-image03"
        />
      </div>
      <section className="home-discography">
        <div className="home-slider slider blaze-slider">
          <div className="home-slider-container blaze-container">
            <div className="home-slider-track-container blaze-track-container">
              <div className="home-slider-track blaze-track">
                <div data-role="current-banner" className="home-slide banner">
                  <span className="home-text018">
                    <br className="home-text019"></br>
                    <span className="home-text020">Vivi Thill</span>
                    <br className="home-text021"></br>
                    <span className="home-text022">
                      &apos;don&apos;t break the heart
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br className="home-text023"></br>
                    <span className="home-text024">of a songwriter&apos;</span>
                    <br className="home-text025"></br>
                    <br className="home-text026"></br>
                    <span className="home-text027">Mix Engineer</span>
                    <br></br>
                    <br></br>
                  </span>
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/600/q/75/i/c27be1f3d6f7a6dd593ef7e44ca43a5b5d37df89bdcbcbc113c869bb1488bf6a/a1392942460_10.jpeg"
                    className="home-image04"
                  />
                </div>
                <div data-role="current-banner" className="home-slide1 banner">
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/600/q/75/i/365505ee7c320fca0cd64419a231a723720fb348bacd9a6de151f994ef3386fd/kotakotakota.png"
                    className="home-image05"
                  />
                  <span className="home-text030">
                    <br className="home-text031"></br>
                    <span className="home-text032">MEMA.</span>
                    <br className="home-text033"></br>
                    <span className="home-text034">&apos;Estou Bem&apos;</span>
                    <br className="home-text035"></br>
                    <br className="home-text036"></br>
                    <span className="home-text037">Mix Engineer</span>
                    <br></br>
                    <br></br>
                  </span>
                </div>
                <div data-role="current-banner" className="home-slide2 banner">
                  <span className="home-text040">
                    <br className="home-text041"></br>
                    <span className="home-text042">MEMA.</span>
                    <br className="home-text043"></br>
                    <span className="home-text044">&apos;Estou Bem&apos;</span>
                    <br className="home-text045"></br>
                    <br className="home-text046"></br>
                    <span className="home-text047">Mix Engineer</span>
                    <br></br>
                    <br></br>
                  </span>
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/600/q/75/i/7ffbe96d7bcadf082faee49e485b8ff6dbf69738fdc7b196ba26144b11ee15c9/mema-estou.jpeg"
                    className="home-image06"
                  />
                </div>
                <div data-role="current-banner" className="home-slide3 banner">
                  <span className="home-text050">
                    <br className="home-text051"></br>
                    <span className="home-text052">Jubilee ft. IQ</span>
                    <br className="home-text053"></br>
                    <span className="home-text054">
                      &apos;Fulla Curve&apos;
                    </span>
                    <br className="home-text055"></br>
                    <br className="home-text056"></br>
                    <span className="home-text057">Recording Engineer</span>
                    <br></br>
                    <br></br>
                  </span>
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/600/q/75/i/01d4d8ebb25c394ba53de81eef6ff759c150f1c801ebf8df5f677f7d1be4ae6a/fullacurve.jpg"
                    className="home-image07"
                  />
                </div>
                <div data-role="current-banner" className="home-slide4 banner">
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/700/q/75/i/6f37f44aa29fbd1a7b468669f0df830a3707302244c587c365abfddf80436a66/192969776_324854565870652_5770942409640115315_n.jpeg"
                    className="home-image08"
                  />
                  <span className="home-text060">
                    <br className="home-text061"></br>
                    <span className="home-text062">Sandunes</span>
                    <br className="home-text063"></br>
                    <span className="home-text064">
                      &apos;A Little While&apos;
                    </span>
                    <br className="home-text065"></br>
                    <br className="home-text066"></br>
                    <span className="home-text067">Recording Engineer</span>
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
                <svg viewBox="0 0 1024 1024" className="home-icon16">
                  <path d="M498 166l-346 346 346 346-76 76-422-422 422-422z"></path>
                </svg>
              </button>
              <button
                data-role="next-banner-button"
                className="home-next blaze-next button"
              >
                <svg viewBox="0 0 1024 1024" className="home-icon18">
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
      <div className="home-spotify-player">
        <div className="home-container08">
          <div className="home-container09">
            <div className="home-container10">
              <svg viewBox="0 0 1024 1024" className="home-icon20">
                <path d="M250 176l92-90 426 426-426 426-92-90 338-336z"></path>
              </svg>
            </div>
            <h1 className="home-heading2">
              <span className="home-text070">LISTEN</span>
              <br></br>
            </h1>
          </div>
        </div>
        <div className="home-code-embed2">
          <DangerousHTML
            html={`<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/3t77EbWwWUgGWbzMkwqsqz?utm_source=generator&theme=0" width="100%" height="400px" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`}
          ></DangerousHTML>
        </div>
        <div className="home-live-sessions">
          <div className="home-container11">
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
          <div className="home-container12">
            <span className="home-text072">
              Live Sessions recorded and mixed by Ruby Smith for Circle Studios
              by Sony Music
            </span>
          </div>
        </div>
      </div>
      <div className="home-what-i-do-web">
        <div className="home-container13">
          <div id="whatido" className="home-container14">
            <div className="home-container15">
              <div className="home-container16">
                <svg viewBox="0 0 1024 1024" className="home-icon22">
                  <path d="M250 176l92-90 426 426-426 426-92-90 338-336z"></path>
                </svg>
              </div>
              <h1 className="home-heading3">
                <span className="home-text073">WHAT I DO</span>
                <br className="home-text074"></br>
              </h1>
            </div>
          </div>
          <div className="home-container17">
            <div className="home-container18">
              <span className="home-text075">
                <span className="home-text076">RECORDING</span>
                <br className="home-text077"></br>
                <span className="home-text078"> Vocal Tracking</span>
                <br className="home-text079"></br>
                <span className="home-text080"> Full band tracking</span>
                <br className="home-text081"></br>
                <span className="home-text082"> Live Sessions</span>
                <br className="home-text083"></br>
                <span className="home-text084">
                   Podcast, Voiceover &amp; Radio IDs
                </span>
                <br className="home-text085"></br>
                <span className="home-text086"> Broadcast for livestream</span>
                <br className="home-text087"></br>
                <br className="home-text088"></br>
                <span className="home-text089">SOFTWARE I USE</span>
                <br className="home-text090"></br>
                <span className="home-text091"> Pro Tools HD</span>
                <br className="home-text092"></br>
                <span className="home-text093"> Logic Pro X</span>
                <br className="home-text094"></br>
                <span className="home-text095"> Izotope RX</span>
                <br className="home-text096"></br>
                <span className="home-text097"> Fab Filter Pro</span>
                <br className="home-text098"></br>
                <span className="home-text099"> UAD Console</span>
                <br className="home-text100"></br>
                <span className="home-text101"> Soundtoys</span>
                <br className="home-text102"></br>
                <br className="home-text103"></br>
                <span className="home-text104">HARDWARE I USE</span>
                <br className="home-text105"></br>
                <span className="home-text106"> SSL4000G Series</span>
                <br className="home-text107"></br>
                <span className="home-text108"> SSL AWS</span>
                <br className="home-text109"></br>
                <span className="home-text110">
                   Dante Level 1 Certification
                </span>
                <br className="home-text111"></br>
                <span className="home-text112">
                   Universal Audio Apollo Systems
                </span>
                <br className="home-text113"></br>
                <span className="home-text114">
                   Wireless In Ear Monitoring Systems
                </span>
                <br className="home-text115"></br>
                <span className="home-text116">
                   Wireless Microphone Systems
                </span>
                <br className="home-text117"></br>
                <span className="home-text118"> Ferrofish Converters</span>
                <br className="home-text119"></br>
                <span className="home-text120"> Antelope Orion Converters</span>
                <br className="home-text121"></br>
              </span>
            </div>
            <span className="home-text122">
              <span className="home-text123">MIXING</span>
              <br className="home-text124"></br>
              <span className="home-text125">
                 Mixing for commercial music   releases
              </span>
              <br className="home-text126"></br>
              <span className="home-text127">
                 Audio mixing for live video   sessions
              </span>
              <br className="home-text128"></br>
              <span className="home-text129"> Pro Tools HD</span>
              <br className="home-text130"></br>
              <span className="home-text131"> Logic Pro X</span>
              <br className="home-text132"></br>
              <br className="home-text133"></br>
              <br className="home-text134"></br>
              <span className="home-text135">STUDIOS IVE WORKED FOR</span>
              <br className="home-text136"></br>
              <span className="home-text137">
                 Circle Studios by Sony Music
              </span>
              <br className="home-text138"></br>
              <span className="home-text139">
                 Red Bull Studios London &amp; Berlin
              </span>
              <br className="home-text140"></br>
              <span className="home-text141"> Strongroom Studios London</span>
              <br className="home-text142"></br>
              <span className="home-text143"> Noatune Studios London</span>
              <br className="home-text144"></br>
              <br className="home-text145"></br>
              <span className="home-text146">AWARDS</span>
              <br className="home-text147"></br>
              <span className="home-text148">
                 Awarded Scholarship for Mix With   The Masters, from We Are
                Moving   The Needle
              </span>
              <br className="home-text149"></br>
              <span className="home-text150">
                 Overall Winner of Shure x Red   Bull’s Soundscapes Competition
              </span>
              <br className="home-text151"></br>
              <span className="home-text152">
                 Madison Square Garden’s Up and   Coming Award
              </span>
              <br className="home-text153"></br>
              <br className="home-text154"></br>
              <span className="home-text155">MASTERCLASSES</span>
              <br className="home-text156"></br>
              <span className="home-text157"> P</span>
              <span className="home-text158">
                op Beuro x SAE Electronic   Barcamp
              </span>
              <br className="home-text159"></br>
            </span>
          </div>
        </div>
      </div>
      <div className="home-what-i-do-mobile">
        <span className="home-text160">
          <span className="home-text161">RECORDING</span>
          <br className="home-text162"></br>
          <span className="home-text163">
            Vocal Tracking
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br className="home-text164"></br>
          <span className="home-text165">Full band tracking</span>
          <br className="home-text166"></br>
          <span className="home-text167">
            Live SessionsPodcast, Voiceover &amp; Radio IDs
          </span>
          <br className="home-text168"></br>
          <span className="home-text169">Broadcast for livestream</span>
          <br className="home-text170"></br>
          <br className="home-text171"></br>
          <span className="home-text172">SOFTWARE I USE</span>
          <br className="home-text173"></br>
          <span className="home-text174">Pro Tools HD</span>
          <br className="home-text175"></br>
          <span className="home-text176">Logic Pro XIzotope RX</span>
          <br className="home-text177"></br>
          <span className="home-text178">Fab Filter Pro</span>
          <br className="home-text179"></br>
          <span className="home-text180">UAD Console</span>
          <br className="home-text181"></br>
          <span className="home-text182">Soundtoys</span>
          <br className="home-text183"></br>
          <br className="home-text184"></br>
          <span className="home-text185">HARDWARE I USE</span>
          <br className="home-text186"></br>
          <span className="home-text187">SSL4000G Series</span>
          <br className="home-text188"></br>
          <span className="home-text189">SSL AWS</span>
          <br className="home-text190"></br>
          <span className="home-text191">Dante Level 1 Certification</span>
          <br className="home-text192"></br>
          <span className="home-text193">Universal Audio Apollo Systems</span>
          <br className="home-text194"></br>
          <span className="home-text195">
            Wireless In Ear Monitoring SystemsWireless Microphone Systems
          </span>
          <br className="home-text196"></br>
          <span className="home-text197">Ferrofish Converters</span>
          <br className="home-text198"></br>
          <span className="home-text199">Antelope Orion Converters</span>
          <br className="home-text200"></br>
          <br className="home-text201"></br>
          <span className="home-text202">MIXING</span>
          <br className="home-text203"></br>
          <span className="home-text204">
            Mixing for commercial music releases
          </span>
          <br className="home-text205"></br>
          <span className="home-text206">
            Audio mixing for live video sessions
          </span>
          <br className="home-text207"></br>
          <span className="home-text208">Pro Tools HDLogic Pro X</span>
          <br className="home-text209"></br>
          <br className="home-text210"></br>
          <span className="home-text211">STUDIOS IVE WORKED FOR</span>
          <br className="home-text212"></br>
          <span className="home-text213">Circle Studios by Sony Music</span>
          <br className="home-text214"></br>
          <span className="home-text215">
            Red Bull Studios London &amp; Berlin
          </span>
          <br className="home-text216"></br>
          <span className="home-text217">Noatune Studios London</span>
          <br className="home-text218"></br>
          <br className="home-text219"></br>
          <br className="home-text220"></br>
          <span className="home-text221">AWARDS</span>
          <br className="home-text222"></br>
          <span className="home-text223">
            Shure x Red Bull’s Soundscapes Competition
          </span>
          <br className="home-text224"></br>
          <span className="home-text225">
            Madison Square Garden’s Up and Coming Award
          </span>
          <br className="home-text226"></br>
          <br className="home-text227"></br>
          <span className="home-text228">MASTERCLASS</span>
          <br className="home-text229"></br>
          <span className="home-text230">
            Pop Beuro x SAE Elextronic Barcamp
          </span>
          <br></br>
          <br></br>
        </span>
      </div>
      <section className="home-contact">
        <div className="home-content">
          <div className="home-container19">
            <span className="home-text233">
              <span className="home-text234">  RUBY SMITH</span>
              <br></br>
              <span>AUDIO ENGINEER</span>
              <br></br>
            </span>
            <span className="home-text238">
              <br></br>
              <span>Stay in touch</span>
              <br></br>
            </span>
            <span className="home-text242">
              <span className="home-text243">For all enquiries:</span>
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
            <a
              href="http://www.instagram.com/rubysmith.wav"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link2"
            >
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon24">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/ruby-smith-54b8221a4/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link3"
            >
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="home-icon26 GreenHead1"
              >
                <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
              </svg>
            </a>
            <svg viewBox="0 0 1024 1024" className="home-icon28">
              <path d="M250 176l92-90 426 426-426 426-92-90 338-336z"></path>
            </svg>
          </div>
        </div>
        <img
          alt="image"
          src="https://freight.cargo.site/w/400/q/75/i/7c0670ae8d6010db1918d143eb7bc3ff6c656a62b8908f3c6b0d706797758e07/New-Project-1.png"
          className="home-image09"
        />
      </section>
      <div className="home-blog">
        <h1 id="blog" className="home-heading4">
          <span className="home-text247">
                   
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="home-text248">&gt;</span>
          <span className="home-text249">BLOG</span>
          <br></br>
        </h1>
      </div>
      <div className="home-blog1">
        <div className="home-container20">
          <BlogPostCard1
            label="ENGINEERING"
            title="Why I bounce and label stems the same way every time"
            author="Ruby"
            image_src="https://freight.cargo.site/w/700/q/75/i/cc96e14a645ddc6f1519f992742420d722b796593c13d23667012519958c551f/P1150624.jpg"
            profile_src="https://freight.cargo.site/w/1000/q/75/i/7b4657985ec23c398deb3e89e5b0824834f44d4c9fe305046822e083954f573d/linhnguyen_ruby_linhnguyen_010.jpg"
            rootClassName="rootClassName3"
          ></BlogPostCard1>
        </div>
        <div className="home-container21">
          <BlogPostCard1
            title="The Engineer's Swiss Army Knife: My Go-To Tools for Any Recording Situation"
            author="Ruby"
            image_src="https://freight.cargo.site/w/1500/q/75/i/e566bfd5e3749ff2e622b56c64d7efc96e849888ced3969a6dfd4cc226d47e7a/7__Moog_Sound_Studio_Screwdriver.jpg"
            profile_src="https://freight.cargo.site/w/1000/q/75/i/7b4657985ec23c398deb3e89e5b0824834f44d4c9fe305046822e083954f573d/linhnguyen_ruby_linhnguyen_010.jpg"
            rootClassName="rootClassName2"
          ></BlogPostCard1>
        </div>
        <div className="home-container22">
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
      <div className="home-footer">
        <div className="home-content1">
          <div className="home-bottom">
            <span className="home-text251">
              © 2023 R. Smith - All rights reserved
            </span>
            <a
              href="#home"
              data-role="scroll-top"
              className="home-link4 button"
            >
              <img
                alt="image"
                src="/playground_assets/arrow.svg"
                className="home-image10"
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

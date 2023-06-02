import React from 'react'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import Component1 from '../components/component1'
import BlogPostCard1 from '../components/blog-post-card1'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Ruby Smith | Audio Engineer</title>
        <meta property="og:title" content="Ruby Smith | Audio Engineer" />
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
              <span className="home-text012">
                As an audio engineer, I bring over 5 years of experience working
                in commercial studios, with a versatile and adaptable skillset
                both technically and personally. Growing up in small towns in
                Australia, I got into music playing in bands, before moving to
                London in 2017 where I gained invaluable knowledge working with
                some of the industry&apos;s top professionals across multiple
                studios (
              </span>
              <span className="home-text013">
                Red Bull Music Studios, Noatune Studios, Strongroom
              </span>
              <span className="home-text014">
                ). In Berlin, I&apos;ve continued engineering at
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text015">Circle Studios by Sony Music</span>
              <span className="home-text016">
                {' '}
                and refining my sound as a mixer. I believe music is better made
                together and am innately collaborative, patient, and curious.
              </span>
              <br></br>
              <br></br>
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
              <span className="home-text020">
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
                <br className="home-text046"></br>
                <br className="home-text047"></br>
                <br className="home-text048"></br>
                <span className="home-text049">Photographed by</span>
                <span className="home-text050"> Linh Nguyen</span>
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
                  <span className="home-text052">
                    <br className="home-text053"></br>
                    <span className="home-text054">Benedict Cork</span>
                    <br className="home-text055"></br>
                    <span className="home-text056">
                      &apos;The Midnight Sessions&apos;
                    </span>
                    <br className="home-text057"></br>
                    <span className="home-text058">EP</span>
                    <br className="home-text059"></br>
                    <br className="home-text060"></br>
                    <span className="home-text061">Mix Engineer</span>
                    <br></br>
                    <br></br>
                  </span>
                  <img
                    alt="image"
                    src="https://freight.cargo.site/t/original/i/f53893b9bad4bd6626c2ced53e280551bcb9dea6fe15d520313ee610ef78a547/benedict-cork.jpg"
                    className="home-image02"
                  />
                </div>
                <div data-role="current-banner" className="home-slide01 banner">
                  <span className="home-text064">
                    <br className="home-text065"></br>
                    <span className="home-text066">
                      &apos;Tower Of God&apos;
                    </span>
                    <br className="home-text067"></br>
                    <span className="home-text068">Soundtrack</span>
                    <br className="home-text069"></br>
                    <span className="home-text070">Kevin Penkin</span>
                    <br className="home-text071"></br>
                    <br className="home-text072"></br>
                    <span className="home-text073">Recording Engineer</span>
                    <br></br>
                    <br></br>
                  </span>
                  <img
                    alt="image"
                    src="https://freight.cargo.site/t/original/i/91bb0f0a661e5d6c02ca83220c02b2b0a454dec89512036d3aa6c613c4d186d6/towerofgod.jpg"
                    className="home-image03"
                  />
                </div>
                <div data-role="current-banner" className="home-slide02 banner">
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/600/q/75/i/365505ee7c320fca0cd64419a231a723720fb348bacd9a6de151f994ef3386fd/kotakotakota.png"
                    className="home-image04"
                  />
                  <span className="home-text076">
                    <br className="home-text077"></br>
                    <span className="home-text078">Kota Banks</span>
                    <br className="home-text079"></br>
                    <span className="home-text080">
                      &apos;20 Missed Calls&apos;
                    </span>
                    <br className="home-text081"></br>
                    <br className="home-text082"></br>
                    <span className="home-text083">Recording Engineer</span>
                    <br></br>
                    <br></br>
                  </span>
                </div>
                <div data-role="current-banner" className="home-slide03 banner">
                  <img
                    alt="image"
                    src="https://media.pitchfork.com/photos/5e50060794f6ea0009d3f367/1:1/w_600/Look%20At%20Us%20Now%20Dad_Banoffee.jpg"
                    className="home-image05"
                  />
                  <span className="home-text086">
                    <br className="home-text087"></br>
                    <span className="home-text088">Banoffee</span>
                    <br className="home-text089"></br>
                    <span className="home-text090">
                      &apos;One Night Stand&apos;
                    </span>
                    <br className="home-text091"></br>
                    <br className="home-text092"></br>
                    <span className="home-text093">Recording Engineer</span>
                    <br></br>
                    <br></br>
                  </span>
                </div>
                <div data-role="current-banner" className="home-slide04 banner">
                  <span className="home-text096">
                    <br className="home-text097"></br>
                    <span className="home-text098">MEMA.</span>
                    <br className="home-text099"></br>
                    <span className="home-text100">&apos;Ligas</span>
                    <span className="home-text101">&apos;</span>
                    <br className="home-text102"></br>
                    <br className="home-text103"></br>
                    <span className="home-text104">Mix Engineer</span>
                    <br></br>
                    <br></br>
                  </span>
                  <img
                    alt="image"
                    src="https://i1.sndcdn.com/artworks-sIuKNXKwzlGixyS5-GpR8jg-t500x500.jpg"
                    className="home-image06"
                  />
                </div>
                <div data-role="current-banner" className="home-slide05 banner">
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/700/q/75/i/b91383f579fe82e6e3f53df93664fa43bc82a7cfd0a496885d2e650dde41bc24/BIRHTDAY-COVER--scaled.jpeg"
                    className="home-image07"
                  />
                  <span className="home-text107">
                    <br className="home-text108"></br>
                    <span className="home-text109">Vivi Thill</span>
                    <br className="home-text110"></br>
                    <span className="home-text111">
                      &apos;i don&apos;t like my birthday&apos;
                    </span>
                    <br className="home-text112"></br>
                    <br className="home-text113"></br>
                    <span className="home-text114">Mix Engineer</span>
                    <br></br>
                    <br></br>
                  </span>
                </div>
                <div data-role="current-banner" className="home-slide06 banner">
                  <span className="home-text117">
                    <br className="home-text118"></br>
                    <span className="home-text119">Vivi Thill</span>
                    <br className="home-text120"></br>
                    <span className="home-text121">
                      &apos;don&apos;t break the heart
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br className="home-text122"></br>
                    <span className="home-text123">of a songwriter&apos;</span>
                    <br className="home-text124"></br>
                    <br className="home-text125"></br>
                    <span className="home-text126">Mix Engineer</span>
                    <br></br>
                    <br></br>
                  </span>
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/600/q/75/i/c27be1f3d6f7a6dd593ef7e44ca43a5b5d37df89bdcbcbc113c869bb1488bf6a/a1392942460_10.jpeg"
                    className="home-image08"
                  />
                </div>
                <div data-role="current-banner" className="home-slide07 banner">
                  <span className="home-text129">
                    <br className="home-text130"></br>
                    <span className="home-text131">Nenah</span>
                    <br className="home-text132"></br>
                    <span className="home-text133">&apos;Sick&apos;</span>
                    <br className="home-text134"></br>
                    <br className="home-text135"></br>
                    <span className="home-text136">Recording Engineer</span>
                    <br></br>
                    <br></br>
                  </span>
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/400/q/75/i/4779634ee4d87ff48ba5259c177f2edb51384ce0cf96466739d038762594406b/nenah.jpg"
                    className="home-image09"
                  />
                </div>
                <div data-role="current-banner" className="home-slide08 banner">
                  <span className="home-text139">
                    <br className="home-text140"></br>
                    <span className="home-text141">Jade Empress</span>
                    <br className="home-text142"></br>
                    <span className="home-text143">&apos;Golden Hours</span>
                    <span className="home-text144">&apos;</span>
                    <br className="home-text145"></br>
                    <br className="home-text146"></br>
                    <span className="home-text147">Mix Engineer</span>
                    <br></br>
                    <br></br>
                  </span>
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/400/q/75/i/0e5057fe059eea931492eaae1fa0e3ac0bb79d75d3f8b20a815de2da90472cab/golden-hours.jpeg"
                    className="home-image10"
                  />
                </div>
                <div data-role="current-banner" className="home-slide09 banner">
                  <span className="home-text150">
                    <br className="home-text151"></br>
                    <span className="home-text152">DOEXL</span>
                    <br className="home-text153"></br>
                    <span className="home-text154">&apos;MORPH EP&apos;</span>
                    <br className="home-text155"></br>
                    <br className="home-text156"></br>
                    <span className="home-text157">Mix Engineer</span>
                    <br></br>
                    <br></br>
                  </span>
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/400/q/75/i/f70e1a868082caf0a8d36d2e26067c628b811ee8e35901f11f5653aa609411d2/a2983916112_10.jpeg"
                    className="home-image11"
                  />
                </div>
                <div data-role="current-banner" className="home-slide10 banner">
                  <span className="home-text160">
                    <br className="home-text161"></br>
                    <span className="home-text162">Virgeen ft. Nenah</span>
                    <br className="home-text163"></br>
                    <span className="home-text164">&apos;Moonlight&apos;</span>
                    <br className="home-text165"></br>
                    <br className="home-text166"></br>
                    <span className="home-text167">Recording Engineer</span>
                    <br></br>
                    <br></br>
                  </span>
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/400/q/75/i/8a6a6f5864d1aabf875f2975d36a89e343e21a660857e36c62908c6e889ad3e1/nenah-3.jpg"
                    className="home-image12"
                  />
                </div>
                <div data-role="current-banner" className="home-slide11 banner">
                  <span className="home-text170">
                    <br className="home-text171"></br>
                    <span className="home-text172">ie saga</span>
                    <br className="home-text173"></br>
                    <span className="home-text174">&apos;Lived Too Much</span>
                    <span className="home-text175">&apos;</span>
                    <br className="home-text176"></br>
                    <br className="home-text177"></br>
                    <span className="home-text178">Mix Engineer</span>
                    <br></br>
                    <br></br>
                  </span>
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/400/q/75/i/ab4f94d3e64dbb0729c198dbd15dbeb7ec5c31c1e866c34e5d2b89c9102fb00b/channels4_profile.jpeg"
                    className="home-image13"
                  />
                </div>
                <div data-role="current-banner" className="home-slide12 banner">
                  <span className="home-text181">
                    <br className="home-text182"></br>
                    <span className="home-text183">Juliana Davis</span>
                    <br className="home-text184"></br>
                    <span className="home-text185">&apos;Drinking Alone</span>
                    <span className="home-text186">&apos;</span>
                    <br className="home-text187"></br>
                    <br className="home-text188"></br>
                    <span className="home-text189">Mix Engineer</span>
                    <br></br>
                    <br></br>
                  </span>
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/500/q/75/i/0e2de127bc3d96174464c2abb8d6461e7abd961a823efb729f6429be20f0e825/Juliana-Drinking-Alone.jpeg"
                    className="home-image14"
                  />
                </div>
                <div data-role="current-banner" className="home-slide13 banner">
                  <span className="home-text192">
                    <br className="home-text193"></br>
                    <span className="home-text194">Freddie Dickson</span>
                    <br className="home-text195"></br>
                    <span className="home-text196">
                      &apos;Idiot&apos;s Dream EP
                    </span>
                    <span className="home-text197">&apos;</span>
                    <br className="home-text198"></br>
                    <br className="home-text199"></br>
                    <span className="home-text200">Recording Engineer</span>
                    <br className="home-text201"></br>
                    <span className="home-text202">Mix Engineer</span>
                    <br className="home-text203"></br>
                    <span className="home-text204">Producer</span>
                    <br></br>
                    <br></br>
                  </span>
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/700/q/75/i/1a88dc27b47e1335e29b83e5df5df0ce11e256781c827a2da02032bebd245154/150937298_1518213858372527_7338739124970066346_o.jpeg"
                    className="home-image15"
                  />
                </div>
                <div data-role="current-banner" className="home-slide14 banner">
                  <span className="home-text207">
                    <br className="home-text208"></br>
                    <span className="home-text209">MEMA.</span>
                    <br className="home-text210"></br>
                    <span className="home-text211">&apos;Leve Escuro</span>
                    <span className="home-text212">&apos;</span>
                    <br className="home-text213"></br>
                    <span className="home-text214">Album</span>
                    <br className="home-text215"></br>
                    <br className="home-text216"></br>
                    <span className="home-text217">Mix Engineer</span>
                    <br></br>
                    <br></br>
                  </span>
                  <img
                    alt="image"
                    src="https://i.scdn.co/image/ab67616d0000b2730fb8066e3c560529a4d14feb"
                    className="home-image16"
                  />
                </div>
                <div data-role="current-banner" className="home-slide15 banner">
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/700/q/75/i/50fc70094115a398566c5333b3b3e99a3cdcd705c28778bcef0d2e27724a84b9/dancing-on-the-moon-1599217225-5lQzAHfpOq.jpg"
                    className="home-image17"
                  />
                  <span className="home-text220">
                    <br className="home-text221"></br>
                    <span className="home-text222">Unknown Brain ft.</span>
                    <br className="home-text223"></br>
                    <span className="home-text224">Luke Burr</span>
                    <br className="home-text225"></br>
                    <span className="home-text226">
                      &apos;Dancing On The Moon&apos;
                    </span>
                    <br className="home-text227"></br>
                    <br className="home-text228"></br>
                    <span className="home-text229">Recording Engineer</span>
                    <br></br>
                    <br></br>
                  </span>
                </div>
                <div data-role="current-banner" className="home-slide16 banner">
                  <span className="home-text232">
                    <br className="home-text233"></br>
                    <span className="home-text234">MEMA.</span>
                    <br className="home-text235"></br>
                    <span className="home-text236">&apos;Estou Bem&apos;</span>
                    <br className="home-text237"></br>
                    <br className="home-text238"></br>
                    <span className="home-text239">Mix Engineer</span>
                    <br></br>
                    <br></br>
                  </span>
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/600/q/75/i/7ffbe96d7bcadf082faee49e485b8ff6dbf69738fdc7b196ba26144b11ee15c9/mema-estou.jpeg"
                    className="home-image18"
                  />
                </div>
                <div data-role="current-banner" className="home-slide17 banner">
                  <span className="home-text242">
                    <br className="home-text243"></br>
                    <span className="home-text244">Jubilee ft. IQ</span>
                    <br className="home-text245"></br>
                    <span className="home-text246">
                      &apos;Fulla Curve&apos;
                    </span>
                    <br className="home-text247"></br>
                    <br className="home-text248"></br>
                    <span className="home-text249">Recording Engineer</span>
                    <br></br>
                    <br></br>
                  </span>
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/600/q/75/i/01d4d8ebb25c394ba53de81eef6ff759c150f1c801ebf8df5f677f7d1be4ae6a/fullacurve.jpg"
                    className="home-image19"
                  />
                </div>
                <div data-role="current-banner" className="home-slide18 banner">
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/700/q/75/i/6f37f44aa29fbd1a7b468669f0df830a3707302244c587c365abfddf80436a66/192969776_324854565870652_5770942409640115315_n.jpeg"
                    className="home-image20"
                  />
                  <span className="home-text252">
                    <br className="home-text253"></br>
                    <span className="home-text254">Sandunes</span>
                    <br className="home-text255"></br>
                    <span className="home-text256">
                      &apos;A Little While&apos;
                    </span>
                    <br className="home-text257"></br>
                    <br className="home-text258"></br>
                    <span className="home-text259">Recording Engineer</span>
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
    autoplayInterval: 800,
    transitionDuration: 0,
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
                <div data-role="current-banner" className="home-slide19 banner">
                  <span className="home-text262">
                    <br className="home-text263"></br>
                    <span className="home-text264">Vivi Thill</span>
                    <br className="home-text265"></br>
                    <span className="home-text266">
                      &apos;don&apos;t break the heart
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br className="home-text267"></br>
                    <span className="home-text268">of a songwriter&apos;</span>
                    <br className="home-text269"></br>
                    <br className="home-text270"></br>
                    <span className="home-text271">Mix Engineer</span>
                    <br></br>
                    <br></br>
                  </span>
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/600/q/75/i/c27be1f3d6f7a6dd593ef7e44ca43a5b5d37df89bdcbcbc113c869bb1488bf6a/a1392942460_10.jpeg"
                    className="home-image21"
                  />
                </div>
                <div data-role="current-banner" className="home-slide20 banner">
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/600/q/75/i/365505ee7c320fca0cd64419a231a723720fb348bacd9a6de151f994ef3386fd/kotakotakota.png"
                    className="home-image22"
                  />
                  <span className="home-text274">
                    <br className="home-text275"></br>
                    <span className="home-text276">Kota Banks</span>
                    <br className="home-text277"></br>
                    <span className="home-text278">
                      &apos;20 Missed Calls&apos;
                    </span>
                    <br className="home-text279"></br>
                    <br className="home-text280"></br>
                    <span className="home-text281">Recording Engineer</span>
                    <br></br>
                    <br></br>
                  </span>
                </div>
                <div data-role="current-banner" className="home-slide21 banner">
                  <span className="home-text284">
                    <br className="home-text285"></br>
                    <span className="home-text286">MEMA.</span>
                    <br className="home-text287"></br>
                    <span className="home-text288">&apos;Estou Bem&apos;</span>
                    <br className="home-text289"></br>
                    <br className="home-text290"></br>
                    <span className="home-text291">Mix Engineer</span>
                    <br></br>
                    <br></br>
                  </span>
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/600/q/75/i/7ffbe96d7bcadf082faee49e485b8ff6dbf69738fdc7b196ba26144b11ee15c9/mema-estou.jpeg"
                    className="home-image23"
                  />
                </div>
                <div data-role="current-banner" className="home-slide22 banner">
                  <span className="home-text294"></span>
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/600/q/75/i/01d4d8ebb25c394ba53de81eef6ff759c150f1c801ebf8df5f677f7d1be4ae6a/fullacurve.jpg"
                    className="home-image24"
                  />
                </div>
                <div data-role="current-banner" className="home-slide23 banner">
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/700/q/75/i/6f37f44aa29fbd1a7b468669f0df830a3707302244c587c365abfddf80436a66/192969776_324854565870652_5770942409640115315_n.jpeg"
                    className="home-image25"
                  />
                  <span className="home-text295">
                    <br className="home-text296"></br>
                    <span className="home-text297">Sandunes</span>
                    <br className="home-text298"></br>
                    <span className="home-text299">
                      &apos;A Little While&apos;
                    </span>
                    <br className="home-text300"></br>
                    <br className="home-text301"></br>
                    <span className="home-text302">Recording Engineer</span>
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
    autoplayinterval: 500,
    transitionDuration: 0,
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
              <span className="home-text305">LISTEN</span>
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
            <span className="home-text307">
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
                <span className="home-text308">WHAT I DO</span>
                <br className="home-text309"></br>
              </h1>
            </div>
          </div>
          <div className="home-container18">
            <div className="home-container19">
              <span className="home-text310">
                <span className="home-text311">RECORDING</span>
                <br className="home-text312"></br>
                <span className="home-text313"> Vocal Tracking</span>
                <br className="home-text314"></br>
                <span className="home-text315"> Full band tracking</span>
                <br className="home-text316"></br>
                <span className="home-text317"> Live Sessions</span>
                <br className="home-text318"></br>
                <span className="home-text319">
                   Podcast, Voiceover &amp; Radio IDs
                </span>
                <br className="home-text320"></br>
                <span className="home-text321"> Broadcast for livestream</span>
                <br className="home-text322"></br>
                <br className="home-text323"></br>
                <span className="home-text324">SOFTWARE I USE</span>
                <br className="home-text325"></br>
                <span className="home-text326"> Pro Tools HD</span>
                <br className="home-text327"></br>
                <span className="home-text328"> Logic Pro X</span>
                <br className="home-text329"></br>
                <span className="home-text330"> </span>
                <span className="home-text331">UAD Console</span>
                <br className="home-text332"></br>
                <span className="home-text333"> Izotope RX</span>
                <br className="home-text334"></br>
                <span className="home-text335"> Fab Filter Pro</span>
                <br className="home-text336"></br>
                <span className="home-text337">
                   Soundtoys
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br className="home-text338"></br>
                <span className="home-text339"> + more</span>
                <br className="home-text340"></br>
                <br className="home-text341"></br>
                <span className="home-text342">HARDWARE I USE</span>
                <br className="home-text343"></br>
                <span className="home-text344"> SSL4000G Series</span>
                <br className="home-text345"></br>
                <span className="home-text346"> SSL AWS 948</span>
                <br className="home-text347"></br>
                <span className="home-text348">
                   Outboard preamps, compressors &amp; EQs
                </span>
                <br className="home-text349"></br>
                <span className="home-text350">
                   Dante Level 1 Certification
                </span>
                <br className="home-text351"></br>
                <span className="home-text352">
                   Universal Audio Apollo Systems
                </span>
                <br className="home-text353"></br>
                <span className="home-text354">
                   Wireless In Ear Monitoring Systems
                </span>
                <br className="home-text355"></br>
                <span className="home-text356">
                   Wireless Microphone Systems
                </span>
                <br className="home-text357"></br>
                <span className="home-text358"> Ferrofish Converters</span>
                <br className="home-text359"></br>
                <span className="home-text360">
                   Antelope Orion Converters
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br className="home-text361"></br>
                <span className="home-text362"> + more</span>
                <br className="home-text363"></br>
              </span>
            </div>
            <span className="home-text364">
              <span className="home-text365">MIXING</span>
              <br className="home-text366"></br>
              <span className="home-text367">
                 Mixing for commercial music   releases
              </span>
              <br className="home-text368"></br>
              <span className="home-text369">
                 Audio mixing for live video   sessions
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br className="home-text370"></br>
              <span className="home-text371"> Vocal Tuning with Melodyne</span>
              <br className="home-text372"></br>
              <span className="home-text373">
                 Vocalign
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br className="home-text374"></br>
              <span className="home-text375"> Drum Editing</span>
              <br className="home-text376"></br>
              <span className="home-text377"> Podcast</span>
              <br className="home-text378"></br>
              <br className="home-text379"></br>
              <br className="home-text380"></br>
              <span className="home-text381">STUDIOS IVE WORKED FOR</span>
              <br className="home-text382"></br>
              <span className="home-text383">
                 Circle Studios by Sony Music
              </span>
              <br className="home-text384"></br>
              <span className="home-text385">
                 Red Bull Studios London &amp; Berlin
              </span>
              <br className="home-text386"></br>
              <span className="home-text387"> Strongroom Studios London</span>
              <br className="home-text388"></br>
              <span className="home-text389"> Noatune Studios London</span>
              <br className="home-text390"></br>
              <br className="home-text391"></br>
              <span className="home-text392">AWARDS</span>
              <br className="home-text393"></br>
              <span className="home-text394">
                 Awarded Scholarship for Mix With   The Masters, from We Are
                Moving   The Needle
              </span>
              <br className="home-text395"></br>
              <span className="home-text396">
                 Overall Winner of Shure x Red   Bull’s Soundscapes Competition
              </span>
              <br className="home-text397"></br>
              <span className="home-text398">
                 Madison Square Garden’s Up and   Coming Award
              </span>
              <br className="home-text399"></br>
              <br className="home-text400"></br>
              <span className="home-text401">MASTERCLASSES</span>
              <br className="home-text402"></br>
              <span className="home-text403"> P</span>
              <span className="home-text404">
                op Beuro x SAE Electronic   Barcamp
              </span>
              <br className="home-text405"></br>
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
              <span className="home-text406">WHAT I DO</span>
              <br className="home-text407"></br>
            </h1>
          </div>
        </div>
        <div className="home-container23">
          <Component1></Component1>
        </div>
      </div>
      <div className="home-blog">
        <h1 id="blog" className="home-heading5">
          <span className="home-text408">
                   
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="home-text409">&gt;</span>
          <span className="home-text410">BLOG</span>
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
      <section id="contact" className="home-contact">
        <div className="home-content">
          <div className="home-container27">
            <span className="home-text412">
              <span className="home-text413">  RUBY SMITH</span>
              <br></br>
              <span>AUDIO ENGINEER</span>
              <br></br>
            </span>
            <img
              alt="image"
              src="https://freight.cargo.site/w/400/q/75/i/7c0670ae8d6010db1918d143eb7bc3ff6c656a62b8908f3c6b0d706797758e07/New-Project-1.png"
              className="home-image26"
            />
            <span className="home-text417">
              <br></br>
              <span>Stay in touch</span>
              <br></br>
            </span>
            <span className="home-text421">
              <span className="home-text422">For all enquiries:</span>
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
            <span className="home-text426">
              © 2023 Site built by Ruby Smith
            </span>
            <a
              href="#home"
              data-role="scroll-top"
              className="home-link5 button"
            >
              <img alt="image" src="/arrow.svg" className="home-image27" />
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

import React from 'react'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import BlogPostCard1 from '../components/blog-post-card1'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Togthr template</title>
        <meta property="og:title" content="Togthr template" />
      </Helmet>
      <section className="home-hero">
        <header data-thq="thq-navbar" className="home-navbar">
          <img
            alt="image"
            src="/playground_assets/logoipsum-2.svg"
            className="home-image"
          />
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <div className="home-hamburger">
              <img
                alt="image"
                src="/playground_assets/hamburger.svg"
                className="home-icon"
              />
            </div>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="home-nav"
            >
              <div className="home-container01">
                <img
                  alt="image"
                  src="/playground_assets/logo.svg"
                  className="home-image1"
                />
                <div data-thq="thq-close-menu" className="home-menu-close">
                  <svg viewBox="0 0 1024 1024" className="home-icon01">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="home-nav1"
              >
                <span className="home-text">About</span>
                <span className="home-text001">Features</span>
                <span className="home-text002">Pricing</span>
                <span className="home-text003">Team</span>
                <span className="home-text004">Blog</span>
              </nav>
              <div className="home-container02">
                <button className="home-login button">Login</button>
                <button className="button">Register</button>
              </div>
            </div>
            <div className="home-icon-group">
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon03">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon05">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon07">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <div className="home-hero-content">
          <h1 className="home-heading">
            <span>RUBY SMITH</span>
            <br></br>
          </h1>
          <h1 className="home-text007">RECORDING and mix engineer</h1>
          <div className="home-header-container">
            <div className="home-header"></div>
          </div>
        </div>
      </section>
      <section className="home-about">
        <div className="home-container03">
          <div className="home-container04">
            <h1 className="home-heading1">
              <span className="home-text008">ABOUT</span>
              <br></br>
            </h1>
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
          </div>
          <div className="home-container05">
            <img
              alt="image"
              src="https://freight.cargo.site/w/1000/q/75/i/7b4657985ec23c398deb3e89e5b0824834f44d4c9fe305046822e083954f573d/linhnguyen_ruby_linhnguyen_010.jpg"
              className="home-image2"
            />
          </div>
        </div>
      </section>
      <section className="home-discography">
        <div className="home-slider slider blaze-slider">
          <div className="home-slider-container blaze-container">
            <div className="blaze-track-container">
              <div className="home-slider-track blaze-track">
                <div data-role="current-banner" className="home-slide banner">
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/600/q/75/i/c27be1f3d6f7a6dd593ef7e44ca43a5b5d37df89bdcbcbc113c869bb1488bf6a/a1392942460_10.jpeg"
                    className="home-image3"
                  />
                  <span className="home-text015">
                    <br></br>
                    <br></br>
                    <br></br>
                    <span>Mix Engineer</span>
                  </span>
                </div>
                <div data-role="current-banner" className="home-slide1 banner">
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/600/q/75/i/365505ee7c320fca0cd64419a231a723720fb348bacd9a6de151f994ef3386fd/kotakotakota.png"
                    className="home-image4"
                  />
                </div>
                <div data-role="current-banner" className="banner home-slide2">
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/600/q/75/i/7ffbe96d7bcadf082faee49e485b8ff6dbf69738fdc7b196ba26144b11ee15c9/mema-estou.jpeg"
                    className="home-image5"
                  />
                </div>
                <div data-role="current-banner" className="banner home-slide3">
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/600/q/75/i/01d4d8ebb25c394ba53de81eef6ff759c150f1c801ebf8df5f677f7d1be4ae6a/fullacurve.jpg"
                    className="home-image6"
                  />
                </div>
                <div data-role="current-banner" className="banner home-slide4">
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/700/q/75/i/6f37f44aa29fbd1a7b468669f0df830a3707302244c587c365abfddf80436a66/192969776_324854565870652_5770942409640115315_n.jpeg"
                    className="home-image7"
                  />
                </div>
              </div>
            </div>
            <div className="home-controls">
              <button
                data-role="previous-banner-button"
                className="home-previous blaze-prev button"
              >
                <svg viewBox="0 0 1024 1024" className="home-icon09">
                  <path d="M542.165 780.501l-225.835-225.835h494.336c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-494.336l225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-298.667 298.667c-4.096 4.096-7.168 8.789-9.259 13.824-2.176 5.205-3.243 10.795-3.243 16.341 0 10.923 4.181 21.845 12.501 30.165l298.667 298.667c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
                </svg>
              </button>
              <button
                data-role="next-banner-button"
                className="home-next blaze-next button"
              >
                <svg viewBox="0 0 1024 1024" className="home-icon11">
                  <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
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
    slideGap: '80px',
    loop: true,
    enableAutoplay: true,
    autoplayinterval: 2000,
    transitionDuration: 300,
    transitionTimingFunction: 'ease',
  },
})
</script>`}
          ></DangerousHTML>
        </div>
      </section>
      <div className="home-container06">
        <h1 className="home-heading2">
          <span className="home-text020">LISTEN</span>
          <br></br>
        </h1>
      </div>
      <div className="home-spotify-player">
        <div className="home-code-embed2">
          <DangerousHTML
            html={`<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/3t77EbWwWUgGWbzMkwqsqz?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`}
          ></DangerousHTML>
        </div>
      </div>
      <div className="home-live-sessions">
        <div className="home-container07">
          <div className="home-div">
            <DangerousHTML
              html={`<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/nusuZ1bneQM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`}
            ></DangerousHTML>
          </div>
          <div className="home-div1">
            <DangerousHTML
              html={`<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/4a-5UhhmJ2M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`}
            ></DangerousHTML>
          </div>
        </div>
      </div>
      <div className="home-container08">
        <div className="home-container09">
          <span className="home-text022">
            <span className="home-text023">RECORDING</span>
            <br className="home-text024"></br>
            <span className="home-text025">Vocal Tracking</span>
            <br className="home-text026"></br>
            <span className="home-text027">Full band tracking</span>
            <br className="home-text028"></br>
            <span className="home-text029">Live Sessions</span>
            <br className="home-text030"></br>
            <span className="home-text031">
              Podcast, Voiceover &amp; Radio IDs
            </span>
            <br className="home-text032"></br>
            <span className="home-text033">Broadcast for livestream</span>
            <br className="home-text034"></br>
            <br className="home-text035"></br>
            <span className="home-text036">SOFTWARE I USE</span>
            <br className="home-text037"></br>
            <span className="home-text038">Pro Tools HD</span>
            <br className="home-text039"></br>
            <span className="home-text040">Logic Pro X</span>
            <br className="home-text041"></br>
            <span className="home-text042">Izotope RX</span>
            <br className="home-text043"></br>
            <span className="home-text044">Fab Filter Pro</span>
            <br className="home-text045"></br>
            <span className="home-text046">UAD Console</span>
            <br className="home-text047"></br>
            <span className="home-text048">Soundtoys</span>
            <br className="home-text049"></br>
            <br className="home-text050"></br>
            <span className="home-text051">HARDWARE I USE</span>
            <br className="home-text052"></br>
            <span className="home-text053">SSL4000G Series</span>
            <br className="home-text054"></br>
            <span className="home-text055">SSL AWS</span>
            <br className="home-text056"></br>
            <span className="home-text057">Dante Level 1 Certification</span>
            <br className="home-text058"></br>
            <span className="home-text059">Universal Audio Apollo Systems</span>
            <br className="home-text060"></br>
            <span className="home-text061">
              Wireless In Ear Monitoring Systems
            </span>
            <br className="home-text062"></br>
            <span className="home-text063">Wireless Microphone Systems</span>
            <br className="home-text064"></br>
            <span className="home-text065">Ferrofish Converters</span>
            <br className="home-text066"></br>
            <span className="home-text067">Antelope Orion Converters</span>
            <br className="home-text068"></br>
          </span>
        </div>
        <div className="home-container10">
          <span className="home-text069">
            <span className="home-text070">MIXING</span>
            <br className="home-text071"></br>
            <span className="home-text072">
              Mixing for commercial music releases
            </span>
            <br className="home-text073"></br>
            <span className="home-text074">
              Audio mixing for live video sessions
            </span>
            <br className="home-text075"></br>
            <span className="home-text076">Pro Tools HD</span>
            <br className="home-text077"></br>
            <span className="home-text078">Logic Pro X</span>
            <br className="home-text079"></br>
            <br className="home-text080"></br>
            <br className="home-text081"></br>
            <span className="home-text082">STUDIOS IVE WORKED FOR</span>
            <br className="home-text083"></br>
            <span className="home-text084">Circle Studios by Sony Music</span>
            <br className="home-text085"></br>
            <span className="home-text086">
              Red Bull Studios London &amp; Berlin
            </span>
            <br className="home-text087"></br>
            <span className="home-text088">Noatune Studios London</span>
            <br className="home-text089"></br>
            <br className="home-text090"></br>
            <br className="home-text091"></br>
            <span className="home-text092">AWARDS</span>
            <br className="home-text093"></br>
            <span className="home-text094">
              Awarded Scholarship for Mix With The Masters, from We Are Moving
              The Needle
            </span>
            <br className="home-text095"></br>
            <span className="home-text096">
              Overall Winner of Shure x Red Bull’s Soundscapes Competition
            </span>
            <br className="home-text097"></br>
            <span className="home-text098">
              Madison Square Garden’s Up and Coming Award
            </span>
            <br className="home-text099"></br>
            <br className="home-text100"></br>
            <span className="home-text101">MASTERCLASSES</span>
            <br className="home-text102"></br>
            <span className="home-text103">P</span>
            <span className="home-text104">
              op Beuro x SAE Electronic Barcamp
            </span>
            <br className="home-text105"></br>
          </span>
        </div>
      </div>
      <div className="home-container11"></div>
      <section className="home-create">
        <div className="home-content">
          <div className="home-header1">
            <h2 className="home-heading3">
              <span className="home-text106">Get in touch</span>
              <br></br>
            </h2>
          </div>
          <button className="home-button button">
            <span>
              <span>Get started today</span>
              <br></br>
            </span>
          </button>
        </div>
      </section>
      <section className="home-what-i-do">
        <div className="home-container12">
          <h1 className="home-heading4">
            <span className="home-text111">WHAT I DO</span>
            <br></br>
          </h1>
        </div>
        <div className="home-content1">
          <div className="home-stat">
            <h1 className="home-header2">Recording</h1>
            <span className="home-caption1">Unde omnis iste</span>
            <div className="home-checkmarks">
              <div className="home-check">
                <div className="home-mark">
                  <svg viewBox="0 0 1024 1024" className="home-icon13">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="home-text113">Vocal Tracking</span>
              </div>
              <div className="home-check01">
                <div className="home-mark01">
                  <svg viewBox="0 0 1024 1024" className="home-icon15">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="home-text114">Full band recording</span>
              </div>
              <div className="home-check02">
                <div className="home-mark02">
                  <svg viewBox="0 0 1024 1024" className="home-icon17">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="home-text115">Podcast &amp; Voiceover</span>
              </div>
              <div className="home-check03">
                <div className="home-mark03">
                  <svg viewBox="0 0 1024 1024" className="home-icon19">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="home-text116">
                  Recording for broadcast &amp; stream
                </span>
              </div>
            </div>
          </div>
          <div className="home-stat1">
            <h3 className="home-header3">Mixing</h3>
            <span className="home-caption2">Unde omnis iste</span>
            <div className="home-checkmarks1">
              <div className="home-check04">
                <div className="home-mark04">
                  <svg viewBox="0 0 1024 1024" className="home-icon21">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="home-text117">Vocal Tracking</span>
              </div>
              <div className="home-check05">
                <div className="home-mark05">
                  <svg viewBox="0 0 1024 1024" className="home-icon23">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="home-text118">Full band recording</span>
              </div>
              <div className="home-check06">
                <div className="home-mark06">
                  <svg viewBox="0 0 1024 1024" className="home-icon25">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="home-text119">Podcast &amp; Voiceover</span>
              </div>
              <div className="home-check07">
                <div className="home-mark07">
                  <svg viewBox="0 0 1024 1024" className="home-icon27">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="home-text120">
                  Recording for broadcast &amp; stream
                </span>
              </div>
            </div>
          </div>
          <div className="home-stat2">
            <h3 className="home-header4">Assisting</h3>
            <span className="home-caption3">Accusantium doloremque</span>
            <div className="home-checkmarks2">
              <div className="home-check08">
                <div className="home-mark08">
                  <svg viewBox="0 0 1024 1024" className="home-icon29">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="home-text121">
                  <span>Vocal tuning with Melodyne</span>
                  <br></br>
                </span>
              </div>
              <div className="home-check09">
                <div className="home-mark09">
                  <svg viewBox="0 0 1024 1024" className="home-icon31">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="home-text124">Drum editing</span>
              </div>
              <div className="home-check10">
                <div className="home-mark10">
                  <svg viewBox="0 0 1024 1024" className="home-icon33">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="home-text125">Podcast &amp; Voiceover</span>
              </div>
              <div className="home-check11">
                <div className="home-mark11">
                  <svg viewBox="0 0 1024 1024" className="home-icon35">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="home-text126">
                  Recording for broadcast &amp; stream
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-stat3">
          <h3 className="home-header5">What I use</h3>
          <div className="home-checkmarks3">
            <div className="home-check12">
              <div className="home-mark12">
                <svg viewBox="0 0 1024 1024" className="home-icon37">
                  <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                </svg>
              </div>
              <span className="home-text127">
                <span>Pro Tools HD</span>
                <br></br>
              </span>
            </div>
            <div className="home-check13">
              <div className="home-mark13">
                <svg viewBox="0 0 1024 1024" className="home-icon39">
                  <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                </svg>
              </div>
              <span className="home-text130">Izotope RX</span>
            </div>
            <div className="home-check14">
              <div className="home-mark14">
                <svg viewBox="0 0 1024 1024" className="home-icon41">
                  <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                </svg>
              </div>
              <span className="home-text131">Podcast &amp; Voiceover</span>
            </div>
            <div className="home-check15">
              <div className="home-mark15">
                <svg viewBox="0 0 1024 1024" className="home-icon43">
                  <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                </svg>
              </div>
              <span className="home-text132">
                Recording for broadcast &amp; stream
              </span>
            </div>
          </div>
          <div className="home-checkmarks4">
            <div className="home-check16">
              <div className="home-mark16">
                <svg viewBox="0 0 1024 1024" className="home-icon45">
                  <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                </svg>
              </div>
              <span className="home-text133">
                <span>Vocal tuning with Melodyne</span>
                <br></br>
              </span>
            </div>
            <div className="home-check17">
              <div className="home-mark17">
                <svg viewBox="0 0 1024 1024" className="home-icon47">
                  <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                </svg>
              </div>
              <span className="home-text136">Drum editing</span>
            </div>
            <div className="home-check18">
              <div className="home-mark18">
                <svg viewBox="0 0 1024 1024" className="home-icon49">
                  <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                </svg>
              </div>
              <span className="home-text137">Podcast &amp; Voiceover</span>
            </div>
            <div className="home-check19">
              <div className="home-mark19">
                <svg viewBox="0 0 1024 1024" className="home-icon51">
                  <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                </svg>
              </div>
              <span className="home-text138">
                Recording for broadcast &amp; stream
              </span>
            </div>
          </div>
          <span className="home-caption4">SOFTWARE</span>
          <span className="home-caption5">HARDWARE</span>
        </div>
        <div className="home-stat4">
          <h3 className="home-header6">Awards</h3>
          <h3 className="home-header7">Studios</h3>
          <div className="home-checkmarks5">
            <div className="home-check20">
              <div className="home-mark20">
                <svg viewBox="0 0 1024 1024" className="home-icon53">
                  <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                </svg>
              </div>
              <span className="home-text139">
                <span>Scholarship recipient for Mix With The Masters</span>
                <br></br>
              </span>
            </div>
            <div className="home-check21">
              <div className="home-mark21">
                <svg viewBox="0 0 1024 1024" className="home-icon55">
                  <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                </svg>
              </div>
              <span className="home-text142">
                <span>
                  Overall Winner of Red Bull&apos;s Soundscapes Competition
                </span>
                <br></br>
              </span>
            </div>
            <div className="home-check22">
              <div className="home-mark22">
                <svg viewBox="0 0 1024 1024" className="home-icon57">
                  <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                </svg>
              </div>
              <span className="home-text145">
                MSG Up and Coming Artist Award
              </span>
            </div>
            <div className="home-check23">
              <div className="home-mark23">
                <svg viewBox="0 0 1024 1024" className="home-icon59">
                  <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                </svg>
              </div>
              <span className="home-text146">Noatune Studios (London)</span>
            </div>
          </div>
          <div className="home-checkmarks6">
            <div className="home-check24">
              <div className="home-mark24">
                <svg viewBox="0 0 1024 1024" className="home-icon61">
                  <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                </svg>
              </div>
              <span className="home-text147">
                <span>Circle Studios by Sony Music (Berlin)</span>
                <br></br>
              </span>
            </div>
            <div className="home-check25">
              <div className="home-mark25">
                <svg viewBox="0 0 1024 1024" className="home-icon63">
                  <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                </svg>
              </div>
              <span className="home-text150">
                <span>Red Bull&apos;s Music Studios (London &amp; Berlin)</span>
                <br></br>
              </span>
            </div>
            <div className="home-check26">
              <div className="home-mark26">
                <svg viewBox="0 0 1024 1024" className="home-icon65">
                  <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                </svg>
              </div>
              <span className="home-text153">Strongroom Studios (London)</span>
            </div>
            <div className="home-check27">
              <div className="home-mark27">
                <svg viewBox="0 0 1024 1024" className="home-icon67">
                  <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                </svg>
              </div>
              <span className="home-text154">Noatune Studios (London)</span>
            </div>
          </div>
        </div>
      </section>
      <div className="home-blog">
        <div className="home-container13">
          <BlogPostCard1 rootClassName="rootClassName3"></BlogPostCard1>
        </div>
        <div className="home-container14">
          <BlogPostCard1
            image_src="https://images.unsplash.com/photo-1465925508512-1e7052bb62e6?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxjaXR5JTIwY2FifGVufDB8fHx8MTYyNjQ1MDMwNA&amp;ixlib=rb-1.2.1&amp;h=1200"
            rootClassName="rootClassName2"
          ></BlogPostCard1>
        </div>
        <div className="home-container15">
          <BlogPostCard1
            image_src="https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE4fHxjaXR5fGVufDB8fHx8MTYyNjQ1MDI4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
            rootClassName="rootClassName1"
          ></BlogPostCard1>
        </div>
      </div>
      <div className="home-footer">
        <div className="home-content2">
          <div className="home-bottom">
            <span className="home-text155">
              © 2023 R. Smith - All rights reserved
            </span>
            <button data-role="scroll-top" className="home-button1 button">
              <img
                alt="image"
                src="/playground_assets/arrow.svg"
                className="home-image8"
              />
            </button>
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

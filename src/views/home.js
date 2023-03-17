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
            <span>   </span>
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
        <div className="home-hero-content">
          <h1 className="home-heading">
            <span>RUBY SMITH</span>
            <br></br>
          </h1>
          <h1 className="home-text008">RECORDING and mix engineer</h1>
        </div>
      </section>
      <section className="home-about">
        <div className="home-container02">
          <div className="home-container03">
            <h1 id="about" className="home-heading1">
              <span className="home-text009">&gt;</span>
              <span className="home-text010">ABOUT</span>
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
          <div className="home-container04">
            <img
              alt="image"
              src="https://freight.cargo.site/w/1000/q/75/i/7b4657985ec23c398deb3e89e5b0824834f44d4c9fe305046822e083954f573d/linhnguyen_ruby_linhnguyen_010.jpg"
              className="home-image1"
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
                  <span className="home-text017">
                    <br className="home-text018"></br>
                    <span className="home-text019">Vivi Thill</span>
                    <br className="home-text020"></br>
                    <span className="home-text021">
                      &apos;don&apos;t break the heart
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br className="home-text022"></br>
                    <span className="home-text023">of a songwriter&apos;</span>
                    <br className="home-text024"></br>
                    <br className="home-text025"></br>
                    <span className="home-text026">Mix Engineer</span>
                    <br></br>
                    <br></br>
                  </span>
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/600/q/75/i/c27be1f3d6f7a6dd593ef7e44ca43a5b5d37df89bdcbcbc113c869bb1488bf6a/a1392942460_10.jpeg"
                    className="home-image2"
                  />
                </div>
                <div data-role="current-banner" className="home-slide1 banner">
                  <span className="home-text029">
                    <br className="home-text030"></br>
                    <span className="home-text031">Kota Banks</span>
                    <br className="home-text032"></br>
                    <span className="home-text033">
                      &apos;20 Missed Calls&apos;
                    </span>
                    <br className="home-text034"></br>
                    <br className="home-text035"></br>
                    <span className="home-text036">Recording Engineer</span>
                    <br></br>
                    <br></br>
                  </span>
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/600/q/75/i/365505ee7c320fca0cd64419a231a723720fb348bacd9a6de151f994ef3386fd/kotakotakota.png"
                    className="home-image3"
                  />
                </div>
                <div data-role="current-banner" className="home-slide2 banner">
                  <span className="home-text039">
                    <br className="home-text040"></br>
                    <span className="home-text041">MEMA.</span>
                    <br className="home-text042"></br>
                    <span className="home-text043">&apos;Estou Bem&apos;</span>
                    <br className="home-text044"></br>
                    <br className="home-text045"></br>
                    <span className="home-text046">Mix Engineer</span>
                    <br></br>
                    <br></br>
                  </span>
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/600/q/75/i/7ffbe96d7bcadf082faee49e485b8ff6dbf69738fdc7b196ba26144b11ee15c9/mema-estou.jpeg"
                    className="home-image4"
                  />
                </div>
                <div data-role="current-banner" className="home-slide3 banner">
                  <span className="home-text049">
                    <br className="home-text050"></br>
                    <span className="home-text051">Jubilee ft. IQ</span>
                    <br className="home-text052"></br>
                    <span className="home-text053">
                      &apos;Fulla Curve&apos;
                    </span>
                    <br className="home-text054"></br>
                    <br className="home-text055"></br>
                    <span className="home-text056">Recording Engineer</span>
                    <br></br>
                    <br></br>
                  </span>
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/600/q/75/i/01d4d8ebb25c394ba53de81eef6ff759c150f1c801ebf8df5f677f7d1be4ae6a/fullacurve.jpg"
                    className="home-image5"
                  />
                </div>
                <div data-role="current-banner" className="home-slide4 banner">
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/700/q/75/i/6f37f44aa29fbd1a7b468669f0df830a3707302244c587c365abfddf80436a66/192969776_324854565870652_5770942409640115315_n.jpeg"
                    className="home-image6"
                  />
                  <span className="home-text059">
                    <br className="home-text060"></br>
                    <span className="home-text061">Sandunes</span>
                    <br className="home-text062"></br>
                    <span className="home-text063">
                      &apos;A Little While&apos;
                    </span>
                    <br className="home-text064"></br>
                    <br className="home-text065"></br>
                    <span className="home-text066">Recording Engineer</span>
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
                  <path d="M542.165 780.501l-225.835-225.835h494.336c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-494.336l225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-298.667 298.667c-4.096 4.096-7.168 8.789-9.259 13.824-2.176 5.205-3.243 10.795-3.243 16.341 0 10.923 4.181 21.845 12.501 30.165l298.667 298.667c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
                </svg>
              </button>
              <button
                data-role="next-banner-button"
                className="home-next blaze-next button"
              >
                <svg viewBox="0 0 1024 1024" className="home-icon12">
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
      <div className="home-listen">
        <h1 id="listen" className="home-heading2">
          <span className="home-text069">
                   
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="home-text070">&gt;</span>
          <span className="home-text071">LISTEN</span>
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
        <div className="home-container05">
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
      <div className="home-what-i-do">
        <h1 id="whatido" className="home-heading3">
          <span className="home-text073">
                   
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="home-text074">&gt;</span>
          <span className="home-text075">WHAT I DO</span>
          <br></br>
        </h1>
      </div>
      <div className="home-container06">
        <div className="home-container07">
          <span className="home-text077">
            <span className="home-text078">RECORDING</span>
            <br className="home-text079"></br>
            <span className="home-text080">Vocal Tracking</span>
            <br className="home-text081"></br>
            <span className="home-text082">Full band tracking</span>
            <br className="home-text083"></br>
            <span className="home-text084">Live Sessions</span>
            <br className="home-text085"></br>
            <span className="home-text086">
              Podcast, Voiceover &amp; Radio IDs
            </span>
            <br className="home-text087"></br>
            <span className="home-text088">Broadcast for livestream</span>
            <br className="home-text089"></br>
            <br className="home-text090"></br>
            <span className="home-text091">SOFTWARE I USE</span>
            <br className="home-text092"></br>
            <span className="home-text093">Pro Tools HD</span>
            <br className="home-text094"></br>
            <span className="home-text095">Logic Pro X</span>
            <br className="home-text096"></br>
            <span className="home-text097">Izotope RX</span>
            <br className="home-text098"></br>
            <span className="home-text099">Fab Filter Pro</span>
            <br className="home-text100"></br>
            <span className="home-text101">UAD Console</span>
            <br className="home-text102"></br>
            <span className="home-text103">Soundtoys</span>
            <br className="home-text104"></br>
            <br className="home-text105"></br>
            <span className="home-text106">HARDWARE I USE</span>
            <br className="home-text107"></br>
            <span className="home-text108">SSL4000G Series</span>
            <br className="home-text109"></br>
            <span className="home-text110">SSL AWS</span>
            <br className="home-text111"></br>
            <span className="home-text112">Dante Level 1 Certification</span>
            <br className="home-text113"></br>
            <span className="home-text114">Universal Audio Apollo Systems</span>
            <br className="home-text115"></br>
            <span className="home-text116">
              Wireless In Ear Monitoring Systems
            </span>
            <br className="home-text117"></br>
            <span className="home-text118">Wireless Microphone Systems</span>
            <br className="home-text119"></br>
            <span className="home-text120">Ferrofish Converters</span>
            <br className="home-text121"></br>
            <span className="home-text122">Antelope Orion Converters</span>
            <br className="home-text123"></br>
          </span>
        </div>
        <div className="home-container08">
          <span className="home-text124">
            <span className="home-text125">MIXING</span>
            <br className="home-text126"></br>
            <span className="home-text127">
              Mixing for commercial music releases
            </span>
            <br className="home-text128"></br>
            <span className="home-text129">
              Audio mixing for live video sessions
            </span>
            <br className="home-text130"></br>
            <span className="home-text131">Pro Tools HD</span>
            <br className="home-text132"></br>
            <span className="home-text133">Logic Pro X</span>
            <br className="home-text134"></br>
            <br className="home-text135"></br>
            <br className="home-text136"></br>
            <span className="home-text137">STUDIOS IVE WORKED FOR</span>
            <br className="home-text138"></br>
            <span className="home-text139">Circle Studios by Sony Music</span>
            <br className="home-text140"></br>
            <span className="home-text141">
              Red Bull Studios London &amp; Berlin
            </span>
            <br className="home-text142"></br>
            <span className="home-text143">Strongroom Studios London</span>
            <br className="home-text144"></br>
            <span className="home-text145">Noatune Studios London</span>
            <br className="home-text146"></br>
            <br className="home-text147"></br>
            <br className="home-text148"></br>
            <span className="home-text149">AWARDS</span>
            <br className="home-text150"></br>
            <span className="home-text151">
              Awarded Scholarship for Mix With The Masters, from We Are Moving
              The Needle
            </span>
            <br className="home-text152"></br>
            <span className="home-text153">
              Overall Winner of Shure x Red Bull’s Soundscapes Competition
            </span>
            <br className="home-text154"></br>
            <span className="home-text155">
              Madison Square Garden’s Up and Coming Award
            </span>
            <br className="home-text156"></br>
            <br className="home-text157"></br>
            <span className="home-text158">MASTERCLASSES</span>
            <br className="home-text159"></br>
            <span className="home-text160">P</span>
            <span className="home-text161">
              op Beuro x SAE Electronic Barcamp
            </span>
            <br className="home-text162"></br>
          </span>
        </div>
      </div>
      <div className="home-container09"></div>
      <section className="home-create">
        <div className="home-content">
          <div className="home-header1"></div>
          <h1 id="contact" className="home-heading4">
            <span className="home-text163">&gt;</span>
            <span className="home-text164">GET IN TOUCH</span>
            <br className="home-text165"></br>
            <span className="home-text166">ruby@rubysmith.xyz</span>
            <br></br>
          </h1>
        </div>
      </section>
      <div className="home-what-i-do1">
        <h1 id="blog" className="home-heading5">
          <span className="home-text168">
                   
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="home-text169">&gt;</span>
          <span className="home-text170">BLOG</span>
          <br></br>
        </h1>
      </div>
      <div className="home-blog">
        <div className="home-container10">
          <BlogPostCard1
            label="ENGINEERING"
            title="Why I bounce and label stems the same way every time"
            author="Ruby"
            image_src="https://freight.cargo.site/w/700/q/75/i/cc96e14a645ddc6f1519f992742420d722b796593c13d23667012519958c551f/P1150624.jpg"
            profile_src="https://freight.cargo.site/w/1000/q/75/i/7b4657985ec23c398deb3e89e5b0824834f44d4c9fe305046822e083954f573d/linhnguyen_ruby_linhnguyen_010.jpg"
            rootClassName="rootClassName3"
          ></BlogPostCard1>
        </div>
        <div className="home-container11">
          <BlogPostCard1
            title="The Engineer's Swiss Army Knife: My Go-To Tools for Any Recording Situation"
            author="Ruby"
            image_src="https://freight.cargo.site/w/1500/q/75/i/e566bfd5e3749ff2e622b56c64d7efc96e849888ced3969a6dfd4cc226d47e7a/7__Moog_Sound_Studio_Screwdriver.jpg"
            profile_src="https://freight.cargo.site/w/1000/q/75/i/7b4657985ec23c398deb3e89e5b0824834f44d4c9fe305046822e083954f573d/linhnguyen_ruby_linhnguyen_010.jpg"
            rootClassName="rootClassName2"
          ></BlogPostCard1>
        </div>
        <div className="home-container12">
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
            <span className="home-text172">
              © 2023 R. Smith - All rights reserved
            </span>
            <button data-role="scroll-top" className="home-button button">
              <img
                alt="image"
                src="/playground_assets/arrow.svg"
                className="home-image7"
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

import React from 'react'

import $ from "jquery";
import "./components/MainService.scss";
import s1 from "./components/WestBengal.jpg";
import s2 from "./components/Kerala.jpg";
import s3 from "./components/Rajasthan.jpg";
import s4 from "./components/Goa.jpg";
import s5 from "./components/Punjab.jpg";
import s6 from "./components/HimachalPradesh.jpg";
import s7 from "./components/UttarPradesh.jpg";
import s8 from "./components/Gujarat.jpg";
import s9 from "./components/JammuAndKashmir.jpg";
import s10 from "./components/Karnataka.jpg";
import s11 from "./components/TamilNadu.jpg";
import s12 from "./components/Maharashtra.jpg";
import s13 from "./components/Delhi.jpg";
import s14 from "./components/Bihar.jpg";
import s15 from "./components/Sikkim.jpg";
import s16 from "./components/NEIndia.jpg";
import bg from "./components/bg.jpg";

export default function Services() {
  $(".buy").click(function () {
    $(".bottom").addClass("clicked");
  });

  $(".remove").click(function () {
    $(".bottom").removeClass("clicked");
  });

  return (
    <div
      className="contents"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      >
        <div className="container text">
          <p style={{
          fontSize: "40px",
          fontFamily:`Inter,sans-serif`,
          paddingTop:"80px"
          }}>
            Select the state where you want to go:</p>
        <hr />
          </div>
      <div
        className="App container fade-in-image"
        style={{
          display: "flex",
          flexWrap: "wrap"
        }}
      >
        {/* 1 state  */}
        <div className="wrapper my-3">
          <div className="container">
            <div
              className="top"
              style={{
                backgroundImage: `url(${s1})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            />
            <div className="bottom">
              <div className="left">
                <div className="details" id="stateName">
                  <p>West Bengal</p>
                </div>
              </div>
            </div>
          </div>
          <div className="inside">
            <div className="icon">
              <i className="material-icons">info_outline</i>
            </div>
            <div className="contents">
              <p>
                The beautiful state of West Bengal attracts a significant number
                of tourists every year as the state is jewelled with mesmerising
                landscapes, snow-clad mountains, gushing sea, blossoming tea
                gardens, enormous deltas, plentiful
                wildlife, and magnificent British monuments.
              </p>
            </div>
          </div>
        </div>
        {/* 2 state  */}
        <div className="wrapper my-3">
          <div className="container">
            <div
              className="top"
              style={{
                backgroundImage: `url(${s2})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            />
            <div className="bottom">
              <div className="left">
                <div className="details" id="stateName">
                  <p>Kerala</p>
                </div>
              </div>
            </div>
          </div>
          <div className="inside">
            <div className="icon">
              <i className="material-icons">info_outline</i>
            </div>
            <div className="contents">
              <p>
                Kerala, a state situated on the tropical Malabar Coast of
                southwestern India, is one of the most popular tourist
                destinations in India. Named as one of the ten paradises
                of the world by National Geographic Traveler, Kerala is famous
                especially for its ecotourism initiatives and beautiful
                backwaters
              </p>
            </div>
          </div>
        </div>

        {/*3 state  */}
        <div className="wrapper my-3">
          <div className="container">
            <div
              className="top"
              style={{
                backgroundImage: `url(${s3})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            />
            <div className="bottom">
              <div className="left">
                <div className="details" id="stateName">
                  <p>Rajasthan</p>
                </div>
              </div>
            </div>
          </div>
          <div className="inside">
            <div className="icon">
              <i className="material-icons">info_outline</i>
            </div>
            <div className="contents">
              <p>
                Rajasthan is one of the most beautiful states in India when it
                comes to natural glamor. It is known for its colorful culture,
                exquisite palaces, and vibrant festivities. The state is home to
                the city of Jaipur, also known as the Pink City, which is
                renowned for its stunning architecture.
              </p>
            </div>
          </div>
        </div>

        {/* 4 state  */}
        <div className="wrapper my-3">
          <div className="container">
            <div
              className="top"
              style={{
                backgroundImage: `url(${s4})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            />
            <div className="bottom">
              <div className="left">
                <div className="details" id="stateName">
                  <p>Goa</p>
                </div>
              </div>
            </div>
          </div>
          <div className="inside">
            <div className="icon">
              <i className="material-icons">info_outline</i>
            </div>
            <div className="contents">
              <p>
                Goa is one of the most favorite destination among Indian
                tourists due to its pristine beaches. Dotted with hundreds of
                impressive beaches in Goa, the incredible coastline of more than
                100 km offers beautiful views and serenity where tourists enjoy
                and relax in the Sun
              </p>
            </div>
          </div>
        </div>

        {/* 5 state  */}
        <div className="wrapper my-3">
          <div className="container">
            <div
              className="top"
              style={{
                backgroundImage: `url(${s5})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            />
            <div className="bottom">
              <div className="left">
                <div className="details" id="stateName">
                  <p>Punjab</p>
                </div>
              </div>
            </div>
          </div>
          <div className="inside">
            <div className="icon">
              <i className="material-icons">info_outline</i>
            </div>
            <div className="contents">
              <p>
                It is known as 'the land of five rivers' and because of the
                fertile lands found here, it is also amongst one of the most
                ancient civilizations in the world. This place is rich with
                culture and full of beauty that you should experience
                first-hand.
              </p>
            </div>
          </div>
        </div>

        {/* 6 state  */}
        <div className="wrapper my-3">
          <div className="container">
            <div
              className="top"
              style={{
                backgroundImage: `url(${s6})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            />
            <div className="bottom">
              <div className="left">
                <div className="details" id="stateName">
                  <p>Himachal Pradesh</p>
                </div>
              </div>
            </div>
          </div>
          <div className="inside">
            <div className="icon">
              <i className="material-icons">info_outline</i>
            </div>
            <div className="contents">
              <p>
                Himachal Pradesh is one of India's most beautiful states, people
                often forget the extent or magnitude of its breathtaking beauty.
                Home to magnificent monasteries which are often surrounded by
                snow-clad peaks, Himachal Pradesh has everything one dreams of
                in his dream vacation.
              </p>
            </div>
          </div>
        </div>

        {/* 7 state  */}
        <div className="wrapper my-3">
          <div className="container">
            <div
              className="top"
              style={{
                backgroundImage: `url(${s7})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            />
            <div className="bottom">
              <div className="left">
                <div className="details" id="stateName">
                  <p>Uttar Pradesh</p>
                </div>
              </div>
            </div>
          </div>
          <div className="inside">
            <div className="icon">
              <i className="material-icons">info_outline</i>
            </div>
            <div className="contents">
              <p>
                Uttar Pradesh is one of the states that aesthetically defines
                India and its rich history that’s as ancient as the time known.
                This is the land wherein great sages have emerged, religions
                evolved and two great epic of India: Ramayana and Mahabharata
                have been inspired from.
              </p>
            </div>
          </div>
        </div>

        {/* 8 state  */}
        <div className="wrapper my-3">
          <div className="container">
            <div
              className="top"
              style={{
                backgroundImage: `url(${s8})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            />
            <div className="bottom">
              <div className="left">
                <div className="details" id="stateName">
                  <p>Gujarat</p>
                </div>
              </div>
            </div>
          </div>
          <div className="inside">
            <div className="icon">
              <i className="material-icons">info_outline</i>
            </div>
            <div className="contents">
              <p>
                One of the largest states in India, Gujarat is a popular tourist
                destination for people from all over the world. The enchanting
                scenic beauty, historical monuments, remnants of ancient
                civilizations, and picturesque beaches cast a spell that is hard
                to break.
              </p>
            </div>
          </div>
        </div>

        {/* 9 state  */}
        <div className="wrapper my-3">
          <div className="container">
            <div
              className="top"
              style={{
                backgroundImage: `url(${s9})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            />
            <div className="bottom">
              <div className="left">
                <div className="details" id="stateName">
                  <p>Jammu And Kashmir</p>
                </div>
              </div>
            </div>
          </div>
          <div className="inside">
            <div className="icon">
              <i className="material-icons">info_outline</i>
            </div>
            <div className="contents">
              <p>
                The valleys of Kashmir are untamed and unspoilt. Surrounded by
                the sublime mountains, these valleys echo nature, beauty and a
                certain level of mysticism. Charming lakes: The lakes in Kashmir
                are crystal clear, stunning and pristine, and Srinagar boasts of the
                Dal and Nageen Lakes.
              </p>
            </div>
          </div>
        </div>

        {/* 10 state  */}
        <div className="wrapper my-3">
          <div className="container">
            <div
              className="top"
              style={{
                backgroundImage: `url(${s10})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            />
            <div className="bottom">
              <div className="left">
                <div className="details" id="stateName">
                  <p>Karnataka</p>
                </div>
              </div>
            </div>
          </div>
          <div className="inside">
            <div className="icon">
              <i className="material-icons">info_outline</i>
            </div>
            <div className="contents">
              <p>
                Karnataka is home to various forests, beaches, waterfalls,
                coffee plantations, lakes and all the bounties of nature. The
                state also boasts of historically significant monuments and
                structures that attract visitors from far and beyond.
              </p>
            </div>
          </div>
        </div>

        {/* 11 state  */}
        <div className="wrapper my-3">
          <div className="container">
            <div
              className="top"
              style={{
                backgroundImage: `url(${s11})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            />
            <div className="bottom">
              <div className="left">
                <div className="details" id="stateName">
                  <p>Tamil Nadu</p>
                </div>
              </div>
            </div>
          </div>
          <div className="inside">
            <div className="icon">
              <i className="material-icons">info_outline</i>
            </div>
            <div className="contents">
              <p>
                Tamil Nadu is a land of varied beauty. It is mostly famous for numerous Hindu temples based on the Dravidian architecture.
                The temples are of a distinct style, which is famous for its
                towering Gopuram. Popular temple towns include Madurai, Kanchipuram, Palani, Tiruvallur and Mahabalipuram.
              </p>
            </div>
          </div>
        </div>

        {/* 12 state  */}
        <div className="wrapper my-3">
          <div className="container">
            <div
              className="top"
              style={{
                backgroundImage: `url(${s12})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            />
            <div className="bottom">
              <div className="left">
                <div className="details" id="stateName">
                  <p>Maharashtra</p>
                </div>
              </div>
            </div>
          </div>
          <div className="inside">
            <div className="icon">
              <i className="material-icons">info_outline</i>
            </div>
            <div className="contents">
              <p>
                A large percentage of Maharashtra's forests and wildlife lie
                along the Western Ghats or Western Maharashtra and eastern
                Vidarbha. The Sahyadris hold several beautiful hill stations in
                their lap, which are cool, beautiful and refreshingly serene.
                Best of all, they are usually near a city.
              </p>
            </div>
          </div>
        </div>

        {/* 13 state  */}
        <div className="wrapper my-3">
          <div className="container">
            <div
              className="top"
              style={{
                backgroundImage: `url(${s13})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            />
            <div className="bottom">
              <div className="left">
                <div className="details" id="stateName">
                  <p>Delhi</p>
                </div>
              </div>
            </div>
          </div>
          <div className="inside">
            <div className="icon">
              <i className="material-icons">info_outline</i>
            </div>
            <div className="contents">
              <p>
                Delhi showcases an ancient culture and a rapidly modernising
                country. Dotted with monuments there is much to discover here.
                The seat of many powerful empires in the past, its long history
                can be traced in its many carefully-preserved monuments, ancient
                forts and tombs.
              </p>
            </div>
          </div>
        </div>

        {/* 14 state  */}
        <div className="wrapper my-3">
          <div className="container">
            <div
              className="top"
              style={{
                backgroundImage: `url(${s14})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            />
            <div className="bottom">
              <div className="left">
                <div className="details" id="stateName">
                  <p>Bihar</p>
                </div>
              </div>
            </div>
          </div>
          <div className="inside">
            <div className="icon">
              <i className="material-icons">info_outline</i>
            </div>
            <div className="contents">
              <p>
                Bihar is an ancient state, its wonders are of a different kind.
                For the curious traveller, Bihar can be an eye-opener. This is
                the land of Gautama Buddha, this is where the ancient centre of
                learning, Nalanda, exists.
              </p>
            </div>
          </div>
        </div>

        {/* 15 state  */}
        <div className="wrapper my-3">
          <div className="container">
            <div
              className="top"
              style={{
                backgroundImage: `url(${s15})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            />
            <div className="bottom">
              <div className="left">
                <div className="details" id="stateName">
                  <p>Sikkim</p>
                </div>
              </div>
            </div>
          </div>
          <div className="inside">
            <div className="icon">
              <i className="material-icons">info_outline</i>
            </div>
            <div className="contents">
              <p>
                Located in the foothills of the Himalayas, the beauty of Sikkim
                is absolutely breathtaking. Snowcapped mountains, picturesque
                vistas, lakes, waterfalls and colorful valleys together form the
                beauty that is Sikkim.
              </p>
            </div>
          </div>
        </div>

        {/* 16 state  */}
        <div className="wrapper my-3">
          <div className="container">
            <div
              className="top"
              style={{
                backgroundImage: `url(${s16})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            />
            <div className="bottom">
              <div className="left">
                <div className="details" id="stateName">
                  <p>North-East India</p>
                </div>
              </div>
            </div>
          </div>
          <div className="inside">
            <div className="icon">
              <i className="material-icons">info_outline</i>
            </div>
            <div className="contents">
              <p>
                The north-east region is best described as the virgin land,
                untouched by modernizations that have engulfed the world. If you
                are a travel lover and want to explore the 
                unexplored, mysterious yet extremely beautiful places in India,
                the north-east is where you should head to.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

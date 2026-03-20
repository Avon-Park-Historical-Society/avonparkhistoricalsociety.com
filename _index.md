---
layout: default
title: "Home"
---

<div>
      <div id="sitecontainer">

        <style>
          /*@import url('https://fonts.googleapis.com/css2?family=Goldman&family=Paytone+One&family=Ramabhadra&family=Reem+Kufi:wght@400;700&family=Squada+One&display=swap');*/
          @import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Anton&family=Great+Vibes&family=Lobster&family=Lobster+Two:ital,wght@0,700;1,700&family=Pacifico&family=Righteous&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Festive&family=Roboto&display=swap');

          .gm-sub-cate {
            margin: 8px 0 5px 0;
          }

          .gm-sub-cate small a {
            position: relative;
            font-size: 11px;
            text-transform: uppercase;
            color: #fff;
            display: inline-block;
            padding-left: 20px;
            margin-bottom: 5px;
            padding-right: 5px;
            padding-top: 2px;
            padding-bottom: 2px;
          }

          .gm-sub-cate small a.orangec {
            color: #e68025;
          }

          .gm-sub-cate small a.orangec:hover {
            color: #e68025;
            opacity: 0.6;
          }

          .gm-sub-cate small a:before {
            position: absolute;
            content: "";
            background: white;
            height: 2px;
            width: 15px;
            top: 50%;
            transform: translateY(-50%);
            left: 0;
          }

          .gm-sub-cate small a.orangec:before {
            background-color: #e68025;
          }

          .gm-sub-cate small a:hover {
            opacity: 0.6;
          }

          .post-categories {
            margin: 5px 0;
            padding-left: 0;
          }

          .post-categories li,
          .primary-content-area .gm-sub-cate .post-categories li {
            display: inline-block;
            margin-right: 10px;
          }

          .post-categories li a {
            font-family: arial;
            font-size: 12px;
            font-weight: bold;
            font-style: normal;
            text-transform: uppercase;
            line-height: 15px;
            letter-spacing: 0px;
            color: #fff;
            padding: 3px 5px 1px 5px;
            padding-left: 18px;
          }

          .slick-vertical .slick-slide {
            border: none;
          }

          .post-categories li:nth-child(1) a {
            background-color: #e01212;
          }

          .post-categories li:nth-child(2) a {
            background-color: #fbbe1c;
          }

          .post-categories li:nth-child(3) a {
            background-color: #08a54a;
          }

          .article_bgp_imgcontainer {
            width: 100%;
            max-height: 75%;
            overflow: hidden;
            border-radius: 3px;
          }

          .img-hover {
            overflow: hidden;
            transition: 1s ease all;
          }

          .img-hover img {
            transition: 1s ease all;
          }

          img {
            vertical-align: middle;
            max-width: 100%;
            height: auto;
          }

          img {
            vertical-align: middle;
            border-style: none;
          }


          .article_bgp_imgcontainer:hover img {
            -webkit-transform: scale(1.2);
            transform: scale(1.2);
            transform-origin: 50% 50%;
          }

          .article_bgp_imgcontainer img {
            width: 100%;
            -webkit-transition: all 0.7s ease;
            transition: all 12s ease;
          }

          .article_bgp_title {
            text-align: left;
            font-size: 16pt;
            font-weight: 400;
            line-height: 20px;
            padding: 0 10px;
          }

          .article_bgp_lgblock {
            width: 750px !important;
          }

          .article_bgp_smblock {
            padding: 0;
            width: 370px !important;
          }

          .article_bgp_lgdiv {
            height: 632px !important;
          }

          .article_bgp_smdiv {
            height: 310px !important;
          }


          .account-tab-title {
            text-align: center;
            padding-top: 15px;

          }

          .account-tab-title::after {
            content: '';
            display: block;
            clear: both;
          }

          #covid19mapfull {
            display: block;
          }

          #covid19mapmobile {
            display: none;
          }


          .photocontenttextcontainer {
            position: absolute;
            z-index: 9999;
            text-align: center;
            width: 80%;
          }

          .photocontenttextcontainercol2 {
            position: absolute;
            z-index: 9999;
            text-align: center;
            width: 95%;
            padding-top: 20px;
          }

          .photoblocktitletext {
            font-size: 4vw;
            font-weight: bold;
            line-height: 4vw;
            margin: 0;
            padding: 0;
          }

          .photoblocktitletextcol2 {
            font-size: 3vw;
            font-weight: bold;
            margin: 0;
            padding: 0;
            line-height: 5vw;
          }

          .photocontentblocksubtext {
            text-align: center;
            line-height: 2vw;
            font-size: 2.5vw;
            margin: 0;
          }

          .photocontentblocksubtextcol2 {
            text-align: center;
            line-height: 1vw;
            font-size: 1.5vw;
            margin: 0;
            padding: 0;
          }

          .photocontentblockcontenttext {
            text-align: center;
            line-height: unset;
            font-size: 1.5vw;
            margin: 25px 0;
          }

          .photocontentblockcontenttextcol2 {
            text-align: center;
            line-height: unset;
            font-size: 1vw;
            margin: 10px 0;
          }

          .photocontentblockbuttoncontainer {
            margin: 20px 0;
          }

          .photocontentblockbuttoncontainercol2 {
            margin: 0;
          }

          .photocontentblockbutton {
            padding: 8px 35px;
            cursor: pointer;
            border-radius: 2px;
            font-size: 1.5vw;
            font-weight: bold;
            text-align: center;
            text-decoration: none;
            text-transform: uppercase;
            text-rendering: optimizeLegibility;
            background: transparent;
            transition-property: color, background-color, border-color, opacity, transform, -webkit-transform;
            transition-duration: 0.2s;
          }

          .photocontentblockbuttoncol2 {
            padding: 8px 35px;
            cursor: pointer;
            border-radius: 2px;
            font-size: 1vw;
            font-weight: bold;
            text-align: center;
            text-decoration: none;
            text-transform: uppercase;
            text-rendering: optimizeLegibility;
            background: transparent;
            transition-property: color, background-color, border-color, opacity, transform, -webkit-transform;
            transition-duration: 0.2s;
            margin: 0;
          }

          .photocontentblockbutton:hover,
          .photocontentblockbuttoncol2:hover {
            background: rgba(255, 255, 255, .4);
          }

          /*Photo Navigation Blocks*/
          .photonavcontentcontainer {
            position: relative;
            height: 100%;
            width: 100%;
            border-radius: 3px;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .photonavcontentcontainer:hover img {
            -webkit-transform: scale(1.2);
            transform: scale(1.2);
            transform-origin: 50% 50%;
          }

          .photonavcontentcontainer img {
            width: 100%;
            -webkit-transition: all 0.7s ease;
            transition: all 10s ease;
          }

          .photonavblockimage {
            width: 100%;
            height: 100%;
          }

          .photonavtextcontainer {
            position: absolute;
            z-index: 9999;
            text-align: center;
            width: 80%;
            color: #ffffff;
            top: 35px;
            bottom: 35px;
          }

          .photonavtitlecontainer {
            position: absolute;
            z-index: 9999;
            text-align: center;
            width: 100%;
            color: #ffffff;
            top: 0;
          }

          .photonavtitle {
            margin: 0;
            padding: 0;
            font-size: 12PT;
            text-align: left;
            width: 60%;
            letter-spacing: 2px;
            line-height: 12pt;
          }

          .photonavsubtitlecontainer {
            position: absolute;
            z-index: 9999;
            text-align: center;
            color: #ffffff;
            bottom: 0;
            width: 100%;
            margin: 0;
            padding: 0;
            display: flex;
            align-items: center;
          }

          .photonavsubtitle {
            line-height: 18pt;
            font-size: 18pt;
            font-weight: bold;
            margin: 0;
            padding: 0;
            text-align: left;
            width: 100%;
          }


          @media screen and (max-width: 1500px) {
            .article_bgp_lgblock {
              width: 500px !important;
            }

          }

          @media screen and (max-width: 1265px) {
            .article_bgp_smblock {
              padding: 0;
              width: 250px !important;
            }
          }

          @media screen and (max-width: 1000px) {
            .article_bgp_lgblock {
              width: 750px !important;
            }

            .article_bgp_smblock {
              padding: 0;
              width: 370px !important;
            }

            .account-tab-title {
              clear: both;
              padding-top: initial;
            }

            .photocontentblock {
              height: auto !important;
            }

            .photocontenttextcontainer {
              width: 90%;
            }

            .photoblocktitletext {
              font-size: 6.5vw;
              margin: 0;
            }

            .photoblocktitletextcol2 {
              font-size: 6.5vw;
              margin: 0;
              line-height: 5vw;
            }

            .photocontentblocksubtext {
              font-size: 3vw;
            }

            .photocontentblocksubtextcol2 {
              font-size: 3.2vw;
              line-height: 4vw;
            }

            .photocontentblockcontenttext {
              text-align: center;
              line-height: unset;
              font-size: 2vw;
              margin: 0;
            }

            .photocontentblockcontenttextcol2 {
              text-align: center;
              line-height: 2.5vw;
              font-size: 2vw;
              margin: 0;
            }

            .photocontentblockbuttoncontainercol2 {
              margin: 5px 0 0 0;
            }

            .photocontentblockbutton {
              font-size: 2vw;
            }

            .photocontentblockbuttoncol2 {
              font-size: 2.5vw;
              padding: 5px 35px;
            }

          }

          @media screen and (max-width: 750px) {
            .article_bgp_lgblock {
              width: 500px !important;
            }

            .article_bgp_smblock {
              padding: 0;
              width: 500px !important;
            }

            #covid19mapfull {
              display: none;
            }

            #covid19mapmobile {
              display: block;
            }

            .photocontentblock {
              height: auto !important;
            }

            .photocontenttextcontainer {
              width: 90%;
            }

            .photoblocktitletext {
              font-size: 7vw;
              margin: 0;
            }

            .photoblocktitletextcol2 {
              font-size: 7vw;
              margin: 0;
              line-height: 7vw;
            }

            .photocontentblocksubtext,
            .photocontentblocksubtextcol2 {
              text-align: center;
              line-height: 1vw;
              font-size: 4vw;
              margin: 5px 0 0 0;
            }

            .photocontentblockcontenttext,
            .photocontentblockcontenttextcol2 {
              line-height: 3vw;
              margin: 15px 0;
              font-size: 2.5vw;
            }

            .photocontentblockbutton,
            .photocontentblockbuttoncol2 {
              font-size: 3vw;
            }

          }
        </style>









        <div class="billboardcontainer">

          <div class="billboardimg" id="mainphotocontainer" style="width:100%;">
            <div id="mainbillboardimg2"
                 style="position:absolute;top:0;left:0;right:0;bottom:0;z-index:10;width:100%;overflow:hidden;"></div>
            <div id="mainbillboardimg1"
                 style="position:absolute;top:0;left:0;right:0;bottom:0;z-index:100;width:100%;overflow:hidden;">

              <a href="/business/museum" target="_blank"><img src="photos/billboards/AvonPark_Museum_baseball.jpg"
                     id="currentbillboardimg" style="width:100%;"
                     alt="Avon Park Museum 2025 - AvonPark_Museum_baseball.jpg"></a>

            </div>
          </div>
        </div>


        <div class="page-width" style="padding:0;">


          <div id="site-search">
            <div style="border:solid black 1px;width: 100%;border-radius: 10px;">
              <form action="?p=sitesearch" method="post" name="sitesearch" id="sitesearchform"
                    style="position: relative;">
                <input id="search-input" type="text" name="q" size="30" onfocus="showsearchinfo();"
                       placeholder="Search for anything...">
                <select name="searchtype" id="search-select">
                  <option value="listings_search">Listings</option>
                  <option value="eventslist">Events</option>
                  <option value="articles">Articles</option>
                  <option value="classifieds">Classifieds</option>
                  <option value="photos">Photos</option>
                  <option value="quizzes">Quizzes</option>
                  <option value="podcasts">Podcasts</option>
                </select>

                <input id="search-button" type="submit" name="submit" value="&#xe905;">
                <div id="sitesearchresult"> I am Sebot your personal AI. You may ask me anything or just chat with me
                  but I can do so much more. For a list of all my commands type help.</div>
              </form>
            </div>

          </div>
        </div>




        <div class="page-width" style="padding:0;">

          <div class="grid">













            <div class="col6">
              <div class="center">

                <h1 style="padding-bottom:0;margin-bottom:0;font-size:14pt;">Avon Park Historical Society</h1>
                <p>
                <div id="comp-m0bb0inf" class="Z_l5lU ku3DBC zQ9jDz qvSjx3 Vq6kJx comp-m0bb0inf wixui-rich-text"
                     data-testid="richTextElement">
                  <div class="announcementstext">
                    <p><span
                            style="color: #181818; font-family: Merriweather, Georgia, serif; font-size: 12pt;">&ldquo;Somewhere,
                        all the people we have loved and lost are still among us, in the house that we call
                        history.&rdquo;&nbsp;</span><br
                          style="color: #181818; font-family: Merriweather, Georgia, serif; font-size: 14px;" /><span
                            style="color: #181818; font-family: Merriweather, Georgia, serif; font-size: 14px;">―&nbsp;</span><span
                            class="authorOrTitle"
                            style="font-family: Lato, 'Helvetica Neue', Helvetica, sans-serif; font-weight: bold; font-size: 14px;">Graham
                        Masterton</span></p>
                  </div>
                </div>
                <section id="comp-m0cjg140" class="comp-m0cjg140 CohWsy wixui-column-strip">
                  <div id="bgLayers_comp-m0cjg140" class="if7Vw2" data-hook="bgLayers"
                       data-motion-part="BG_LAYER comp-m0cjg140">&nbsp;</div>
                </section>
                </p>


              </div>
            </div>


            <script>
              function GetNextAlert(a) {
                $.get("contentblock/publicinfoalertcontent.cfm?aid=" + a, function (data) {
                  $("#publicalertblock").html(data);
                });
              }


            </script>
            <style>
              .photonavrowdiv1 {
                display: inline-block;
                margin: 0 !important;
                width: 25%;
                box-sizing: border-box;
                padding: 0 20px 0 0;
              }

              .photonavrowdiv2 {
                display: inline-block;
                margin: 0 !important;
                width: 25%;
                box-sizing: border-box;
                padding: 0 13px 0 7px;
              }

              .photonavrowdiv3 {
                display: inline-block;
                margin: 0 !important;
                width: 25%;
                box-sizing: border-box;
                padding: 0 6px 0 14px;
              }

              .photonavrowdiv4 {
                display: inline-block;
                margin: 0 !important;
                width: 25%;
                box-sizing: border-box;
                padding: 0 0 0 20px;
              }

              @media screen and (max-width: 1500px) {}

              @media screen and (max-width: 1265px) {}

              @media screen and (max-width: 1000px) {
                .photonavrowdiv1 {
                  display: inline-block;
                  margin: 0 !important;
                  width: 50%;
                  box-sizing: border-box;
                  padding: 15px 15px;
                }

                .photonavrowdiv2 {
                  display: inline-block;
                  margin: 0 !important;
                  width: 50%;
                  box-sizing: border-box;
                  padding: 15px 15px;
                }

                .photonavrowdiv3 {
                  display: inline-block;
                  margin: 0 !important;
                  width: 50%;
                  box-sizing: border-box;
                  padding: 15px 15px;
                }

                .photonavrowdiv4 {
                  display: inline-block;
                  margin: 0 !important;
                  width: 50%;
                  box-sizing: border-box;
                  padding: 15px 15px;
                }
              }

              @media screen and (max-width: 750px) {}
            </style>
            <div class="col6" id="photonavrowdiv">
              <div class="photonavrowdiv1">
                <div class="col2" style="height:414px;width:100%;margin:auto;padding:0;">
                  <div class="border hp-fixed" style="height:100%;cursor:pointer;"
                       onclick="document.location.href='https://avonparkhistoricalsociety.com/business/museum';">
                    <div class="photonavcontentcontainer" style="">
                      <div class="photonavtextcontainer" style="">
                        <div class="photonavtitlecontainer" style="">
                          <p class="photonavtitle" id="photoblocktitletext"
                             style="font-family: 'Roboto', sans-serif;color: #ffffff;font-size: 12pt;line-height: 12pt;text-shadow: none;">
                          </p>
                        </div>
                        <div class="photonavsubtitlecontainer" style="">
                          <p class="photonavsubtitle" id="photonavblocksubtext"
                             style="color: #ffffff;text-shadow: none;"></p>
                        </div>
                      </div>
                      <img class="photonavblockimage" id="photonavblockimage"
                           src="photos/photonavblocks/Avon_Park_About_us1.jpg" alt=" - Avon_Park_About_us1.jpg"
                           loading="lazy" style="width: revert !important;max-width: none;">
                    </div>
                  </div>
                </div>
              </div>
              <div class="photonavrowdiv2">
                <div class="col2" style="height:414px;width:100%;margin:auto;padding:0;">
                  <div class="border hp-fixed" style="height:100%;cursor:pointer;"
                       onclick="document.location.href='https://avonparkhistoricalsociety.com/?p=page&v=volunteer';">
                    <div class="photonavcontentcontainer" style="">
                      <div class="photonavtextcontainer" style="">
                        <div class="photonavtitlecontainer" style="">
                          <p class="photonavtitle" id="photoblocktitletext"
                             style="font-family: 'Roboto', sans-serif;color: #ffffff;font-size: 12pt;line-height: 12pt;text-shadow: none;">
                          </p>
                        </div>
                        <div class="photonavsubtitlecontainer" style="">
                          <p class="photonavsubtitle" id="photonavblocksubtext"
                             style="color: #ffffff;text-shadow: none;"></p>
                        </div>
                      </div>
                      <img class="photonavblockimage" id="photonavblockimage"
                           src="photos/photonavblocks/Avon_Park_Volunteers1.jpg" alt=" - Avon_Park_Volunteers1.jpg"
                           loading="lazy" style="width: revert !important;max-width: none;">
                    </div>
                  </div>
                </div>
              </div>
              <div class="photonavrowdiv3">
                <div class="col2" style="height:414px;width:100%;margin:auto;padding:0;">
                  <div class="border hp-fixed" style="height:100%;cursor:pointer;"
                       onclick="document.location.href='https://avonparkhistoricalsociety.com/?p=page&v=membership';">
                    <div class="photonavcontentcontainer" style="">
                      <div class="photonavtextcontainer" style="">
                        <div class="photonavtitlecontainer" style="">
                          <p class="photonavtitle" id="photoblocktitletext"
                             style="font-family: 'Roboto', sans-serif;color: #ffffff;font-size: 12pt;line-height: 12pt;text-shadow: none;">
                          </p>
                        </div>
                        <div class="photonavsubtitlecontainer" style="">
                          <p class="photonavsubtitle" id="photonavblocksubtext"
                             style="color: #ffffff;text-shadow: none;"></p>
                        </div>
                      </div>
                      <img class="photonavblockimage" id="photonavblockimage"
                           src="photos/photonavblocks/Avon_Park_Donate.jpg" alt=" - Avon_Park_Donate.jpg" loading="lazy"
                           style="width: revert !important;max-width: none;">
                    </div>
                  </div>
                </div>
              </div>
              <div class="photonavrowdiv4">
                <div class="col2" style="height:414px;width:100%;margin:auto;padding:0;">
                  <div class="border hp-fixed" style="height:100%;cursor:pointer;"
                       onclick="document.location.href='https://avonparkhistoricalsociety.com/?p=page&v=membership';">
                    <div class="photonavcontentcontainer" style="">
                      <div class="photonavtextcontainer" style="">
                        <div class="photonavtitlecontainer" style="">
                          <p class="photonavtitle" id="photoblocktitletext"
                             style="font-family: 'Roboto', sans-serif;color: #ffffff;font-size: 12pt;line-height: 12pt;text-shadow: none;">
                          </p>
                        </div>
                        <div class="photonavsubtitlecontainer" style="">
                          <p class="photonavsubtitle" id="photonavblocksubtext"
                             style="color: #ffffff;text-shadow: none;"></p>
                        </div>
                      </div>
                      <img class="photonavblockimage" id="photonavblockimage"
                           src="photos/photonavblocks/Avon_Park_Member.jpg" alt=" - Avon_Park_Member.jpg" loading="lazy"
                           style="width: revert !important;max-width: none;">
                    </div>
                  </div>
                </div>
              </div>


            </div>
            <style>
              .eventlistitemcontainer {

                display: inline-block;
                width: 33%;

                vertical-align: top;
                /*height:122px;*/
                margin-top: 10px;
                margin-bottom: 10px;
                cursor: pointer;
              }

              .eventlistimgcontainer {
                float: left;
                width: 122px;
                height: 122px;
                margin-right: 8px;
                overflow: hidden;
                border-radius: 10px;
              }

              .eventlistimgcontainer img {
                display: block;
                max-width: 100%;
                border-radius: 10px;
                transition: transform .4s;
                /* smoother zoom */
              }

              .eventlistimgcontainer:hover img {
                transform: scale(1.3);
                transform-origin: 50% 50%;
              }

              @media only screen and (max-width: 1265px) {
                .eventlistitemcontainer {
                  width: 49.5%;
                }
              }

              @media only screen and (max-width: 1000px) {
                .eventlistitemcontainer {
                  width: 100%;
                }
              }

              @media only screen and (max-width: 750px) {
                .eventlistitemcontainer {
                  width: 100%;
                }
              }
            </style>

            <link href="https://fonts.googleapis.com/css?family=Roboto:100" rel="stylesheet">

            <div class="col6 photocontentblock">

              <div class="border-hp-header" style="color:#000000"></div>

              <div class="border hp-fixed" style="">

                <div class="article_bgp_imgcontainer"
                     onclick="location.href='https://avonparkhistoricalsociety.com/business/baseballmuseum';"
                     style="max-height: 100%;overflow: hidden;display: flex;align-items: center;justify-content: center;">

                  <div class="photocontenttextcontainer" style="text-shadow: 2px 2px #000000;color:#ffffff;">
                    <p class="photocontentblocksubtext" style="color: #ffffff;">Avon Park Baseball Museum</p>
                    <p class="photocontentblockbuttoncontainer"><a
                         href="https://avonparkhistoricalsociety.com/business/baseballmuseum"
                         class="photocontentblockbutton" style="border:solid #ffffff 2px;color: #ffffff;">Learn More</a>
                    </p>
                  </div>

                  <img src="photos/photocontentblocks/Avon_Park_Museum_Baseball.jpg" alt="" loading="lazy"
                       style="width:100%;cursor:pointer;">

                </div>

              </div>
            </div>
            <div style="clear:both;"></div>
          </div>
        </div>

        <div style="width:100%;min-width:500px;background:#ffffff;">
          <div class="page-width" style="padding-top:20px;padding-bottom:60px;">
            <div class="grid">
              <div class="col6" style="margin-bottom:0;">

                <h2
                    style="font-family:sans-serif;font-size:32pt;font-weight:bold;font-variant-caps: small-caps;letter-spacing:-2px;padding:10px 0 10px 0;color:#000000;">
                  Articles
                </h2>

              </div>










              <div class="col6" style="padding: 0;">
                <div class="grid" style="margin:0;padding:0;">


                  <div class="col3 article_bgp_lgblock">
                    <div class="border hp-fixed table article_bgp_lgdiv">
                      <div class="article_bgp_imgcontainer" style="height: 554px;max-height:554px;cursor:pointer;"
                           onclick="document.location.href='/article/148_Main-Street-Through-the-Ages';"><img
                             src="photos/articles/AP_depot_sign.jpg" alt="Main Street Through the Ages" loading="lazy"
                             style="min-width: initial;min-height: 554px;height: 554px;max-width: initial;"></div>
                      <div class="gm-sub-cate">
                        <small>
                          <ul class="post-categories">

                            <li><a href="/articles&scid=0" rel="category tag"
                                 style="background:#9999aa;color:#FFFFFF;">General</a></li>

                          </ul>
                        </small>
                      </div>
                      <div class="article_bgp_title"><a href="/article/148_Main-Street-Through-the-Ages">Main Street
                          Through the Ages</a></div>
                    </div>
                  </div>

                  <div class="col1 article_bgp_smblock">

                    <div class="col1" style="width:100%;margin: 0;">
                      <div class="border hp-fixed table article_bgp_smdiv">
                        <div class="article_bgp_imgcontainer" style="height:250px !important;cursor:pointer;"
                             onclick="document.location.href='/article/149_The-Lakes-That-Shaped-Avon-Park';"><img
                               src="photos/articles/Lake_Verona_w.jpg" alt="The Lakes That Shaped Avon Park"
                               loading="lazy"
                               style="min-width: initial;min-height: 250px;height: 250px;max-width: initial;"></div>
                        <div class="gm-sub-cate">
                          <small>
                            <ul class="post-categories">

                              <li><a href="/articles&scid=0" rel="category tag"
                                   style="background:#9999aa;color:#FFFFFF;">General</a></li>

                            </ul>
                          </small>
                        </div>
                        <div class="article_bgp_title" style="font-family:'Reem Kufi', sans-serif;"><a
                             href="/article/149_The-Lakes-That-Shaped-Avon-Park">The Lakes That Shaped Avon Park</a>
                        </div>
                      </div>
                    </div>

                    <div class="col1" style="width:100%;margin: 0;">
                      <div class="border hp-fixed table article_bgp_smdiv">
                        <div class="article_bgp_imgcontainer" style="height:250px !important;cursor:pointer;"
                             onclick="document.location.href='/article/147_The-Story-of-Avon-Park’s-Nickname-“City-of-Charm”';">
                          <img src="photos/articles/Gazebo_AvonPark_w.jpg"
                               alt="The Story of Avon Park’s Nickname “City of Charm”" loading="lazy"
                               style="min-width: initial;min-height: 250px;height: 250px;max-width: initial;">
                        </div>
                        <div class="gm-sub-cate">
                          <small>
                            <ul class="post-categories">

                              <li><a href="/articles&scid=0" rel="category tag"
                                   style="background:#9999aa;color:#FFFFFF;">General</a></li>

                            </ul>
                          </small>
                        </div>
                        <div class="article_bgp_title" style="font-family:'Reem Kufi', sans-serif;"><a
                             href="/article/147_The-Story-of-Avon-Park’s-Nickname-“City-of-Charm”">The Story of Avon
                            Park’s Nickname “City of Charm”</a></div>
                      </div>
                    </div>

                  </div>

                  <div class="col1 article_bgp_smblock">

                    <div class="col1" style="width:100%;margin: 0;">
                      <div class="border hp-fixed table article_bgp_smdiv">
                        <div class="article_bgp_imgcontainer" style="height:250px !important;cursor:pointer;"
                             onclick="document.location.href='/article/145_The-Verona-Hotel';"><img
                               src="photos/articles/VeronaHotel_crop.jpg" alt="The Verona Hotel" loading="lazy"
                               style="min-width: initial;min-height: 250px;height: 250px;max-width: initial;"></div>
                        <div class="gm-sub-cate">
                          <small>
                            <ul class="post-categories">

                              <li><a href="/articles&scid=0" rel="category tag"
                                   style="background:#9999aa;color:#FFFFFF;">General</a></li>

                            </ul>
                          </small>
                        </div>
                        <div class="article_bgp_title" style="font-family:'Reem Kufi', sans-serif;"><a
                             href="/article/145_The-Verona-Hotel">The Verona Hotel</a></div>
                      </div>
                    </div>

                    <div class="col1" style="width:100%;margin: 0;">
                      <div class="border hp-fixed table article_bgp_smdiv">
                        <div class="article_bgp_imgcontainer" style="height:250px !important;cursor:pointer;"
                             onclick="document.location.href='/article/146_Highlands-PEO';"><img
                               src="photos/articles/PEO2.JPG" alt="Highlands PEO" loading="lazy"
                               style="min-width: initial;min-height: 250px;height: 250px;max-width: initial;"></div>
                        <div class="gm-sub-cate">
                          <small>
                            <ul class="post-categories">

                              <li><a href="/articles&scid=0" rel="category tag"
                                   style="background:#9999aa;color:#FFFFFF;">General</a></li>

                            </ul>
                          </small>
                        </div>
                        <div class="article_bgp_title" style="font-family:'Reem Kufi', sans-serif;"><a
                             href="/article/146_Highlands-PEO">Highlands PEO</a></div>
                      </div>
                    </div>

                  </div>

                </div>
              </div>




              <div style="clear:both;"></div>
            </div>
          </div>

        </div>

        <div style="width:100%;min-width:500px;background:#5b6a55;">
          <div class="page-width" style="padding-top:20px;padding-bottom:60px;">
            <div class="grid">
              <div class="col6" style="margin-bottom:0;">

                <h2
                    style="font-family:sans-serif;font-size:32pt;font-weight:bold;font-variant-caps: small-caps;letter-spacing:-2px;padding:10px 0 10px 0;color:#000000;">
                  Videos
                </h2>

              </div>

              <style>
                .video-responsive {
                  overflow: hidden;
                  padding-bottom: 56.25%;
                  position: relative;
                  height: 0;
                }

                .video-responsive iframe {
                  left: 0;
                  top: 0;
                  height: 100%;
                  width: 100%;
                  position: absolute;
                }
              </style>
              <div class="col2">

                <div class="border-hp-header" style="color:#000000">Preserving History</div>

                <div class="hp-fixed" style="">

                  <div class="video-responsive" style="text-align:center;">

                    <iframe width="560" height="315" src="https://www.youtube.com/embed/RO7EFcsvCik" frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>

                  </div>

                </div>
              </div>

              <style>
                .video-responsive {
                  overflow: hidden;
                  padding-bottom: 56.25%;
                  position: relative;
                  height: 0;
                }

                .video-responsive iframe {
                  left: 0;
                  top: 0;
                  height: 100%;
                  width: 100%;
                  position: absolute;
                }
              </style>
              <div class="col2">

                <div class="border-hp-header" style="color:#000000">Sebring Historical Society</div>

                <div class="hp-fixed" style="">

                  <div class="video-responsive" style="text-align:center;">

                    <iframe width="560" height="315" src="https://www.youtube.com/embed/-aZatbHiUsg" frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>

                  </div>

                </div>
              </div>

              <div class="col6 photocontentblock">

                <div class="border-hp-header" style="color:#000000"></div>

                <div class="border hp-fixed" style="">

                  <div class="article_bgp_imgcontainer"
                       onclick="location.href='https://avonparkhistoricalsociety.com/?p=page&v=diningcar';"
                       style="max-height: 100%;overflow: hidden;display: flex;align-items: center;justify-content: center;">

                    <div class="photocontenttextcontainer" style="text-shadow: 2px 2px #000000;color:#ffffff;">
                      <a href="https://avonparkhistoricalsociety.com/?p=page&v=diningcar" class="photoblocktitletext"
                         style="font-family: 'Anton', sans-serif;color: #ffffff;">Dining Car</a>
                      <p class="photocontentblockbuttoncontainer"><a
                           href="https://avonparkhistoricalsociety.com/?p=page&v=diningcar"
                           class="photocontentblockbutton" style="border:solid #ffffff 2px;color: #ffffff;">View
                          Menu</a></p>
                    </div>

                    <img src="photos/photocontentblocks/Train_AP.jpg" alt="Dining Car" loading="lazy"
                         style="width:100%;cursor:pointer;">

                  </div>

                </div>
              </div>
              <div style="clear:both;"></div>
            </div>
          </div>

        </div>

        <div style="width:100%;min-width:500px;background:#eeeeee;">
          <div class="page-width" style="padding-top:20px;padding-bottom:60px;">
            <div class="grid">
              <div class="col6" style="margin-bottom:0;">

                <h2
                    style="font-family:sans-serif;font-size:32pt;font-weight:bold;font-variant-caps: small-caps;letter-spacing:-2px;padding:10px 0 10px 0;color:#000000;">
                  Photos
                </h2>

              </div>

              <style>
                .border-header-green {
                  height: 19px;
                  background-color: #dddddd;
                  background: -moz-linear-gradient(left, #ddddcc 20%, #cccc99 100%);
                  /* FF3.6-15 */
                  background: -webkit-linear-gradient(left, #ddddcc 20%, #cccc99 100%);
                  /* Chrome10-25,Safari5.1-6 */
                  background: linear-gradient(to right, #ddddcc 20%, #cccc99 100%);
                  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
                  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ddddcc', endColorstr='#cccc99', GradientType=1);
                  /* IE6-9 */
                  color: black;
                  font-size: 22px;
                  font-family: "Times New Roman", Times, serif;
                  padding: 3px 5px 13px 8px;
                  display: block;
                }

                .maincontentscrollingblock {
                  /* Standard */
                  height: 100%;
                  box-sizing: border-box;
                  overflow: auto;
                  padding-top: 0;
                  margin-top: 0;
                }

                .slides {
                  position: relative;
                  display: grid;
                  height: auto !important;
                  align-content: center;
                  align-items: center;
                  justify-items: center;
                  overflow: hidden;
                }

                .slides button {
                  position: absolute;
                  height: 100%;
                  left: 0;
                  top: 0;
                  background: none;
                  border: none;
                  color: #0066cc;
                  font-size: 32px;
                  font-family: 'sebring-icons';
                }

                .slides button.next {
                  left: auto;
                  right: 0;
                }
              </style>

              <div id="memberphotopopup"
                   style="display:none;position:fixed;top:0;left:0;z-index:1100;width:100%;height:100%;background:rgba(0,0,0,0.30);">
                <div id="memberphotopopupcontent"
                     style="position:fixed;top:10%;left:50%;margin:0 0 0 -375px;width:750px;z-index:1100;background-color:#ffffff;border:solid #000000 2px;-webkit-box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.50);-moz-box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.50);box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.50);">
                </div>
              </div>

              <div class="col2" style="height:414px;">

                <div class="border-hp-header"><span style="cursor:pointer;color:#000000"
                        onclick="document.location.href='?p=memberphotos';"></span>
                  <p style="float:right;font-size:12pt;padding-top:5px;"><a href="?p=memberphotos"
                       style="color:#000055;">View All</a> <a
                       href="javascript:alert('You Must Login or Join to Post!');"
                       style="color:#000055;margin-left:10px;"><i class="fas fa-plus-circle"></i></a></p>
                </div>

                <div class="border hp-fixed" style="">



                  <div class="padding maincontentscrollingblock" style="clear:both;overflow-y:auto;overflow-x:hidden;"
                       id="communityphotosblock22">

                    <div class="slides">
                      <button class="previous" data-role="none"
                              onclick="GetNextMemberPhoto('165','communityphotosblock22','1','prev');"
                              style="cursor:pointer;">&#xe902;</button>

                      <img src="photos/members/267/communityphotos/thumbnail/thumb_lg_IMG_0012.JPG"
                           style="display:block;margin:0 auto;padding:5px 0;max-width:99%;max-height:275px;cursor:pointer;"
                           onclick="location='/memberphoto/165_Dining-Car'" alt="Dining Car">


                      <button class="next" data-role="none"
                              onclick="GetNextMemberPhoto('165','communityphotosblock22','1','next');"
                              style="cursor:pointer;">&#xe901;</button>
                      <input type="hidden" name="pid" id="pid" value="165">
                      <input type="hidden" name="cid" id="cid" value="communityphotosblock22">
                    </div>

                    <p style="text-align:center;font-size:8pt;color:#999999;padding:2px 5px 2px 2px;margin:0;">By: Avon
                      Park Historical Society</p>
                    <h3 style="text-align:center;">Dining Car</h3>



                  </div>
                </div>
              </div>
              <script>
                $(function () {
                  // Bind the swipeleftHandler callback function to the swipe event on div.box
                  $("div.slides").on("swipeleft", swipeleftHandler);
                  $("div.slides").on("swiperight", swiperightHandler);

                  // Callback function references the event target and adds the 'swipeleft' class to it
                  function swipeleftHandler(event) {
                    var pi = $("#pid").val();
                    var ci = $("#cid").val();
                    $.get("contentblock/memberphotosgetthumbnailphoto.cfm?pid=" + pi + "&cid=" + ci + "&getp=next", function (data) {
                      $("#" + ci).html(data);
                    });
                  }
                  function swiperightHandler(event) {
                    var pi = $("#pid").val();
                    var ci = $("#cid").val();
                    $.get("contentblock/memberphotosgetthumbnailphoto.cfm?pid=" + pi + "&cid=" + ci + "&getp=prev", function (data) {
                      $("#" + ci).html(data);
                    });
                  }
                });

                function ShowLargeMemberPhoto(i, w, h) {
                  //  $("#accountpopupcontent").width(w);
                  //  $("#accountpopupcontent").height(h);
                  $('#memberphotopopup').show();
                  $.get("contentblock/memberphotosgetlargephoto.cfm?pid=" + i, function (data) {
                    $("#memberphotopopupcontent").html(data);
                  });
                }

                function GetNextMemberPhoto(i, d, c, np) {
                  $.get("contentblock/memberphotosgetthumbnailphoto.cfm?pid=" + i + "&cid=" + d + "&cat=" + c + "&getp=" + np, function (data) {
                    $("#" + d).html(data);
                  });
                }


                function CloseLargeMemberPopup() {
                  $('#memberphotopopup').hide();
                }

                $('#memberphotopopup').click(function () {
                  $('#memberphotopopup').hide();
                });

                $('#memberphotopopupcontent').click(function (event) {
                  event.stopPropagation();
                });
              </script>

              <style>
                .border-header-green {
                  height: 19px;
                  background-color: #dddddd;
                  background: -moz-linear-gradient(left, #ddddcc 20%, #cccc99 100%);
                  /* FF3.6-15 */
                  background: -webkit-linear-gradient(left, #ddddcc 20%, #cccc99 100%);
                  /* Chrome10-25,Safari5.1-6 */
                  background: linear-gradient(to right, #ddddcc 20%, #cccc99 100%);
                  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
                  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ddddcc', endColorstr='#cccc99', GradientType=1);
                  /* IE6-9 */
                  color: black;
                  font-size: 22px;
                  font-family: "Times New Roman", Times, serif;
                  padding: 3px 5px 13px 8px;
                  display: block;
                }

                .maincontentscrollingblock {
                  /* Standard */
                  height: 100%;
                  box-sizing: border-box;
                  overflow: auto;
                  padding-top: 0;
                  margin-top: 0;
                }

                .slides {
                  position: relative;
                  display: grid;
                  height: auto !important;
                  align-content: center;
                  align-items: center;
                  justify-items: center;
                  overflow: hidden;
                }

                .slides button {
                  position: absolute;
                  height: 100%;
                  left: 0;
                  top: 0;
                  background: none;
                  border: none;
                  color: #0066cc;
                  font-size: 32px;
                  font-family: 'sebring-icons';
                }

                .slides button.next {
                  left: auto;
                  right: 0;
                }
              </style>

              <div id="memberphotopopup"
                   style="display:none;position:fixed;top:0;left:0;z-index:1100;width:100%;height:100%;background:rgba(0,0,0,0.30);">
                <div id="memberphotopopupcontent"
                     style="position:fixed;top:10%;left:50%;margin:0 0 0 -375px;width:750px;z-index:1100;background-color:#ffffff;border:solid #000000 2px;-webkit-box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.50);-moz-box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.50);box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.50);">
                </div>
              </div>

              <div class="col2" style="height:414px;">

                <div class="border-hp-header"><span style="cursor:pointer;color:#000000"
                        onclick="document.location.href='?p=memberphotos';"></span>
                  <p style="float:right;font-size:12pt;padding-top:5px;"><a href="?p=memberphotos"
                       style="color:#000055;">View All</a> <a
                       href="javascript:alert('You Must Login or Join to Post!');"
                       style="color:#000055;margin-left:10px;"><i class="fas fa-plus-circle"></i></a></p>
                </div>

                <div class="border hp-fixed" style="">



                  <div class="padding maincontentscrollingblock" style="clear:both;overflow-y:auto;overflow-x:hidden;"
                       id="communityphotosblock69">

                    <div class="slides">
                      <button class="previous" data-role="none"
                              onclick="GetNextMemberPhoto('159','communityphotosblock69','8','prev');"
                              style="cursor:pointer;">&#xe902;</button>

                      <img src="photos/members/267/communityphotos/thumbnail/thumb_100_0072.JPG"
                           style="display:block;margin:0 auto;padding:5px 0;max-width:99%;max-height:275px;cursor:pointer;"
                           onclick="location='/memberphoto/159_Tanglewood-Friends'" alt="Tanglewood Friends">


                      <button class="next" data-role="none"
                              onclick="GetNextMemberPhoto('159','communityphotosblock69','8','next');"
                              style="cursor:pointer;">&#xe901;</button>
                      <input type="hidden" name="pid" id="pid" value="159">
                      <input type="hidden" name="cid" id="cid" value="communityphotosblock69">
                    </div>

                    <p style="text-align:center;font-size:8pt;color:#999999;padding:2px 5px 2px 2px;margin:0;">By: Avon
                      Park Historical Society</p>
                    <h3 style="text-align:center;">Tanglewood Friends</h3>



                  </div>
                </div>
              </div>
              <script>
                $(function () {
                  // Bind the swipeleftHandler callback function to the swipe event on div.box
                  $("div.slides").on("swipeleft", swipeleftHandler);
                  $("div.slides").on("swiperight", swiperightHandler);

                  // Callback function references the event target and adds the 'swipeleft' class to it
                  function swipeleftHandler(event) {
                    var pi = $("#pid").val();
                    var ci = $("#cid").val();
                    $.get("contentblock/memberphotosgetthumbnailphoto.cfm?pid=" + pi + "&cid=" + ci + "&getp=next", function (data) {
                      $("#" + ci).html(data);
                    });
                  }
                  function swiperightHandler(event) {
                    var pi = $("#pid").val();
                    var ci = $("#cid").val();
                    $.get("contentblock/memberphotosgetthumbnailphoto.cfm?pid=" + pi + "&cid=" + ci + "&getp=prev", function (data) {
                      $("#" + ci).html(data);
                    });
                  }
                });

                function ShowLargeMemberPhoto(i, w, h) {
                  //  $("#accountpopupcontent").width(w);
                  //  $("#accountpopupcontent").height(h);
                  $('#memberphotopopup').show();
                  $.get("contentblock/memberphotosgetlargephoto.cfm?pid=" + i, function (data) {
                    $("#memberphotopopupcontent").html(data);
                  });
                }

                function GetNextMemberPhoto(i, d, c, np) {
                  $.get("contentblock/memberphotosgetthumbnailphoto.cfm?pid=" + i + "&cid=" + d + "&cat=" + c + "&getp=" + np, function (data) {
                    $("#" + d).html(data);
                  });
                }


                function CloseLargeMemberPopup() {
                  $('#memberphotopopup').hide();
                }

                $('#memberphotopopup').click(function () {
                  $('#memberphotopopup').hide();
                });

                $('#memberphotopopupcontent').click(function (event) {
                  event.stopPropagation();
                });
              </script>


              <style>
                .articlelistitemcontainer {

                  display: inline-block;
                  width: 33%;

                  vertical-align: top;
                  /*height:122px;*/
                  margin-top: 10px;
                  margin-bottom: 10px;
                  cursor: pointer;
                }

                .articlelistimgcontainer {
                  float: left;
                  width: 122px;
                  height: 122px;
                  margin-right: 8px;
                  overflow: hidden;
                  border-radius: 10px;
                }

                .articlelistimgcontainer img {
                  display: block;
                  max-width: 100%;
                  border-radius: 10px;
                  transition: transform .4s;
                  /* smoother zoom */
                }

                .articlelistimgcontainer:hover img {
                  transform: scale(1.3);
                  transform-origin: 50% 50%;
                }

                .articlelistingcatbox {
                  display: inline-block;
                  padding: 2px 4px;
                  font-size: 9pt;
                  font-weight: bold;
                  margin: 2px 0 3px 0;
                  border-radius: 4px;
                }

                @media only screen and (max-width: 1265px) {
                  .articlelistitemcontainer {
                    width: 49.5%;
                  }
                }

                @media only screen and (max-width: 1000px) {
                  .articlelistitemcontainer {
                    width: 100%;
                  }
                }

                @media only screen and (max-width: 750px) {
                  .articlelistitemcontainer {
                    width: 100%;
                  }
                }
              </style>


              <div class="col6" style="height:auto;margin:30px 0;">
                <div style="">
                  <div style="width:100%;margin-top:10px;">
                    <h2
                        style="font-family:sans-serif;font-size:32pt;font-weight:bold;font-variant-caps: small-caps;letter-spacing:-2px;padding:10px 0 0 0;margin-bottom:0;color:#696969;">
                      General Articles
                    </h2>
                    <p
                       style="margin-top:0;padding:0px 10px 10px 5px;font-size: 12pt;font-weight:bold;margin-bottom:10px;">
                      <a href="?p=articles" style="color:#696969;">SEE ALL <i
                           class="fas fa-long-arrow-alt-right"></i></a>
                    </p>
                  </div>
                  <div style="width:100%;vertical-align:top;">

                    <div class="articlelistitemcontainer"
                         onclick="document.location.href='/article/152_Aid-and-Support-Ricky-and-Beth-Helms';">

                      <div class="articlelistimgcontainer" style="">
                        <img src="photos/articles/thumbnail/thumb_Rick-and-Beth-Helms-photo-1.jpg"
                             alt="Article: Aid and Support Ricky and Beth Helms - Rick-and-Beth-Helms-photo-1.jpg"
                             style="" />
                      </div>

                      <div style="box-sizing:border-box;padding:0 10px;">
                        <p style="font-size:14pt;font-weight:bold;color:#0066cc;margin:0;padding:0px 0 0 0;"><a
                             href="/article/152_Aid-and-Support-Ricky-and-Beth-Helms">Aid and Support Ricky and Beth
                            Helms</a></p>
                        <span class="articlelistingcatbox" style="background:#9999aa;color:#FFFFFF;">General</span>

                        <p>Ricky Helms of Avon Park is hospitalized in Orlando and he and his wife Beth need financial
                          assistance.</p>
                      </div>
                      <div style="clear:both;"></div>
                    </div>

                    <div class="articlelistitemcontainer"
                         onclick="document.location.href='/article/151_A-Visit-to-the-Depot-Museum';">

                      <div class="articlelistimgcontainer" style="">
                        <img src="photos/articles/thumbnail/thumb_AP_Depot_door.jpg"
                             alt="Article: A Visit to the Depot Museum - AP_Depot_door.jpg" style="" />
                      </div>

                      <div style="box-sizing:border-box;padding:0 10px;">
                        <p style="font-size:14pt;font-weight:bold;color:#0066cc;margin:0;padding:0px 0 0 0;"><a
                             href="/article/151_A-Visit-to-the-Depot-Museum">A Visit to the Depot Museum</a></p>
                        <span class="articlelistingcatbox" style="background:#9999aa;color:#FFFFFF;">General</span>

                        <p>Come visit us at the Avon Park Historical Society & Depot Museum. Whether you’re a lifelong
                          resident or new to the area, there’s something inspiring waiting for you inside.</p>
                      </div>
                      <div style="clear:both;"></div>
                    </div>

                    <div class="articlelistitemcontainer"
                         onclick="document.location.href='/article/150_Educations-Tours-for-Schools';">

                      <div class="articlelistimgcontainer" style="">
                        <img src="photos/articles/thumbnail/thumb_DSCF4055.JPG"
                             alt="Article: Educations Tours for Schools - DSCF4055.JPG" style="" />
                      </div>

                      <div style="box-sizing:border-box;padding:0 10px;">
                        <p style="font-size:14pt;font-weight:bold;color:#0066cc;margin:0;padding:0px 0 0 0;"><a
                             href="/article/150_Educations-Tours-for-Schools">Educations Tours for Schools</a></p>
                        <span class="articlelistingcatbox" style="background:#9999aa;color:#FFFFFF;">General</span>

                        <p>Interested in Educational School group tours?</p>
                      </div>
                      <div style="clear:both;"></div>
                    </div>

                    <div class="articlelistitemcontainer"
                         onclick="document.location.href='/article/149_The-Lakes-That-Shaped-Avon-Park';">

                      <div class="articlelistimgcontainer" style="">
                        <img src="photos/articles/thumbnail/thumb_Lake_Verona_w.jpg"
                             alt="Article: The Lakes That Shaped Avon Park - Lake_Verona_w.jpg" style="" />
                      </div>

                      <div style="box-sizing:border-box;padding:0 10px;">
                        <p style="font-size:14pt;font-weight:bold;color:#0066cc;margin:0;padding:0px 0 0 0;"><a
                             href="/article/149_The-Lakes-That-Shaped-Avon-Park">The Lakes That Shaped Avon Park</a></p>
                        <span class="articlelistingcatbox" style="background:#9999aa;color:#FFFFFF;">General</span>

                        <p>Long before modern development, these freshwater gems drew settlers, supported daily life,
                          and helped define the city’s unique landscape.</p>
                      </div>
                      <div style="clear:both;"></div>
                    </div>

                    <div class="articlelistitemcontainer"
                         onclick="document.location.href='/article/148_Main-Street-Through-the-Ages';">

                      <div class="articlelistimgcontainer" style="">
                        <img src="photos/articles/thumbnail/thumb_AP_depot_sign.jpg"
                             alt="Article: Main Street Through the Ages - AP_depot_sign.jpg" style="" />
                      </div>

                      <div style="box-sizing:border-box;padding:0 10px;">
                        <p style="font-size:14pt;font-weight:bold;color:#0066cc;margin:0;padding:0px 0 0 0;"><a
                             href="/article/148_Main-Street-Through-the-Ages">Main Street Through the Ages</a></p>
                        <span class="articlelistingcatbox" style="background:#9999aa;color:#FFFFFF;">General</span>

                        <p>The history of Avon Park is still visible in storefronts and architecture, while others
                          preserved only in memory and the archives of the Avon Park Historical Society.</p>
                      </div>
                      <div style="clear:both;"></div>
                    </div>

                    <div class="articlelistitemcontainer"
                         onclick="document.location.href='/article/147_The-Story-of-Avon-Park’s-Nickname-“City-of-Charm”';">

                      <div class="articlelistimgcontainer" style="">
                        <img src="photos/articles/thumbnail/thumb_Gazebo_AvonPark_w.jpg"
                             alt="Article: The Story of Avon Park’s Nickname “City of Charm” - Gazebo_AvonPark_w.jpg"
                             style="" />
                      </div>

                      <div style="box-sizing:border-box;padding:0 10px;">
                        <p style="font-size:14pt;font-weight:bold;color:#0066cc;margin:0;padding:0px 0 0 0;"><a
                             href="/article/147_The-Story-of-Avon-Park’s-Nickname-“City-of-Charm”">The Story of Avon
                            Park’s Nickname “City of Charm”</a></p>
                        <span class="articlelistingcatbox" style="background:#9999aa;color:#FFFFFF;">General</span>

                        <p>Avon Park carries many titles and memories, but none are as enduring, or as fitting, as its
                          beloved nickname: “The City of Charm.” </p>
                      </div>
                      <div style="clear:both;"></div>
                    </div>


                  </div>
                </div>
              </div>
              <div style="clear:both;"></div>
            </div>
          </div>

        </div>

        <div style="width:100%;min-width:500px;background:#eeeeee;">
          <div class="page-width" style="padding-top:20px;padding-bottom:60px;">
            <div class="grid">
              <div class="col6" style="margin-bottom:0;">

                <h2
                    style="font-family:sans-serif;font-size:32pt;font-weight:bold;font-variant-caps: small-caps;letter-spacing:-2px;padding:10px 0 10px 0;color:#000000;">
                  History
                </h2>

              </div>








              <div class="col6" style="padding: 0;">
                <div class="grid" style="margin:0;padding:0;">


                  <div class="col1 article_bgp_smblock">

                    <div class="col1" style="width:100%;margin: 0;">
                      <div class="border hp-fixed table article_bgp_smdiv">
                        <div class="article_bgp_imgcontainer" style="height:250px !important;cursor:pointer;"
                             onclick="document.location.href='?p=page&v=Foundingexhibit';"><img
                               src="photos/fiveblocks/IMG_00051.JPG" alt="Founding Exhibit" loading="lazy"
                               style="min-width: initial;min-height: 250px;height: 250px;max-width: initial;"></div>
                        <div class="gm-sub-cate">
                          <small>
                            <ul class="post-categories">

                              <li><a rel="category tag" style="background:#91524b;color:#FFF;">Exhibit</a></li>

                            </ul>
                          </small>
                        </div>
                        <div class="article_bgp_title" style="font-family:'Reem Kufi', sans-serif;"><a
                             href="?p=page&v=Foundingexhibit">Founding Exhibit</a></div>
                      </div>
                    </div>

                    <div class="col1" style="width:100%;margin: 0;">
                      <div class="border hp-fixed table article_bgp_smdiv">
                        <div class="article_bgp_imgcontainer" style="height:250px !important;cursor:pointer;"
                             onclick="document.location.href='?p=page&v=rolls';"><img
                               src="photos/fiveblocks/IMG_0006 (2).JPG" alt="Brown and Serve" loading="lazy"
                               style="min-width: initial;min-height: 250px;height: 250px;max-width: initial;"></div>
                        <div class="gm-sub-cate">
                          <small>
                            <ul class="post-categories">

                              <li><a rel="category tag" style="background:#91524b;color:#FFF;">Exhibit</a></li>

                            </ul>
                          </small>
                        </div>
                        <div class="article_bgp_title" style="font-family:'Reem Kufi', sans-serif;"><a
                             href="?p=page&v=rolls">Brown and Serve</a></div>
                      </div>
                    </div>

                  </div>

                  <div class="col3 article_bgp_lgblock">
                    <div class="border hp-fixed table article_bgp_lgdiv">
                      <div class="article_bgp_imgcontainer" style="height: 554px;max-height:554px;cursor:pointer;"
                           onclick="document.location.href='/business/museum';"><img
                             src="photos/fiveblocks/AP_depot_sign.jpg" alt="Depot Museum" loading="lazy"
                             style="min-width: initial;min-height: 554px;height: 554px;max-width: initial;"></div>
                      <div class="gm-sub-cate">
                        <small>
                          <ul class="post-categories">

                            <li><a rel="category tag" style="background:#608a6f;color:#FFF;">Museum</a></li>

                          </ul>
                        </small>
                      </div>
                      <div class="article_bgp_title"><a href="/business/museum">Depot Museum</a></div>
                    </div>
                  </div>

                  <div class="col1 article_bgp_smblock">

                    <div class="col1" style="width:100%;margin: 0;">
                      <div class="border hp-fixed table article_bgp_smdiv">
                        <div class="article_bgp_imgcontainer" style="height:250px !important;cursor:pointer;"
                             onclick="document.location.href='?p=page&v=highschool';"><img
                               src="photos/fiveblocks/IMG_0003.JPG" alt="High School Exhibit" loading="lazy"
                               style="min-width: initial;min-height: 250px;height: 250px;max-width: initial;"></div>
                        <div class="gm-sub-cate">
                          <small>
                            <ul class="post-categories">

                              <li><a rel="category tag" style="background:#91524b;color:#FFF;">Exhibit</a></li>

                            </ul>
                          </small>
                        </div>
                        <div class="article_bgp_title" style="font-family:'Reem Kufi', sans-serif;"><a
                             href="?p=page&v=highschool">High School Exhibit</a></div>
                      </div>
                    </div>

                    <div class="col1" style="width:100%;margin: 0;">
                      <div class="border hp-fixed table article_bgp_smdiv">
                        <div class="article_bgp_imgcontainer" style="height:250px !important;cursor:pointer;"
                             onclick="document.location.href='?p=page&v=military';"><img
                               src="photos/fiveblocks/IMG_0007.JPG" alt="Military Exhibit" loading="lazy"
                               style="min-width: initial;min-height: 250px;height: 250px;max-width: initial;"></div>
                        <div class="gm-sub-cate">
                          <small>
                            <ul class="post-categories">

                              <li><a rel="category tag" style="background:#91524b;color:#FFF;">Exhibit</a></li>

                            </ul>
                          </small>
                        </div>
                        <div class="article_bgp_title" style="font-family:'Reem Kufi', sans-serif;"><a
                             href="?p=page&v=military">Military Exhibit</a></div>
                      </div>
                    </div>

                  </div>

                </div>
              </div>





              <style>
                .quizzeslistitemcontainer {

                  display: inline-block;
                  width: 33%;

                  vertical-align: top;
                  /*height:122px;*/
                  margin-top: 10px;
                  margin-bottom: 10px;
                  cursor: pointer;
                }

                .quizzeslistimgcontainer {
                  float: left;
                  width: 122px;
                  height: 122px;
                  margin-right: 8px;
                  overflow: hidden;
                  border-radius: 10px;
                }

                .quizzeslistimgcontainer img {
                  display: block;
                  max-width: 100%;
                  border-radius: 10px;
                  transition: transform .4s;
                  /* smoother zoom */
                }

                .quizzeslistimgcontainer:hover img {
                  transform: scale(1.3);
                  transform-origin: 50% 50%;
                }

                .quizzeslistingcatbox {
                  display: inline-block;
                  padding: 2px 4px;
                  font-size: 9pt;
                  font-weight: bold;
                  margin: 2px 0 3px 0;
                  border-radius: 4px;
                }

                @media only screen and (max-width: 1265px) {
                  .quizzeslistitemcontainer {
                    width: 49.5%;
                  }
                }

                @media only screen and (max-width: 1000px) {
                  .quizzeslistitemcontainer {
                    width: 100%;
                  }
                }

                @media only screen and (max-width: 750px) {
                  .quizzeslistitemcontainer {
                    width: 100%;
                  }
                }
              </style>


              <div class="col6" style="height:auto;margin:30px 0;">
                <div style="">
                  <div style="width:100%;margin-top:10px;">
                    <h2
                        style="font-family:sans-serif;font-size:32pt;font-weight:bold;font-variant-caps: small-caps;letter-spacing:-2px;padding:10px 0 0 0;margin-bottom:0;color:#696969;">
                      Quizzes
                    </h2>
                    <p
                       style="margin-top:0;padding:0px 10px 10px 5px;font-size: 12pt;font-weight:bold;margin-bottom:10px;">
                      <a href="/quizzes" style="color:#696969;">SEE ALL <i class="fas fa-long-arrow-alt-right"></i></a>
                    </p>
                  </div>
                  <div style="width:100%;vertical-align:top;">

                    <div class="quizzeslistitemcontainer"
                         onclick="document.location.href='/quiz/4_Which-Famous-Avon-Park-Landmark-Are-You?';">

                      <div class="quizzeslistimgcontainer" style="">
                        <img src="photos/quizes/which_one.jpg"
                             alt="Quiz: Which Famous Avon Park Landmark Are You? - which_one.jpg" style="" />
                      </div>

                      <div style="box-sizing:border-box;padding:0 10px;">
                        <p style="font-size:14pt;font-weight:bold;color:#0066cc;margin:0;padding:0px 0 0 0;"><a
                             href="/quiz/4_Which-Famous-Avon-Park-Landmark-Are-You?">Which Famous Avon Park Landmark Are
                            You?</a></p>


                        <p>
                        <p><span style="font-size: 14pt;">Which iconic&nbsp;Avon Park spot best matches <em
                                data-start="538" data-end="544">your personality?</em></span></p>
                        </p>
                      </div>
                      <div style="clear:both;"></div>
                    </div>

                    <div class="quizzeslistitemcontainer"
                         onclick="document.location.href='/quiz/3_How-Well-Do-You-Know-Avon-Park’s-History?';">

                      <div class="quizzeslistimgcontainer" style="">
                        <img src="photos/quizes/hotel_Jac_w8.jpg"
                             alt="Quiz: How Well Do You Know Avon Park’s History? - hotel_Jac_w8.jpg" style="" />
                      </div>

                      <div style="box-sizing:border-box;padding:0 10px;">
                        <p style="font-size:14pt;font-weight:bold;color:#0066cc;margin:0;padding:0px 0 0 0;"><a
                             href="/quiz/3_How-Well-Do-You-Know-Avon-Park’s-History?">How Well Do You Know Avon Park’s
                            History?</a></p>


                        <p>
                        <p><span style="font-size: 14pt;">Here's you chance to show what you know about Avon Park's
                            History.&nbsp;</span></p>
                        </p>
                      </div>
                      <div style="clear:both;"></div>
                    </div>


                  </div>
                </div>
              </div>

              <div class="col6 photocontentblock">

                <div class="border-hp-header" style="color:#000000"></div>

                <div class="border hp-fixed" style="">

                  <div class="article_bgp_imgcontainer"
                       onclick="location.href='https://avonparkhistoricalsociety.com/article/151_A-Visit-to-the-Depot-Museum';"
                       style="max-height: 100%;overflow: hidden;display: flex;align-items: center;justify-content: center;">

                    <div class="photocontenttextcontainer" style="text-shadow: 2px 2px #000000;color:#ffffff;">
                      <a href="https://avonparkhistoricalsociety.com/article/151_A-Visit-to-the-Depot-Museum"
                         class="photoblocktitletext" style="font-family: 'Anton', sans-serif;color: #ffffff;">Avon Park
                        History</a>
                      <p class="photocontentblockbuttoncontainer"><a
                           href="https://avonparkhistoricalsociety.com/article/151_A-Visit-to-the-Depot-Museum"
                           class="photocontentblockbutton" style="border:solid #ffffff 2px;color: #ffffff;">Learn
                          More</a></p>
                    </div>

                    <img src="photos/photocontentblocks/Jacaranda_AP_history.jpg" alt="Avon Park History" loading="lazy"
                         style="width:100%;cursor:pointer;">

                  </div>

                </div>
              </div>






            </div>
          </div>



          <script>
            $(document).ready(function () {

              function getnewmainphoto(num) {
                //alert('test');
                if (num == '1') {
                  var num = 2;
                  var imgnum = 1;
                } else {
                  var num = 1;
                  var imgnum = 2;
                }
                $("#mainbillboardimg" + imgnum).delay(2000).fadeOut();
                $.get("contentblock/displayphotos.cfm", function (data) {
                  $("#mainbillboardimg" + num).html(data);
                  $("#mainbillboardimg" + num).fadeIn();

                  //alert("Data: " + data + "\nStatus: " + status);
                });
                setTimeout(function () {
                  getnewmainphoto(+num);
                }, 8000);
              }

              setTimeout(function () {
                getnewmainphoto('1');
              }, 8000);

            });
          </script>
        </div>
      </div>


      <div class="brandssliderbar" style="padding-left:4px;position:relative;z-index:90;height:85px;">
        <div>


          <div class="bxslider">

            <div class="bxslider-inner">
              <img src="photos/brands/HighlandsCounty1.png" style="max-height:75px;"
                   alt="Highlands County - HighlandsCounty1.png" title="Highlands County - HighlandsCounty1.png">
            </div>

            <div class="bxslider-inner">
              <a href="https://centralfloridacities.com/" target="_blank"
                 title="Central Florida Cities - CentralFloridaCitiesLogoOfficial-color.png"><img
                     src="photos/brands/CentralFloridaCitiesLogoOfficial-color.png" style="max-height:75px;"
                     alt="Central Florida Cities - CentralFloridaCitiesLogoOfficial-color.png"
                     title="Central Florida Cities - CentralFloridaCitiesLogoOfficial-color.png"></a>
            </div>

            <div class="bxslider-inner">
              <img src="photos/brands/SFJCCC.jpg" style="max-height:75px;"
                   alt="South Florida State College - SFJCCC.jpg" title="South Florida State College - SFJCCC.jpg">
            </div>

            <div class="bxslider-inner">
              <img src="photos/brands/ChamberCom.jpg" style="max-height:75px;" alt="Chamber - ChamberCom.jpg"
                   title="Chamber - ChamberCom.jpg">
            </div>

            <div class="bxslider-inner">
              <img src="photos/brands/Avon_Park_HS-scroll.png" style="max-height:75px;"
                   alt="Avon Park - Avon_Park_HS-scroll.png" title="Avon Park - Avon_Park_HS-scroll.png">
            </div>

            <div class="bxslider-inner">
              <img src="photos/brands/AHighlandsLogo.png" style="max-height:75px;" alt="Highlands - AHighlandsLogo.png"
                   title="Highlands - AHighlandsLogo.png">
            </div>

          </div>

        </div>
      </div>

      <div id="site-footer">
        <div class="page-width" style="margin-bottom:15px;">

          <div class="footer-text" style="display:flex;">
            <div style="display:inline-block;width:70%;">
              <a href="?p=terms">Terms of Use</a> | <a href="?p=terms&privacy">Privacy Policy</a> | <a
                 href="?p=contactus">Contact Us</a>
              <div style="display:block;width:100%;" class="disclaimer">Disclaimer: Information and interactive
                calculators are made available to you as self-help tools for your independent use and are not intended
                to provide investment advice. We cannot and do not guarantee their applicability or accuracy in regards
                to your individual circumstances. All examples are hypothetical and are for illustrative purposes. We
                encourage you to seek personalized advice from qualified professionals regarding all personal finance
                issues.</div>
            </div>
            <div style="margin-left: auto;">
              <div><a href="https://avonparkhistoricalsociety.com" target="_blank"><img
                       src="images/AvonParkHistoricalSocietyLogo.png" style="border:none;"
                       alt="Avon Park Historical Society" title="Avon Park Historical Society"></a></div>
              <div style="position:relative;">
                <div style="display:inline-block;position:absolute;right:0;top:10px;">

                  <div style="display:inline-block;"><a
                       href="https://twitter.com/share?text=Check%20Out%3A%20Avonparkhistoricalsociety%2Ecom%20Avon%20Park%20Historical%20Society&url=https%3A%2F%2Favonparkhistoricalsociety%2Ecom%2F"
                       target="_blank"><img src="images/socialsites/twitter.png" width="24" height="24"
                           alt="Tweet on Twitter" border="0"></a></div>
                  <div style="display:inline-block;">
                    <div id="fb-root"></div>
                    <script async defer crossorigin="anonymous"
                            src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v11.0&appId=631255344108500&autoLogAppEvents=1"
                            nonce="XVsiIBUS"></script>
                    <div class="fb-like" data-href="https://avonparkhistoricalsociety.com/" data-width=""
                         data-layout="button" data-action="like" data-size="small" data-share="true"></div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div style="text-align: center;">Copyright &copy; 2026 Avon Park Historical Society |
            avonparkhistoricalsociety.com</div>
        </div>
      </div>
    </div>


    <script>
      $(document).ready(function () { $("#sitesearchform").submit(sendForm) });

      $('#sitesearchform').keypress(function (e) {
        if (e.keyCode == 13)
          sendForm();
      });

      function sendForm() { $.post('page/sitesearch.cfm', $("#sitesearchform").serialize(), function (data, status) { $("#sitesearchresult").html(data) }); return false }

      $('#sitesearchform').click(function (e) { //button click class name is myDiv
        e.stopPropagation();
      })

      $(function () {
        $(document).click(function () {
          $('#sitesearchresult').slideUp(); //hide the button

        });
      });

      function showsearchinfo() {
        $('#sitesearchresult').slideDown();
      }

      function hidesearchinfo() {
        $('#sitesearchresult').slideUp();
      }

      // Search
      /*$("#askbutton").click(function() {
          var questiontxt = $('#sebotquestion').val();
          $.get("page/sitesearch.cfm?question=" + questiontxt + "", function(data) {
              $("#sebotresponse").html(data);
              $('#sebotquestion').val('');
          });
      });*/


      $("#login-button").click(function () {
        $("#loginboxcontainer").slideToggle();
      });
      $("#login-button1").click(function () {
        $("#loginboxcontainer").slideToggle();
      });
      $("#loginformcancel").click(function () {
        $("#loginboxcontainer").slideUp();
      });

      function clearinputtxt(i, txt, c) {
        if (i.value == txt) {
          i.value = '';
        };
        i.style.color = '#' + c;
      }

      function restoreinputtxt(i, txt, c) {
        if (i.value == '') {
          i.value = txt;
          i.style.color = '#' + c;
        }
      }

      // //Site menu
      // var navbar;
      // var showingMenu = false;

      // function toggleMenu() {
      //     if (window.innerWidth < 1000) {
      //         $('#site-navbar').slideToggle();
      //         showingMenu = !showingMenu;
      //     } else {
      //         $('#site-navbar').show();
      //         showingMenu = false;
      //     }
      // }

      // function checkWidth() {
      //     if (window.innerWidth < 1000) {
      //         if(!showingMenu) {
      //             $('#site-navbar').hide();
      //         }
      //     } else {
      //         $('#site-navbar').show();
      //         showingMenu = false;
      //     }
      // }

      // Site search
      var searchForm;
      var searchEngineLabel;

      function webSearch(sameTab) {
        if (searchInput.value != "") {
          var url;
          switch (searchEngineLabel.innerText.toLowerCase()) {
            case 'bing':
              url = 'https://www.bing.com/search?q=';
              break;
            case 'yahoo':
              url = 'https://search.yahoo.com/search?p=';
              break;
            case 'youtube':
              url = 'https://www.youtube.com/results?search_query=';
              break;
            default:
              // Google
              url = 'https://www.google.com/search?q=';
              break;
          }
          if (sameTab) {
            window.location = url + searchInput.value;
          } else {
            window.open(url + searchInput.value, '_blank');
          }
        }
      }

      function searchKeyDown(event) {
        if (event.keyCode === 13) {
          if (event.ctrlKey) {
            webSearch(true);
          } else {
            webSearch();
          }
        }
      }

      function getCookie(cookieName) {
        var name = cookieName + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return false;
      }

      // Weather
      function changeWeather(w) {
        $.get("contentblock/weather.cfm?changeweather=" + w, function (data) {
          $("#weather").html(data);
        });
      }

      //Start
      window.onload = function () {
        // Search
        navbar = $('#site-navbar');
        searchForm = document.getElementById('search-form');
        searchInput = document.getElementById('search-input');
        searchEngineLabel = document.getElementById('search-engine-label');

        searchInput.onkeydown = searchKeyDown;

        $('#search-engine').focus(function (element) {
          var engine = $(this);
          var list = $(this).find('ul');
          list.toggle();
          list.click(function () {
            engine.blur();
          });
        });

        $('#search-engine').blur(function (element) {
          $('#search-engine').find('ul').hide();
        });

        var savedSearchEngine = getCookie('searchEngine');
        if (savedSearchEngine) {
          searchEngineLabel.innerText = savedSearchEngine;
        }

        // Menu
        $(window).resize(checkWidth);

        // $("#site-navbar").toggle(function(){
        //         $(this).animate({maxHeight:'100%'},200);
        //     },function(){
        //         $(this).animate({maxHeight:0},200);
        //     });
      }

      function searchEngine(name) {
        document.cookie = 'searchEngine=' + name;
        searchEngineLabel.innerText = name;
      }
    </script>

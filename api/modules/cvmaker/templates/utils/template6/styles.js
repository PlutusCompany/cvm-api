const styles = (mainColor, lighterColor, darkerColor, pageNo) => `
.color_main_txt {
  color: ${mainColor};
}
.color_main_bg {
  background-color: ${mainColor};
}
.color_main_svg * {
  fill: ${mainColor};
}
html {
  zoom: 0.4;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.pb_before { page-break-before: always !important; } /* Breaks page before of element */
.pb_after  { page-break-after: always !important; } /* Breaks page after of element */
.pbi_avoid { page-break-inside: avoid !important; } /* Avoid breaks page in element */
.rule {
  border-bottom: 1px solid black;
  width: 80%;
}
.mobile {
  margin-top: -10px;
}
.email {
  margin-bottom: 0;
}
body {
  font-family: Arial, sans-serif;
}

.left {
  background-color: rgb(232, 233, 232);
  box-shadow: inset -5px 0 2px #48494b;
  width: 30%;
  display: inline-block;
  height: ${pageNo * 100}%;
  position: absolute;
  top: 0;
  left: 0;
}
.right {
  width: 75%;
  margin: 0 0 0 auto;
}
.section_head {
  padding: 8px 0;
  margin: 8px 0;
  font-size: 29px;
  font-weight: 500;
  text-align: left;
  letter-spacing: 2px;
}
.left_head {
  margin-top: 16px;
  font-size: 28px;
  text-transform: none;
}
.left_section_icon {
  width: 28px;
  height: 28px;
  display: inline-block;
  position: absolute;
  top: 5px;
}
.section_wrapper {
  position: relative;
}
.data_wrapper {
  padding-left: 46px;
  display: inline-block;
}
.personal_data {
  font-size: 20px;
}
.personal_data div {
  margin: 2px 0;
}
.objectives_text {
  padding: 8px 0;
  font-size: 22px;
}
.experience_head {
  padding-top: 8px;
  font-size: 22px;
  text-align: justify;
  height: 36px;
}
.experience_head::after {
  content: "";
  display: inline-block;
  width: 100%;
}
.experience_head span {
  display: inline-block;
}
.experience_info {
  margin: 6px 0;
  font-size: 22px;
}
.exp_bold {
  font-weight: 600;
}
.interests_info {
  margin: 14px 0;
  font-size: 22px;
}
.interests_section {
  padding-left: 36px;
  list-style-type: square;
}
.skill_row {
  position: relative;
  font-size: 22px;
}
.skill_level {
  width: fit-content;
  height: fit-content;
  position: absolute;
  left: 260px;
  top: 0;
  text-align: left;
}
.lang_level {
  display: inline-block;
}
.star_icon {
  width: 16px;
  height: 16px;
  margin: 0 2px;
}
.star_icon_l {
  width: 16px;
  height: 16px;
  margin: 0 2px;
}
.star_icon_l * {
  fill: ${lighterColor};
}
.skill_meter {
  height: 10px;
  border-radius: 5px;
}
.round-bottom {
  position: absolute;
  z-index: 0;
  overflow: hidden;
  width: 200%;
  margin-bottom: -50px;
  left: -50%;
  top: -32px;
  border-radius: 53%/0 0 200px 200px;
  height: 188px;
}
.round-bottom-2 {
  top: -16px;
  background-color: ${darkerColor};
}
.user_img_wrapper {
  width: 42%;
  padding-bottom: 42%;
  margin: 30px auto;
  overflow: hidden;
  position: relative;  border-radius: 50%;

}
.user_img {
  display: inline-block;
  position: absolute;
  width: 100%;
  border: 4px solid rgb(255, 255, 255);
  box-shadow: 0 0 2px 2px #48494b0a; border-radius: 50%;
}

`;

export default styles;

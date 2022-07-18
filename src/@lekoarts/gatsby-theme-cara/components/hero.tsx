/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import Svg from "./svg"
import { UpDown, UpDownWide } from "../styles/animations"
// @ts-ignore
import Intro from "../sections/intro"

const Hero = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
    <Divider speed={0.2} offset={offset} factor={factor}>
      <UpDown>
        <Svg icon="python" hiddenMobile width={48} stroke color="icon_orange" left="10%" top="20%" />
        <Svg icon="hexa" width={48} stroke color="icon_red" left="60%" top="70%" />
        <Svg icon="turtle" width={6} color="icon_darker" left="60%" top="15%" />
      </UpDown>
      <UpDownWide>
        <Svg icon="html5" hiddenMobile width={16} color="icon_blue" left="80%" top="10%" />
        <Svg icon="fish2" width={12} stroke color="icon_brightest" left="90%" top="50%" />
        <Svg icon="star" width={16} color="icon_darker" left="70%" top="90%" />
        <Svg icon="fish2" width={16} stroke color="icon_darkest" left="30%" top="65%" />
        <Svg icon="cpp" width={16} stroke color="icon_pink" left="28%" top="15%" />
        <Svg icon="star" width={6} color="icon_darkest" left="75%" top="10%" />
        <Svg icon="jelly" hiddenMobile width={8} color="icon_darkest" left="45%" top="10%" />
      </UpDownWide>
      <Svg icon="star" hiddenMobile width={24} color="icon_darker" left="5%" top="70%" />
      <Svg icon="star" width={6} color="icon_darkest" left="4%" top="20%" />
      <Svg icon="star" width={12} color="icon_darkest" left="50%" top="60%" />
      <Svg icon="jelly" width={8} color="icon_darkest" left="95%" top="90%" />
      <Svg icon="jelly" hiddenMobile width={24} color="icon_darker" left="40%" top="80%" />
      <Svg icon="fish2" width={8} stroke color="icon_darker" left="25%" top="5%" />
      <Svg icon="star" width={64} color="icon_green" left="95%" top="5%" />
      <Svg icon="turtle" hiddenMobile width={64} color="icon_purple" left="5%" top="90%" />
      <Svg icon="turtle" width={6} color="icon_darkest" left="10%" top="10%" />
      <Svg icon="turtle" width={12} color="icon_darkest" left="40%" top="30%" />
      <Svg icon="hexa" width={16} stroke color="icon_darker" left="10%" top="50%" />
      <Svg icon="hexa" width={8} stroke color="icon_darker" left="80%" top="70%" />
    </Divider>
    <Content sx={{ variant: `texts.bigger` }} speed={0.4} offset={offset} factor={factor}>
      <Inner>
        <Intro />
      </Inner>
    </Content>
  </div>
)

export default Hero

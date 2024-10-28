import React from 'react';

import { Box, FlexBox } from '../../ui';
import theme from '../../theme';
import {
  ShadowFirst,
  ShadowSecond,
  TextAmber,
  TextCyan,
  TextCyanML,
  TextGray,
  TextGrayMLFirst,
  TextGrayMLSecond,
  TextGreen,
  TextOrange,
  TextOrangeML,
  TextOrangeMLSecond,
  TextPink,
  TextWhite,
  TextWhiteML,
  WrapperForCode,
  WrapperMac,
} from './styled';

const Code = () => {
  return (
    <WrapperMac>
      <FlexBox flexDirection='row'>
        <ShadowFirst></ShadowFirst>
        <ShadowSecond></ShadowSecond>
      </FlexBox>
      <Box padding='16px'>
        <FlexBox flexDirection='row'>
          <Box
            width='12px'
            height='12px'
            borderRadius='50px'
            background={theme.colors.red[0]}
          ></Box>
          <Box
            width='12px'
            height='12px'
            borderRadius='50px'
            background={theme.colors.orange[0]}
            margin='0 8px'
          ></Box>
          <Box
            width='12px'
            height='12px'
            borderRadius='50px'
            background={theme.colors.green[2]}
          ></Box>
        </FlexBox>
      </Box>
      <WrapperForCode>
        <code>
          <div>
            <TextPink>const</TextPink>
            <TextWhite>coder</TextWhite>
            <TextPink>=</TextPink>
            <TextGray>&#10100;</TextGray>
          </div>
          <div>
            <TextWhiteML>name:</TextWhiteML>
            <TextGray>'</TextGray>
            <TextAmber>Roksolana Kushnir</TextAmber>
            <TextGray>',</TextGray>
          </div>
          <Box margin='0 0 0 16px'>
            <TextWhite>skills:</TextWhite>
            <TextGray>['</TextGray>
            <TextAmber>HTML</TextAmber>
            <TextGray>', '</TextGray>
            <TextAmber>CSS</TextAmber>
            <TextGray>', '</TextGray>
            <TextAmber>Js</TextAmber>
            <TextGray>', '</TextGray>
            <TextAmber>React</TextAmber>
            <TextGray>', '</TextGray>
            <TextAmber>Redux</TextAmber>
            <TextGray>', '</TextGray>
            <TextAmber>React Native</TextAmber>
            <TextGray>', '</TextGray>
            <TextAmber>Typescript</TextAmber>
            <TextGray>'],</TextGray>
          </Box>
          <div>
            <TextWhiteML>hardWorker:</TextWhiteML>
            <TextOrange> true</TextOrange>
            <TextGray>,</TextGray>
          </div>
          <div>
            <TextWhiteML>quickLearner:</TextWhiteML>
            <TextOrange> true</TextOrange>
            <TextGray>,</TextGray>
          </div>
          <div>
            <TextWhiteML>problemSolver:</TextWhiteML>
            <TextOrange> true</TextOrange>
            <TextGray>,</TextGray>
          </div>
          <div>
            <TextGreen>hireable:</TextGreen>
            <TextOrange> function</TextOrange>
            <TextGray>() &#10100;</TextGray>
          </div>
          <div>
            <TextOrangeML>return</TextOrangeML>
            <TextGray> (</TextGray>
          </div>
          <div>
            <TextCyanML>this.</TextCyanML>
            <TextWhite>hardWorker</TextWhite>
            <TextAmber>&&</TextAmber>
          </div>
          <div>
            <TextCyanML>this.</TextCyanML>
            <TextWhite>problemSolver</TextWhite>
            <TextAmber>&&</TextAmber>
          </div>
          <div>
            <TextCyanML>this.</TextCyanML>
            <TextWhite>skills.length</TextWhite>
            <TextAmber>&#10095;=</TextAmber>
            <TextOrange>7</TextOrange>
          </div>
          <div>
            <TextGrayMLFirst>);</TextGrayMLFirst>
          </div>
          <div>
            <TextGrayMLSecond>&#10101;;</TextGrayMLSecond>
          </div>
          <div>
            <TextGreen>funFact:</TextGreen>
            <TextOrange> function</TextOrange>
            <TextGray>() &#10100;</TextGray>
          </div>
          <Box margin='0 0 0 16px'>
            <TextOrangeMLSecond>console.log</TextOrangeMLSecond>
            <TextGray>(</TextGray>
            <TextAmber>
              "I once solved a bug at 3 AM without coffee. Let's just say, I'm
              as reliable as your unit tests."
            </TextAmber>
            <TextGray>);</TextGray>
          </Box>
          <div>
            <TextGrayMLSecond>&#10101;</TextGrayMLSecond>
          </div>
          <div>
            <TextGray>&#10101;;</TextGray>
          </div>
          <div>
            <TextPink>if</TextPink>
            <TextGray>(</TextGray>
            <TextCyan>coder.</TextCyan>
            <TextWhite>hireable</TextWhite>
            <TextGray>()</TextGray>
            <TextGray>) &#10100;</TextGray>
          </div>
          <Box margin='0 0 0 8px'>
            <TextCyan>coder.</TextCyan>
            <TextWhite>funFact</TextWhite>
            <TextGray>();</TextGray>
          </Box>
          <Box margin='0 0 0 8px'>
            <TextCyan>console.</TextCyan>
            <TextWhite>log</TextWhite>
            <TextGray>(</TextGray>
            <TextAmber>
              'Hiring me means getting a hard-working problem-solver with a love
              for learning.'
            </TextAmber>
            <TextGray>);</TextGray>
          </Box>
          <div>
            <TextGray>&#10101; </TextGray>
          </div>
        </code>
      </WrapperForCode>
    </WrapperMac>
  );
};

export default Code;

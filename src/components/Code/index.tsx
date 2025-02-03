import React from 'react';

import personalData from '../../data/personalData';

import { Box, FlexBox } from '../../ui';
import theme from '../../theme';
import { CodeStyle, SpanText, WrapperForCode } from './styled';

const Code = () => (
  <CodeStyle
    position='relative'
    borderRadius='8px'
    backgroundImage={theme.colors.gradient[4]}
    borderWidth='3px'
    borderColor={theme.colors.green[6]}
    order={[1, 1, 1, 2]}
  >
    <FlexBox flexDirection='row'>
      <Box
        width='100%'
        height='1px'
        backgroundImage={theme.colors.gradient[0]}
      />
      <Box
        width='100%'
        height='1px'
        backgroundImage={theme.colors.gradient[1]}
      />
    </FlexBox>
    <Box padding='16px'>
      <FlexBox flexDirection='row'>
        <Box
          width='12px'
          height='12px'
          borderRadius='50px'
          background={theme.colors.red[0]}
        />
        <Box
          width='12px'
          height='12px'
          borderRadius='50px'
          background={theme.colors.orange[4]}
          margin='0 8px'
        />
        <Box
          width='12px'
          height='12px'
          borderRadius='50px'
          background={theme.colors.green[2]}
        />
      </FlexBox>
    </Box>
    <WrapperForCode
      overflow='hidden'
      borderStyle='solid'
      borderColor={theme.colors.green[9]}
      padding='16px'
      fontSize={['10px', '10px', '10px', '12px']}
    >
      <code>
        <div>
          <SpanText color={theme.colors.pink[0]}>const</SpanText>
          <SpanText color={theme.colors.white[0]}> coder</SpanText>
          <SpanText color={theme.colors.pink[0]}> = </SpanText>
          <SpanText color={theme.colors.gray[0]}>&#10100;</SpanText>
        </div>
        <Box margin='0 0 0 16px'>
          <SpanText color={theme.colors.white[0]}>name:</SpanText>
          <SpanText color={theme.colors.gray[0]}> '</SpanText>
          <SpanText color={theme.colors.yellow[0]}>
            {personalData.name}
          </SpanText>
          <SpanText color={theme.colors.gray[0]}>',</SpanText>
        </Box>
        <Box margin='0 0 0 16px'>
          <SpanText color={theme.colors.white[0]}>skills: </SpanText>
          <SpanText color={theme.colors.gray[0]}>['</SpanText>
          {personalData.skills.map((skill, index) => (
            <React.Fragment key={index}>
              <SpanText color={theme.colors.yellow[0]}>{skill}</SpanText>
              {index < personalData.skills.length - 1 && (
                <SpanText color={theme.colors.gray[0]}>', '</SpanText>
              )}
            </React.Fragment>
          ))}
          <SpanText color={theme.colors.gray[0]}>'],</SpanText>
        </Box>
        <Box margin='0 0 0 16px'>
          <SpanText color={theme.colors.white[0]}>hardWorker:</SpanText>
          <SpanText color={theme.colors.orange[4]}> true</SpanText>
          <SpanText color={theme.colors.gray[0]}>,</SpanText>
        </Box>
        <Box margin='0 0 0 16px'>
          <SpanText color={theme.colors.white[0]}>quickLearner:</SpanText>
          <SpanText color={theme.colors.orange[4]}> true</SpanText>
          <SpanText color={theme.colors.gray[0]}>,</SpanText>
        </Box>
        <Box margin='0 0 0 16px'>
          <SpanText color={theme.colors.white[0]}>problemSolver:</SpanText>
          <SpanText color={theme.colors.orange[4]}> true</SpanText>
          <SpanText color={theme.colors.gray[0]}>,</SpanText>
        </Box>
        <Box margin='0 0 0 16px'>
          <SpanText color={theme.colors.green[5]}>hireable</SpanText>
          <SpanText color={theme.colors.gray[0]}>() &#10100;</SpanText>
        </Box>
        <Box margin='0 0 0 32px'>
          <SpanText color={theme.colors.pink[0]}>const</SpanText>
          <SpanText color={theme.colors.gray[0]}> &#10100; </SpanText>
          <SpanText color={theme.colors.white[0]}>hardWorker</SpanText>
          <SpanText color={theme.colors.gray[0]}>, </SpanText>
          <SpanText color={theme.colors.white[0]}>problemSolver</SpanText>
          <SpanText color={theme.colors.gray[0]}>, </SpanText>
          <SpanText color={theme.colors.white[0]}>skills</SpanText>
          <SpanText color={theme.colors.gray[0]}> &#10101; </SpanText>
          <SpanText color={theme.colors.pink[0]}>= </SpanText>
          <SpanText color={theme.colors.pink[0]}>this</SpanText>
          <SpanText color={theme.colors.gray[0]}>;</SpanText>
        </Box>
        <Box margin='0 0 0 32px'>
          <SpanText color={theme.colors.pink[0]}>return </SpanText>
          <SpanText color={theme.colors.white[0]}>hardWorker</SpanText>
          <SpanText color={theme.colors.yellow[0]}> && </SpanText>
          <SpanText color={theme.colors.white[0]}>problemSolver</SpanText>
          <SpanText color={theme.colors.yellow[0]}> && </SpanText>
          <SpanText color={theme.colors.white[0]}>skills.length</SpanText>
          <SpanText color={theme.colors.yellow[0]}> &#10095;= </SpanText>
          <SpanText color={theme.colors.orange[4]}>7</SpanText>
          <SpanText color={theme.colors.gray[0]}>;</SpanText>
        </Box>
        <Box margin='0 0 0 16px'>
          <SpanText color={theme.colors.gray[0]}>&#10101;,</SpanText>
        </Box>
        <Box margin='0 0 0 16px'>
          <SpanText color={theme.colors.green[5]}>funFact</SpanText>
          <SpanText color={theme.colors.gray[0]}>() &#10100;</SpanText>
        </Box>
        <Box margin='0 0 0 32px'>
          <SpanText color={theme.colors.blue[11]}>console.</SpanText>
          <SpanText color={theme.colors.white[0]}>log</SpanText>
          <SpanText color={theme.colors.gray[0]}>(</SpanText>
          <SpanText color={theme.colors.yellow[0]}>
            "I once solved a bug at 3 AM without coffee. Let's just say, I'm as
            reliable as your unit tests."
          </SpanText>
          <SpanText color={theme.colors.gray[0]}>);</SpanText>
        </Box>
        <Box margin='0 0 0 16px'>
          <SpanText color={theme.colors.gray[0]}>&#10101;,</SpanText>
        </Box>
        <div>
          <SpanText color={theme.colors.gray[0]}>&#10101;;</SpanText>
        </div>
        <br />
        <div>
          <SpanText color={theme.colors.pink[0]}>if</SpanText>
          <SpanText color={theme.colors.gray[0]}> (</SpanText>
          <SpanText color={theme.colors.white[0]}>coder.</SpanText>
          <SpanText color={theme.colors.green[5]}>hireable</SpanText>
          <SpanText color={theme.colors.gray[0]}>()</SpanText>
          <SpanText color={theme.colors.gray[0]}>) &#10100;</SpanText>
        </div>
        <Box margin='0 0 0 8px'>
          <SpanText color={theme.colors.white[0]}>coder.</SpanText>
          <SpanText color={theme.colors.green[5]}>funFact</SpanText>
          <SpanText color={theme.colors.gray[0]}>();</SpanText>
        </Box>
        <Box margin='0 0 0 8px'>
          <SpanText color={theme.colors.blue[11]}>console.</SpanText>
          <SpanText color={theme.colors.white[0]}>log</SpanText>
          <SpanText color={theme.colors.gray[0]}>(</SpanText>
          <SpanText color={theme.colors.yellow[0]}>
            'Hiring me means getting a hard-working problem-solver with a love
            for learning.'
          </SpanText>
          <SpanText color={theme.colors.gray[0]}>);</SpanText>
        </Box>
        <div>
          <SpanText color={theme.colors.gray[0]}>&#10101; </SpanText>
          <SpanText color={theme.colors.pink[0]}>else</SpanText>
          <SpanText color={theme.colors.gray[0]}> &#10100;</SpanText>
        </div>
        <Box margin='0 0 0 8px'>
          <SpanText color={theme.colors.blue[11]}>console.</SpanText>
          <SpanText color={theme.colors.white[0]}>log</SpanText>
          <SpanText color={theme.colors.gray[0]}>(</SpanText>
          <SpanText color={theme.colors.yellow[0]}>
            'I may not meet all criteria, but I'm still ready to improve and
            grow!'
          </SpanText>
          <SpanText color={theme.colors.gray[0]}>);</SpanText>
        </Box>
        <div>
          <SpanText color={theme.colors.gray[0]}>&#10101; </SpanText>
        </div>
      </code>
    </WrapperForCode>
  </CodeStyle>
);

export default Code;

import { Fragment } from 'react';

import personalData from '../../data/personal';

import { Box, FlexBox } from '../../ui';
import theme from '../../theme';
import { CodeStyle, StyledSpan, WrapperForCode } from './styled';

const { green, red, orange, pink, white, gray, yellow, blue } = theme.colors;
const { gradient } = theme;

const Code = () => (
  <CodeStyle
    position='relative'
    borderRadius='8px'
    backgroundImage={gradient[4]}
    borderWidth='3px'
    borderColor={green[6]}
    order={[1, 1, 1, 2]}
  >
    <FlexBox flexDirection='row'>
      <Box width='100%' height='1px' backgroundImage={gradient[0]} />
      <Box width='100%' height='1px' backgroundImage={gradient[1]} />
    </FlexBox>
    <Box padding='16px'>
      <FlexBox flexDirection='row'>
        <Box
          width='12px'
          height='12px'
          borderRadius='50px'
          background={red[0]}
        />
        <Box
          width='12px'
          height='12px'
          borderRadius='50px'
          background={orange[4]}
          margin='0 8px'
        />
        <Box
          width='12px'
          height='12px'
          borderRadius='50px'
          background={green[2]}
        />
      </FlexBox>
    </Box>
    <WrapperForCode
      overflow='hidden'
      borderStyle='solid'
      borderColor={green[9]}
      padding='16px'
      fontSize={['10px', '10px', '10px', '12px']}
    >
      <code>
        <Box>
          <StyledSpan color={pink[0]}>const</StyledSpan>
          <StyledSpan color={white[0]}> coder</StyledSpan>
          <StyledSpan color={pink[0]}> = </StyledSpan>
          <StyledSpan color={gray[0]}>{'{'}</StyledSpan>
        </Box>
        <Box margin='0 0 0 16px'>
          <StyledSpan color={white[0]}>name:</StyledSpan>
          <StyledSpan color={gray[0]}> '</StyledSpan>
          <StyledSpan color={yellow[0]}>{personalData.name}</StyledSpan>
          <StyledSpan color={gray[0]}>',</StyledSpan>
        </Box>
        <Box margin='0 0 0 16px'>
          <StyledSpan color={white[0]}>skills: </StyledSpan>
          <StyledSpan color={gray[0]}>['</StyledSpan>
          {personalData.skills.map((skill, index) => (
            <Fragment key={index}>
              <StyledSpan color={yellow[0]}>{skill}</StyledSpan>
              {index < personalData.skills.length - 1 && (
                <StyledSpan color={gray[0]}>', '</StyledSpan>
              )}
            </Fragment>
          ))}
          <StyledSpan color={gray[0]}>'],</StyledSpan>
        </Box>
        <Box margin='0 0 0 16px'>
          <StyledSpan color={white[0]}>hardWorker:</StyledSpan>
          <StyledSpan color={orange[4]}> true</StyledSpan>
          <StyledSpan color={gray[0]}>,</StyledSpan>
        </Box>
        <Box margin='0 0 0 16px'>
          <StyledSpan color={white[0]}>quickLearner:</StyledSpan>
          <StyledSpan color={orange[4]}> true</StyledSpan>
          <StyledSpan color={gray[0]}>,</StyledSpan>
        </Box>
        <Box margin='0 0 0 16px'>
          <StyledSpan color={white[0]}>problemSolver:</StyledSpan>
          <StyledSpan color={orange[4]}> true</StyledSpan>
          <StyledSpan color={gray[0]}>,</StyledSpan>
        </Box>
        <Box margin='0 0 0 16px'>
          <StyledSpan color={green[5]}>isHireable</StyledSpan>
          <StyledSpan color={gray[0]}>() {'{'}</StyledSpan>
        </Box>
        <Box margin='0 0 0 32px'>
          <StyledSpan color={pink[0]}>const</StyledSpan>
          <StyledSpan color={gray[0]}> {'{'} </StyledSpan>
          <StyledSpan color={white[0]}>hardWorker</StyledSpan>
          <StyledSpan color={gray[0]}>, </StyledSpan>
          <StyledSpan color={white[0]}>problemSolver</StyledSpan>
          <StyledSpan color={gray[0]}>, </StyledSpan>
          <StyledSpan color={white[0]}>skills</StyledSpan>
          <StyledSpan color={gray[0]}> {'}'} </StyledSpan>
          <StyledSpan color={pink[0]}>= </StyledSpan>
          <StyledSpan color={pink[0]}>this</StyledSpan>
          <StyledSpan color={gray[0]}>;</StyledSpan>
        </Box>
        <Box margin='0 0 0 32px'>
          <StyledSpan color={pink[0]}>return </StyledSpan>
          <StyledSpan color={white[0]}>hardWorker</StyledSpan>
          <StyledSpan color={yellow[0]}> && </StyledSpan>
          <StyledSpan color={white[0]}>problemSolver</StyledSpan>
          <StyledSpan color={yellow[0]}> && </StyledSpan>
          <StyledSpan color={white[0]}>skills.length</StyledSpan>
          <StyledSpan color={yellow[0]}> {'>'}= </StyledSpan>
          <StyledSpan color={orange[4]}>7</StyledSpan>
          <StyledSpan color={gray[0]}>;</StyledSpan>
        </Box>
        <Box margin='0 0 0 16px'>
          <StyledSpan color={gray[0]}>{'}'},</StyledSpan>
        </Box>
        <Box margin='0 0 0 16px'>
          <StyledSpan color={green[5]}>shareFunFact</StyledSpan>
          <StyledSpan color={gray[0]}>() {'{'}</StyledSpan>
        </Box>
        <Box margin='0 0 0 32px'>
          <StyledSpan color={blue[11]}>console.</StyledSpan>
          <StyledSpan color={white[0]}>log</StyledSpan>
          <StyledSpan color={gray[0]}>(</StyledSpan>
          <StyledSpan color={yellow[0]}>
            "I once solved a bug at 3 AM without coffee. Let us just say, I am
            as reliable as your unit tests."
          </StyledSpan>
          <StyledSpan color={gray[0]}>);</StyledSpan>
        </Box>
        <Box margin='0 0 0 16px'>
          <StyledSpan color={gray[0]}>{'}'},</StyledSpan>
        </Box>
        <Box>
          <StyledSpan color={gray[0]}>{'}'};</StyledSpan>
        </Box>
        <br />
        <Box>
          <StyledSpan color={pink[0]}>if</StyledSpan>
          <StyledSpan color={gray[0]}> (</StyledSpan>
          <StyledSpan color={white[0]}>coder.</StyledSpan>
          <StyledSpan color={green[5]}>isHireable</StyledSpan>
          <StyledSpan color={gray[0]}>()</StyledSpan>
          <StyledSpan color={gray[0]}>) {'{'}</StyledSpan>
        </Box>
        <Box margin='0 0 0 8px'>
          <StyledSpan color={white[0]}>coder.</StyledSpan>
          <StyledSpan color={green[5]}>shareFunFact</StyledSpan>
          <StyledSpan color={gray[0]}>();</StyledSpan>
        </Box>
        <Box margin='0 0 0 8px'>
          <StyledSpan color={blue[11]}>console.</StyledSpan>
          <StyledSpan color={white[0]}>log</StyledSpan>
          <StyledSpan color={gray[0]}>(</StyledSpan>
          <StyledSpan color={yellow[0]}>
            'Hiring me means getting a hard-working problem-solver with a love
            for learning.'
          </StyledSpan>
          <StyledSpan color={gray[0]}>);</StyledSpan>
        </Box>
        <Box>
          <StyledSpan color={gray[0]}>{'}'} </StyledSpan>
          <StyledSpan color={pink[0]}>else</StyledSpan>
          <StyledSpan color={gray[0]}> {'{'}</StyledSpan>
        </Box>
        <Box margin='0 0 0 8px'>
          <StyledSpan color={blue[11]}>console.</StyledSpan>
          <StyledSpan color={white[0]}>log</StyledSpan>
          <StyledSpan color={gray[0]}>(</StyledSpan>
          <StyledSpan color={yellow[0]}>
            'I may not meet all criteria, but I am still ready to improve and
            grow!'
          </StyledSpan>
          <StyledSpan color={gray[0]}>);</StyledSpan>
        </Box>
        <Box>
          <StyledSpan color={gray[0]}>{'}'} </StyledSpan>
        </Box>
      </code>
    </WrapperForCode>
  </CodeStyle>
);

export default Code;

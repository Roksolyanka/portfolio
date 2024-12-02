import React from 'react';

import {
  SwitchButtonFirst,
  SwitchButtonSecond,
  SwitchFull,
  SwitchInner,
  SwitchLabel,
  SwitchOuter,
  SwitchToggle,
} from './styled';
import { Icon } from '../Icon';
import theme from '../../theme';
import personalData from '../../data/personalData';

interface TogglerProps {
  togglePosition: boolean;
  setTogglePosition: (position: boolean) => void;
  handleDownload?: () => void;
  onToggle?: () => void;
  cvHref?: string;
  coverLetterHref?: string;
  labelFirst?: string;
  labelSecond?: string;
  iconName: string;
}

const Toggler: React.FC<TogglerProps> = ({
  togglePosition,
  setTogglePosition,
  handleDownload,
  onToggle,
  cvHref,
  coverLetterHref,
  labelFirst,
  labelSecond,
  iconName,
}) => (
  <SwitchFull>
    <SwitchInner>
      <SwitchLabel>{labelFirst}</SwitchLabel>
      <SwitchOuter>
        <SwitchButtonFirst
          href={cvHref}
          download={personalData.cvName}
          onClick={() => {
            setTogglePosition(true);
            if (onToggle) onToggle();
          }}
        />
        <SwitchToggle
          onClick={() => {
            if (onToggle) onToggle();
            if (handleDownload) handleDownload();
          }}
          togglePosition={togglePosition}
        >
          <Icon
            name={iconName}
            width='24px'
            height='24px'
            fill={theme.colors.orange[1]}
          />
        </SwitchToggle>
        <SwitchButtonSecond
          href={coverLetterHref}
          download={personalData.coverLetterName}
          onClick={() => {
            setTogglePosition(false);
            if (onToggle) onToggle();
          }}
        />
      </SwitchOuter>
      <SwitchLabel>{labelSecond}</SwitchLabel>
    </SwitchInner>
  </SwitchFull>
);

export default Toggler;

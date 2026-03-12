import { FC } from 'react';

import { Icon } from '../Icon';
import personalData from '../../data/personal';
import { TogglerProps } from '../../types';
import { useTheme } from '../../hooks/useTheme';

import {
  SwitchButtonFirst,
  SwitchButtonSecond,
  SwitchFull,
  SwitchInner,
  SwitchLabel,
  SwitchOuter,
  SwitchToggle,
} from './styled';

const Toggler: FC<TogglerProps> = ({
  togglePosition,
  setTogglePosition,
  handleDownload,
  onToggle,
  cvHref,
  coverLetterHref,
  labelFirst,
  labelSecond,
  iconName,
}) => {
  const theme = useTheme();

  return (
    <SwitchFull>
      <SwitchInner>
        <SwitchLabel>{labelFirst}</SwitchLabel>
        <SwitchOuter>
          <SwitchButtonFirst
            href={cvHref}
            download={personalData.cvName}
            onClick={() => {
              setTogglePosition(true);
              onToggle?.();
            }}
          />
          <SwitchToggle
            onClick={() => {
              onToggle?.();
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
              onToggle?.();
            }}
          />
        </SwitchOuter>
        <SwitchLabel>{labelSecond}</SwitchLabel>
      </SwitchInner>
    </SwitchFull>
  );
};

export default Toggler;

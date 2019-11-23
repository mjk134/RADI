import styled from 'styled-components';
import { BLUE_500, icons } from '~/renderer/constants';
import { centerIcon } from '~/renderer/mixins';

export const StyledDownloadItem = styled.div`
  height: 64px;
  background-color: rgba(255, 255, 255, 0.04);
  border-radius: 8px;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  margin-top: 8px;
  transition: 0.1s background-color, 0.1s border;

  &:hover {
    background-color: rgba(255, 255, 255, 0.06);
  }

  &:first-child {
    margin-top: 0;
  }
`;

export const Title = styled.div``;

export const SecondaryText = styled.div`
  opacity: 0.54;
  font-size: 11px;
  margin-top: 4px;
`;

export const Progress = styled.div`
  height: 100%;
  background-color: ${BLUE_500};
  border-radius: 16px;
`;

export const ProgressBackground = styled.div`
  height: 5px;
  background-color: rgba(255, 255, 255, 0.12);
  border-radius: 16px;
  overflow: hidden;
  margin-top: 4px;
  flex: 1;
`;

export const Info = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  flex: 1;
`;

export const Icon = styled.div`
  width: 24px;
  height: 24px;
  ${centerIcon()};
  background-image: url(${icons.page});
  margin-right: 16px;
  filter: invert(100%);
  opacity: 0.54;
  margin-left: 16px;
`;

export const MoreButton = styled.div`
  width: 36px;
  height: 36px;
  ${centerIcon(20)};
  background-image: url(${icons.more});
  filter: invert(100%);
  opacity: 0.54;
  margin-right: 8px;
  border-radius: 6px;
  transition: 0.1s background-color;

  &:hover {
    background-color: rgba(0, 0, 0, 0.06);
  }
`;

export const Separator = styled.div`
  height: 48px;
  width: 1px;
  margin-left: 16px;
  margin-right: 8px;
  background-color: rgba(255, 255, 255, 0.12);
`;
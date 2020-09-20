import React, { FunctionComponent } from 'react';

import {
  LightSpinnerProps,
  LoadingProps,
  SpinnerProps,
} from './spinners.types';
import spinnerGif from './images/spinner.gif';
import largeSpinnerGif from './images/spinner-2x.gif';
import loadingGif from './images/loading.gif';
import largeLoadingGif from './images/big-loader.gif';
import lightSpinnerGif from './images/wpspin-light.gif';
import largeLightSpinnerGif from './images/wpspin-light-2x.gif';
import loadingBar from './images/loading-animation.gif';

export const Spinner: FunctionComponent<SpinnerProps> = ({
  large = false,
  ...rest
}) => {
  return <img src={large ? largeSpinnerGif : spinnerGif} {...rest} />;
};

export const Loading: FunctionComponent<LoadingProps> = ({
  large = false,
  ...rest
}) => {
  return <img src={large ? largeLoadingGif : loadingGif} {...rest} />;
};

export const LightSpinner: FunctionComponent<LightSpinnerProps> = ({
  large = false,
  ...rest
}) => {
  return <img src={large ? largeLightSpinnerGif : lightSpinnerGif} {...rest} />;
};

export const LoadingBar: FunctionComponent = (props) => {
  return <img src={loadingBar} {...props} />;
};

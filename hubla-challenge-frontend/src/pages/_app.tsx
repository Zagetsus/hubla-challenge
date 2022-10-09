import { CacheProvider, EmotionCache } from '@emotion/react';
import type { AppProps } from 'next/app';
import * as React from 'react';
import createEmotionCache from '~/config/create-emotion-cache';
import '~/styles/globals.scss';
import { LightTheme } from '~/styles/theme';
import { ThemeProvider } from '~/app/presentation/components/mui/theme';
import { CssBaseline } from '~/app/presentation/components';

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

const MyApp: React.FunctionComponent<MyAppProps> = props => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={LightTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;

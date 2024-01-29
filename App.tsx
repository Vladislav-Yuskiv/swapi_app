import React from 'react';
import AppNavigator  from "./src/navigation"
import {NavigationContainer} from '@react-navigation/native';
import ErrorBoundary from 'react-native-error-boundary'
import ErrorScreen from "./src/screens/ErrorScreen";
import { withStarWarsAppProvider} from "./src/hooks/useStarWarsApp.tsx";
import { Provider as AntdProvider} from '@ant-design/react-native';

function App(): React.JSX.Element {

  return (
      <AntdProvider>
          <ErrorBoundary FallbackComponent={ErrorScreen}>
              <NavigationContainer>
                <AppNavigator/>
              </NavigationContainer>
          </ErrorBoundary>
      </AntdProvider>
  );
}

export default withStarWarsAppProvider(App);

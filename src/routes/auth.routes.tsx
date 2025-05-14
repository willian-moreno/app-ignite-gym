import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack'

import { AuthLayout } from '@layouts/auth-layout'

import { SignIn } from '@screens/sign-in'
import { SignUp } from '@screens/sign-up'

type AuthRoutes = {
  sign_in: undefined
  sign_up: undefined
}

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>

const { Navigator, Group, Screen } = createNativeStackNavigator<AuthRoutes>()

export function AuthRoutes() {
  return (
    <Navigator
      initialRouteName="sign_in"
      screenOptions={{
        headerShown: false,
        animation: 'fade_from_bottom',
        statusBarStyle: 'dark',
      }}
    >
      <Group screenLayout={AuthLayout}>
        <Screen
          name="sign_in"
          component={SignIn}
        />
        <Screen
          name="sign_up"
          component={SignUp}
        />
      </Group>
    </Navigator>
  )
}

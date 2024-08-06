import { StatusBar } from "expo-status-bar";
import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Starter from "./src/Screens/Starter";
import Home from "./src/Screens/Home";
import Find from "./src/Screens/Find";
import Account from "./src/Screens/Account";
import Create from "./src/Screens/Create";
import Chats from "./src/Screens/Chats";
import ChatPage from "./src/Screens/ChatPage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          // initialRouteName="Login"
          screenOptions={{ animation: "none" }}
        >
          <Stack.Screen
            name="Starter"
            options={{ headerShown: false }}
            component={Starter}
          />
          <Stack.Screen
            name="Home"
            options={{ headerShown: false }}
            component={Home}
          />

          <Stack.Screen
            name="Find"
            options={{ headerShown: false }}
            component={Find}
          />
          <Stack.Screen
            name="Create"
            options={{ headerShown: false }}
            component={Create}
          />
          <Stack.Screen
            name="Account"
            options={{ headerShown: false }}
            component={Account}
          />
          <Stack.Screen
            name="Chats"
            options={{ headerShown: false }}
            component={Chats}
          />
          <Stack.Screen
            name="ChatPage"
            options={{ headerShown: false }}
            component={ChatPage}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" backgroundColor="#8972d9" />
    </PaperProvider>
  );
}

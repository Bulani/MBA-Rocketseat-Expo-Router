import { Drawer } from 'expo-router/drawer'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { MaterialIcons } from '@expo/vector-icons'

export default function DrawerLayout() {
  return(
    <GestureHandlerRootView>
      <Drawer screenOptions={{ title: "iBuy" }}>
        <Drawer.Screen
          name="(tabs)"
          options={{ 
            drawerLabel: "Início",
            drawerIcon: ({ color, size }) => (
              <MaterialIcons
                name='home' 
                size={size} 
                color={color}
              />
            ),
          }} 
        />

        <Drawer.Screen
          name="configs"
          options={{ 
            drawerLabel: "Configurações",
            drawerIcon: ({ color, size }) => (
              <MaterialIcons
                name='settings' 
                size={size} 
                color={color}
              />
            ),
          }} 
        />
      </Drawer>
    </GestureHandlerRootView>
  )
}
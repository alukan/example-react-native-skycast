import { Drawer } from "expo-router/drawer"

const Layout: React.FC = () => {
  return (
    <Drawer>
      <Drawer.Screen name="index" options={{ title: "Settings" }} />
      <Drawer.Screen
        name="notifications"
        options={{ title: "Notifications" }}
      />
      <Drawer.Screen name="motion" options={{ title: "Device Motion" }} />
    </Drawer>
  )
}

export default Layout

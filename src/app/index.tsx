import { View, StyleSheet, TouchableOpacity,Text } from 'react-native'
import { router } from 'expo-router'

export default function Index(){
  function signUp(){
    router.navigate("/sign-up")
  }

  function signIn(){
    router.navigate("/(drawer)")
  }
  
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={signIn}>
        <Text style={styles.label}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={signUp}>
        <Text style={styles.label}>Criar Conta</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: "center",
    justifyContent: "center",
    gap: 32,
  },
  label: { fontSize: 16, fontWeight: "bold", color: "#FFF" },
  button: {
    backgroundColor: "#000",
    paddingHorizontal: 32,
    paddingVertical: 10,
    borderRadius: 10,
  },
})
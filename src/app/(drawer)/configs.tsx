import { View, StyleSheet, Text } from 'react-native'

export default function Configs(){
  
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Configurações</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: "center",
    justifyContent: "center",
  },
  title: { fontSize: 22, fontWeight: "bold" },
})
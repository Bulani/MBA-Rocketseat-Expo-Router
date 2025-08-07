import { View, StyleSheet, Text } from 'react-native'

export default function Order(){
  
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Itens do Pedido</Text>
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
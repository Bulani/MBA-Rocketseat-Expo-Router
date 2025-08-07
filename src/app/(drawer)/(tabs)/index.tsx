import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { router } from 'expo-router'

export default function Products(){
  
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Lista de Produtos</Text>

      <TouchableOpacity onPress={() => router.navigate("/product/52")}>
        <Text>Abrir Produto</Text>
      </TouchableOpacity>
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
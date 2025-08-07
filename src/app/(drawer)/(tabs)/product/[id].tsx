import { View, StyleSheet, Text } from 'react-native'
import { useLocalSearchParams } from 'expo-router'

export default function Product(){
  const { id } = useLocalSearchParams()

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Produto: {id}</Text>
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
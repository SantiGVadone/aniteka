import { StyleSheet, Text, View } from 'react-native'

export default function TabTwoScreen() {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.texto}>Que onda perrito malvado</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#2d2d2d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    textAlign: 'center',
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
  },
})

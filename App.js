import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const getJoke = () => {
    console.log('buscar piada na api');
  }

  /**
   * Como rodar um código quando a app inicializa (onLoad)
   * Utilizando um Hook chamado useEffect
   */
  useEffect(() => {
    console.log('Carregou a aplicação!');
    /**
     * Acessar a api de piadas e mostrar uma piada na tela
     */
    getJoke();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{marginBottom: 20}}>
        Área onde vai aparecer a piadola
      </Text>

      <Button title="Carregar nova piada" onPress={() => getJoke()} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

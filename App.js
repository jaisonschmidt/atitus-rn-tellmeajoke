import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [joke, setJoke] = useState("Carregando piada...");

  /**
   * Transformar a função getJoke em uma função assíncrona (async / await)
   */
  const getJoke = async () => {
    // criando uma promise que vai acessar a API chucknorris
    const response = await fetch('https://api.chucknorris.io/jokes/random');
   
    // convertemos o retorno da api em JSON para usar em nossa app
    const data = await response.json();
    
    // atualizamos o estado da piada com o valor retornado da api
    setJoke(data.value);
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
        {joke}
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

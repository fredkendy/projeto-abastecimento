import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Touchable, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function App() {

  const [valorGasolina, setValorGasolina] = useState(null);
  const [valorEtanol, setValorEtanol] = useState(null);
  const [qtdCombustivel, setQtdCombustivel] = useState(null);
  const [abastecerEtanol, setabastecerEtanol] = useState(null);
  const [abastecerGasolina, setabastecerGasolina] = useState(null);
  const [somaGasolina, setSomaGasolina] = useState(null);
  const [somaEtanol, setSomaEtanol] = useState(null);

  //const [somaPercentualGasolina, setPercentualGasolina] = useState(null);


  function somar() {

    if (valorGasolina === null || valorEtanol === null || qtdCombustivel === null) {
      alert('Preencha todos os campos obrigatórios!');
    } else {

      res = (valorEtanol / valorGasolina).toFixed(2);

      setSomaEtanol(valorEtanol * qtdCombustivel);
      setSomaGasolina(valorGasolina * qtdCombustivel);

      valorPer = somaGasolina * 0.70;

      if (res <= 0.70) {
        //Etanol
        setabastecerEtanol(true);
        setabastecerGasolina(false);
      } else {
        //Abastecer Gasolina
        setabastecerEtanol(false);
        setabastecerGasolina(true);
      }
    }

    //setSomaGasolina(null);
    //setSomaEtanol(null);
  }

  return (
    <View style={styles.container}>
      <View style={styles.userImage} >
        <Animatable.Image animation="flipInY" source={require('./assets/img/bomba.png')} style={styles.Image} />
      </View>

      <Animatable.View animation="fadeInUp" delay={1200} style={styles.form}>
        <TextInput keyboardType='numeric' style={styles.input} onChangeText={setValorGasolina} placeholder='Informe o valor da gasolina: ' placeholderTextColor='#000'></TextInput>
        <TextInput keyboardType='numeric' style={styles.input} onChangeText={setValorEtanol} placeholder='Informe o valor do etanol: ' placeholderTextColor='#000'></TextInput>
        <TextInput keyboardType='numeric' style={styles.input} onChangeText={setQtdCombustivel} placeholder='Informe a quantidade de litros: ' placeholderTextColor='#000'></TextInput>

        <TouchableOpacity style={styles.buttonForm} onPress={() => { somar() }}>
          <Text style={styles.textButton}>
            Somar
          </Text>
        </TouchableOpacity>

        <View style={styles.ViewResult}>
          {somaGasolina != null &&
            <Text style={styles.Text}>Total soma Gasolina R$ {somaGasolina}</Text>
          }

          {somaEtanol != null &&
            <Text style={styles.Text}>Total soma Etanol R$ {somaEtanol}</Text>
          }

          {abastecerEtanol === true &&
            <Text style={styles.Text}>Abastecer <Text style={styles.Resultado}>Etanol</Text></Text>
          }

          {abastecerGasolina === true &&
            <Text style={styles.Text}>Abastecer <Text style={styles.Resultado}>Gasolina</Text></Text>
          }
        </View>


      </Animatable.View>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#006660'
  },
  userImage: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#008D85',
    width: 170,
    height: 170,
    borderRadius: 100,
    marginBottom: 54,
    marginTop: 60
  },
  Image: {
    width: 108,
    height: 108,
  },
  form: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    backgroundColor: '#FFF',
    width: 250,
    marginTop: 13,
    height: 35,
    borderRadius: 5,
    padding: 5,
    textAlign: 'center'
  },
  buttonForm: {
    backgroundColor: 'black',
    width: 250,
    height: 30,
    borderRadius: 50,
    marginTop: 13,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textButton: {
    color: '#FFF',
    fontWeight: 'bold'
  },
  ViewResult: {
    marginTop: 20,
    borderWidth: 2,
    padding: 10,
    borderRadius: 20,
    borderColor: 'white'    
  },
  Text: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center'
  },
  Resultado:{
    color: 'yellow'
  }

});
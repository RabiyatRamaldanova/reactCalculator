import React, {Component} from 'react';
import {Text, View, StyleSheet, Button, TouchableOpacity} from 'react-native';
//import { Digital_Bold } from './fonts';

class App extends Component {

arrayOfNumbers = [7,8,9,4,5,6,1,2,3];
arrayOfSigns = ['/','*','-','+'];

constructor() {
  super();
  this.state = {sampleText: 'initial text'}
}

changeTextValue = () => {
this.setState({sampleText: 'changed text'});
}

onPressDisplayNumber(){
  <Text onPress = {this.changeTextValue}>
      {this.state.sampleText}
    </Text>
}
render(){
  return(
<View style={{flex: 1, backgroundColor: 'red'}}>
  <View style={{flex: 0.3, backgroundColor: '#172533', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
    <Text style={{fontSize: 30,color: 'red'}}>
      0
    </Text>
  </View>
<View style={{flex: 0.7, flexDirection: 'row', backgroundColor: '#172533'}}>
  
  <View style={{flex: 0.75, flexDirection: 'row', flexWrap: 'wrap',justifyContent:'center', alignItems: 'center'}}>
    <TouchableOpacity onPress = {this.onPressDisplayNumber} style={{width: '32%', height: '19%',backgroundColor: '#1D2E3E', marginRight: '1%', marginBottom:'1%', justifyContent:'center', alignItems: 'center'}}>
    <Text style={{color: '#F86F6F', fontSize: 20}}>
      C
    </Text>
    </TouchableOpacity>

    <TouchableOpacity style={{width: '32%', height: '19%', backgroundColor: '#1D2E3E', marginRight: '1%', marginBottom:'1%', justifyContent:'center', alignItems: 'center'}}>
    <Text style={{color: '#F86F6F', fontSize: 20}}>
      CE
    </Text>
    </TouchableOpacity>

    <TouchableOpacity style={{width: '32%', height: '19%', backgroundColor: '#1D2E3E', justifyContent:'center', alignItems: 'center', marginRight: '1%'}}>
    <Text style={{color: '#F86F6F', fontSize: 20}}>
      +/-
    </Text>
    </TouchableOpacity>

    {this.arrayOfNumbers.map((value, index)=> (
    <TouchableOpacity style={{width: '32%', height: '19%', backgroundColor: '#1D2E3E', marginRight: '1%', marginBottom:'1%', justifyContent:'center', alignItems: 'center'}} key={index}>
      <Text style={{color: '#4BCEA9', fontSize: 20}}>
        {value}
      </Text>
    </TouchableOpacity>))}

    <TouchableOpacity style={{width: '65%', height: '19%', backgroundColor: '#1D2E3E', marginRight: '1%', marginBottom:'1%', justifyContent:'center', alignItems: 'center'}}>
      <Text style={{color: '#4BCEA9', fontSize: 20}}>
        0
      </Text>
    </TouchableOpacity>
    <TouchableOpacity style={{width: '32%', height: '19%', backgroundColor: '#1D2E3E', marginRight: '1%', marginBottom:'1%', justifyContent:'center', alignItems: 'center'}}>
      <Text style={{color: '#4BCEA9', fontSize: 20}}>
        .
      </Text>
    </TouchableOpacity>
  </View>

  <View style={{flex: 0.25, alignItems: 'center', justifyContent: 'flex-start'}}>
    {this.arrayOfSigns.map((value,index) => (
      <TouchableOpacity style={{ width: '100%',marginRight: '1%', marginTop: '1.7%', marginBottom: '1.2%', height: '19%', backgroundColor: '#4BCEA9', justifyContent:'center', alignItems: 'center'}} key={index}>
        <Text style={{color: '#172533', fontSize: 20}}>
          {value}
        </Text>
      </TouchableOpacity>
    ))}
    <TouchableOpacity style={{width: '100%', height: '19%', marginRight: '1%', marginTop: '2%', marginBottom: '0.3%', backgroundColor: '#4BCEA9', justifyContent:'center', alignItems: 'center'}}>
      <Text style={{color: '#172533', fontSize: 20}}>
        =
      </Text>
    </TouchableOpacity>
  </View>

</View> 
</View>
  )
}
}
export default App;
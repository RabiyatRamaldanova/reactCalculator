import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

class App extends Component {

arrayOfNumbers = [7,8,9,4,5,6,1,2,3];
arrayOfSigns = ['/','*','-','+'];
dotBoolean = false;
signBoolean = false;
text = "";

constructor(props) {
  super(props);
  this.state={result: ""}
}

onPressBuildResult(){
  if (this.state.result == "") {
    this.setState({result: ""})
  }
  else if(this.signBoolean == true){
    this.setState({result : eval(this.state.result).toString()})
  }

  if(this.state.result.includes(this.text)){
    this.setState({result: "error"});
  }
}

onPressDisplayNumber(button) {
  this.signBoolean = true;
  if(button != '.'){
    this.setState({result: this.state.result + `${button}`})
  }
  
  else if(button == '.' && this.dotBoolean == false){
    this.setState({result: this.state.result + `${button}`});
    this.dotBoolean = true;
    if(this.state.result == "") {
      this.setState({result: "0."});
    }
    if(this.state.result[this.state.result.length-1] == '-' || this.state.result[this.state.result.length-1] == '+' || this.state.result[this.state.result.length-1] == '*' || this.state.result[this.state.result.length-1] == '/') {
      this.setState({result: this.state.result + '0.'})
    }
    if(this.state.result == 'error'){
      this.setState({result: "0."})
    }
  }

  if(this.state.result == '0'){
    if(button == '0') {
      this.setState({result: this.state.result});
    } else if(button == '.'){
      this.setState({result: this.state.result + `${button}`});
    }else {
      this.setState({result: `${button}`});
    }
  }

  if (this.state.result[this.state.result.length-1] == '/' && button == 0) {
    this.text = this.state.result[this.state.result.length-1] + button.toString();
  }

  if(this.state.result == "error" && button!= '.') {
    this.setState({result: `${button}`});
  }
}

onPressDisplaySign(button) {
  this.signBoolean = false;
  if( this.state.result != "" && this.state.result != "error"){
    if(this.state.result[this.state.result.length-1] == '.'){
    this.setState({result: this.state.result.substring(0,this.state.result.length-1) + `${button}`});
    }
    else if(this.state.result[this.state.result.length-1] == '-' || this.state.result[this.state.result.length-1] == '+' || this.state.result[this.state.result.length-1] == '*' || this.state.result[this.state.result.length-1] == '/'){
    this.setState({result: this.state.result.substring(0,this.state.result.length-1) + `${button}`})
    }
    else{
    this.setState({result: this.state.result + `${button}`});
    }
}
}

onPressClear() {
  this.setState({result: ""});
  this.dotBoolean = false;
  this.signBoolean = true;
}

onPressSubstring() {
  if (this.state.result[this.state.result.length-1] == '.'){
    this.dotBoolean = false;
  }
  if (this.state.result[this.state.result.length-1] == '-' || this.state.result[this.state.result.length-1] == '+' || this.state.result[this.state.result.length-1] == '/' || this.state.result[this.state.result.length-1] == '*') {
    this.signBoolean = true;
  }
  if (this.state.result.length == 2 && this.state.result[0] == '-') {
    this.setState({result: ""});
  } else {
    this.setState({result: this.state.result.substring(0,this.state.result.length-1)});
  }
  if(this.state.result == "error") {
    this.setState({result: ""})
  }
}

negativeNumbers() {
  if (this.state.result != "" && this.state.result != "error") {
    this.setState({result : (0 - eval(this.state.result)).toString()});
  }
}

render(){
  return(
<View style={styles.container}>
  <View style={styles.display}>
    <Text style={{fontSize: 30,color: 'red'}}>
      {this.state.result}
    </Text>
  </View>
<View style={styles.buttonContainer}>
  
  <View style={styles.numberButtonsContainer}>
    <TouchableOpacity onPress={() => this.onPressClear()} style={styles.numberButtons}>
    <Text style={{color: '#F86F6F', fontSize: 20}}>
      C
    </Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => this.onPressSubstring()} style={styles.numberButtons}>
    <Text style={{color: '#F86F6F', fontSize: 20}}>
      CE
    </Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => this.negativeNumbers()} style={styles.numberButtons}>
    <Text style={{color: '#F86F6F', fontSize: 20}}>
      +/-
    </Text>
    </TouchableOpacity>

    {this.arrayOfNumbers.map((value, index)=> (
    <TouchableOpacity onPress={() => this.onPressDisplayNumber(value)} style={styles.numberButtons} key={index}>
      <Text style={{color: '#4BCEA9', fontSize: 20}}>
        {value}
      </Text>
    </TouchableOpacity>))}

    <TouchableOpacity onPress={() => this.onPressDisplayNumber(`0`)} style={{width: '65%', height: '19%', backgroundColor: '#1D2E3E', marginRight: '1%', marginBottom:'1%', justifyContent:'center', alignItems: 'center'}}>
      <Text style={{color: '#4BCEA9', fontSize: 20}}>
        0
      </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => this.onPressDisplayNumber(`.`)} style={styles.numberButtons}>
      <Text style={{color: '#4BCEA9', fontSize: 20}}>
        .
      </Text>
    </TouchableOpacity>
  </View>

  <View style={styles.signButtonsContainer}>
    {this.arrayOfSigns.map((value,index) => (
      <TouchableOpacity onPress={() => this.onPressDisplaySign(value)} style={styles.signButtons} key={index}>
        <Text style={{color: '#172533', fontSize: 20}}>
          {value}
        </Text>
      </TouchableOpacity>
    ))}
    <TouchableOpacity onPress={() => this.onPressBuildResult()} style={{width: '100%', height: '19%', marginRight: '1%', marginTop: '2%', marginBottom: '0.3%', backgroundColor: '#4BCEA9', justifyContent:'center', alignItems: 'center'}}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  },
  display: {
    flex: 0.3,
    backgroundColor: '#172533', 
    justifyContent: 'flex-end', 
    alignItems: 'flex-end'
  },
  buttonContainer: {
    flex: 0.7, 
    flexDirection: 'row', 
    backgroundColor: '#172533'
  },
  numberButtonsContainer: {
    flex: 0.75, 
    flexDirection: 'row', 
    flexWrap: 'wrap',
    justifyContent:'center', 
    alignItems: 'center'
  },
  signButtonsContainer: {
    flex: 0.25, 
    alignItems: 'center', 
    justifyContent: 'flex-start'
  },
  numberButtons: {
    width: '32%', 
    height: '19%',
    backgroundColor: '#1D2E3E', 
    marginRight: '1%', 
    marginBottom:'1%', 
    justifyContent:'center', 
    alignItems: 'center'
},
signButtons: { 
  width: '100%',
  marginRight: '1%', 
  marginTop: '1.7%', 
  marginBottom: '1.2%', 
  height: '19%', 
  backgroundColor: '#4BCEA9', 
  justifyContent:'center', 
  alignItems: 'center'
}
})
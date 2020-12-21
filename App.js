import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

class App extends Component {

arrayOfNumbers = [7,8,9,4,5,6,1,2,3];
arrayOfSigns = ['/','*','-','+'];
dotBoolean = false;
signBoolean = false;
resultBoolean = false;
res = "";
continueBoolean = false;

constructor(props) {
  super(props);
  this.state={result: ""}
}

onPressBuildResult(){
  this.dotBoolean = false;
  this.resultBoolean = true;
  if (this.state.result == "" ) {
    this.setState({result: ""})
  }
  else if(this.signBoolean == true){
    this.res = eval(this.state.result).toString()
    if(this.res == "Infinity" || this.res == "-Infinity"){
    this.setState({result : "error"})
    } else {
      this.setState({result : this.res})
    }
  }
  else if(this.signBoolean == false) {
    this.continueBoolean = true;
    this.setState({result: this.state.result})
    console.log(this.state.result)
  }
}

onPressDisplayNumber(button) {
  this.signBoolean = true;
  
  
  if(button != '.' ){
    this.setState({result: this.state.result + `${button}`})
  }
  if(this.continueBoolean == true && (this.state.result[this.state.result.length-1] == '+' || this.state.result[this.state.result.length-1] == '-' || this.state.result[this.state.result.length-1] == '*' || this.state.result[this.state.result.length-1] == '/' )) {
    console.log(`qwer + ${this.state.result}`)
    //this.setState((prevState) => ({result : prevState.result + `${button}`}))
    this.setState({result: this.state.result + `${button}`})
    console.log(`button + ${button}`)
    console.log(`blabla + ${this.state.result}`)
    this.continueBoolean == false
  }
  else if (this.resultBoolean == true && button != '.' ) {
    this.setState({result: `${button}`});
    this.resultBoolean = false;
  } else if(this.resultBoolean == true && button == '.') {
    this.setState({result: '0.'});
    this.resultBoolean = false;
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

  if(button == '0' && this.state.result[this.state.result.length-1] == 0 && (this.state.result[this.state.result.length-2] == '-' || this.state.result[this.state.result.length-2] == '+' || this.state.result[this.state.result.length-2] == '/' || this.state.result[this.state.result.length-2] == '*')){
    this.setState({ result: this.state.result});
  } else if(button!= '0' && button != '.' && this.state.result[this.state.result.length-1] == 0 && (this.state.result[this.state.result.length-2] == '-' || this.state.result[this.state.result.length-2] == '+' || this.state.result[this.state.result.length-2] == '/' || this.state.result[this.state.result.length-2] == '*')) {
    this.setState({result: this.state.result.substring(0,this.state.result.length-1) + `${button}`});
   } 

  if(this.state.result == "error" && button!= '.') {
    this.setState({result: `${button}`});
  }
}

onPressDisplaySign(button) {
  this.signBoolean = false;
  this.dotBoolean = false;
  if(this.resultBoolean == true && this.state.result != "" && this.state.result != "error") {
    this.setState({result: this.state.result + `${button}`});
    this.resultBoolean = false;
  }
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
  console.log(this.signBoolean)
  if (this.state.result != "" && this.state.result != "error" &&  this.signBoolean == true) {
    this.result = eval(this.state.result).toString();
    if(this.result == "Infinity" || this.result =="-Infinity"){
      this.setState({result : "error"});
    } else {
      this.setState({result : (0 - this.result)});
    }
  }
  else if (this.state.result.includes(this.text) && this.text != "") {
    this.setState({result: "error"});
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
    <Text style={{color: '#F86F6F', fontSize: 30}}>
      C
    </Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => this.onPressSubstring()} style={styles.numberButtons}>
    <Text style={{color: '#F86F6F', fontSize: 30}}>
      CE
    </Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => this.negativeNumbers()} style={styles.numberButtons}>
    <Text style={{color: '#F86F6F', fontSize: 30}}>
      +/-
    </Text>
    </TouchableOpacity>

    {this.arrayOfNumbers.map((value, index)=> (
    <TouchableOpacity onPress={() => this.onPressDisplayNumber(value)} style={styles.numberButtons} key={index}>
      <Text style={{color: '#4BCEA9', fontSize: 30}}>
        {value}
      </Text>
    </TouchableOpacity>))}

    <TouchableOpacity onPress={() => this.onPressDisplayNumber(`0`)} style={{width: '65%', height: '19%', backgroundColor: '#1D2E3E', marginRight: '1%', marginBottom:'1%', justifyContent:'center', alignItems: 'center'}}>
      <Text style={{color: '#4BCEA9', fontSize: 30}}>
        0
      </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => this.onPressDisplayNumber(`.`)} style={styles.numberButtons}>
      <Text style={{color: '#4BCEA9', fontSize: 30}}>
        .
      </Text>
    </TouchableOpacity>
  </View>

  <View style={styles.signButtonsContainer}>
    {this.arrayOfSigns.map((value,index) => (
      <TouchableOpacity onPress={() => this.onPressDisplaySign(value)} style={styles.signButtons} key={index}>
        <Text style={{color: '#172533', fontSize: 30}}>
          {value}
        </Text>
      </TouchableOpacity>
    ))}
    <TouchableOpacity onPress={() => this.onPressBuildResult()} style={{width: '100%', height: '19%', marginRight: '1%', marginTop: '2%', marginBottom: '0.3%', backgroundColor: '#4BCEA9', justifyContent:'center', alignItems: 'center'}}>
      <Text style={{color: '#172533', fontSize: 30}}>
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
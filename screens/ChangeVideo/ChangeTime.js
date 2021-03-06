import { StyleSheet, View, TextInput, Text, Pressable } from 'react-native';
import {useEffect, useState} from 'react'
import { Dimensions } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import {LinearGradient} from 'expo-linear-gradient'


export default function ChangeTime() {
 //   consoleconst JsonAPI='https://nodal-linker-349809-default-rtdb.europe-west1.firebasedatabase.app/bookmark.json'
 const route=useRoute()
const data=route.params.allData
const Navigation=useNavigation()

const [hour, setHour] = useState('0');
const [minute, setMinute] = useState();
const [seconds, setSeconds] = useState('0');

const onChangeHour=(value) => {
  setHour(value)
}
const onChangeMin=(value) => {
  setMinute(value)
}
const onChangeSec=(value) => {
  setSeconds(value)
  //console.log(DB)
  }
const onContinue=() => {
  const newTime=[parseInt(hour) , parseInt(minute), parseInt(seconds) ]
  Navigation.navigate('ChangeEpisode', {data, newTime})
}

  return (
   
    <View style={styles.container}>
        <View style={styles.wrapper}>
        <Text style={styles.title}>
      Where did you stay?
      </Text>
     <View style={styles.inputsContainer}>
     <TextInput
  style={styles.textInputTime}
  onChangeText={onChangeHour}
  value={hour}
  keyboardType={'numeric'}
  placeholder={data.timeCode[0].toString()}
/>
<Text style={styles.title}>
      :
      </Text>
<TextInput
  style={styles.textInputTime}
  onChangeText={onChangeMin}
  keyboardType={'numeric'}
  value={minute}
  placeholder={data.timeCode[1].toString()}
/>
<Text style={styles.title}>
      :
      </Text>
<TextInput
  style={styles.textInputTime}
  onChangeText={onChangeSec}
  keyboardType={'numeric'}
  value={seconds}
  placeholder={data.timeCode[2].toString()}
/>
     </View>
     <Pressable onPress={onContinue} >
           <LinearGradient colors={[ '#FD7461', '#BA4274']} start={[0,1]}
end={[1,0]} style={styles.btnNext}>
          <Text style={styles.title}>Next</Text>
</LinearGradient>
           </Pressable>
        </View>
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  height:'100%',
    backgroundColor: '#1D1D27'
  },
  wrapper:{
alignItems:'center',
justifyContent: 'center',
  },
  inputsContainer:{
    marginTop:15,
    marginBottom:15,
    alignItems: 'center',
flexDirection: "row"
  },
  textInputTime:{
    height: 60,
    backgroundColor: 'rgba(118, 118, 128, 0.2)',
    borderRadius:16,
    textAlign: 'center',
    placeholderTextColor:'rgba(255, 255, 255, 0.54)',
    fontSize: 28,
    width: 110,
    color: 'white'
  },
  btnNext:{
    padding:10,
    borderRadius:10,
width:Dimensions.get('window').width-60,
marginLeft:30,
marginRight:30,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
          fontSize: 28,
          color: "#ffff",
        },
});

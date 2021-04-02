import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Message({navigation}) {
  const [change, setChange] = useState(null)
  var [lyrics, setLyrics] = useState([
    {
      key: '001',
      title: 'Bridge',
    
    },
     {
      key: '002',
      title: 'Chorus',
    
    },
    {
      key: '003',
      title: 'Ending',
         },
         {
          key: '004',
          title: 'Repeate',
             },
     {
      key: '005',
      title: 'Reprise',
         },
         {
          key: '006',
          title: 'Special',
             },
             {
              key: '007',
              title: 'Verse',
                 },
    
  ]);

  
  const swapUp = (pos) => {
  if (pos > 0){ 
   let abovePosition = pos - 1
   var currentItem = lyrics[pos]
   var aboveItem = lyrics[abovePosition]
     setChange(currentItem.title)
    lyrics[abovePosition] = (currentItem)
    lyrics[pos] = (aboveItem)
   
    console.log(lyrics)}
  }

  const swapDown = (pos) => {
   if (pos < lyrics.length-1){
   
      let belowPosition = pos + 1
      var currentItem = lyrics[pos]
      var belowItem = lyrics[belowPosition]
      setChange(currentItem.title)
       lyrics[belowPosition] = (currentItem)
       lyrics[pos] = (belowItem)
      
       console.log(lyrics)
   }
    }


  const templateListitem = item => {
    return (
      <View style={{flexDirection:'row', justifyContent:'space-evenly'}} key={item.key.toString()}>
       {/* first colum */}
        <View style={{flexDirection: 'row', marginTop:10}}>
          <Ionicons
            name="lock-open"
            size={20}
            color={'#AC1C1C'}
            
            
          />
          <Text style={{fontWeight: 'bold', margin: 5, width:90}}>{item.title}</Text>
        </View>

      {/* second co,um */}
        <View style={{flexDirection: 'row'}}>
          <Ionicons
            name="add-outline"
            size={23}
            color={'#301CAC'}
            
           
          />
          <Ionicons
            name="remove-outline"
            size={23}
            color={'#F8AE33'}
         
          />
        </View>
{/* third colum */}
        <View style={{flexDirection: 'row'}}>
          <Ionicons
            name="arrow-down-outline"
            size={23}
            color={'#AC1C1C'}
            onPress={() => swapDown(lyrics.indexOf(item))}
          />
          <Ionicons
            name="arrow-up-outline"
            size={23}
            color={'#F8AE33'}
            onPress={() => swapUp(lyrics.indexOf(item))}
         
          />
        </View>
      </View>
    );
  };

  return (
    <View>

<View style={{flexDirection: 'row',  marginTop:10, marginStart:40, }}>
      
         <Ionicons
            name="lock-open"
            size={20}
          
            color={'#AC1C1C'}
            
          />
          <Text style={{fontWeight: 'bold', margin: 5, width:90}}>Introduction</Text>
        
         <Text style={{color:'#AC1C1C', textAlign:'right', margin: 5, width:180, marginTop:-3}}>        
         Re-Order Position
</Text>
        </View>
      <View
        style={{
          backgroundColor: '#F4F4F4',
          margin: 5,
          borderRadius: 10,
          elevation: 5,
        }}>


          
        {lyrics.map(item => {
          return templateListitem(item);
        })}

      </View>

      <View style={styles.saveBtnText}>
      <Text style={styles.saveBtnBg}>Save</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  headingText: {
    color: '#3725AE',
    fontSize: 17,
    fontWeight: 'bold',
  },
  text: {
    marginStart: 20,
    color: '#000',
    fontSize: 15,
    textAlign: 'justify',
  },
  iconBg: {
    margin: 3,
    borderRadius: 5,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#AC1C1C',
  },
  saveBtnText: {
    backgroundColor: '#AC1C1C',
    margin: 10,
    borderRadius: 50,
  },

  saveBtnBg: {
    textAlign: 'center',
    color: '#fff',
    margin: 5,
    padding: 5,
    fontSize: 20,
  },
});

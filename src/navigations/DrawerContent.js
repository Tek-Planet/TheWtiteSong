import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';


import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export function DrawerContent({props, navigation}) {
  
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ marginTop: 15}}>
              <Avatar.Image
                source={require('../assets/imgs/menu/bible.png')}
                size={100}
              />
              <View style={{marginLeft: 15, flexDirection: 'column'}}>
                <Title style={styles.title}>
                  John Doe
                </Title>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="home-outline" color={'#000'} size={size} />
              )}
              label={() => (
                <Text style={styles.menuTitle}>
                 My Songs
                </Text>
              )}
              onPress={() => {
                navigation.navigate('Home');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="email-newsletter" color={color} size={size} />
              )}
              label={() => (
                <Text style={styles.menuTitle}>
                 Music Settings
                </Text>
              )}
              onPress={() => {
                navigation.navigate('News');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="clipboard-flow-outline" color={color} size={size} />
              )}
              label={() => (
                <Text style={styles.menuTitle}>
              Instrument Tuner
               </Text>
              )}
              onPress={() => {
                navigation.navigate('Series');
              }}
            />
            <DrawerItem
             style={{backgroundColor:'#AC1C1C'}}
              icon={({color, size}) => (
                <Icon name="more" color={color} size={size} />
              )}
              label={() => (
                <Text style={{color:'#fff', marginTop:-10, marginStart:-10, fontSize:18}}>
                  Song Writtng Pallete
               </Text>
              )}
              onPres
              onPress={() => {
                navigation.navigate('More');
              }}
            />
            {/* sub menu of song writting pallete */}
            <View style={{marginStart:20,  borderBottomWidth:3, borderColor:'#AC1C1C'}}>
            <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="home-outline" color={'#000'} size={size} />
              )}
              label={() => (
                <Text style={styles.menuTitle}>
                    Song Templates
                </Text>
              )}
              onPress={() => {
                navigation.navigate('Home');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="email-newsletter" color={color} size={size} />
              )}
              label={() => (
                <Text style={styles.menuTitle}>
               Bible Tool Search
                </Text>
              )}
              onPress={() => {
                navigation.navigate('News');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="clipboard-flow-outline" color={color} size={size} />
              )}
              label={() => (
                <Text style={styles.menuTitle}>
             Harmonize Tool
               </Text>
              )}
              onPress={() => {
                navigation.navigate('Series');
              }}
            />
            <DrawerItem
            
              icon={({color, size}) => (
                <Icon name="more" color={color} size={size} />
              )}
              label={() => (
                <Text style={styles.menuTitle}>
                  Lyrics Manager
               </Text>
              )}
              onPres
              onPress={() => {
                navigation.navigate('More');
              }}
            />

<DrawerItem
             
              icon={({color, size}) => (
                <Icon name="more" color={color} size={size} />
              )}
              label={() => (
                <Text style={styles.menuTitle}>
                  Loop Manager
               </Text>
              )}
              onPres
              onPress={() => {
                navigation.navigate('More');
              }}
            />

<DrawerItem
          
              icon={({color, size}) => (
                <Icon name="more" color={color} size={size} />
              )}
              label={() => (
                <Text style={styles.menuTitle}>
                  Melodies
               </Text>
              )}
              onPres
              onPress={() => {
                navigation.navigate('More');
              }}
            />

      <DrawerItem
             
              icon={({color, size}) => (
                <Icon name="more" color={color} size={size} />
              )}
              label={() => (
                <Text style={styles.menuTitle}>
                 Metromones
               </Text>
              )}
              onPres
              onPress={() => {
                navigation.navigate('More');
              }}
            />

        <DrawerItem
           
              icon={({color, size}) => (
                <Icon name="more" color={color} size={size} />
              )}
              label={() => (
                <Text style={styles.menuTitle}>
                  Phyming Tool
               </Text>
              )}
              onPres
              onPress={() => {
                navigation.navigate('More');
              }}
            />
              
          </Drawer.Section>
            </View>
              
          </Drawer.Section>
        </View>
     

      <Drawer.Section style={styles.bottomDrawerSection}>

      <DrawerItem
           
           icon={({color, size}) => (
             <Icon name="more" color={color} size={size} />
           )}
           label={() => (
             <Text style={styles.menuTitle}>
               Information
            </Text>
           )}
           onPres
           onPress={() => {
             navigation.navigate('More');
           }}
         />
     
     <DrawerItem
           
           icon={({color, size}) => (
             <Icon name="more" color={color} size={size} />
           )}
           label={() => (
             <Text style={styles.menuTitle}>
              Log Out
            </Text>
           )}
           onPres
           onPress={() => {
             navigation.navigate('More');
           }}
         />
        
      </Drawer.Section>
      
      <View style={{flexDirection:'row', justifyContent:'space-evenly', alignItems:'center', paddingEnd:10, paddingStart:10}}>
      <Text style={styles.baseMenuText}>
             About Us
      </Text>
      <View style={styles.horizontalLine}/>
      <Text style={styles.baseMenuText}>
          Help
      </Text>
      <View style={styles.horizontalLine}/>
      <Text style={styles.baseMenuText}>
            Contact Us
      </Text>
      <View style={styles.horizontalLine}/>
      <Text style={styles.baseMenuText}>
             Terms
      </Text>
      <View style={styles.horizontalLine}/>
      <Text style={styles.baseMenuText}>
            Policy
      </Text> 
      </View>
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    marginTop:-5  ,
    padding:10,
    paddingLeft: 20,
    borderBottomWidth:3,
    borderColor:'#AC1C1C'
    
  },
  title: {
    fontSize: 18,
    marginTop: 3,
    fontWeight: 'bold',
    color:'#000'
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    color:'#fff'
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  menuTitle:{
    fontSize:18,
    color:'#000',
    marginTop:-10,
    marginStart:-10
  },
  horizontalLine:{
    height:20,
    backgroundColor:'#ccc',
    width:2,
    margin:10
  }
});


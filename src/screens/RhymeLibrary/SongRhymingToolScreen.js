import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Modal,
  Alert,
  StyleSheet,
} from 'react-native';
import Message from '../../components/Message';

const SongRhymingToolScreen = ({navigation}) => {
  return (
    <ScrollView>
      <Message
        header="Song Writing Palette > Song Rhyming Tool"
        showMsg="Use This Tool to Generate Song Lyrics"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default SongRhymingToolScreen;

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import RoundedIconButton from './Buttons/RoundedIconButton';

export default function EditScreenInfo({ path }: { path: string }) {
  return (
    <View style={{ flex: 3, width: "100%" }}>
      {/* <SectionSeparator image /> */}
      <RoundedIconButton 
      backgroundColor={"red"} 
      icon={<AntDesign name='caretdown' size={25}/>} 
      onPress={() => console.log('icon pressed')}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
});

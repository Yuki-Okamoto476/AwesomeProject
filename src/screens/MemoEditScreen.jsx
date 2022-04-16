import { shape, string } from 'prop-types';
import React, { useState } from 'react';
import {
  View, TextInput, StyleSheet, KeyboardAvoidingView, Alert,
} from 'react-native';
import firebase from 'firebase';

import CircleButton from '../components/CircleButton';

export default function MemoEditScreen(props) {
  const { navigation, route } = props;
  const { id, bodyText } = route.params;
  const [body, setBody] = useState(bodyText);

  function handlePress() {
    const { currentUser } = firebase.auth();
    if (currentUser) {
      const db = firebase.firestore();
      const ref = db.collection(`users/${currentUser.uid}/memos`).doc(id);
      ref.set({
        bodyText: body,
        updateAt: new Date(),
      }, { merge: true })
        .then(() => {
          navigation.goBack();
        })
        .catch((error) => {
          Alert.alert(error.code);
        });
    }
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            value={body}
            multiline
            styles={styles.input}
            onChangeText={(text) => { setBody(text); }}
          />
        </View>
        <CircleButton
          name="check"
          onPress={() => handlePress()}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

MemoEditScreen.propTypes = {
  route: shape({
    params: shape({ id: string, bodyText: string }),
  }).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    paddingHorizontal: 27,
    paddingVertical: 32,
    flex: 1,
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
  },
});

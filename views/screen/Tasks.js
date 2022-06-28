import React, { useState } from 'react';
import Dialog from "react-native-dialog";
import {
  StyleSheet,
  Text,
  FlatList,
  Pressable,
  View,
} from 'react-native';

const taskList = [];

const Item = ({ description }) => (
  <View style={styles.itemContainer}>
    <Text style={styles.description}>{description}</Text>
  </View>
);

const renderItem = ({ item }) => (
  <Item description={item.description} />
);

const Tasks = () => {
  const [dialogVisibility, setDialogVisibility] = useState(false);
  const [newTask, onChangeNewTask] = useState(null);

  const showDialog = () => {
    setDialogVisibility(true);
  };

  const handleCancel = () => {
    setDialogVisibility(false);
  };

  const addNewTask = (task) => {
    if (typeof task === 'string' && task.trim() !== '') {
      taskList.push({ description: task })
    }
  }

  const handleAdd = () => {
    addNewTask(newTask);
    onChangeNewTask('')
    setDialogVisibility(false);
  };

  return (
    <View style={styles.container}>
      <View>
        <Dialog.Container visible={dialogVisibility}>
          <Dialog.Title>New Task</Dialog.Title>
          <Dialog.Description> Add new task to save local </Dialog.Description>
          <Dialog.Input onChangeText={onChangeNewTask} value={newTask}></Dialog.Input>
          <Dialog.Button label="Cancel" onPress={handleCancel} />
          <Dialog.Button label="Add" onPress={handleAdd} />
        </Dialog.Container>
      </View>
      <Text>tasks</Text>
      <Pressable style={styles.buttons} onPress={showDialog}>
        <Text style={styles.textButton}>New Task</Text>
      </Pressable>
      <FlatList
        data={taskList}
        renderItem={renderItem}
        keyExtractor={item => item.description} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  itemContainer: {
    margin: 5,
    backgroundColor: "#A8DDE7"
  },
  description: {
    fontSize: 25,
    color: "black",
    padding: 10
  },
  buttons: {
    backgroundColor: "#00aaff",
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    marginTop: 20,
  },
  textButton: {
    color: "#000",
    fontSize: 20
  },
})

export default Tasks;
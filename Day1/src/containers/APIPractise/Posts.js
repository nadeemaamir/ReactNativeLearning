import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/TextInput';
import Header from '../../components/Header';

const AllPosts = ({params}) => {
  const [Posts, SetPosts] = useState(null);
  const [Id, SetId] = useState(0);
  const [Title, SetTitle] = useState('');
  const [Body, SetBody] = useState('');
  const [UserId, SetUserId] = useState(1);

  const URL = 'https://jsonplaceholder.typicode.com/posts';
  const AddURL = 'https://jsonplaceholder.typicode.com/posts';
  const UpdateURL = `https://jsonplaceholder.typicode.com/posts/${Id}`;

  const GetAllPosts = async () => {
    try {
      const response = await axios.get(URL);
      SetPosts(response.data);
      console.log(response);
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert(error);
    } finally {
    }
  };
  const AddEditPost = () => {
    if (Title === '' || Body === '') {
      alert('Enter Title and Description');
    } else {
      const id = Id;
      if (id === 0) {
        axios
          .post(AddURL, {
            title: {Title},
            body: {Body},
            userId: {UserId},
          })
          .then(function (response) {
            alert('Save Successfully');
            GetAllPosts();
            ResetForm();
          })
          .catch(function (error) {
            alert('Error' + error);
          });
      } else {
        axios
          .put(`${UpdateURL}`, {
            id: {Id},
            title: {Title},
            body: {Body},
            userId: {UserId},
          })
          .then(function (response) {
            alert('Updated Successfully');
            GetAllPosts();
            ResetForm();
          })
          .catch(function (error) {
            alert('Error' + error);
          });
      }
    }
  };
  const ResetForm = () => {
    SetId(0);
    SetTitle('');
    SetBody('');
  };
  const GetSelectedPost = Post => {
    SetId(Post.id);
    SetTitle(Post.title);
    SetBody(Post.body);
  };
  const DeleteSelectedPost = Post => {
    Alert.alert('Delete', 'Are you sure you want to delete?', [
      {
        text: 'OK',
        onPress: () => {
          let DeleteUrl = `https://jsonplaceholder.typicode.com/posts/${Post.id}`;
          try {
            const response = axios.delete(`${DeleteUrl}`);
            alert('Deleted Successfully');
            GetAllPosts();
          } catch (error) {
            // eslint-disable-next-line no-alert
            alert('error' + error);
          } finally {
          }
        },
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
    ]);
  };
  useEffect(() => {
    GetAllPosts();
  }, []);
  return (
    <View>
      <View>
        <Button
          title="Reset"
          onPress={() => {
            ResetForm();
          }}
        />
      </View>
      <View>
        <Input
          placeholder="Enter Title"
          onChangeText={SetTitle}
          value={Title}
        />
        <Input
          placeholder="Enter Description"
          onChangeText={SetBody}
          value={Body}
        />
        <View>
          <Button
            title="Add/Edit Post"
            onPress={() => {
              AddEditPost();
            }}
          />
        </View>
      </View>
      <View>
        <FlatList
          data={Posts}
          keyExtractor={Post => Post.id.toString()}
          renderItem={({item}) => {
            return (
              <View>
                <TouchableOpacity onPress={() => GetSelectedPost(item)}>
                  <Text>
                    {item.id} - {item.title}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => DeleteSelectedPost(item)}>
                  <Text style={{color: 'red'}}>Delete Post</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default AllPosts;

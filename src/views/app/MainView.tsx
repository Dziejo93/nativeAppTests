import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { addUser } from '../../redux/actions/userActions';
import { Text, Button, Platform, SafeAreaView } from 'react-native';
import { useNavigation } from '../../hooks/navigation-hooks';
import { HandleAndroidBackButton } from '../../hooks/handle-android-back-button-hook';
import { State } from '../../redux/initialState';

export interface StoreProps {
  user?: string;
  dispatchAddUser: (user: string) => void;
}

const MainView: React.FC<StoreProps> = ({ user, dispatchAddUser }) => {
  if (Platform.OS === 'android') HandleAndroidBackButton();

  const { navigate } = useNavigation();

  const navigateToDetails = (): void => {
    navigate('Details');
  };

  return (
    <>
      <SafeAreaView
        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{user}</Text>
        <Button title="change" onPress={(): void => dispatchAddUser('sumo')} />
        <Button title="Go to details" onPress={navigateToDetails} />
      </SafeAreaView>
    </>
  );
};

const mapStateToProps = (state: State) => {
  const { user } = state;

  return { user };
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      dispatchAddUser: addUser,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(MainView);

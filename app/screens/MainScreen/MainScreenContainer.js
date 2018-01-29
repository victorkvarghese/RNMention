import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import * as userActions from '@actions/userActions';
import MentionTextInput from '@components/MentionTextInput';
import styles from './styles';
import PropTypes from 'prop-types';

class MainScreenContainer extends Component {
    searchUsers = searchString => {
        if (searchString.length > 0) {
            this.props.searchUsers(searchString);
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.main}>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>POST</Text>
                    </TouchableOpacity>
                </View>
                <MentionTextInput
                    tag="@"
                    searchUsers={this.searchUsers}
                    users={this.props.users}
                    isSearchLoading={this.props.isSearchLoading}
                />
            </View>
        );
    }
}

MainScreenContainer.propTypes = {
    users: PropTypes.array,
    isSearchLoading: PropTypes.bool,
    searchUsers: PropTypes.func
};

function mapStateToProps(state) {
    return {
        isSearchLoading: state.loadingReducer.isSearchLoading,
        users: state.userReducer.users
    };
}
function mapDispatchToProps(dispatch) {
    return {
        searchUsers: searchString =>
            dispatch(userActions.searchUsers(searchString))
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(
    MainScreenContainer
);

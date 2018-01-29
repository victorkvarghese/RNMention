import React, { Component } from 'react';
import {
    ActivityIndicator,
    FlatList,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

export default class MentionList extends Component {
    renderEachMention = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => this.onPress(item)}>
                <View style={styles.btnView}>
                    <Image
                        source={{ uri: item.avatar_url }}
                        style={styles.icon}
                    />
                    <Text>{item.login}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    onPress = item => {
        this.props.onReplace(item);
    };

    renderFooter = () => {
        return <View style={styles.footer} />;
    };

    render() {
        return (
            <View style={styles.list}>
                {this.props.isSearchLoading ? (
                    <ActivityIndicator size="large" color="#2ecc71" />
                ) : this.props.isSearchEnabled ? (
                    <FlatList
                        data={this.props.users}
                        keyExtractor={item => item.id}
                        renderItem={this.renderEachMention}
                        ListFooterComponent={this.renderFooter}
                    />
                ) : (
                    <View />
                )}
            </View>
        );
    }
}

MentionList.propTypes = {
    users: PropTypes.array,
    isSearchLoading: PropTypes.bool,
    isSearchEnabled: PropTypes.bool,
    onReplace: PropTypes.func
};

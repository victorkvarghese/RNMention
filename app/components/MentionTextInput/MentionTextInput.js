import React, { Component } from 'react';
import { TextInput, View, Platform } from 'react-native';
import MentionList from './MentionList';
import styles from './styles';
import _ from 'lodash';
import PropTypes from 'prop-types';

export default class MentionTextInput extends Component {
    constructor(props, context) {
        super(props, context);
        this.onCallSearchDelayed = _.debounce(this.callSearch, 200);
        this.state = {
            text: '',
            sliced: '',
            selection: 0,
            isSearchEnabled: false,
            start: -1
        };
    }

    handleTextChange = text => {
        this.setState({ text }, () => {
            this.getNewlyEnteredLetters();
        });
        if (Platform.OS === 'ios') {
            this.setState({ text }, () => {
                this.getNewlyEnteredLetters();
            });
        } else {
            this.setState({ text }, () => {
                this.getNewlyEnteredLetters();
            });
        }
    };

    handleTextSelectionChange = event => {
        const { selection } = event.nativeEvent;
        if (Platform.OS === 'ios') {
            this.setState({ selection });
        } else {
            this.setState({ selection }, () => {
                this.getNewlyEnteredLetters();
            });
        }
    };

    getNewlyEnteredLetters = () => {
        const { selection, text } = this.state;
        const { start, end } = selection;

        let output = start === end ? text[start - 1] : text[text.length - 1];
        this.IsTagDetected(output);
    };

    IsTagDetected = output => {
        if (this.state.isSearchEnabled) {
            if (output === ' ') {
                //means search ends now
                this.setState({
                    isSearchEnabled: false
                });
            } else {
                this.onCallSearchDelayed();
            }
        } else {
            if (output === this.props.tag) {
                this.setState({
                    isSearchEnabled: true,
                    start: this.state.selection.start
                });
            }
        }
    };

    callSearch = () => {
        const { selection } = this.state;
        const { end } = selection;
        this.setState(
            {
                sliced: this.state.text.slice(this.state.start, end)
            },
            () => {
                this.props.searchUsers(
                    this.state.text.slice(this.state.start, end)
                );
            }
        );
    };

    onReplace = item => {
        let updatedString =
            this.state.text.substring(0, this.state.start - 1) +
            item.login +
            this.state.text.substring(
                this.state.selection.start,
                this.state.text.length
            );

        this.setState({
            text: updatedString,
            isSearchEnabled: false
        });
    };

    render() {
        return (
            <View>
                <TextInput
                    style={styles.input}
                    multiline={true}
                    autoCorrect={false}
                    underlineColorAndroid="transparent"
                    placeholder="Write a post"
                    numberOfLines={4}
                    onChangeText={this.handleTextChange}
                    onSelectionChange={this.handleTextSelectionChange}
                    value={this.state.text}
                />

                <MentionList
                    {...this.props}
                    onReplace={this.onReplace}
                    isSearchEnabled={this.state.isSearchEnabled}
                />
            </View>
        );
    }
}

MentionTextInput.propTypes = {
    searchUsers: PropTypes.func,
    tag: PropTypes.string
};

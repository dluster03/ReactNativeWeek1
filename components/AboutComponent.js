import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { PROMOTIONS } from '../shared/promotions';
import { PARTNERS } from '../shared/partners';

class About extends Component {


    static navigationOptions = {
        title: 'About Us'
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView>

            </ScrollView>
        );
    }
}



export default About;
import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { PARTNERS } from '../shared/partners';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            partners: PARTNERS
        };
    }

    static navigationOptions = {
        title: 'About Us'
    }

    render() {
        const { navigate } = this.props.navigation;
        const renderPartners = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    onPress={() => navigate('../shared/partners', { partnersId: item.id })}
                />
            );
        };


        return (
            <ScrollView>
                <Mission />
                <Card>
                    title= 'Mission'
                </Card>
                <FlatList
                    data={this.state.partners}
                    renderItem={renderPartners}
                    keyExtractor={item => item.id.toString()}
                />
            </ScrollView>
        );
    }
}

export default About;
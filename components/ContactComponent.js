import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { PROMOTIONS } from '../shared/promotions';
import { PARTNERS } from '../shared/partners';

class Contact extends Component {


    static navigationOptions = {
        title: 'Contact Us'
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView>
                <Card
                    featuredTitle={"Contact Information"}
                    >
                    <Text wrapperStyle={{margin: 20}}>
                        {   "1 Nucamp Way",
                            "Seattle, WA 98001",
                            "U.S.A.",

                            "Phone: 1-206-555-1234",
                            "Email: campsites@nucamp.co"}
                    </Text>
                </Card>
            </ScrollView>
        );
    }
}



export default Contact;
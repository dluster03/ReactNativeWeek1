import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { CAMPSITES } from '../shared/campsites';

function RenderItem ({item}) {
    if (item) {
        return (
            <Card
                featuredTitle={item.name}
                image={require('./image/react-lake.jpg')}
            >
                <Text style={{margin: 10}}>
                    {item.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            campsites: CAMPSITES,
            promotions: PROMOTIONS,
            partners: PARTNERS
        };
    }

    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
            <ScrollView>
                <RenderItem
                    item={this.state.campsites.filter(campsite => campsite.featured)[0]}
                />
                <RenderItem
                    item={this.state.promotions.filter(promotion => promotion.featured)[0]}
                />
                <RenderItem
                    item={this.state.partners.filter(partner => partner.featured)[0]}
                />
            </ScrollView>
        );
    }
}

export default Home;
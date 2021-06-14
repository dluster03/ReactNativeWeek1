import { Component } from "react";
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

class Contact extends Component {


    static navigationOptions = {
        title: 'Contact Us'
    }

    render() {
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
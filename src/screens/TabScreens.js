import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, Body, Title } from 'native-base';

import Tab1 from './tabs/Tab1';
import Tab2 from './tabs/Tab2';
import Tab3 from './tabs/Tab3';

export default class TabsExample extends Component {
    render() {
        return (
            <Container>

                <Header style={{ backgroundColor: '#009387' }} hasTabs>

                    <Body>
                        <Title style={{ marginLeft: 130, fontSize: 30 }}>News App</Title>
                    </Body>

                </Header>

                <Tabs tabBarUnderlineStyle={{ backgroundColor: 'white' }}>

                    <Tab tabStyle={{ backgroundColor: '#009387' }} activeTabStyle={{ backgroundColor: '#009387' }} textStyle={{ color: 'white' }} activeTextStyle={{ color: 'white' }} heading="General">
                        <Tab1 />
                    </Tab>

                    <Tab tabStyle={{ backgroundColor: '#009387' }} activeTabStyle={{ backgroundColor: '#009387' }} textStyle={{ color: 'white' }} activeTextStyle={{ color: 'white' }} heading="Business">
                        <Tab2 />
                    </Tab>

                    <Tab tabStyle={{ backgroundColor: '#009387' }} activeTabStyle={{ backgroundColor: '#009387' }} textStyle={{ color: 'white' }} activeTextStyle={{ color: 'white' }} heading="Technology">
                        <Tab3 />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}
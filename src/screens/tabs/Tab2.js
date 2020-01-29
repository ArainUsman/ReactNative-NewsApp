import React, { Component } from 'react';
import { Alert, View, ActivityIndicator } from 'react-native';
import { Container, Content, List, Text } from 'native-base';

import DataItem from '../../components/dataItem';
import Modal from '../../components/modal';
import { getArticles } from '../../services/news';


export default class Tab2 extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            data: null,
            setModalVisible: false,
            modalArticleData: {}
        }
    }

    handleItemDataOnPress = (articleData) => {
        this.setState({
            setModalVisible: true,
            modalArticleData: articleData
        });
    }

    handleModalClose = () => {
        this.setState({
            setModalVisible: false,
            modalArticleData: {}
        })
    }

    componentDidMount() {
        getArticles('business').then(data => {
            this.setState({
                isLoading: false,
                data: data
            });
        }, error => {
            Alert.alert('Connection Error', 'Someyhing went wrong Plz make sure your Net is Connect..')
        }
        )
    }

    render() {
        console.log(this.state.data);

        let view = this.state.isLoading ? (
            <View style={{ flex: 1, alignItems: 'center', marginTop: 10 }}>
                <ActivityIndicator animating={this.state.isLoading} />
                <Text style={{ marginTop: 10 }} children="Please Wait.." />
            </View>
        ) : (
                <List
                    dataArray={this.state.data}
                    renderRow={(item) => {
                        return <DataItem onPress={this.handleItemDataOnPress} data={item} />
                    }}
                />
            )

        return (
            <Container>

                <Content>
                    {view}
                </Content>
                <Modal
                    showModal={this.state.setModalVisible}
                    articleData={this.state.modalArticleData}
                    onClose={this.handleModalClose}
                />
            </Container>
        );
    }
}
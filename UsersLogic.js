import React from 'react';
import {} from 'react-native';


export default class UsersLogic extends React.Component {
    callBack(responseJson)
    {

    }
    login(username,password){
        return fetch('https://amaet.top/mock/my',
        		        {
                              method: 'GET',
                              headers: {
        						'Accept': 'application/json',
                                'Content-Type': 'application/json'
                              }
                        })
                       .then((response) => response.json())
                       .then((responseJson) => {this.callBack(responseJson);})
                       .catch((error) => {
                            console.error(error);
                       });

    }
    getValidateCode(phoneNumber){
        return fetch('https://amaet.top/mock/my',
        					{
                              method: 'POST',
                              headers: {
        						'Accept': 'application/json',
                                'Content-Type': 'application/json'
                              },
                                body: JSON.stringify({
        							username: username,
                                    password: password,
                                })
                             })
                       .then((response) => response.json())
                       .then((responseJson) => {
                            if(responseJson.success=='1'){
                                return 'success';
                            }
                            else{
                                return 'error';
                            }
                            })
                       .catch((error) => {
                            console.error(error);
                            return 'error';
                       });
    }
    postValidateCode(phoneNumber,code){
        return fetch('https://amaet.top/mock/my',
					{
                      method: 'POST',
                      headers: {
						'Accept': 'application/json',
                        'Content-Type': 'application/json'
                      },
                        body: JSON.stringify({
							username: username,
                            password: password,
                        })
                     })
               .then((response) => response.json())
               .then((responseJson) => {
                    if(responseJson.success=='1'){
                        return 'success';
                    }
                    else{
                        return 'error';
                    }
                    })
               .catch((error) => {
                    console.error(error);
                    return 'error';
               });
    }
    render() {

    }
}
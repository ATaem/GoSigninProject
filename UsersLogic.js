import React from 'react';
import {} from 'react-native';
import NetUtils from './NetUtils'


export default class UsersLogic extends React.Component {
    callBack(responseJson)
    {

    }
    test(param1,param2){
        url = 'https://amaet.top/mock/my';
        params = {'name':param1,'pass':param2};
        NetUtils.get(url,'',this.callBack);

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
import React from 'react'
import ReactDOM from "react-dom";

const rootEl= document.querySelector('#root')
const fetchOptions = {
    headers:{
        Authorization: "Basic &{btoa('admin:district')}"
    }
};
//list of users

function load(){
    return $.ajax({
        url: App.baseUrl + '/api/dataElements.json'
    }).done(function(data){
        const $dataElements = $('#dataElements');

        $.each(data.dataElements, function(idx, item){
            const text = item.name + '(' + item.id + ')';
            $('<li/>').text(text).appendTo($dataElements);
        })
    });
}
fetch("https://play.dhis2.org/api/users.json?fields=:all",fetchOptions)
    .then((result) => result.json())
    .then((jsonData) =>{
        ReactDOM.render(
            <UserList users={jsonData}/>,rootEl);
    }).catch ((error) =>{console.warn('Error:',error);});




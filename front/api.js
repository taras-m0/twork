/**
 * Created by ttt on 29.10.2017.
 */
import 'whatwg-fetch/fetch';
import 'formdata-polyfill/FormData';

const ROOT_URI = '/api/';
class api {
    add(comment){

        const formData = new FormData();
        Object.keys( comment ).map((paramName) => {
            formData.append(paramName, comment[paramName]);
        });

        return fetch(ROOT_URI + 'add', {
            method: 'POST',
            credentials: 'same-origin',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( comment )
        }).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response
            } else {
                const error = new Error(response.statusText)
                error.response = response
                throw error
            }
        }).then(function (response) {
            return response.json();
        });
    }
}

export default new api();
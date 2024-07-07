"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log("iem redy");
// Task - 1.
// const fetch : Promise<Response> = require('node-fetch');
const url = "https://api.ipify.org/?format=json:80";
// Task -2.
// Запрацювало після додавання в tsconfg слідуючих рядків
/* Modules */
//   "module": "NodeNext",                                /* Specify what module code is generated. */
//   "moduleResolution": "NodeNext",   
function getMyIP() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch("https://api.ipify.org?format=json");
            console.log(response);
            if (response.ok) {
                const data = yield response.json();
                console.log("My IP address is:", data);
            }
            else {
                console.log("HTTP error:", response.status);
            }
        }
        catch (error) {
            console.error("Error fetching IP:");
        }
    });
}
getMyIP();
// // Результат виконання:
// iem redy
// Response {
//   [Symbol(realm)]: null,
//   [Symbol(state)]: {
//     aborted: false,
//     rangeRequested: false,
//     timingAllowPassed: true,
//     requestIncludesCredentials: true,
//     type: 'default',
//     status: 200,
//     timingInfo: {
//       startTime: 189.42839992046356,
//       redirectStartTime: 0,
//       redirectEndTime: 0,
//       postRedirectStartTime: 189.42839992046356,
//       finalServiceWorkerStartTime: 0,
//       finalNetworkResponseStartTime: 0,
//       finalNetworkRequestStartTime: 0,
//       endTime: 0,
//       encodedBodySize: 22,
//       decodedBodySize: 22,
//       finalConnectionTimingInfo: null
//     },
//     cacheState: '',
//     statusText: 'OK',
//     headersList: HeadersList {
//       cookies: null,
//       [Symbol(headers map)]: [Map],
//       [Symbol(headers map sorted)]: null
//     },
//     urlList: [ [URL] ],
//     body: { stream: undefined }
//   },
//   [Symbol(headers)]: HeadersList {
//     cookies: null,
//     [Symbol(headers map)]: Map(8) {
//       'date' => [Object],
//       'content-type' => [Object],
//       'content-length' => [Object],
//       'connection' => [Object],
//       'vary' => [Object],
//       'cf-cache-status' => [Object],
//       'server' => [Object],
//       'cf-ray' => [Object]
//     },
//     [Symbol(headers map sorted)]: null
//   }
// }
// My IP address is: { ip: '89.209.85.119' }
// Task -3.
let userNameUrl = "https://random-data-api.com/api/name/random_name";
// async function userName() {  
//     try {
//         const response = await fetch(userNameUrl);
//         console.log(response);
//         if (response.ok) {
//             const data = await response.json();
//             console.log("My IP address is:", data);
//             return data;
//         } else {
//             console.log("HTTP error:", response.status);
//         }
//     } catch (error) {
//         console.error("Error fetching IP:");
//     }
// }
function userName(url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(url);
            console.log(response);
            if (response.ok) {
                const data = yield response.json();
                console.log("My IP address is:", data);
                return data;
            }
        }
        catch (error) {
            console.error("Error fetching IP:");
            return error;
        }
    });
}
//   const fetch = require('node-fetch'); // Якщо виконуєте на сервері, може знадобитися node-fetch для взаємодії з API
function getThreeRandomNames() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = 'https://random-data-api.com/api/name/random_name';
        try {
            // Виконуємо паралельні запити за допомогою Promise.all
            const requests = Array.from({ length: 3 }, () => fetch(apiUrl));
            const responses = yield Promise.all(requests);
            // Парсимо JSON тіла відповідей
            const dataPromises = responses.map(response => response.json());
            const dataArray = yield Promise.all(dataPromises);
            // Отримуємо три імені з результатів
            const names = dataArray.map(data => data.first_name);
            return names;
        }
        catch (error) {
            console.error('Error fetching random names:', error);
            throw error;
        }
    });
}
// Приклад використання:
getThreeRandomNames()
    .then(names => console.log('Random names:', names))
    .catch(error => console.error('Error in example:', error));

import { clients, newClient } from "./src/apiFaker.js";

// =================================== 1 ===================================
// 1. Desenvolva, utilizando filter , uma função que, dado um caractere 
// de entrada, retorne todos os registros de clientes cujo o nome inicia com
// o caractere dado.
export function findNameByFirstLetter(char) {
  const filteredNames = clients.filter(client => {
    return client.name.charAt(0) === char.toUpperCase();
  })
  filteredNames.length === 0 && console.log("Array vazio") 
  return filteredNames;
}
// Enter with some letter to find a client name
// ==================== function call ====================
// console.log(findNameByFirstLetter('m'))


// =================================== 2 ===================================
// 2. Liste os nomes dos clientes no padrão: "Cliente: NOME_DO_CLIENTE"
export function listByClientName() {
  const datas = clients.map(client => {
    const newDefaultNames = client.name.toUpperCase().split(' ').join('_');
    return "Cliente: " + newDefaultNames;
  })
  return datas;
}
// ==================== function call ====================
// console.log(listByClientName())


// =================================== 3 ===================================
// 3. Liste os nomes dos clientes no padrão: "Cliente INDEX: NOME_DO_CLIENTE".
export function listByClientIndexName() {
  const datas = clients.map((client, index) => {
    const newDefaultNames = client.name.toUpperCase().split(' ').join('_');
    return "Cliente " + index + ": " + newDefaultNames;
  })
  return datas;
}
// ==================== function call ====================
// console.log(listByClientIndexName())


// =================================== 4 ===================================
// 4. Desenvolva uma função que, dado o caractere de entrada, retorna apenas um 
// número com o total de registros encontrados que iniciam com o caractere dado.
export function findAmountForAChar(char) {
  var count = 0;
  clients.forEach(client => {
    if(client.name.charAt(0) === char.toUpperCase()) {
      count++;
    }
    // if(client.genre.charAt(0) === char.toUpperCase()) {
    //   count++;
    // }
  })
  return count;
}
// Can be Name or Gender
// console.log("Total de registros encontrados: ", findAmountForAChar('M'))


// =================================== 5 ===================================
// 5. Desenvolva uma função que retorne apenas os nomes dos clientes.
export function clientNames() {
  const names = clients.map(client => {
    return client.name;
  })
  return names;
}
// ==================== function call ====================
// console.log(clientNames())


// =================================== 6 ===================================
// 6. Desenvolva uma função que retorne apenas o primeiro nome dos clientes.
export function firstName(array) {
  const firstNames = array.map(client => {
    // Get the first name
    var splited = client.name.split(' ', 1).join();
    // If firts name is a prefix, does again to get the first name correct
    if(splited.slice(-1) === '.') {
      const changedSplit = client.name.split(' ', 2);
      splited = changedSplit.slice(-1).join()
    }
    return splited;
  })
  return firstNames;
}
// ==================== function call ====================
// console.log(firstName(clients))


// =================================== 7 ===================================
// 7. Desenvolva uma função que retorne apenas o primeiro nome dos clientes 
// cujo os nomes começam com o caractere de entrada da função.
export function findFirstNameByFirstLetter(char) {
  const filteredNames = clients.filter(client => {
    return client.name.charAt(0) === char.toUpperCase();
  });

  // It can be like this
  const firstNames = filteredNames.map(filteredName => {
    // Get the first name
    var splited = filteredName.name.split(' ', 1).join();
    // If firts name is a prefix, does again to get the first name correct
    if(splited.slice(-1) === '.') {
      const changedSplit = filteredName.name.split(' ', 2);
      splited = changedSplit.slice(-1).join()
    }
    return splited;
  })
  return firstNames;

  // Or like this
  // return firstName(filteredNames);
}
// ==================== function call ====================
// Enter with some letter to find a client name
// console.log(findFirstNameByFirstLetter('M'))


// =================================== 8 ===================================
// 8. Desenvolva uma função que retorne todos os usuários que são maiores de idade.
export function findOverEighteen() {
  var today = new Date();
  const birthDate = clients.filter(client => {
    var age = today.getFullYear() - client.birthday.getFullYear();
    var month = today.getMonth() - client.birthday.getMonth();
    if(month < 0 || (month === 0 && today.getDate() < client.birthday.getDate())) {
      age--;
    }
    if(age >= 18) {
      return age;
    }
  })  
  return birthDate;
}
// ==================== function call ====================
// console.log(findOverEighteen())


// =================================== 9 ===================================
// 9. Desenvolva uma função que, dado um nome de entrada, retorna se o nome está 
// contido na lista.
export function searchName(string) {
  // Boolean response
  var isOnList = false;
  clients.forEach(client => {
    if(client.name.includes(string)) {
      isOnList = true;
    }
  })
  return isOnList;
  // Responds the client name finded
  // const datas = []
  // clients.forEach(client => {
  //   if(client.name.includes(string)) {
  //     datas.push(client.name) 
  //   }
  // })
  // return datas;
}
// ==================== function call ====================
// console.log(searchName('Maria'))


// =================================== 10 ===================================
// 10. Implemente uma função que retorna o total de vendas realizadas somando o 
// total de compras de todos os clientes.
export function salesAmount() {
  const count = clients.reduce((acc, client) => {
    return acc + Number(client.countPurchase)
  }, 0)
  return count;
}
// ==================== function call ====================
// console.log(salesAmount())


// =================================== 11 ===================================
// 11. Implemente uma função que retorne os dados dos clientes que não compram
// há mais de 1 ano.
export function noPurchaseForOneYear() {
  var today = new Date();
  const datas = clients.filter(client => {
    var years = today.getFullYear() - client.lastPurchaseDate.getFullYear();
    var month = today.getMonth() - client.lastPurchaseDate.getMonth();
    if(month < 0 || (month === 0 && today.getDate() < client.lastPurchaseDate.getDate())) {
      years--;
    }
    if(years >= 1) {
      return client;
    }
  })
  return datas;
}
// ==================== function call ====================
// console.log(noPurchaseForOneYear())


// =================================== 12 ===================================
// 12. Implemente uma função que retorne os dados dos clientes que já realizaram 
// mais de 15 compras.
export function moreThenFifteenClientPurchase() {  
  const datas = clients.filter(client => {
    if(client.countPurchase > 15) {
      return client;
    }
  })
  return datas;
}
// ==================== function call ====================
// console.log(moreThenFifteenClientPurchase())


// =================================== 13 ===================================
// 13. Crie uma função que receba um cliente e adicione no INÍCIO do array de clientes.
export function addNewClientAtStart(newClient) {
  console.log("New Client: ", newClient);
  clients.unshift(newClient);
}
// ==================== function call ====================
// addNewClientAtStart(newClient)
// console.log(clients)

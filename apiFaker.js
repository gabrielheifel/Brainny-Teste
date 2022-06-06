import { faker } from '@faker-js/faker';

faker.locale = 'pt_BR';

export const clients = [];

function getDatas() {
  const genre = faker.name.gender(true);
  const genreEnglish = (genre === 'Masculino' ? 'male' : 'female');
  const name = faker.name.findName(undefined, undefined, genreEnglish);
  const birthday = faker.date.birthdate({min: 1910, max: 2006, mode:'year'});
  const lastPurchaseDate = faker.date.past(2);
  const countPurchase = faker.finance.amount(1, 30, 0);
  
  const client = {
    name, 
    birthday, 
    genre, 
    lastPurchaseDate, 
    countPurchase
  };

  return client;
}

// Create all Datas
for (let i = 0; i < 100; i++) {
  clients.push(getDatas());
}

// Create new client
export const newClient = getDatas();
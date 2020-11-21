import { createServer } from 'miragejs';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/persons', () => [
      {
        name: 'Lucas',
        dateOfBirth: '30/06/1997',
        cpf: '0000',
        cep: '919281982',
        publicPlace: 'Algum lugar',
        neighborhood: 'Outro lugar',
        number: 345,
        city: 'Alguma cidade',
        state: 'SP',
      },
    ]);
  },
});

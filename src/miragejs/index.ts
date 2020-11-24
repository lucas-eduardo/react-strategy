import { createServer, Model, Factory } from 'miragejs';
import { name, address, date, random } from 'faker';
import { v4 } from 'uuid';

createServer({
  models: {
    user: Model,
  },

  factories: {
    user: Factory.extend({
      id() {
        return v4();
      },
      name() {
        return name.firstName();
      },
      lastName() {
        return name.lastName();
      },
      cpf() {
        return '951.671.240-18';
      },
      cep() {
        return address.zipCode();
      },
      city() {
        return address.city();
      },
      neighborhood() {
        return address.streetName();
      },
      publicPlace() {
        return address.streetName();
      },
      state() {
        return address.state();
      },
      dateOfBirth() {
        return date.soon().getTime();
      },
      number() {
        return random.number(150);
      },
    }),
  },

  seeds(server) {
    server.createList('user', 2);
  },

  routes() {
    this.namespace = 'api';

    this.get('/persons', schema => schema.db.users);

    this.post('/persons', (schema, request) => {
      const attrs = JSON.parse(request.requestBody);

      schema.create('user', attrs);
      return attrs;
    });

    this.passthrough('https://viacep.com.br/ws/**');
  },
});

import { createServer } from 'miragejs';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/persons', () => []);

    this.post('/persons', (_: void, request: any) => {
      const attrs = JSON.parse(request.requestBody);

      return attrs;
    });

    this.passthrough('https://viacep.com.br/ws/**');
  },
});

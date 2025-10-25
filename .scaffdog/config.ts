export default {
  files: ['*'],
  helpers: [
    {
      today: () => new Date().toISOString().split('T')[0],
    },
  ],
};


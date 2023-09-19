export default () => ({
  'drag-drop-content-types': {
    enabled: true
  },

  graphql: {
    config: {
      endpoint: '/api/graphql',
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },
})
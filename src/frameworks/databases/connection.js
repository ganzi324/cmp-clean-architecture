export default (connectionManager) => {
  return {
    connect: connectionManager.connect,
  };
};
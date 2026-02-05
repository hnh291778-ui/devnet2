const { Connection, clusterApiUrl } = require('@solana/web3.js');

async function testConnection() {
  const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
  const version = await connection.getVersion();
  console.log('Devnet version:', version);
}

testConnection();

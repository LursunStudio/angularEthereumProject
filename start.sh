mysql.server start
mongod &
geth --dev --ipcpath=~/Library/Ethereum/geth.ipc --rpc --rpcapi "admin,db,eth,debug,miner,net,shh,txpool,personal,web3" &
HTTPSENABLE=false nodemon server
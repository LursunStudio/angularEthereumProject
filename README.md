# run geth
```
geth --dev --ipcpath=~/Library/Ethereum/geth.ipc --rpc --rpcapi "admin,db,eth,debug,miner,net,shh,txpool,personal,web3"

geth attach
```

# clean geth
```
rm -fr ~/Library/Ethereum
rm -fr ~/Library/Application\ Support/Ethereum\ Wallet
sudo rm -fr /private/var/folders/sw/*
```


# generate pem
```
openssl genrsa -out server.key 1024

openssl req -new -key server.key -out certrequest.csr

openssl x509 -req -in certrequest.csr -signkey server.key -out server.crt
```

# level document
https://github.com/Level/levelup

# mongodb document
http://fred-zone.blogspot.tw/2012/01/nodejs-mongodb.html

# redis document
https://github.com/NodeRedis/node_redis


# mongodb install
```
wget http://downloads.mongodb.org/linux/mongodb-linux-x86_64-ubuntu1604-v3.4-latest.tgz mongodb.tgz

tar -xvf mongodb.tgz

cd mongodb/bin
cp * /usr/local/bin/
```


# redis
```
sudo add-apt-repository ppa:chris-lea/redis-server
sudo apt-get update
sudo apt-get install redis-server -y
```
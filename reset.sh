rm -fr ~/Library/Ethereum
rm -fr ~/Library/Application\ Support/Ethereum\ Wallet
echo input user password
sudo rm -fr /private/var/folders/sw/*
echo input mysql password
mysql -u root -p < server/fabric/db/fabricexplorer.sql
echo -e 'use ethereum;\ndb.dropDatabase();\nshow databases;' | mongo
echo -e 'use fabric;\ndb.dropDatabase();\nshow databases;' | mongo
sudo rm -fr ./tmp/fabric-client-kvs_peerOrg1
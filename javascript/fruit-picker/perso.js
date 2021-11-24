// import { checkStatus, checkInventory } from './grocer';

let storeStatus = 'ONLINE';

function checkStatus(callback) {
  return callback(storeStatus);
}

function isServiceOnline() {
  const result = checkStatus((onlineStatus) => onlineStatus);

  return result === 'ONLINE' ? true : false;
}

console.log(isServiceOnline());

const gtcVersion = (visitor) => {

  return visitor.gtc?.version
}


const visitorNew = {
  name: 'Verena Nardi',
  age: 45,
  ticketId: 'H32AZ123',
};

console.log(gtcVersion(visitorNew))
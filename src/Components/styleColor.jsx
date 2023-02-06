const styleColor= (team) => {
  switch (team) {
    case 'Anaheim Ducks': 
      return '#ff6600'  // alt #111111
    case 'Arizona Coyotes':
      return '#98002e'
    case 'Boston Bruins':
      return '#111111'
    case 'Buffalo Sabres':
      return '#002654' 
    case 'Calgary Flames':
      return '#ce1126' 
    case 'Carolina Hurricanes':
      return '#cc0000' 
    case 'Chicago Blackhawks':
      return '#ce1126' 
    case 'Colorado Avalanche': 
      return '#75263d' 
    case 'Columbus Blue Jackets': 
      return '#003366' 
    case 'Dallas Stars':  
      return '#006847' 
    case 'Detroit Red Wings': 
      return '#ce1126' 
    case 'Edmonton Oilers':
      return '#00205b'  // alt #ff4b00
    case 'Florida Panthers': 
      return '#cf102d' 
    case 'Los Angeles Kings':  
      return '#111111' 
    case 'Minnesota Wild':
      return '#af1e2d' //alt #164734
    case 'Montréal Canadiens':
      return '#a71930'  
    case 'Nashville Predators':
      return '#ffb819' // alt #011e41
    case 'New Jersey Devils': 
      return '#cc0100' 
    case 'New York Islanders':
      return '#00468b' 
    case 'New York Rangers':
      return '#0038a8' 
    case 'Ottawa Senators': 
      return '#191919' 
    case 'Philadelphia Flyers':
      return '#f74902' 
    case 'Pittsburgh Penguins':
      return '#000000' 
    case 'St. Louis Blues':
      return '#003087'
    case 'San Jose Sharks': 
      return '#00788a' 
    case 'Seattle Kraken':
      return '#96d8d8'   // alt #001425
    case 'Tampa Bay Lightning':
      return '#00205b' 
    case 'Toronto Maple Leafs':
      return '#002868' 
    case 'Vancouver Canucks': 
      return '#003d7d' 
    case 'Vegas Golden Knights':
      return '#111111'  // alt #85714d
    case 'Washington Capitals':
      return '#041e42' 
    case 'Winnipeg Jets':
      return '#002654' 
    case 'pp':
      return 'red'
    default:
      return '#000'
  }
}

export default styleColor
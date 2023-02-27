const styleColor = (team) => {
  switch (team) {
// Anaheim Ducks
    case 24:
      return '#ff6600'
// Arizona Coyotes
    case 53:
      return '#98002E'
// Boston Bruins
    case 6: 
      return '#111111'
// Buffalo Sabres
    case 7: 
      return '#002654'
// Calgary Flames
    case 20:
      return '#CE1126' 
// Carolina Hurricanes
    case 12:
      return '#CC0000'
// Chicago Blackhawks
    case 16:
      return '#CE1126'
// Colorado Avalanche
    case 21:
      return '#75263D'
// Columbus Blue Jackets
    case 29:
      return '#003366'
// Dallas Stars
    case 25:
      return '#006847'
// Detroit Red Wings
    case 17:
      return '#CE1126'
// Edmonton Oilers
    case 22:
      return '#00205B'  // alt #ff4b00
// Florida Panthers
    case 13:
      return '#CF102D'
// Los Angeles Kings
    case 26:
      return '#111111'
// Minnesota Wild
    case 30:
      return '#AF1E2D'
// Montréal Canadiens
    case 8: 
      return '#A71930'
// Nashville Predators
    case 18:
      return '#FFB819'
// New Jersey Devils
    case 1: 
      return '#cc0000' 
// New York Islanders
    case 2: 
      return '#00468B'
// New York Rangers
    case 3: 
      return '#0038A8'
// Ottawa Senators
    case 9: 
      return '#191919'
// Philadelphia Flyers
    case 4: 
      return '#F74902'
// Pittsburgh Penguins
    case 5: 
      return '#000000'
// St. Louis Blues
    case 19:
      return '#003087'
// San Jose Sharks
    case 28:
      return '#00788A'
// Seattle Kraken
    case 55:
      return '#001425'   // alt  #96d8d8    
// Tampa Bay Lightning
    case 14:
      return '#00205B'
// Toronto Maple Leafs
    case 10:
      return '#002868'
// Vancouver Canucks
    case 23:
      return '#003D7D'
// Vegas Golden Knights
    case 54:
      return '#111111'
// Washington Capitals
    case 15:
      return '#041E42'
// Winnipeg Jets
    case 52:
      return '#002654' 
    case 'pp':
      return 'red'
    default:
      return 'pink'
  }
}

export default styleColor
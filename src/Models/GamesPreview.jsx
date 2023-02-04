// Game 2022020804 --  2023-01-31 WSH @ CBJ

export const GamesDataPreview = {
  "copyright": "NHL and the NHL Shield are registered trademarks of the National Hockey League. NHL and NHL team marks are the property of the NHL and its teams. © NHL 2023. All Rights Reserved.",
  "gamePk": 2022020804,
  "link": "/api/v1/game/2022020804/feed/live",
  "metaData": {
      "wait": 10,
      "timeStamp": "20230130_182603"
  },
  "gameData": {
      "game": {
          "pk": 2022020804,
          "season": "20222023",
          "type": "R"
      },
      "datetime": {
          "dateTime": "2023-02-01T00:00:00Z"
      },
      "status": {
          "abstractGameState": "Preview",
          "codedGameState": "1",
          "detailedState": "Scheduled",
          "statusCode": "1",
          "startTimeTBD": false
      },
      "teams": {
          "away": {
              "id": 15,
              "name": "Washington Capitals",
              "link": "/api/v1/teams/15",
              "venue": {
                  "id": 5094,
                  "name": "Capital One Arena",
                  "link": "/api/v1/venues/5094",
                  "city": "Washington",
                  "timeZone": {
                      "id": "America/New_York",
                      "offset": -5,
                      "tz": "EST"
                  }
              },
              "abbreviation": "WSH",
              "triCode": "WSH",
              "teamName": "Capitals",
              "locationName": "Washington",
              "firstYearOfPlay": "1974",
              "division": {
                  "id": 18,
                  "name": "Metropolitan",
                  "nameShort": "Metro",
                  "link": "/api/v1/divisions/18",
                  "abbreviation": "M"
              },
              "conference": {
                  "id": 6,
                  "name": "Eastern",
                  "link": "/api/v1/conferences/6"
              },
              "franchise": {
                  "franchiseId": 24,
                  "teamName": "Capitals",
                  "link": "/api/v1/franchises/24"
              },
              "shortName": "Washington",
              "officialSiteUrl": "http://www.washingtoncapitals.com/",
              "franchiseId": 24,
              "active": true
          },
          "home": {
              "id": 29,
              "name": "Columbus Blue Jackets",
              "link": "/api/v1/teams/29",
              "venue": {
                  "id": 5059,
                  "name": "Nationwide Arena",
                  "link": "/api/v1/venues/5059",
                  "city": "Columbus",
                  "timeZone": {
                      "id": "America/New_York",
                      "offset": -5,
                      "tz": "EST"
                  }
              },
              "abbreviation": "CBJ",
              "triCode": "CBJ",
              "teamName": "Blue Jackets",
              "locationName": "Columbus",
              "firstYearOfPlay": "2000",
              "division": {
                  "id": 18,
                  "name": "Metropolitan",
                  "nameShort": "Metro",
                  "link": "/api/v1/divisions/18",
                  "abbreviation": "M"
              },
              "conference": {
                  "id": 6,
                  "name": "Eastern",
                  "link": "/api/v1/conferences/6"
              },
              "franchise": {
                  "franchiseId": 36,
                  "teamName": "Blue Jackets",
                  "link": "/api/v1/franchises/36"
              },
              "shortName": "Columbus",
              "officialSiteUrl": "http://www.bluejackets.com/",
              "franchiseId": 36,
              "active": true
          }
      },
      "players": {},
      "venue": {
          "id": 5059,
          "name": "Nationwide Arena",
          "link": "/api/v1/venues/5059"
      }
  },
  "liveData": {
      "plays": {
          "allPlays": [],
          "scoringPlays": [],
          "penaltyPlays": [],
          "playsByPeriod": []
      },
      "linescore": {
          "currentPeriod": 0,
          "periods": [],
          "shootoutInfo": {
              "away": {
                  "scores": 0,
                  "attempts": 0
              },
              "home": {
                  "scores": 0,
                  "attempts": 0
              }
          },
          "teams": {
              "home": {
                  "team": {
                      "id": 29,
                      "name": "Columbus Blue Jackets",
                      "link": "/api/v1/teams/29",
                      "abbreviation": "CBJ",
                      "triCode": "CBJ"
                  },
                  "goals": 0,
                  "shotsOnGoal": 0,
                  "goaliePulled": false,
                  "numSkaters": -1,
                  "powerPlay": false
              },
              "away": {
                  "team": {
                      "id": 15,
                      "name": "Washington Capitals",
                      "link": "/api/v1/teams/15",
                      "abbreviation": "WSH",
                      "triCode": "WSH"
                  },
                  "goals": 0,
                  "shotsOnGoal": 0,
                  "goaliePulled": false,
                  "numSkaters": -1,
                  "powerPlay": false
              }
          },
          "powerPlayStrength": "Even",
          "hasShootout": false,
          "intermissionInfo": {
              "intermissionTimeRemaining": 0,
              "intermissionTimeElapsed": 0,
              "inIntermission": false
          }
      },
      "boxscore": {
          "teams": {
              "away": {
                  "team": {
                      "id": 15,
                      "name": "Washington Capitals",
                      "link": "/api/v1/teams/15",
                      "abbreviation": "WSH",
                      "triCode": "WSH"
                  },
                  "teamStats": {
                      "teamSkaterStats": {
                          "goals": 0,
                          "pim": 0,
                          "shots": 0,
                          "powerPlayPercentage": "0.0",
                          "powerPlayGoals": 0.0,
                          "powerPlayOpportunities": 0.0,
                          "faceOffWinPercentage": "0.0",
                          "blocked": 0,
                          "takeaways": 0,
                          "giveaways": 0,
                          "hits": 0
                      }
                  },
                  "players": {},
                  "goalies": [],
                  "skaters": [],
                  "onIce": [],
                  "onIcePlus": [],
                  "scratches": [],
                  "penaltyBox": [],
                  "coaches": [
                      {
                          "person": {
                              "fullName": "Peter Laviolette",
                              "link": "/api/v1/people/null"
                          },
                          "position": {
                              "code": "HC",
                              "name": "Head Coach",
                              "type": "Head Coach",
                              "abbreviation": "Head Coach"
                          }
                      }
                  ]
              },
              "home": {
                  "team": {
                      "id": 29,
                      "name": "Columbus Blue Jackets",
                      "link": "/api/v1/teams/29",
                      "abbreviation": "CBJ",
                      "triCode": "CBJ"
                  },
                  "teamStats": {
                      "teamSkaterStats": {
                          "goals": 0,
                          "pim": 0,
                          "shots": 0,
                          "powerPlayPercentage": "0.0",
                          "powerPlayGoals": 0.0,
                          "powerPlayOpportunities": 0.0,
                          "faceOffWinPercentage": "0.0",
                          "blocked": 0,
                          "takeaways": 0,
                          "giveaways": 0,
                          "hits": 0
                      }
                  },
                  "players": {},
                  "goalies": [],
                  "skaters": [],
                  "onIce": [],
                  "onIcePlus": [],
                  "scratches": [],
                  "penaltyBox": [],
                  "coaches": [
                      {
                          "person": {
                              "fullName": "Brad Larsen",
                              "link": "/api/v1/people/null"
                          },
                          "position": {
                              "code": "HC",
                              "name": "Head Coach",
                              "type": "Head Coach",
                              "abbreviation": "Head Coach"
                          }
                      }
                  ]
              }
          },
          "officials": []
      },
      "decisions": {}
  }
}
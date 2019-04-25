const arrMillon = [{
    "Rank": 1,
    "Name": "Jeff Bezos",
    "Money": 131,
    "Age": 55,
    "Empresa": "Amazon",
    "Country": "United States"
  },
  {
    "Rank": 2,
    "Name": "Bill Gates",
    "Money": 96.5,
    "Age": 63,
    "Empresa": "Microsoft",
    "Country": "United States"
  },
  {
    "Rank": 3,
    "Name": "Warren Buffett",
    "Money": 82.5,
    "Age": 88,
    "Empresa": "Berkshire Hathaway",
    "Country": "United States"
  },
  {
    "Rank": 4,
    "Name": "Bernard Arnault",
    "Money": 76,
    "Age": 70,
    "Empresa": "LVMH",
    "Country": "France"
  },
  {
    "Rank": 5,
    "Name": "Carlos Slim Helu",
    "Money": 64,
    "Age": 79,
    "Empresa": "telecom",
    "Country": "Mexico"
  },
]
for (var i = 0; i < arrMillon.length; i++) {
  let llaves = Object.keys(arrMillon[i])

  for (var j = 0; j < llaves.length; j++) {
    console.log(arrMillon[i][llaves[j]]);
  }
}

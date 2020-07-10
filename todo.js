// import metropoles from 'metropoles'
// import * as data from './metropole.json';


// fetch('metropole.json')
//   .then(resp => resp.json())
//   .then((packageJson) => {
    // console.log(packageJson);

  // });

// 

// console.log(metropoles)


/////Page change get 

let urlPrm = new Object;
let urlSearch = location.search.substring(1).split('&');
for (i = 0; urlSearch[i]; i++) {
  let kv = urlSearch[i].split('=');
  urlPrm[kv[0]] = kv[1];
}

// console.log(urlPrm.year);
// console.log(urlPrm.week);
let weekOfyear
let thisYear
if (urlPrm.year != undefined) {
  weekOfyear = urlPrm.week
  thisYear = urlPrm.year

} else {
  let m = moment();
  weekOfyear = m.week();
  thisYear = m.year()
}

// console.log(weekOfyear + " " + thisYear)


// {"2025-01-01": "1er janvier", "2025-04-21": "Lundi de Pâques", "2025-05-01": "1er mai", "2025-05-08": "8 mai", "2025-05-29": "Ascension", "2025-06-09": "Lundi de Pentecôte", "2025-07-14": "14 juillet", "2025-08-15": "Assomption", "2025-11-01": "Toussaint", "2025-11-11": "11 novembre", "2025-12-25": "Jour de Noël", "2024-01-01": "1er janvier", "2024-04-01": "Lundi de Pâques", "2024-05-01": "1er mai", "2024-05-08": "8 mai", "2024-05-09": "Ascension", "2024-05-20": "Lundi de Pentecôte", "2024-07-14": "14 juillet", "2024-08-15": "Assomption", "2024-11-01": "Toussaint", "2024-11-11": "11 novembre", "2024-12-25": "Jour de Noël", "2023-01-01": "1er janvier", "2023-04-10": "Lundi de Pâques", "2023-05-01": "1er mai", "2023-05-08": "8 mai", "2023-05-18": "Ascension", "2023-05-29": "Lundi de Pentecôte", "2023-07-14": "14 juillet", "2023-08-15": "Assomption", "2023-11-01": "Toussaint", "2023-11-11": "11 novembre", "2023-12-25": "Jour de Noël", "2022-01-01": "1er janvier", "2022-04-18": "Lundi de Pâques", "2022-05-01": "1er mai", "2022-05-08": "8 mai", "2022-05-26": "Ascension", "2022-06-06": "Lundi de Pentecôte", "2022-07-14": "14 juillet", "2022-08-15": "Assomption", "2022-11-01": "Toussaint", "2022-11-11": "11 novembre", "2022-12-25": "Jour de Noël", "2021-01-01": "1er janvier", "2021-04-05": "Lundi de Pâques", "2021-05-01": "1er mai", "2021-05-08": "8 mai", "2021-05-13": "Ascension", "2021-05-24": "Lundi de Pentecôte", "2021-07-14": "14 juillet", "2021-08-15": "Assomption", "2021-11-01": "Toussaint", "2021-11-11": "11 novembre", "2021-12-25": "Jour de Noël", "2020-01-01": "1er janvier", "2020-04-13": "Lundi de Pâques", "2020-05-01": "1er mai", "2020-05-08": "8 mai", "2020-05-21": "Ascension", "2020-06-01": "Lundi de Pentecôte", "2020-07-14": "14 juillet", "2020-08-15": "Assomption", "2020-11-01": "Toussaint", "2020-11-11": "11 novembre", "2020-12-25": "Jour de Noël", "2019-01-01": "1er janvier", "2019-04-22": "Lundi de Pâques", "2019-05-01": "1er mai", "2019-05-08": "8 mai", "2019-05-30": "Ascension", "2019-06-10": "Lundi de Pentecôte", "2019-07-14": "14 juillet", "2019-08-15": "Assomption", "2019-11-01": "Toussaint", "2019-11-11": "11 novembre", "2019-12-25": "Jour de Noël"}
// console.log(holyday["2025-01-01"])

/////////set iniit data



// const youbi = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanch']
const youbi = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim']
const mois = ['Jenvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'juillet', 'Aôut', 'Septembre', 'Octobre', 'Novenbre', 'Decenbre']
let arrDays = getFirstDayOfWeek(thisYear, weekOfyear)


//Title H1 
titleTop = document.querySelector('h1')
titleTop.textContent = "Semaine" + weekOfyear + " " + thisYear


fetch("metropole.json").then(function (data) {
  return data.json()
})
.then(function (holyday) {
    console.log(holyday)

//Todo List 
const app1 = new Controller(new Model(), new View("0",holyday))
const app2 = new Controller(new Model(), new View("1",holyday))
const app3 = new Controller(new Model(), new View("2",holyday))
const app4 = new Controller(new Model(), new View("3",holyday))
const app5 = new Controller(new Model(), new View("4",holyday))
const app6 = new Controller(new Model(), new View("5",holyday))
const app7 = new Controller(new Model(), new View("6",holyday))

})

////////////Page set

let data = getPageChgData(thisYear, weekOfyear)
const buttonNext = document.querySelector('#next')
const buttonPrev = document.querySelector('#prev')

buttonNext.addEventListener('click', event => {
  // console.log('next')
  window.location.href = "index.html?year=" + data.nextYear + "&week=" + data.nextWeek;
})

buttonPrev.addEventListener('click', event => {
  // console.log('prev')
  window.location.href = "index.html?year=" + data.prevYear + "&week=" + data.prevWeek;

})


function getPageChgData(year, week) {
  // console.log(year)

  let data = {}
  week = parseInt(week)
  data.nextWeek = week + 1
  data.prevWeek = week - 1
  // console.log(data.nextWeek)
  if (data.nextWeek >= 53) { data.nextWeek = 1 }
  if (data.prevWeek <= 0) { data.prevWeek = 52 }


  year = year + "-01-01"
  let t = moment(year).week(week)

  data.nextYear = t.add(1, 'week').format('YYYY');
  data.prevYear = t.add(-2, 'week').format('YYYY');
  // console.log( data.nextWeek+" "+ data.prevWeek+" "+ data.nextYear+" "+ data.prevYear)

  return data
}
/////////////week date data
function getFirstDayOfWeek(year, week) {
  // console.log(year+" "+week)
  year = year + "-01-01"
  let t = moment(year).week(week)
  //  console.log(t.days(0))
  let days = []
  days[0] = t.days(1).format('YYYY-MM-DD');
  for (let i = 1; i < 9; i++) {
    days[i] = t.add(1, 'days').format('YYYY-MM-DD');
    //  console.log(i+": "+days[i])
  }
  return days
}
// import 'bootstrap.css';
import '@grapecity/wijmo.styles/wijmo.css';
import './App.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { FlexGrid } from '@grapecity/wijmo.react.grid';
// import { Image } from 'react-native';
// import urls from "./urls.json"
// import { getData } from './data.js';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.getData(),
    };
  }

  render() {
    return (
      <div className='container-fluid'>
        <p>
          Pinning/Unpinning individual or multiple columns while changing the
          column order if necessary:
        </p>
        <FlexGrid
          allowPinning='SingleColumn'
          frozenColumns={1}
          itemsSource={this.state.data}
        />

        <p>
          Pinning/Unpinning Multiple column without changing the column order:
        </p>
        <FlexGrid
          allowPinning='ColumnRange'
          frozenColumns={1}
          itemsSource={this.state.data}
        />
      </div>
    );
  }
  getData() {
    function numberFormatter(num) {
      return new Intl.NumberFormat('en').format(num);
    }
    // function imageRender(params) {
    //   // const country = params.data.country;
    //   return <img src={params} />;
    // }

    let data = [];
    // let usStates =
    //   'Alabama,Alaska,Arizona,Arkansas,California,Colorado,Connecticut,Delaware,District of Columbia,Florida,Georgia,Hawaii,Idaho,Illinois,Indiana,Iowa,Kansas,Kentucky,Louisiana,Maine,Maryland,Massachusetts,Michigan,Minnesota,Mississippi,Missouri,Montana,Nebraska,Nevada,New Hampshire,New Jersey,New Mexico,New York,North Carolina,North Dakota,Ohio,Oklahoma,Oregon,Pennsylvania,Rhode Island,South Carolina,South Dakota,Tennessee,Texas,Utah,Vermont,Virginia,Washington,West Virginia,Wisconsin,WyomingUS,Germany,UK,Japan,Italy,Greece'.split(
    //     ','
    //   );
    // let abbr =
    //   'AL,AK,AZ,AR,CA,CO,CT,DE,DC,FL,GA,HI,ID,IL,IN,IA,KS,KY,LA,ME,MD,MA,MI,MN,MS,MO,MT,NE,NV,NH,NJ,NM,NY,NC,ND,OH,OK,OR,PA,RI,SC,SD,TN,TX,UT,VT,VA,WA,WV,WI,WY'.split(
    //     ','
    //   );
    // let pop =
    //   '4921532,731158,7421401,3030522,39368078,5807719,3557006,986809,712816,21733312,10710017,1407006,1826913,12587530,6743953,3163561,2913805,4477251,4645318,1350141,6055802,6893574,9966555,5657342,2966786,6151548,1080577,1937552,3138259,1366275,8882371,2106319,19336776,10600823,765309,11693217,3980783,4241507,12783254,1057125,5218040,892717,6886834,29360759,3249879,623347,8590563,7693612,1784787,5832655,582328'.split(
    //     ','
    //   );
    // let size =
    //   '52420.07,665384.04,113990.3,52178.55,163694.74,104093.67,5543.41,2488.72,68.34,65757.70,59425.15,10931.72,83568.95,57913.55,36419.55,56272.81,82278.36,40407.8,52378.13,35379.74,12405.93,10554.39,96713.51,86935.83,48431.78,69706.99,147039.71,77347.81,110571.82,9349.16,8722.58,121590.3,54554.98,53819.16,70698.32,44825.58,69898.87,98378.54,46054.34,1544.89,32020.49,77115.68,42114.25,268596.46,84896.88,9616.36,42774.93,71297.95,24230.04,65496.38,97813.01'.split(
    //     ','
    //   );
    var sflag = [
      {
        sName: 'Alabama',
        abbr: 'AL',
        pop: '4921532',
        size: '52420.07',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Alabama.svg/45px-Flag_of_Alabama.svg.png',
      },
      {
        sName: 'Alaska',
        sAbbr: 'AK',
        sPop: '731158',
        sSize: '665384.04',

        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Alaska.svg/43px-Flag_of_Alaska.svg.png',
      },
      {
        sName: 'Arizona',
        sAbbr: 'AZ',
        sPop: '7421401',
        sSize: '113990.3',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Arizona.svg/45px-Flag_of_Arizona.svg.png',
      },
      {
        sName: 'Arkansas',
        sAbbr: 'AR',
        sPop: '3030522',
        sSize: '52178.55',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Arkansas.svg/45px-Flag_of_Arkansas.svg.png',
      },
      {
        sName: 'California',
        sAbbr: 'CA',
        sPop: '39368078',
        sSize: '163694.74',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_California.svg/45px-Flag_of_California.svg.png',
      },
      {
        sName: 'Colorado',
        sAbbr: 'CO',
        sPop: '5807719',
        sSize: '104093.67',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Flag_of_Colorado.svg/45px-Flag_of_Colorado.svg.png',
      },
      {
        sName: 'Connecticut',
        sAbbr: 'CT',
        sPop: '3557006',
        sSize: '5543.41',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Flag_of_Connecticut.svg/39px-Flag_of_Connecticut.svg.png',
      },
      {
        sName: 'Delaware',
        sAbbr: 'DE',
        sPop: '986809',
        sSize: '2488.72',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Flag_of_Delaware.svg/45px-Flag_of_Delaware.svg.png',
      },
      {
        sName: 'District of Columbia',
        sAbbr: 'DC',
        sPop: '712816',
        sSize: '68.34',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_the_District_of_Columbia.svg/46px-Flag_of_the_District_of_Columbia.svg.png',
      },
      {
        sName: 'Florida',
        sAbbr: 'FL',
        sPop: '21733312',
        sSize: '65757.70',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Flag_of_Florida.svg/45px-Flag_of_Florida.svg.png',
      },
      {
        sName: 'Georgia',
        sAbbr: 'GA',
        sPop: '10710017',
        sSize: '59425.15',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Flag_of_Georgia_%28U.S._state%29.svg/46px-Flag_of_Georgia_%28U.S._state%29.svg.png',
      },
      {
        sName: 'Hawaii',
        sAbbr: 'HI',
        sPop: '1407006',
        sSize: '10931.72',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Flag_of_Hawaii.svg/46px-Flag_of_Hawaii.svg.png',
      },
      {
        sName: 'Idaho',
        sAbbr: 'ID',
        sPop: '1826913',
        sSize: '83568.95',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_Idaho.svg/38px-Flag_of_Idaho.svg.png',
      },
      {
        sName: 'Illinois',
        sAbbr: 'IL',
        sPop: '12587530',
        sSize: '57913.55',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Illinois.svg/46px-Flag_of_Illinois.svg.png',
      },
      {
        sName: 'Indiana',
        sAbbr: 'IN',
        sPop: '6743953',
        sSize: '36419.55',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Flag_of_Indiana.svg/45px-Flag_of_Indiana.svg.png',
      },
      {
        sName: 'Iowa',
        sAbbr: 'IA',
        sPop: '3163561',
        sSize: '56272.81',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Flag_of_Iowa.svg/45px-Flag_of_Iowa.svg.png',
      },
      {
        sName: 'Kansas',
        sAbbr: 'KS',
        sPop: '2913805',
        sSize: '82278.36',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Flag_of_Kansas.svg/46px-Flag_of_Kansas.svg.png',
      },
      {
        sName: 'Kentucky',
        sAbbr: 'KY',
        sPop: '4477251',
        sSize: '40407.8',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Flag_of_Kentucky.svg/46px-Flag_of_Kentucky.svg.png',
      },
      {
        sName: 'Louisiana',
        sAbbr: 'LA',
        sPop: '4645318',
        sSize: '52378.13',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Flag_of_Louisiana.svg/46px-Flag_of_Louisiana.svg.png',
      },
      {
        sName: 'Maine',
        sAbbr: 'ME',
        sPop: '1350141',
        sSize: '35379.74',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Flag_of_Maine.svg/38px-Flag_of_Maine.svg.png',
      },
      {
        sName: 'Maryland',
        sAbbr: 'MD',
        sPop: '6055802',
        sSize: '12405.93',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Flag_of_Maryland.svg/45px-Flag_of_Maryland.svg.png',
      },
      {
        sName: 'Massachusetts',
        sAbbr: 'MA',
        sPop: '6893574',
        sSize: '10554.39',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Massachusetts.svg/46px-Flag_of_Massachusetts.svg.png',
      },
      {
        sName: 'Michigan',
        sAbbr: 'MI',
        sPop: '9966555',
        sSize: '96713.51',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Flag_of_Michigan.svg/45px-Flag_of_Michigan.svg.png',
      },
      {
        sName: 'Minnesota',
        sAbbr: 'MN',
        sPop: '5657342',
        sSize: '86935.83',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Minnesota.svg/46px-Flag_of_Minnesota.svg.png',
      },
      {
        sName: 'Mississippi',
        sAbbr: 'MS',
        sPop: '2966786',
        sSize: '48431.78',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Flag_of_Mississippi.svg/46px-Flag_of_Mississippi.svg.png',
      },
      {
        sName: 'Missouri',
        sAbbr: 'MO',
        sPop: '6151548',
        sSize: '69706.99',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Flag_of_Missouri.svg/46px-Flag_of_Missouri.svg.png',
      },
      {
        sName: 'Montana',
        sAbbr: 'MT',
        sPop: '1080577',
        sSize: '147039.71',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_Montana.svg/45px-Flag_of_Montana.svg.png',
      },
      {
        sName: 'Nebraska',
        sAbbr: 'NE',
        sPop: '1937552',
        sSize: '77347.81',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Flag_of_Nebraska.svg/46px-Flag_of_Nebraska.svg.png',
      },
      {
        sName: 'Nevada',
        sAbbr: 'NV',
        sPop: '3138259',
        sSize: '110571.82',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Flag_of_Nevada.svg/45px-Flag_of_Nevada.svg.png',
      },
      {
        sName: 'New Hampshire',
        sAbbr: 'NH',
        sPop: '1366275',
        sSize: '9349.16',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Flag_of_New_Hampshire.svg/45px-Flag_of_New_Hampshire.svg.png',
      },
      {
        sName: 'New Jersey',
        sAbbr: 'NJ',
        sPop: '8882371',
        sSize: '8722.58',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_New_Jersey.svg/46px-Flag_of_New_Jersey.svg.png',
      },
      {
        sName: 'New Mexico',
        sAbbr: 'NM',
        sPop: '2106319',
        sSize: '121590.3',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_New_Mexico.svg/45px-Flag_of_New_Mexico.svg.png',
      },
      {
        sName: 'New York',
        sAbbr: 'NY',
        sPop: '19336776',
        sSize: '54554.98',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_New_York.svg/46px-Flag_of_New_York.svg.png',
      },
      {
        sName: 'North Carolina',
        sAbbr: 'NC',
        sPop: '10600823',
        sSize: '53819.16',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Flag_of_North_Carolina.svg/45px-Flag_of_North_Carolina.svg.png',
      },
      {
        sName: 'North Dakota',
        sAbbr: 'ND',
        sPop: '765309',
        sSize: '70698.32',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Flag_of_North_Dakota.svg/41px-Flag_of_North_Dakota.svg.png',
      },
      {
        sName: 'Ohio',
        sAbbr: 'OH',
        sPop: '11693217',
        sSize: '44825.58',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Ohio.svg/50px-Flag_of_Ohio.svg.png',
      },
      {
        sName: 'Oklahoma',
        sAbbr: 'OK',
        sPop: '3980783',
        sSize: '69898.87',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Flag_of_Oklahoma.svg/45px-Flag_of_Oklahoma.svg.png',
      },
      {
        sName: 'Oregon',
        sAbbr: 'OR',
        sPop: '4241507',
        sSize: '98378.54',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Oregon.svg/46px-Flag_of_Oregon.svg.png',
      },
      {
        sName: 'Pennsylvania',
        sAbbr: 'PA',
        sPop: '12783254',
        sSize: '46054.34',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Flag_of_Pennsylvania.svg/45px-Flag_of_Pennsylvania.svg.png',
      },
      {
        sName: 'Rhode Island',
        sAbbr: 'RI',
        sPop: '1057125',
        sSize: '1544.89',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Rhode_Island.svg/39px-Flag_of_Rhode_Island.svg.png',
      },
      {
        sName: 'South Carolina',
        sAbbr: 'SC',
        sPop: '5218040',
        sSize: '32020.49',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Flag_of_South_Carolina.svg/45px-Flag_of_South_Carolina.svg.png',
      },
      {
        sName: 'South Dakota',
        sAbbr: 'SD',
        sPop: '892717',
        sSize: '77115.68',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_South_Dakota.svg/46px-Flag_of_South_Dakota.svg.png',
      },
      {
        sName: 'Tennessee',
        sAbbr: 'TN',
        sPop: '6886834',
        sSize: '42114.25',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Tennessee.svg/46px-Flag_of_Tennessee.svg.png',
      },
      {
        sName: 'Texas',
        sAbbr: 'TX',
        sPop: '29360759',
        sSize: '268596.46',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Flag_of_Texas.svg/45px-Flag_of_Texas.svg.png',
      },
      {
        sName: 'Utah',
        sAbbr: 'UT',
        sPop: '3249879',
        sSize: '84896.88',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Flag_of_Utah.svg/46px-Flag_of_Utah.svg.png',
      },
      {
        sName: 'Vermont',
        sAbbr: 'VT',
        sPop: '623347',
        sSize: '9616.36',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Vermont.svg/46px-Flag_of_Vermont.svg.png',
      },
      {
        sName: 'Virginia',
        sAbbr: 'VA',
        sPop: '8590563',
        sSize: '42774.93',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Flag_of_Washington.svg/46px-Flag_of_Washington.svg.png',
      },
      {
        sName: 'Washington',
        sAbbr: 'WA',
        sPop: '7693612',
        sSize: '71297.95',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Flag_of_Washington.svg/46px-Flag_of_Washington.svg.png',
      },
      {
        sName: 'West Virginia',
        sAbbr: 'WV',
        sPop: '1784787',
        sSize: '24230.04',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Flag_of_West_Virginia.svg/46px-Flag_of_West_Virginia.svg.png',
      },
      {
        sName: 'Wisconsin',
        sAbbr: 'WI',
        sPop: '5832655',
        sSize: '65496.38',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Flag_of_Wisconsin.svg/45px-Flag_of_Wisconsin.svg.png',
      },
      {
        sName: 'Wyoming',
        sAbbr: 'WY',
        sPop: '582328',
        sSize: '97813.01',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Wyoming.svg/43px-Flag_of_Wyoming.svg.png',
      },
    ];
    // for (let i = 1; i < 52; i++) {
    //   data.push({
    //     id: i,
    //     state: usStates[i % usStates.length],
    //     abbreviation: abbr[i % abbr.length],
    //     population: numberFormatter(pop[i % pop.length]),
    //     size: numberFormatter(size[i % size.length]),
    //     // flag: sflag[i].url,
    //   });
    // }
    for (let j = 1; j < sflag.length; j++) {
      var obj = sflag[j];
      data.push({
        id: j,
        state: obj.sName,
        abbreviation: obj.sAbbr,
        population: numberFormatter(obj.sPop),
        size: numberFormatter(obj.sSize),
        flag: obj.url,
        // flag: <img src={obj.url} />,
        // flag: imageRender(obj.url),
        // flag: <Image source={{uri: 'https://4.bp.blogspot.com/-krdeTqQLML8/Wyf2oV7eedI/AAAAAAAABpI/OZ759swV7L8wWtt2pwBXIgp6aPz33r01gCLcBGAs/s400/fist%2Bapp.jpg'}} />,
      });
    }
    // {urls.urls.map((item,i) => (
    //   data.push({
    //     flag: {item.urls.url},
    //   });
    // ))}

    return data;
  }
}

// ReactDOM.render(<App />, document.getElementById('app'));
export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

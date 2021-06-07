export function getData() {
  function numberFormatter(num) {
    return new Intl.NumberFormat('en').format(num);
  }

  let data = [];
  let usStates =
    'Alabama,Alaska,Arizona,Arkansas,California,Colorado,Connecticut,Delaware,District of Columbia,Florida,Georgia,Hawaii,Idaho,Illinois,Indiana,Iowa,Kansas,Kentucky,Louisiana,Maine,Maryland,Massachusetts,Michigan,Minnesota,Mississippi,Missouri,Montana,Nebraska,Nevada,New Hampshire,New Jersey,New Mexico,New York,North Carolina,North Dakota,Ohio,Oklahoma,Oregon,Pennsylvania,Rhode Island,South Carolina,South Dakota,Tennessee,Texas,Utah,Vermont,Virginia,Washington,West Virginia,Wisconsin,WyomingUS,Germany,UK,Japan,Italy,Greece'.split(
      ','
    );
  let abbr =
    'AL,AK,AZ,AR,CA,CO,CT,DE,DC,FL,GA,HI,ID,IL,IN,IA,KS,KY,LA,ME,MD,MA,MI,MN,MS,MO,MT,NE,NV,NH,NJ,NM,NY,NC,ND,OH,OK,OR,PA,RI,SC,SD,TN,TX,UT,VT,VA,WA,WV,WI,WY'.split(
      ','
    );
  let pop =
    '4921532,731158,7421401,3030522,39368078,5807719,3557006,986809,712816,21733312,10710017,1407006,1826913,12587530,6743953,3163561,2913805,4477251,4645318,1350141,6055802,6893574,9966555,5657342,2966786,6151548,1080577,1937552,3138259,1366275,8882371,2106319,19336776,10600823,765309,11693217,3980783,4241507,12783254,1057125,5218040,892717,6886834,29360759,3249879,623347,8590563,7693612,1784787,5832655,582328'.split(
      ','
    );
  let size =
    '52420.07,665384.04,113990.3,52178.55,163694.74,104093.67,5543.41,2488.72,68.34,65757.70,59425.15,10931.72,83568.95,57913.55,36419.55,56272.81,82278.36,40407.8,52378.13,35379.74,12405.93,10554.39,96713.51,86935.83,48431.78,69706.99,147039.71,77347.81,110571.82,9349.16,8722.58,121590.3,54554.98,53819.16,70698.32,44825.58,69898.87,98378.54,46054.34,1544.89,32020.49,77115.68,42114.25,268596.46,84896.88,9616.36,42774.93,71297.95,24230.04,65496.38,97813.01'.split(
      ','
    );
  for (let i = 0; i < 52; i++) {
    data.push({
      id: i,
      state: usStates[i % usStates.length],
      abbreviation: abbr[i % abbr.length],
      population: numberFormatter(pop[i % pop.length]),
      size: numberFormatter(size[i % size.length]),
      flag: Math.random() * 5000,
    });
  }
  return data;
}

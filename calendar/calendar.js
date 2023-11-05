const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mai",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Okt",
    "Nov",
    "Des",
  ];

  const month = document.getElementById('month');
  const year = document.getElementById('year');
  const calendar = document.getElementById('calendar');

  month.addEventListener("change", showCalendar);
  year.addEventListener("change", showCalendar);
  
  

  function showCalendar(){
    calendar.innerHTML = "<span>Mandag</span><span>Tirsdag</span><span>Onsdag</span><span>Torsdag</span><span>Fredag</span><span>Lørdag</span><span>Søndag</span>";
    let thisMonth = generateDays();
    console.log(thisMonth);
    for(const day of thisMonth){
      const div = document.createElement("div");
      div.innerText = `${day.getDate()}.`;
      calendar.appendChild(div);
    }
      
  }

  function generateDays(){
    // Get month
    const selectedMonthIndex = month.selectedIndex;
    
    // Get year
    const selectedYear = parseInt(year.value);

    // Array of dates
    let dates = [...Array(35).keys()];

    /*
      Weeks starts on mondays, so first date always needs to be a monday, regardless of whether it is in the current of prevoius month.

      So, what day of the week is the first of the selected month? x
      Then we have to go 1 - x days back to get to the first monday.
      If we generate dates from day + 1, then we subtract |1-x| days
    */
    //console.log((new Date(selectedYear, selectedMonthIndex, 1)).getDay());    
    let firstDayOfMonth = (new Date(selectedYear, selectedMonthIndex, 1)).getDay();
    console.log(firstDayOfMonth);
    let d = 0;
    firstDayOfMonth === 0 ? d = -6 : d = 1 - firstDayOfMonth
    // Create an array of days for each dates
    let days = dates.map(day => new Date(selectedYear, selectedMonthIndex, (day + 1) + d));
    
    return days;
  }
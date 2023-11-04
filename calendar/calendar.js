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

  month.addEventListener("change", showCalendar);
  year.addEventListener("change", showCalendar);
  
  

  function showCalendar(){
    let thisMonth = [];
    // Get month
    const selectedMonthIndex = month.selectedIndex;
    
    // Get year
    const selectedYear = parseInt(year.value);

    // Array of possible dates
    let dates = [...Array(31).keys()];

    // Create an array of days for each possible date
    let days = dates.map(day => new Date(selectedYear, selectedMonthIndex, day + 1));

    // Filter out any days not in this month
    let daysOfThisMonth = days.filter(day => day.getMonth() === selectedMonthIndex);
    
    
    console.log(daysOfThisMonth);
      
  }
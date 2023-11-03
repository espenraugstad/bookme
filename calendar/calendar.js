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
    // Get month
    const selectedMonthIndex = month.selectedIndex;
    
    // Get year
    const selectedYear = parseInt(year.value);
    console.log(selectedYear);

    // Create date for the first of the month
    const firstOfMonth = new Date(selectedYear, selectedMonthIndex + 1, 1);
    console.log(firstOfMonth);
  }
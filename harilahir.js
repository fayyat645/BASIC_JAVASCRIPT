function main() {
    var year = 2005
    var month = 3
    var day = 6
     
    document.write (getWeekDay(year, month, day)); 
}
 function getWeekDay(year, month, day) {
    var names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var d = new Date(year, month, day);
     var day = d.getDay()
     return names[day]
 }
 main()
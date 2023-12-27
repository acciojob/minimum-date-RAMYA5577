function minDate(dates) {
  //write you code here
	let ans=dates[0];
	for(let i=1;i<dates.length;i++){
		let day=dates[i];

		let year1=parseInt(ans.slice(0,4));
		let year2=parseInt(day.slice(0,4));

		if(year1<year2){
			let month=parseInt(ans.slice(5,7));
			ans=ans;
			
		}
		else if( year1==year2){
			let month1=parseInt(ans.slice(5,7));
			let month2=parseInt(day.slice(5,7));

			if(month1<month2){
				ans=ans;
			}
			else if(month1>month2){
				ans=day;
			}
			else{
				let date1=parseInt(ans.slice(8,10));
				let date2=parseInt(ans.slice(8,10));
				if(date1<date2){
					ans=ans;
				}
				else{
					ans=day;
				}
			}
		}
		else{
			ans=day;
		}
	}
	return ans;
}

// Do not change the code

var dates = [
  "2023/03/01",
  "2023/03/02",
  "2023/03/03",
  "2023/03/04",
  "2023/03/05",
  "2023/03/06",
  "2023/03/07",
  "2023/03/08",
  "2023/03/09",
  "2023/03/10",
  "2023/03/11",
  "2023/03/12",
  "2023/03/13",
  "2023/03/14",
  "2023/03/15",
  "2023/03/16",
  "2023/03/17",
  "2023/03/18",
  "2023/03/19",
  "2023/03/20",
  "2023/03/21",
  "2023/03/22",
  "2023/03/23",
  "2023/03/24",
  "2023/03/25",
  "2023/03/26",
  "2023/03/27",
  "2023/03/28",
  "2023/03/29",
  "2023/03/30",
];

alert(minDate(dates));

var names=new Array();
names[0]="David";
names[1]="Max";
names[2]="Charlotte";
names[3]="Micheal";
names[4]="Johnathan";
names[5]="Albert";
names[6]="Noel";
names[7]="Yuliya";
names[8]="Hunter";
names[9]="Carter";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}

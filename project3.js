let patID=0;                                            // Setting total no. of patients at the start of the program to 0
let patientInfo=[];                                     // Setting initial patient info data stored to empty
let docID=0;                                            // Setting total no. of doctors at the start of the program to 0
let docInfo=[];                                         // Setting initial doctor info data stored to empty

// Function to register Patient//
let registerPat = () => {
    console.log("Registration of Patient /n")
    let name = prompt("Enter your name :");             // Inputing new Patient info
    let gender = prompt("Gender :");
    let age = prompt("age :");
    let contact = prompt("contact number:");
    let pass = prompt ("Please Select Your pass :");

    console.log("/n");

    patientInfo[patID] = {                              // Storing new Patient info
        name,
        gender,
        age,
        contact,
        pass,
    };
    console.log("Thank you for Registering /n");
    console.log("/n")
    patID++;                                            //Increasing No. of patients
};

// Function to Log Patient in //
let logIn = () => {
    if (patID!=0){
        console.log("Please Log In.");
        console.log("/n");
        name2=prompt("Enter name:");
        pass2=prompt("Enter password");
        console.log("/n");
        c=0;
        for(i=0; i<patID; i++){
            if((patientInfo[i].name==name2) && (patientInfo[i].pass==pass2)){       //Checking Username and Password
                console.log("Patient Log in Successful.");
                console.log("/n");
                return 0;
            }
        }
        console.log("Please enter proper name and password combination");
        return 1;
    }
    else{
        console.log("No patient registered.");
    }
    return 1;
};

let registerDoc=()=>{
    console.log("Register Doctor /n");
    dname=prompt("Enter Doctor's name:");
    spec=prompt("Enter Doctor's speciality:");
    docInfo[docID] = {
        dname,
        spec,
        slot: [0,0,0,0,0],                              //Setting all slots to be available initially
    };
    docID++                                             //Increasing No. of doctors
};

// Function to shaw all doctors //
let showDoc=()=>{
    for(i=0;i<docID;i++){
        console.log("Doctor ID:", i);
        console.log("Name of the Doctor:", docInfo[i].name);
        console.log("Speciality of the Doctor:", docInfo[i].spec);
        console.log("Slot Information.");
        for (j=0; j<=4; j++){
            if (docInfo[i].slot[j]==0){                 // Checking availibility of slots
                console.log("Slot ", i+1, ": Available.");
            }
            else{
                console.log("Slot ", i+1, ":Unavailable.");
            }
        } 
    }
}

//function to show Main Menu pre Log in//
function mainMenu(){
    mainmenu: while (true){
        console.log("Enter 1 for registering patient.");
        console.log("Enter 2 to log in as patient.");
        console.log("Enter 3 for registering doctor.");
        console.log("Enter 4 to exit.");
        in1=prompt("Enter:");

        switch(in1){
            case "1":
                registerPat();
            case "2":
                a=logIn();
                if (a==0){                              // Allowing to log in only if Username and password are correctly entered
                    patientMenu()
                }
            case "3":
                registerDoc();
            case "4":
                break mainmenu;
            default:
                console.log("Incorrect Input.")
        }
    }
}

// Function to show Main Menu post Log in//
function patientMenu(){
    while (true){
        console.log("Enter 1 to view doctors.");
        console.log("Enter 2 book appointment.");
        console.log("Enter 3 to go back to Main Menu.");
        in2=prompt("Enter:");
        switch(in2){
            case "1":
                showDoc();
            case "2":
                inid=prompt("Enter the ID of the doctor to book appointment to:");
                console.log("You selected Dr.", docInfo[inid].name, ". ");
                inslot=prompt("Please Enter slot to book(1-5):");
                if ((inslot>5) && (inslot<1)){                          // Checking wether correct slot no. is entered            
                    console.log("Incorrect Input. Please enter slot between 1 to 5.");
                }
                else if(docInfo[inid].slot[inslot]==1){                 // Checking if slot entered is available
                    console.log("Slot already booked. Please select another slot.")
                }
                else{
                    console.log("Slot booked.")
                    docInfo[indid].slot[inslot]=1
                }
            case "3":
                mainMenu();
            default:
                console.log("Incorrect Input.");
        }
    }
}

mainMenu();                                                   // Calling the Main Menu function to start the operation
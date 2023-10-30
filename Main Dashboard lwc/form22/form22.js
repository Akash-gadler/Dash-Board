import { LightningElement, wire, api} from 'lwc';
import getAccounts from '@salesforce/apex/user.getAccounts';
import IdOfUser from '@salesforce/user/Id';
import getprofile from '@salesforce/apex/user2.getprofile';
import { getRecord } from 'lightning/uiRecordApi';

const FIELDS = [
    'User.Name',
    'User.CompanyLogourl__c',
    
    
];

export default class Form22 extends LightningElement {
 @api recordId;
@wire(getAccounts) us;
@api lenmember;
 @api task = [{
                TID:"1",
                TaskType:"Daily Task",
                TaskList:{
                             TaskName:"TrueTime",
                            TaskID:"2128473",
                            Status :"Not Completed"
                            
                                        
                        },
            TaskList:{TaskName:"Sheet",
                            TaskID:"2128473",
                            Status :"Not Completed"
                }
                       
                        
    },
    {
        TID:"2",
        TaskType:"Regular Task",
        TaskList:{
                             TaskName:"Time Sheet",
                            TaskID:"2128473",
                            Status :"Not Completed"
                        },
        TaskList:{
                            TaskName:"Dime Sheet",
                           TaskID:"2128473",
                           Status :"Not Completed"
                       }

 }];
 @api name2 = [{
        Name:"Sai",
        EmpID:"2128473",
        Role:"PAT"
    },{
        Name:"Praveena",
        EmpID:"2128473",
        Role:"PAT"
    },{
        Name:"Manoj",
        EmpID:"2128473",
        Role:"PAT"
    },{
        Name:"Kishore",
        EmpID:"2128573",
        Role:"PA"
    },{
        Name:"Naren",
        EmpID:"2128673",
        Role:"PAT"
    },];

userId = IdOfUser;
len
@wire(getprofile) us2;
// @wire(getRecord, { recordId: '$userId', fields: FIELDS })
//     contact;

    // get url() {
    //     console.log('OUTPUT : ',this.contact.data.fields.CompanyLogourl__c.value);
    //     return this.contact.data.fields.CompanyLogourl__c.value;
    // }
url 
@wire(getRecord, { recordId: '$userId', fields: FIELDS })
    wiredRecord({ error, data }) {

        if ( error ) {

            let message = 'Unknown error';
            if (Array.isArray(error.body)) {
                message = error.body.map(e => e.message).join(', ');
            } else if (typeof error.body.message === 'string') {
                message = error.body.message;
            }
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error loading Account',
                    message,
                    variant: 'error',
                }),
            );

        } else if ( data ) {

            console.log( 'Data is ' + JSON.stringify( data ) );
            
            this.url = data.fields.CompanyLogourl__c.value;

        }

    }
     activeSectionMessage = '';

    handleToggleSection(event) {
        this.activeSectionMessage =
            'Open section name:  ' + event.detail.openSections;
    }

    


}
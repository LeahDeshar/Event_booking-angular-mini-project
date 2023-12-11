import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrl: './new-event.component.css'
})
export class NewEventComponent {
  eventObj: any = {
    "EventId": 0,
    "EventName": "",
    "Description": "",
    "Location": "",
    "StartDate": "",
    "StartTime": "",
    "EndDate": "",
    "EndTime": "",
    "ImageUrl": "",
    "Capacity": "",
    "Price": 0,
    "OrganizerId": 0,
    "IsIdentityMandatory": true,
    "IsCoupleEntryMandatory": true
  };
  loggedUserData:any;

  constructor(private http:HttpClient) {
    const localData= localStorage.getItem('user');
    if(localData != null) { 
      this.loggedUserData = JSON.parse(localData);
      this.eventObj.OrganizerId = this.loggedUserData.userId;
    }
  }

  onCreateEvent() {
    for (let key in this.eventObj) {
      if (this.eventObj[key] === null || this.eventObj[key] === '') {
        alert('All fields are required');
        return;
      }
    }
    this.http.post('https://freeapi.miniprojectideas.com/api/EventBooking/CreateEvent', this.eventObj).subscribe((res:any)=>{
      console.log(this.eventObj);
      console.log(res);

      if(res.result) {
        alert('Event Created');
        this.eventObj = {
          "EventId": 0,
          "EventName": "",
          "Description": "",
          "Location": "",
          "StartDate": "",
          "StartTime": "",
          "EndDate": "",
          "EndTime": "",
          "ImageUrl": "",
          "Capacity": "",
          "Price": 0,
          "OrganizerId": 0,
          "IsIdentityMandatory": true,
          "IsCoupleEntryMandatory": true
        };
      } else {
        alert(res.data)
      }
    })
  }
}

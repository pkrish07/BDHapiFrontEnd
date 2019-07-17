import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-tables',
  templateUrl: './basic-tables.component.html',
  styleUrls: ['./basic-tables.component.scss']
})
export class BasicTablesComponent implements OnInit {

  default_data: Array<any>;

  constructor() { }

  ngOnInit() {
    this.default_data = [
      { date: '2017-07-27T22:27:21.070+0000	', first_name: '8CA51099-F3FE-4848-8DE6-518133AC2FD5', last_name: 'DEBUG [thread 1] PerformanceLogger - GetDispensingDeviceInfo took 206 ms	', user_name: 'cde59cc8-2173-4b14-943a-fc37ffb9554f	' },
      { date: '2017-07-30T08:07:02.528+0000		', first_name: '8CA51099-F3FE-4848-8DE6-518133AC2FD5', last_name: 'INFO  [thread 1] ViewContainerBase`1 - Displaying screen: UserIdView	', user_name: 'edb11cd2-b819-4054-ab55-cf4706730798		' },
      { date: '2017-07-31T15:38:38.447+0000	', first_name: '8CA51099-F3FE-4848-8DE6-518133AC2FD5', last_name: 'DEBUG [thread 8] PerformanceLogger - LoadDeviceEncounters took 32 ms	', user_name: 'cde59cc8-2173-4b14-943a-fc37ffb9554f		' },
      { date: '2017-07-31T23:29:11.961+0000	', first_name: '8CA51099-F3FE-4848-8DE6-518133AC2FD5', last_name: 'DEBUG [thread 7] PerformanceLogger - LoadDeviceEncounters took 70 ms		', user_name: 'edb11cd2-b819-4054-ab55-cf4706730798		' },
      { date: '2017-08-01T17:09:50.552+0000	', first_name: '8CA51099-F3FE-4848-8DE6-518133AC2FD5', last_name: 'DEBUG [thread 8] PerformanceLogger - LoadPatientSummaries took 18 mse	', user_name: 'cde59cc8-2173-4b14-943a-fc37ffb9554f	' },
      // { first_name: 'Simon', last_name: 'Philips', user_name: '@simon' },
      // { first_name: 'Jane', last_name: 'Doe', user_name: '@jane' },
      // { first_name: 'Larry', last_name: 'Thornton', user_name: '@larry' },
      // { first_name: 'Hiver', last_name: 'Choe', user_name: '@hiver' },
    ];
  }

}

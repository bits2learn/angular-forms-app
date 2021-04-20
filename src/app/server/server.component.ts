import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  title = "testing new component";
  serverNumber: number = 10;
  serverStatus: String = "offline";
  allowNewServer = false;
  serverCreationStatus = "No server is available";

  constructor(){
    setTimeout(() => {
      this.allowNewServer = true;
    }, 5000);
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreationStatus = "Server was created";
  }

  onUpdateServerName(event: any){
    console.log(event);
  }

}

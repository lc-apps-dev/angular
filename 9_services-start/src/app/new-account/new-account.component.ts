import { Component, EventEmitter, Output } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //providers: [LoggingService]
})
export class NewAccountComponent {
  //@Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);

    //const service = new LoggingService();
    //service.logstatusChange(accountStatus);

   // this.loggingService.logstatusChange(accountStatus);
  }

  constructor(private loggingService: LoggingService,
    private accountsService: AccountsService) {

      this.accountsService.statusUpdated.subscribe(
        (status: string) => alert('New status: ' + status)
      );
  }
}

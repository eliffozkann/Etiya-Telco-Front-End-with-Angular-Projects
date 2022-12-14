import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  isLoadingSubject: Subject<boolean> = new Subject<boolean>();
  pendingRequestCount: number = 0; //birçok request sonucu loading in hepsini beklerken çalışması için
  constructor() {}

  startLoading() {
    this.pendingRequestCount++;
    this.isLoadingSubject.next(this.pendingRequestCount > 0);
  }
  stopLoading() {
    this.pendingRequestCount--;
    this.isLoadingSubject.next(this.pendingRequestCount > 0);
  }
}

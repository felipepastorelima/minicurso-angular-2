import { Injectable } from '@angular/core';

@Injectable()
export class AppStateService {

  loading = false;

  setLoading(loading: boolean) {
    this.loading = loading;
  }

}

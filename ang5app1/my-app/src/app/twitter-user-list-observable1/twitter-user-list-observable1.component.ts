import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-twitter-user-list-observable1',
  templateUrl: './twitter-user-list-observable1.component.html',
  styleUrls: ['./twitter-user-list-observable1.component.css']
})
export class TwitterUserListObservable1Component {
/*
  requestUrl = 'https://api.github.com/users';

  requestStream = Rx.Observable.just('https://api.github.com/users');
*/


/*
    var responseStream = Rx.Observable.create(function (observer) {
      observer.onNext(response);
      observer.onError(error);
      observer.onCompleted();
    });

    responseStream.subscribe(function(response) {
      function(x){
        console.log('Next   :   '  + x);
        },
      function(err){
        console.log('Error   :   ' + err)
      },
      function(){
        console.log('Completed');
      }
    });*/
}

import { Component } from '@angular/core';
import { FakestoreService } from '../fakestore.service';

@Component({
  selector: 'app-fake',
  templateUrl: './fake.component.html',
  styleUrls: ['./fake.component.css']
})
export class FakeComponent {
  data={}={}
  product=[]=[];

  constructor(private fake:FakestoreService){
    this.fake.getfake().subscribe(y=>{
      this.product=y.products;
      console.log(this.product)
    })

  }

}

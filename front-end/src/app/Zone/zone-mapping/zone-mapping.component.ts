import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Zone } from 'src/app/model/model.zone';
import { ApprovelHisytory } from 'src/app/model/ApprovelHisytory';
import { UserMst } from 'src/app/model/model.userMst';
import { ActivatedRoute, Router } from '@angular/router';
import { ApprovelService } from 'src/app/services/approvelService';
import { ZoneService } from 'src/app/services/zone.service';
import { ZoneAssign } from 'src/app/model/ZoneAssign';

@Component({
  selector: 'app-zone-mapping',
  templateUrl: './zone-mapping.component.html',
  styleUrls: ['./zone-mapping.component.css']
})
export class ZoneMappingComponent implements OnInit {

  employees: Observable<UserMst[]>;
  approvalhistoryid: number;
  approvelHisytory: ApprovelHisytory;
  userMsts: UserMst[];
  zones: Zone[];
  errorMessage: string;
  
  zoneAssign: ZoneAssign = new ZoneAssign();
 
 

  constructor(private route: ActivatedRoute,
    private router: Router,
    private approvelService: ApprovelService,private zoneService:ZoneService) { }


    ngAfterViewInit(){
      this.reloadData();
      this. reloadData1() ;
    }

    reloadData() {
      this.zoneService.getZoneOfferList().subscribe(
        data => {
          this.userMsts = data;
          setTimeout(function () {
          
          }, 1000);
        },
        error => {
  
        }
      );
  
      

    }

    reloadData1() {
      this.zoneService.getZoneList().subscribe(
        data => {
          this.zones = data;
          setTimeout(function () {
          
          }, 1000);
        },
        error => {
  
        }
      );
  
      
      
    }

  

  ngOnInit() {
    
    this.approvelHisytory = new ApprovelHisytory();

    this.approvalhistoryid = this.route.snapshot.params['approvalhistoryid'];
    
    this.approvelService.getAppprovwl(this.approvalhistoryid)
      .subscribe(data => {
        console.log(data)
        this.approvelHisytory = data;
      }, error => console.log(error));

  
  }

  registerZone() {
    this.zoneService.creatmapping(this.zoneAssign).subscribe(data => {
        this.router.navigate(['mappings']);
      }, err => {
        console.log(err);
        this.errorMessage = 'username already exist';
      }
    );
  }
 

  onSubmit() {
    this. registerZone();    
  }






}

import { SkiingPackage } from './../models/skiing-package';
import { SkiPackageService } from './ski-package.service';
import { Component, OnInit, Input } from '@angular/core';
import { SkiingPackagePageable } from '../models/skiing-package-pageable';

@Component({
  selector: 'app-ski-package',
  templateUrl: './ski-package.component.html',
  styleUrls: ['./ski-package.component.css']
})
export class SkiPackageComponent implements OnInit {
  skiingPackagePageable : any;
  isEditCreateFormEnable : Boolean;
  packageName : String;
  skisType : String;
  liftLevel : String[];
  hasLesson : Boolean;
  price : Number;
  isEdit : Boolean;

  constructor(private skiPackageService : SkiPackageService) {
    this.skiingPackagePageable = {}; 
  }

  ngOnInit() {
    this.getSkiAllSkiPackages();
    this.isEditCreateFormEnable = false;
  }

  getSkiAllSkiPackages(){
    this.skiPackageService.get().subscribe((skiPackagePageable) => {
      this.skiingPackagePageable = this.addCheckBoxProperty(skiPackagePageable);
    });
  }

  onClickCheckBox(name: String) {
    var foundIndex = this.skiingPackagePageable.content.findIndex(skiingPackage => skiingPackage.name === name);
    this.skiingPackagePageable.content[foundIndex].isChecked = !this.skiingPackagePageable.content[foundIndex].isChecked;
  }

  private addCheckBoxProperty(skiingPackagePageable : any) {
    skiingPackagePageable.content.map(skiingPackage => {
      skiingPackage['isChecked'] = false;
      return skiingPackage;
    });
    return skiingPackagePageable;
  }

  onClickEdit(name : String){
    this.isEdit = true;
    var foundIndex = this.skiingPackagePageable.content.findIndex(skiingPackage => skiingPackage.name === name);
    this.packageName = this.skiingPackagePageable.content[foundIndex].name;
    this.skisType = this.skiingPackagePageable.content[foundIndex].skisType;
    this.hasLesson = this.skiingPackagePageable.content[foundIndex].hasLesson;
    this.liftLevel = this.skiingPackagePageable.content[foundIndex].liftLevel.split("&")
    this.price = this.skiingPackagePageable.content[foundIndex].price;
    this.isEditCreateFormEnable = true;
  }

  onClickDelete(){
    this.isEditCreateFormEnable = false;
    this.skiingPackagePageable.content.forEach(skiingPackage => {
      if(skiingPackage.isChecked){
        this.skiPackageService.delete(skiingPackage.name).subscribe( () => {
          this.skiingPackagePageable = this.getSkiAllSkiPackages()
        });
      }
    });
  }

  onClickAdd() {
    this.isEdit = false;
    this.isEditCreateFormEnable = true;
  }

  onClickSubmit() {
    var skiingPackage = {
      name : this.packageName,
      skisType : this.skisType,
      liftLevel : this.liftLevel.join(" & "),
      hasLesson : this.hasLesson,
      price : this.price
    };
    this.skiPackageService.create(skiingPackage).subscribe(() => {
      this.skiingPackagePageable = this.getSkiAllSkiPackages();
    });
    this.isEditCreateFormEnable = false;
  }

  onClickCancel() {
    this.isEditCreateFormEnable = false;
  }

}

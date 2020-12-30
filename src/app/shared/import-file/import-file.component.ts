import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FileUploader, FileLikeObject } from 'ng2-file-upload';
import { FooterNavigationService } from 'src/app/helper/footer-navigation.service';
const URL = 'http://localhost:3000/fileupload/';
@Component({
  selector: 'so-import-file',
  templateUrl: './import-file.component.html',
  styleUrls: ['./import-file.component.css']
})
export class ImportFileComponent implements OnInit {

  @Input()
  config: any;
  @Input()
  form: FormGroup;

  @Input()
  public allowedMimeType: any = [];
  @Input()
  public maxFileSize: number = 5 / 1024 / 1024;

  @Input()
  public fileType: string[] = [];
  @Input()
  public tooltipInfo: string = '';
  @Input()
  public importedFile: string;
  @Input()
  public sampleFileName: string;

  @Input()
  public supportedFiles: string;

  @Output()
  emitMultiFileImport: EventEmitter<any> = new EventEmitter();

  constructor(private fb: FormBuilder) {
    
   }

  ngOnInit(): void {
    console.log(this.config);
    this.form = this.createGroup();
  }
  createGroup() {
    const group = this.fb.group({});
    this.config.forEach((control) => {
      const controls = this.fb.control(
        control.value,
        this.bindValidators(control.validations || [])
      );
      group.addControl(control.name, controls)
    })
    return group;
  }

  bindValidators(validations: any) {
    if (validations.length > 0) {
      const validList = [];
      validations.forEach((valid) => {
        validList.push(valid.validator);
      })
      return Validators.compose(validList);
    }
    return null;
  }

  validateFile(name: String) {
    var ext = name.substring(name.lastIndexOf('.') + 1);
    // console.log(ext);
    if (ext.toLowerCase() == 'png') {
      return true;
    } else if (ext.toLowerCase() == 'xlsx') {
      return true;
    }
    else {
      return false;
    }
  }

  public uploader: FileUploader = new FileUploader({
    url: URL,
    removeAfterUpload: false,
    disableMultipart: false,
    allowedMimeType: this.allowedMimeType,
    autoUpload: true,
    method: 'post',
    maxFileSize: this.maxFileSize,
    itemAlias: 'attachment',
    allowedFileType: this.fileType
    // ,
    // filters: [{
    //   name: this.fileName, fn: (file: FileLikeObject) => {
    //     console.log(file)
    //     const ext = file.name.split('.').pop();
    //     return this.fileType.indexOf(ext) > -1
    //   }
    // }]
  });


  public onFileSelected(field, event: EventEmitter<File[]>) {
    console.log(this.form);
    const file: File = event[0];
    console.log(file);
    field.fileName = file.name;
  }

  handleUpload(e): void {
    // console.log("C:\fakepath\download.xlsx");
    // this.Logo = e.target.files[0];
    // console.log(this.Logo);
    // console.log('http://localhost:3000/fileupload/' + this.Logo);
  }

  // onSubmit(event: Event) {
  //   console.log(event);
  //   this.validateAllFormFileds(this.form);
  // }

  //For Multiple File
  importFiles(){
    this.emitMultiFileImport.emit();
  }

  validateAllFormFileds(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      control.markAsTouched({ onlySelf: true });
    })
  }
}

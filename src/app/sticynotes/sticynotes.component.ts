import { Component, OnInit,TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { stringify } from '@angular/compiler/src/util';
import { note } from '../note';
import { FormsModule, FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-sticynotes',
  templateUrl: './sticynotes.component.html',
  styleUrls: ['./sticynotes.component.css']
})
export class SticynotesComponent implements OnInit {
  disabled: boolean = false;
  // title = 'sticky notes';
  keep:any=[];
  notes=new note();
  editNoteForm: FormGroup;
  heading:any;
   constructor(private modalService: BsModalService) { 
  }

  ngOnInit() {this.show();//this.disabled=false;
  }
  modalRef: BsModalRef;
  openModal(template: TemplateRef<any>) { 
    this.modalRef = this.modalService.show(template);
    this.disabled=true;  // disable button
  }
  disable(){this.modalRef.hide();
    this.disabled=false;
  }
  save(noted){
  if(noted.heading)
      { if(!this.notes.id)
        {this.notes.id=Math.random()*10;
        this.keep.push(this.notes);
        }
        localStorage.setItem("key",JSON.stringify(this.keep)); 
      this.notes = new note();
      this.show();
      this.disabled=false;
      }
   
  }
  show()
  {let keep=JSON.parse(localStorage.getItem("key"));
  // console.log(keep);
  console.log("this.keep"+this.keep);
  if(keep){ this.keep= keep;}
  else{this.keep=[];}
  this.disabled=false;
  return keep;
}
delete(noted)
  {//  console.log(notnot);
    this.keep=this.deletenotebyid(noted.id);
  this.show();
  }
  deletenotebyid(id:number)
  { 
    this.keep=this.keep.filter(notes=>notes.id!=id);
    localStorage.setItem('key',JSON.stringify(this.keep));
    return this;
  }
  editNote(keep: note, template?: TemplateRef<any>) {
    console.log(keep);
    this.notes= keep;
    if (template) {
      this.openModal(template);
    }
  }
  
}

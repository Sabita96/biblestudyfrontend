import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TopicService } from "app/services/topic-service/topic.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-create-topic",
  templateUrl: "./create-topic.component.html",
  styleUrls: ["./create-topic.component.scss"],
})
export class CreateTopicComponent implements OnInit {
  cities2 = [
    { id: 1, name: "Vilnius" },
    { id: 2, name: "Kaunas" },
    { id: 3, name: "Pavilnys", disabled: true },
    { id: 4, name: "Pabradė" },
    { id: 5, name: "Klaipėda" },
  ];
  topicsList: any;
  topicForm: FormGroup;
  subTopicForm: FormGroup;
  showTopicForm = false;

  showSubtopicForm = false;
  subTopicsList =[]
  productForm: FormGroup;
  isEdit= false;
  constructor(
    private topicService: TopicService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private cd: ChangeDetectorRef
  ) {
    this.productForm = this.formBuilder.group({
      name: '',
      quantities: this.formBuilder.array([]) ,
    });
  }

  ngOnInit(): void {
    this.topicForm = this.formBuilder.group({
      id: [""],

      name: ["", Validators.required],
      description: ["", Validators.required],
      subTopics: this.formBuilder.array([]) 
    });
    this.subTopicForm = this.formBuilder.group({
      name: ["", Validators.required],
      description: ["", Validators.required],
      fileLink: ["", Validators.required],
      youtubeLink: ["", Validators.required],
      // selectedTopic: ["", Validators.required],
    });
    this.getTopics();
  }

 
  getTopics() {
    this.topicService.getTopics().subscribe(
      (res) => {
        this.topicsList = res;

        // this.isLoading = false;
        // this.cd.markForCheck();
        console.log("this.topicsList[0]._id", this.topicsList[0]);

        // document.getElementById(this.topicsList[0]._id).click();
        console.log("res", this.topicsList);
      },
      (err) => {
        console.log("err", err);
      }
    );
  }
  onTopicSubmit() {
    console.log("sssssssssssss", this.topicForm.value,this.isEdit);
    if(this.isEdit){
      this.topicService.updateTopic(this.topicForm.value,this.topicForm.value.id).subscribe((res)=>{
        this.toastr.success("Topic updated successfully!!!", "Success", {
          timeOut: 3000,
        });
        this.showTopicForm = false;
        this.isEdit = false;
        this.getTopics();
        this.cd.markForCheck();
      },(err)=>{

      })
    }
    else{
      this.topicService.createTopic(this.topicForm.value).subscribe(
        (res) => {
          console.log("res", res);
          this.toastr.success("Topic added successfully!!!", "Success", {
            timeOut: 3000,
          });
          this.showTopicForm = false;
          this.getTopics();
          this.cd.markForCheck();
        },
        (err) => {
          console.log("err", err);
          this.toastr.error("Server Error!!!", null, {
            timeOut: 3000,
          });
        }
      );
    }
    
  }
  onSubTopicSubmit() {
    console.log("sssssssssssss", this.subTopicForm);
    this.subTopicsList =[]
    this.subTopicsList.push(this.subTopicForm.value)
    console.log('this.subTopicsList',this.subTopicsList);
    
    // let formVal = this.subTopicForm.value;
    // let id = formVal.selectedTopic;
    // delete formVal.selectedTopic;
    // this.topicService.createSubTopics(formVal, id).subscribe(
    //   (res) => {
    //     console.log("res", res);
    //     this.toastr.success("Subtopic added successfully!!!", "Success", {
    //       timeOut: 3000,
    //     });
    //     this.cd.markForCheck();
    //   },
    //   (err) => {
    //     console.log("err", err);
    //     this.toastr.error("Server Error!!!", null, {
    //       timeOut: 3000,
    //     });
    //   }
    // );
  }
  subTopics() : FormArray {
    return this.topicForm.get("subTopics") as FormArray
  }
   
 
  addNewSubTopic() {
    console.log('sssssssssssssssssss');
    
    const subTopicList = this.topicForm.get('subTopics') as FormArray;
    subTopicList.push(this.formBuilder.group({
      id: [""],

      name: ["", Validators.required],
      description: ["", Validators.required],
      fileLink: ["", Validators.required],
      youtubeLink: ["", Validators.required],
    }))
  }
   
  removeSubTopic(i:number) {
    this.subTopics().removeAt(i);
  }

  onSubmit() {
    console.log(this.productForm.value);
  }
  editTopic(i){
    this.showTopicForm = true
    this.isEdit = true;
    console.log('ssssssssssssssssssssssssss',this.topicsList[i]);
    let editTopic =this.topicsList[i]
    this.topicForm.patchValue({
      name:editTopic.name,
      description: editTopic.description,
      id:editTopic._id,
     
    });
    this.topicsList.forEach((ele,index)=>{
      this.subTopics().push(this.formBuilder.group(ele))
    })
    console.log('this.topicForm',this.topicForm);
    
  }
  cancelForm(){
    this.showTopicForm = false;

  }
}

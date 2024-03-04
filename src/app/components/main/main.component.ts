import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  isNavbarOpen = false;
  activeTab: string = 'skills';
  myForm!: FormGroup;

  nameErrors: any;
emailErrors: any;
messageErrors: any;






  constructor(private router: Router, private fb: FormBuilder){}

 

   ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }
   

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }; 


  onClickLinkedIn() {
    const linkedInUrl = 'https://www.linkedin.com/in/vinay-dangi-b54922285/';
    window.location.href = linkedInUrl;
  }
  

  onClickGit() {
    const gitUrl = 'https://github.com/vinaydangi07';
    window.location.href = gitUrl;
  }; 

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  onClicMail() {
    // const mail = ' https://mail.google.com/mail/u/0/#inbox?compose=NZVHGDkCkFksnpGldPBxSXFzwzrrPSPrTTRvRcrBfStGdCwWrSDMZLpMCHHbgwNCvzsTN';
    // window.location.href = mail;
  };

 
  


  onTodoAppLive(){
    const todo = ' https://to-do-app-d879d.web.app/';
    window.location.href = todo;
  }

  onWeatherLive(){
    const weatherLink = 'https://clorev.com/home';
    window.location.href = weatherLink;
  }

  

  onWeatherApp(){
    const weather = 'https://weather-project-6a997.web.app/';
    window.location.href = weather;
  } 
    
 
  
  markAllAsTouched() {
    Object.keys(this.myForm.controls).forEach((controlName) => {
      this.myForm.get(controlName)?.markAsTouched();
    });
  }
  


  isLoading = false;
  isSent = false;
  showModal = false;

  onSubmit() {
    this.isLoading = true; 

 
    this.markAllAsTouched();

    setTimeout(() => {
      this.isLoading = false;
      this.isSent = true;


      

      setTimeout(() => {
        this.showModal = true;
        this.myForm.reset(); 
      }, 2000); 
    }, 2000);  


  }

  onClose() {
    this.showModal = false;
    this.isSent = false; 
  }
   

  onInsta(){
    const insta = 'https://www.instagram.com/vinay_dangi_77/';
    window.location.href = insta;
  };


  downloadResume(): void {
    const resumePath = 'assets/images/Vinay-Dangi-resume.pdf.pdf';
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'Vinay-Dangi-resume.pdf.pdf'; 
    link.click();
  }

  onGitCode(){
    const clorevCode = 'https://github.com/vinaydangi07/Clorev-Loundry-App';
    window.location.href = clorevCode;
  };



  phoneNumber: string = '+91 9691000264';
  isCopied: boolean = false;

  copyPhoneNumber(): void {
    const input = document.createElement('input');
    input.value = this.phoneNumber;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);

    this.isCopied = true;

    // Reset the 'copied' status after a short delay
    setTimeout(() => {
      this.isCopied = false;
    }, 2000);
  }

}
    
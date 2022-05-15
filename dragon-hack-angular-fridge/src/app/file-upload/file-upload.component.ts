
import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../file-upload.service';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-file-upload',
    templateUrl: './file-upload.component.html',
    styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
    postId: any;
    // Variable to store shortLink from api respons
    receiptText = "";
    shortLink: string = "";
    loading: boolean = false; // Flag variable
    file!: File; // Variable to store file

    // Inject service
    constructor(private fileUploadService: FileUploadService,
        private http:HttpClient) { }

    ngOnInit(): void {
        this.getIngredients();
        this.getIngredients2();
        console.log(typeof {"name":"John"})
        console.log(typeof JSON.parse('{"name":"John", "age":30, "city":"New York"}'))
    }

    // On file Select
    onChange(event: any) {
        this.file = event.target.files[0];
    }

    // OnClick of button Upload
    onUpload() {
        this.loading = !this.loading;
        console.log(this.file);
        this.fileUploadService.upload(this.file).subscribe(
            (event: any) => {
                if (typeof (event) === 'object') {

                    // Short link via api response
                    this.shortLink = event.link;

                    this.loading = false; // Flag variable
                }
            }
        );
    }

    getText(){
        var myHeaders = new Headers();
        myHeaders.append("apikey", "cRcbOtWZbzOwSyj933D7B8sScfM4pa4Z");

        var raw = this.file;

        var requestOptions: RequestInit = {
        method: 'POST',
        redirect: 'follow',
        headers: myHeaders,
        body: raw
        };
        fetch("https://api.apilayer.com/image_to_text/upload", requestOptions)
            .then(response => response.text())
            .then(result => {
                this.receiptText = result;
                console.log(this.receiptText)
                console.log(typeof this.receiptText)
                this.receiptText = JSON.parse(this.receiptText)['all_text'].toLowerCase()
                console.log(this.receiptText)

                this.getIngredients()
            })
            .catch(error => console.log('error', error));

    }

    getIngredients() {
        var myHeaders = new Headers();
        myHeaders.append("apiKey", "7480326a15e243ccbb99b3c3283323ca")
        myHeaders.append("text", "banana is awesome")
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded")
        myHeaders.append("Access-Control-Allow-Headers", "Content-Type")

        var requestOptions: RequestInit = {
            method: 'POST',
            redirect: 'follow',
            headers: myHeaders,
            body: ""
        };
        fetch("https://api.spoonacular.com/food/detect", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error))
    }

    getIngredients2() {
        this.http.post<any>('https://api.spoonacular.com/food/detect', { 'apiKey': '052e5ae09e394586bf452a5a09bddafd', 'text': 'banana je very cool', 'Content-Type': 'application/x-www-form-urlencoded' }).subscribe(data => {
        this.postId = data.id;
    })
    }
}

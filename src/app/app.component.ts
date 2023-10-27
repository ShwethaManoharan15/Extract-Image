import { Component } from '@angular/core';
import { AppService } from './app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  extractedText!: string;
  selectedImage!: File;

  constructor(private a: AppService) { }

  onFileSelected(event:Event): void {
    this.selectedImage = (event.target as HTMLInputElement).files![0];
  }

  extractText(): void {
    this.a.extractTextFromImage(this.selectedImage).subscribe(
      data => {
        this.extractedText = data.text;
      },
      error => {
        console.error('Error extracting text:', error);
      }
    );
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface IFile {
  name: string,
  owner: string,
  img: string,
  size: number
}
@Component({
  selector: 'uploads-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './uploads.component.html',
  styleUrl: './uploads.component.scss'
})
export class UploadsComponent {
  files: IFile[];
  constructor() {
    this.files = [
      { name: "my-file.pdf", owner: "Mohamed", img: "assets/pdf.svg", size: 5.5 },
      { name: "my-image.psd", owner: "Hazem", img: "assets/psd.svg", size: 2.8 },
      { name: "my-zip-file.zip", owner: "Elzero", img: "assets/zip.svg", size: 233 },
      { name: "my-video.avi", owner: "Osama", img: "assets/avi.svg", size: 784 },
      { name: "my-dll-file.dll", owner: "Admin", img: "assets/dll.svg", size: 1.2 },
      { name: "my-eps-file.eps", owner: "Asmaa", img: "assets/eps.svg", size: 15 },
    ]
  }
}

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import { Camera, CameraResultType } from '@capacitor/camera';
@Component({
  selector: 'app-begin',
  templateUrl: './begin.component.html',
  styleUrls: ['./begin.component.scss']
})
export class BeginComponent implements OnInit {
  newMap?: GoogleMap;

  @ViewChild('map')
  mapRef?: ElementRef<HTMLElement>;

  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;

  

  async createMap() {
    const x = this.mapRef?.nativeElement;
    if (x) {
      this.newMap = await GoogleMap.create({
        id: 'my-cool-map',
        element: x,
        apiKey: "AIzaSyCJkSl0xxlX41jFB2FEfhVIDJc_OyF9FuU",
        config: {
          center: {
            lat: 33.6,
            lng: -117.9,
          },
          zoom: 8,
        },
      });
    }
    
  }

  ngOnInit(): void {
    setTimeout(()=>{ 
      this.createMap();
    },500)
    
  }

  // const takePicture = async () => {
  //   const image = await Camera.getPhoto({
  //     quality: 90,
  //     allowEditing: true,
  //     resultType: CameraResultType.Uri
  //   });
  
  //   // image.webPath will contain a path that can be set as an image src.
  //   // You can access the original file using image.path, which can be
  //   // passed to the Filesystem API to read the raw data of the image,
  //   // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
  //   var imageUrl = image.webPath;
  
  //   // Can be set to the src of an image now
  //   imageElement.src = imageUrl;
  // };

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });
  
    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    var imageUrl = image.webPath;
  
    // Can be set to the src of an image now
    // imageElement.src = imageUrl;
  }
  

}

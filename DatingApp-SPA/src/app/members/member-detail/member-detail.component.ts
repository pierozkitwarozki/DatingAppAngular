import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_model/user';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import {
  NgxGalleryOptions,
  NgxGalleryImage,
  NgxGalleryAnimation,
} from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css'],
})
export class MemberDetailComponent implements OnInit {
  user: User;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(
    private userService: UserService,
    private alertifyService: AlertifyService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.user = data['user'];
    });

    this.galleryOptions = [
      { imagePercent: 80, thumbnailsPercent: 20, thumbnailsColumns: 6, thumbnailsMargin: 0, thumbnailMargin: 0 },
      { breakpoint: 500, width: '300px', height: '300px', thumbnailsColumns: 3 },
      { breakpoint: 300, width: '100%', height: '200px', thumbnailsColumns: 2 }
      ];

    this.galleryImages = this.getImages();
  }

  getImages() {
    const imageUrls = [];
    let url = '';
    for (const photo of this.user.photos) {
      url = photo.url.toString();
      imageUrls.push({
        small: url,
        medium: url,
        big: url,
        description: photo.description,
      });
    }
    return imageUrls;
  }
}

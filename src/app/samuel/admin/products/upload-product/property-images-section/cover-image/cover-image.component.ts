import { Component, inject, Input, signal, WritableSignal } from '@angular/core';
import { Firestore, Timestamp, doc, getDoc, setDoc } from '@angular/fire/firestore';
import { DecimalPipe, NgIf } from '@angular/common';
import { Storage, ref, uploadBytesResumable, getDownloadURL } from '@angular/fire/storage';

@Component({
  selector: 'lh-cover-image',
  standalone: true,
  imports: [NgIf, DecimalPipe],
  templateUrl: './cover-image.component.html',
  styleUrls: ['./cover-image.component.scss'],
})
export class CoverImageComponent {
  @Input({ required: true }) docId!: string;

  featuredImageUrl: string | undefined;
  uploadProgress: number = 0;
  isUploading: WritableSignal<boolean> = signal(false);

  private firestore = inject(Firestore);
  private storage = inject(Storage);

  async ngOnInit() {
    await this.loadFeaturedImage();
  }

  private async loadFeaturedImage() {
    const fixedDocRef = doc(this.firestore, 'PROPERTIES', this.docId);
    const docSnap = await getDoc(fixedDocRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      this.featuredImageUrl = data?.['propertyImage'] ?? undefined;
    }
  }

  async handleFileInput(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      await this.uploadImage(file);
    }
  }

  private async uploadImage(file: File) {
    try {
      this.isUploading.set(true);
      const storageRef = ref(
        this.storage,
        `properties/${this.docId}/${file.name}`
      );
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          this.uploadProgress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) => {
          console.error('❌ Upload failed', error);
          this.isUploading.set(false);
        },
        async () => {
          const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
          this.featuredImageUrl = downloadUrl;
          await this.saveFeaturedImage(downloadUrl);
          this.isUploading.set(false);
          console.log('✅ Upload complete:', downloadUrl);
        }
      );
    } catch (error) {
      console.error('❌ Error uploading image:', error);
      this.isUploading.set(false);
    }
  }

  private async saveFeaturedImage(newUrl: string) {
    const fixedDocRef = doc(this.firestore, 'PROPERTIES', this.docId);
    await setDoc(
      fixedDocRef,
      {
        propertyImage: newUrl,
        uploadedAt: Timestamp.now(),
      },
      { merge: true }
    );
  }

  async clearFeaturedImage() {
    try {
      const fixedDocRef = doc(this.firestore, 'PROPERTIES', this.docId);
      await setDoc(
        fixedDocRef,
        {
          propertyImage: '',
          uploadedAt: Timestamp.now(),
        },
        { merge: true }
      );
      this.featuredImageUrl = '';
    } catch (error) {
      console.error('❌ Failed to clear propertyImage field:', error);
    }
  }
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      this.uploadImage(file);
    }
  }

}

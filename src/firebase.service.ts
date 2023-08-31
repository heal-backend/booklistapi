import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

const apple = {
    likeCount: 18,
    name: "apple",
    age: 30,
    location: "seoul",
    tags: ["smocking", "exercise", "INFP", "goodSmile"],
    images: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/300px-Apple_logo_black.svg.png",
        "https://www.applesfromny.com/wp-content/uploads/2020/05/20Ounce_NYAS-Apples2.png",
        "https://healthiersteps.com/wp-content/uploads/2021/12/green-apple-benefits.jpeg",
        "https://healthiersteps.com/wp-content/uploads/2021/12/green-apple-basket.jpeg"
    ],
    description: "Hi this is fruit. I like you"
  }
  
  const banana = {
    likeCount: 40,
    name: "banana",
    age: 27,
    location: "busan",
    tags: ["nonSmocking", "INTP", "goodSmile", "goodFace"],
    images: ["https://domf5oio6qrcr.cloudfront.net/medialibrary/6372/202ebeef-6657-44ec-8fff-28352e1f5999.jpg",
    "https://cdn.britannica.com/92/13192-050-6644F8C3/bananas-bunch.jpg?w=400&h=300&c=crop",
    "https://res.cloudinary.com/roundglass/image/upload/v1653327652/rg/collective/media/Banana%20KP_yg3asc.png",
    "https://www.thedailymeal.com/img/gallery/13-delicious-things-you-can-make-with-bananas/intro-1673458653.sm.webp"
],
description: "Hi this is fruit. I like you"
  }

@Injectable()
export class FirebaseService {
  private db: admin.database.Database;

  constructor() {
    this.db = admin.database();
  }

async changeData(): Promise<void> {
    const ref = this.db.ref('data'); // 데이터 저장할 경로 지정
    const a = await ref.once('value')
    if (!a.val().likeCount) {
        await ref.set(apple)
    }
    if (a.val().name === "apple") {
        await ref.child("name").set("banana")
    }
    if (a.val().name === "banana") {
        await ref.child("name").set("apple")
    }
  }
}

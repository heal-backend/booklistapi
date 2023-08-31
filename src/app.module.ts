import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as admin from 'firebase-admin';
import { ServiceAccount } from 'firebase-admin';
import { FirebaseService } from './firebase.service';

const serviceAccount = require('../serviceAccount.json');

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, FirebaseService],
})
export class AppModule {
  constructor() {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount as ServiceAccount),
      databaseURL: 'https://assinmentluvit-default-rtdb.asia-southeast1.firebasedatabase.app'
    });
  }
}

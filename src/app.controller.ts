import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

const page1 = {
  hasNext: true,
  totalPage: 10,
  data:[
    {
      title: "This is book",
      description: "This book is ~",
      discountRate: 10,
      coverImage: "https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg",
      price: 100
    },{
      title: "This is book",
      description: "This book is ~",
      discountRate: 10,
      coverImage: "https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg",
      price: 100
    },{
      title: "This is book",
      description: "This book is ~",
      discountRate: 10,
      coverImage: "https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg",
      price: 100
    },{
      title: "This is book",
      description: "This book is ~",
      discountRate: 10,
      coverImage: "https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg",
      price: 100
    },{
      title: "This is book",
      description: "This book is ~",
      discountRate: 10,
      coverImage: "https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg",
      price: 100
    },{
      title: "This is book",
      description: "This book is ~",
      discountRate: 10,
      coverImage: "https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg",
      price: 100
    },{
      title: "This is book",
      description: "This book is ~",
      discountRate: 10,
      coverImage: "https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg",
      price: 100
    },{
      title: "This is book",
      description: "This book is ~",
      discountRate: 10,
      coverImage: "https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg",
      price: 100
    },{
      title: "This is book",
      description: "This book is ~",
      discountRate: 10,
      coverImage: "https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg",
      price: 100
    },{
      title: "This is book",
      description: "This book is ~",
      discountRate: 10,
      coverImage: "https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg",
      price: 100
    },  
  ]}
const page2 = {
  hasNext: true,
  totalPage: 10,
  data:[
    {
      title: "This is book",
      description: "This book is ~",
      discountRate: 10,
      coverImage: "https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg",
      price: 100
    },{
      title: "This is book",
      description: "This book is ~",
      discountRate: 10,
      coverImage: "https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg",
      price: 100
    },{
      title: "This is book",
      description: "This book is ~",
      discountRate: 10,
      coverImage: "https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg",
      price: 100
    },{
      title: "This is book",
      description: "This book is ~",
      discountRate: 10,
      coverImage: "https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg",
      price: 100
    },{
      title: "This is book",
      description: "This book is ~",
      discountRate: 10,
      coverImage: "https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg",
      price: 100
    },{
      title: "This is book",
      description: "This book is ~",
      discountRate: 10,
      coverImage: "https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg",
      price: 100
    },{
      title: "This is book",
      description: "This book is ~",
      discountRate: 10,
      coverImage: "https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg",
      price: 100
    },{
      title: "This is book",
      description: "This book is ~",
      discountRate: 10,
      coverImage: "https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg",
      price: 100
    },{
      title: "This is book",
      description: "This book is ~",
      discountRate: 10,
      coverImage: "https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg",
      price: 100
    },{
      title: "This is book",
      description: "This book is ~",
      discountRate: 10,
      coverImage: "https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg",
      price: 100
    },  
  ]}
  const page3 = {
    hasNext: true,
    totalPage: 10,
    data:[
      {
        title: "This is book",
        description: "This book is ~",
        discountRate: 10,
        coverImage: "https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg",
        price: 100
      },{
        title: "This is book",
        description: "This book is ~",
        discountRate: 10,
        coverImage: "https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg",
        price: 100
      },{
        title: "This is book",
        description: "This book is ~",
        discountRate: 10,
        coverImage: "https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg",
        price: 100
      },{
        title: "This is book",
        description: "This book is ~",
        discountRate: 10,
        coverImage: "https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg",
        price: 100
      },{
        title: "This is book",
        description: "This book is ~",
        discountRate: 10,
        coverImage: "https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg",
        price: 100
      },{
        title: "This is book",
        description: "This book is ~",
        discountRate: 10,
        coverImage: "https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg",
        price: 100
      },{
        title: "This is book",
        description: "This book is ~",
        discountRate: 10,
        coverImage: "https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg",
        price: 100
      },{
        title: "This is book",
        description: "This book is ~",
        discountRate: 10,
        coverImage: "https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg",
        price: 100
      },{
        title: "This is book",
        description: "This book is ~",
        discountRate: 10,
        coverImage: "https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg",
        price: 100
      },{
        title: "This is book",
        description: "This book is ~",
        discountRate: 10,
        coverImage: "https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg",
        price: 100
      },  
    ]}
    const page4 = {
      hasNext: true,
      totalPage: 10,
      data:[
        {
          title: "This is book",
          description: "This book is ~",
          discountRate: 10,
          coverImage: "https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg",
          price: 100
        },{
          title: "This is book",
          description: "This book is ~",
          discountRate: 10,
          coverImage: "https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg",
          price: 100
        },{
          title: "This is book",
          description: "This book is ~",
          discountRate: 10,
          coverImage: "https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg",
          price: 100
        },{
          title: "This is book",
          description: "This book is ~",
          discountRate: 10,
          coverImage: "https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg",
          price: 100
        },{
          title: "This is book",
          description: "This book is ~",
          discountRate: 10,
          coverImage: "https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg",
          price: 100
        },{
          title: "This is book",
          description: "This book is ~",
          discountRate: 10,
          coverImage: "https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg",
          price: 100
        },{
          title: "This is book",
          description: "This book is ~",
          discountRate: 10,
          coverImage: "https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg",
          price: 100
        },{
          title: "This is book",
          description: "This book is ~",
          discountRate: 10,
          coverImage: "https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg",
          price: 100
        },{
          title: "This is book",
          description: "This book is ~",
          discountRate: 10,
          coverImage: "https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg",
          price: 100
        },{
          title: "This is book",
          description: "This book is ~",
          discountRate: 10,
          coverImage: "https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg",
          price: 100
        },  
      ]}
      const page5 = {
        hasNext: true,
        totalPage: 10,
        data:[
          {
            title: "This is book",
            description: "This book is ~",
            discountRate: 10,
            coverImage: "https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg",
            price: 100
          },{
            title: "This is book",
            description: "This book is ~",
            discountRate: 10,
            coverImage: "https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg",
            price: 100
          },{
            title: "This is book",
            description: "This book is ~",
            discountRate: 10,
            coverImage: "https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg",
            price: 100
          },{
            title: "This is book",
            description: "This book is ~",
            discountRate: 10,
            coverImage: "https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg",
            price: 100
          },{
            title: "This is book",
            description: "This book is ~",
            discountRate: 10,
            coverImage: "https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg",
            price: 100
          },{
            title: "This is book",
            description: "This book is ~",
            discountRate: 10,
            coverImage: "https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg",
            price: 100
          },{
            title: "This is book",
            description: "This book is ~",
            discountRate: 10,
            coverImage: "https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg",
            price: 100
          },{
            title: "This is book",
            description: "This book is ~",
            discountRate: 10,
            coverImage: "https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg",
            price: 100
          },{
            title: "This is book",
            description: "This book is ~",
            discountRate: 10,
            coverImage: "https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg",
            price: 100
          },{
            title: "This is book",
            description: "This book is ~",
            discountRate: 10,
            coverImage: "https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg",
            price: 100
          },  
        ]}
        const page6 = {
          hasNext: false,
          totalPage: 6,
          data:[
            {
              title: "This is book",
              description: "This book is ~",
              discountRate: 10,
              coverImage: "https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg",
              price: 100
            },{
              title: "This is book",
              description: "This book is ~",
              discountRate: 10,
              coverImage: "https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg",
              price: 100
            },{
              title: "This is book",
              description: "This book is ~",
              discountRate: 10,
              coverImage: "https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg",
              price: 100
            },{
              title: "This is book",
              description: "This book is ~",
              discountRate: 10,
              coverImage: "https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg",
              price: 100
            },{
              title: "This is book",
              description: "This book is ~",
              discountRate: 10,
              coverImage: "https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg",
              price: 100
            },{
              title: "This is book",
              description: "This book is ~",
              discountRate: 10,
              coverImage: "https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg",
              price: 100
            },{
              title: "This is book",
              description: "This book is ~",
              discountRate: 10,
              coverImage: "https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg",
              price: 100
            },{
              title: "This is book",
              description: "This book is ~",
              discountRate: 10,
              coverImage: "https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg",
              price: 100
            },  
          ]}
@Controller()
export class AppController {

  @Get()
  getBooks(@Query() query) {
    if (query.page === "1") return page1
    if (query.page === "2") return page2
    if (query.page === "3") return page3
    if (query.page === "4") return page4
    if (query.page === "5") return page5
    if (query.page === "6") return page6
  }
}

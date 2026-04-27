export interface User {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
  };

}


export interface Post {
  id: number; 
  title : string ; 
  full_title :string; 
  tags: string; 
  main_img: string
  year:string; 
  text: string; 
  content:{
    h1: string; 
    img: string; 
    h2:string;
    text:string;
}

}
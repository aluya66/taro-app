

declare type Methods = "GET" | "POST" | "OPTIONS" | "PUT" | "DELETE" | 'get' | 'options' | 'post' | 'put' | 'delete';   //请求方式

declare type Header = { [key:string]: string}   //设置请求头部格式

declare type Datas = { method:Methods; [key:string]:any}

interface Options{
    url:string;
    host ?:string;
    method ?:Headers;
    header?:Header
}

export class Request {

}


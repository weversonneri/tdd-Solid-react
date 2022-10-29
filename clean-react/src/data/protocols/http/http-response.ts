export enum HttpStatusCode {
  unauthorized = 401
}

export type HttpResponse = {
  statusCode: number;
  body?: any
}
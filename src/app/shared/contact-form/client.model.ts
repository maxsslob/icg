export class Client {
  constructor(
    public id: number,
    public name: string,
    public phone: string,
    public email?: string,
    public comments?: string
  ) {  }
}
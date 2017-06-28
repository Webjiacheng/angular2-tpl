export class App1 {
  constructor(
    public id: number,
    public name: string,
    public title: string,
    public time?: string,
    public desc?:string
  ) {  }
}
// 导出App1数据类型
// ? 代表可有可无，其他属性必须存在

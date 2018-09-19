declare namespace Ajax {
  // axios 返回数据
  export interface AxiosResponse {
    data: AjaxResponse;
  }

  export interface AjaxResponse {
    code: number;
    data: any;
    message: string;
  }
}

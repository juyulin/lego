/*
 * @Author: Cookie
 * @Date: 2020-09-14 14:12:31
 * @LastEditors: Cookie
 * @LastEditTime: 2020-09-14 15:31:42
 * @FilePath: /lego/src/core/types/index.d.ts
 * @Description: 
 */
export interface ServiceOption {
    api: string;
    method: 'post' | 'get' | 'patch' | 'delete';
    query?: {
        [key: string]: any
    };
}

export interface Response<T = any> {
    code: number;
    data: T;
    errMsg: string | undefined
}

export interface Service {
    <T>(url: string): Promise<T>;
    <T>(option: ServiceOption): Promise<Response<T>>;
}





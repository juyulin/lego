/*
 * @Author: Cookie
 * @Date: 2020-09-14 15:23:40
 * @LastEditors: Cookie
 * @LastEditTime: 2020-09-14 15:23:45
 * @FilePath: /lego/src/core/types/service.d.ts
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

export function Service<T>(url: string): Promise<T>;
export function Service<T = any>(option: ServiceOption): Promise<Response<T>>;





/*
 * @Author: Cookie
 * @Date: 2020-09-14 14:50:37
 * @LastEditors: Cookie
 * @LastEditTime: 2020-09-14 19:17:39
 * @FilePath: /lego/src/core/services.ts
 * @Description: 
 */
import axios, { Method, AxiosRequestConfig } from 'axios';
import * as _ from 'lodash';

const defaultOptions = {
    baseURL: '127.0.0.1:7001',
    timeout: 5000,

}
export interface ServiceConfig extends AxiosRequestConfig { }


export const createServicesManager = () => {
    const instance = axios.create(defaultOptions);
    const services: {
        name: string,
        run: (options: AxiosRequestConfig) => Promise<any>
    }[] = []
    return {
        services,
        create: (name: string, defaultOptions: AxiosRequestConfig) => {
            const service = (options: AxiosRequestConfig) => instance.request({
                ...defaultOptions,
                ...options
            });
            services.push({
                name,
                run: service
            })
        },
        select: (name: string) => {
            const result = _.find(services, ['name', name]);
            if (!result) {
                throw new Error(`Service:${name} not create`)
            }
            return result
        }

    }
}

export const servicesManager = createServicesManager()
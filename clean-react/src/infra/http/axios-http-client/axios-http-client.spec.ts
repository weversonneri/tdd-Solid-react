import axios from 'axios'
import {faker} from "@faker-js/faker"
import { AxiosHttpClient } from './axios-http-client'
import { HttpPostParams } from '@/data/protocols/http'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios> //acesso recursos do axios, cacheado

const makeSut = (): AxiosHttpClient => {
 return new AxiosHttpClient()
}

const mockPostRequest = (): HttpPostParams<any> => ({
  url: faker.internet.url(),
  body: faker.science.chemicalElement() 
})

describe('AxiosHttpClient', () => {
  test('Should call axios with correct values', async() => {
    const req = mockPostRequest()
    const sut = makeSut()
    await sut.post(req)

    expect(mockedAxios.post).toHaveBeenCalledWith(req.url, req.body);
  })
})